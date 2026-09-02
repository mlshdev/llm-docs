> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-the-timezone.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-the-timezone.md)

# Set the self-hosted instance timezone <a id="set-the-self-hosted-instance-timezone"></a>

The default timezone is America/New\_York. For instance, the Schedule node uses it to know at what time the workflow should start. To set a different default timezone, set `GENERIC_TIMEZONE` to the appropriate value. For example, if you want to set the timezone to Berlin (Germany):

```bash
export GENERIC_TIMEZONE=Europe/Berlin
```

You can find the name of your timezone [here](https://momentjs.com/timezone/).

Refer to [Environment variables reference](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization) for more information on this variable.
