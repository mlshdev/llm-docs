> Pinned source for Vast.ai main: [guides/instances/connect/windows-guide.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/guides/instances/connect/windows-guide.mdx)
> Canonical documentation: https://docs.vast.ai/guides/instances/connect/windows-guide

# Windows SSH Guide

Learn how to securely connect to Vast.ai instances using SSH on Windows. Understand the basics of SSH, how to generate and add keys, and how to use PuTTY and MobaXterm for GUI-based connections.

## Windows Powershell

Modern versions of Windows support running CLI ssh commands in PowerShell.  We recommemnd you use the CLI wherever possible.

> **Note**
>
> This guide will focus only on **Windows GUI tools.**  If you would like to proceed with the CLI, please navigate to the [full SSH guide](https://docs.vast.ai/guides/instances/sshscp) for setup information.

## Jupyter Terminal - SSH Alternative

As a simple alternative to SSH, you might like to consider Jupyter Terminal instead.  All instances started in Jupyter launch mode will have this enabled.  It is a very straightforward web-based terminal with session persistence.  It's great for a quick CLI session.

Access the terminal from the SSH connections interface

![](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh.webp)

![Jupyter Terminal](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-2.webp)

## GUI Setup Guide (Windows)

Several GUI tools are available to help with SSH connectivity.  While it is often most straightforward to use the terminal we will cover some of the popular options here.

For each application we will assume the following:

- IP address: 142.114.29.158
- Port: 46230
- Username: root

To find your own connection details you can click the SSH button on your instance card.

![SSH Button](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-3.webp)

\\

![Example SSH Details](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-4.webp)

### PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) consists of two important components - PuTTY for making connections and PuTTYGen for creating SSH keys.

First, we will generate a public and private key pair.  PuTTy uses its own `.ppk` private key type.

Open PuTTYGen and click the 'Generate' button.  You will be asked to move your mouse around until the green bar is full.

![Key generation interface](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-5.webp)

Once the key generation has completed, save both your public and private key somewhere safe such as in your Documents folder.  Optionally you can enter a passphrase for your private key for added security.

Next, copy the full public key to the clipboard and add it to your account at <https://cloud.vast.ai/manage-keys/>

Any keys stored at the account level will automatically be added to new instances as they are created.  If you have an existing instance you can add keys to it from the instance card.

![](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-6.webp)

![Save keys interface](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-7.webp)

Now that we have a suitable key to use, close PuTTYGen and open the main PuTTY application.

In the 'Session' tab, enter the **IP address** and the **port**

![PuTTY session tab](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-8.webp)

Next, move to the 'Connection -> Data\` tab and set the Auto-login username to 'root'

![Connection data tab](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-9.webp)

Now navigate to 'Connection -> SSH -> Auth -> Credentials' and browse for the private key (.ppk) that you saved earlier.&#x20;

![SSH credentials tab](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-10.webp)

Finally navigate back to the 'Sessions' tab to save the connection details.  Here I have saved the session with the instance ID so that I can access it again later.&#x20;

![Save connection](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-11.webp)

Finally, Click the 'Open' button to be connected to your instance.

PuTTY has many additional features to explore.  Find the full documentation [here.](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html)

### MobaXterm

First, we need to create a public and private key pair.  MobaXterm uses puTTY style `.ppk` keys.

Open the application and navigate to Tools -> MobaKeyGen (SSH Key Generator)

Glick the 'Generate' button.  You will be asked to move your mouse around until the green bar is full.

![Key generation interface](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-12.webp)

Once the key generation has completed, save both your public and private key somewhere safe such as in your Documents folder.  Optionally you can enter a passphrase for your private key for added security.

Next, copy the full public key to the clipboard and add it to your account at <https://cloud.vast.ai/manage-keys/>

Any keys stored at the account level will automatically be added to new instances as they are created.  If you have an existing instance you can add keys to it from the instance card.

![Save keys interface](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-13.webp)

\\

![](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-14.webp)

Now you can close the key generation interface.  We will create a new session.

Navigate to Sessions -> New Session -> SSH

![Sesison interface](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-15.webp)

Important details to complete:

- Remote Host
- Specify Username (root)
- Port
- Use private key

Click 'OK' and you will be connected to the instance.

![SSH terminal](https://raw.githubusercontent.com/vast-ai/docs/f9a51524095d083230a1da1c2e38e736ded25582/images/instances-windows-ssh-16.webp)

You can find the documentation for MobaXterm [here](https://mobaxterm.mobatek.net/documentation.html).

### Other GUI Clients

Many GUI clients are available for Windows and other operating systems, and although it is not possible to cover all of these here, the key things to remember when setting up are:

- Create a public and private key pair
- Add the public key to your vast account and any running instances
- Keep the private key safe
- Ensure you are connecting to the correct IP address and port as user `root`
