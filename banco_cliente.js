/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.clientebanco;

import java.util.Scanner;

class ContaBancaria {
    public String nome;
    public String sobrenome;
    public String cpf;
    public double saldo;
    
    
    public ContaBancaria (String nome,String sobrenome, String cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.saldo = 0.0;
        
    }
public double consultarSaldo(){
    return saldo;
}

public void depositar(double valor){
    saldo += valor;
    System.out.println("Deposito de R$ + " + valor + "realizado com sucesso");
}

public void sacar (double valor){
    if (saldo >=valor){
        saldo-=valor;
        System.out.println("Saque de R$" + valor + "realizado com sucesso");
        
    } else {
        System.out.println("Saldo insuficiente para realizacao do saque");
    }
}
public void exibirMenu(){
    Scanner scanner = new Scanner(System.in);
    int opcao;
     
    do {
        System.out.println("\n------Menu----");
        System.out.println("1.Consultar Saldo");
        System.out.println("2.Realizar Deposito");
        System.out.println("3.Realizar Saque");
        System.out.println("4.Encerrar");
        System.out.println("Qual opcao voce deseja escolher:");
        opcao = scanner.nextInt();
        
        switch(opcao){
            case 1:
              System.out.println("Saldo: R$ " + consultarSaldo());
              break;
            case 2:
              System.out.println("Digite o valor do deposito");
              double valorDeposito = scanner.nextDouble();
              break;
            case 3:
              System.out.println("Digite o valor do saque");
              break; 
            case 4:
              System.out.println("Ecerrar...");
              break; 
            default:
              System.out.println("Opcao invalida");
        }
    } while (opcao!=4);
    
    scanner.close();
} 
 
}
/**
 *
 * @author flavi
 */
public class ClienteBanco {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("seja Bem-Vindo ao Sistema Bancario!");
        System.out.println("Qual seu nome");
        String nome = scanner.nextLine();
        System.out.println("Qual seu sobrenome");
        String sobrenome = scanner.nextLine();
        System.out.println("Qual seu cpf");
        String cpf = scanner.nextLine();
        
        ContaBancaria conta = new ContaBancaria(nome, sobrenome, cpf);
        
        conta.exibirMenu();
        System.out.println("Obrigado por acreditar em nosso servico"); 
        scanner.close();
    }
}
