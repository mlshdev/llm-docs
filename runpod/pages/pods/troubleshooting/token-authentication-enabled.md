> Commit-pinned source for Runpod main: [pods/troubleshooting/token-authentication-enabled.mdx](https://docs.runpod.io/pods/troubleshooting/token-authentication-enabled)

# JupyterLab server token authentication

Recover the JupyterLab server token from a Runpod Pod terminal, then use it to authenticate when the JupyterLab login screen appears.

If you see a "Token authentication is enabled" screen when trying to access your Pod's JupyterLab server, follow the steps below to log in.

![Jupyter server token authentication](https://raw.githubusercontent.com/runpod/docs/361c96910f23cbab97220f94f7a751b12e4b09ea/images/jupyter-server-token.png)

1. Go to the Pod page in the Runpod console and click the **Connect** button for the Pod you want to access.
2. Look for the **Web Terminal** start button.
3. Click **Start**, then open the web terminal.
4. In the terminal, run the following command to get the JupyterLab server token:

   ```
   jupyter server list
   ```

You should see output similar to this:

```bash
root@2779b5db68b8:/# jupyter server list
Currently running servers:
http://localhost:8888/?token=ua5nw5fwkdzseqpp5apj :: /
root@2779b5db68b8:/#
```

The token you need is the string of characters that appears after the `=` sign, such as `ua5nw5fwkdzseqpp5apj` in the example above.

Copy this token, return to your JupyterLab login page, and paste it into the **Token** field to sign in.
