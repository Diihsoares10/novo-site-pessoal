import win32com.client as win32
import win32com.client
from time import sleep
import time
import requests
import os
import json
from datetime import datetime, timedelta, date
import math
from database import Database


proxy = {'http':None, 'https':None}
today = str(date.today())

def substituir_texto_email(corpo_texto, referencias):
        for codigo, valor in referencias.items():
            corpo_texto = corpo_texto.replace(codigo, str(valor))
        return corpo_texto

def envia_email(id=0, assunto=None, corpo_texto=None):
    id = 1010
 
    db = Database()
 
    query = f'''SELECT 
                t1.exemplo1,
                t2.exemplo2,
                t3.exemplo3
                    
            FROM 
                tabela-01 t1 
                LEFT JOIN tabela-02.coluna t2 ON (t1.coluna = t2.id)
                LEFT JOIN tabela-03.coluna2 t3 ON (t2.coluna3 = t3.coluna3) 
                WHERE t1.id = {id}
                LIMIT 1'''
    
    base = db.read(query)
    print(base)
    destinatario = base["email"][0]

    referencias = {
        '<<id>>': base.id.values[0],
    }
    
    # Substituir texto no corpo do e-mail
    corpo_texto = substituir_texto_email(corpo_texto, referencias)

    # Obtendo a data atual
    today = datetime.today()

    # Formatando a data no formato desejado (dia-mes-ano)
    formatted_date = today.strftime("%d-%m-%Y")

    print(formatted_date)

    # Construindo o caminho do arquivo com base no ID
    pasta_documentos = r'C:\caminho\do\Documento\test'
    nome_arquivo = f'nome_do_documento.pdf'
    xpath_arquivo = os.path.join(pasta_documentos, nome_arquivo)
 
    
    print(nome_arquivo)
    outlook = win32.Dispatch('outlook.application')
    mail = outlook.CreateItem(0)
    print(f'destinatário :{destinatario}')
 
    mail.To = destinatario
    mail.Subject = assunto
    mail.Body = corpo_texto
 
    # Anexar um arquivo ao e-mail (opcional):
    if xpath_arquivo:
        attachment = xpath_arquivo
        mail.Attachments.Add(attachment)
 
    mail.Send()
   
    print('E-mail enviado')
 

envia_email(assunto='🔴 TESTE', id=1010, corpo_texto='Exemplo.')