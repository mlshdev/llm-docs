> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/selfhosted/maintenance/backup.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/selfhosted/maintenance/backup.mdx)

# Back Up Your Self-Hosted NetBird Installation

To back up your NetBird installation, you need to copy the configuration files and the Management service databases.

The configuration files are located in the folder where you ran [the installation script](https://docs.netbird.io/selfhosted/selfhosted-quickstart#installation-script). To back up, copy the files to a backup location:

```bash
mkdir backup
cp docker-compose.yml dashboard.env config.yaml backup/
```

> **Note**
>
> For detailed information about each configuration file and its options, see the [Configuration Files Reference](https://docs.netbird.io/selfhosted/maintenance/configuration-files).

To save the server databases, stop the server and copy the files from the data directory:

```bash
docker compose stop netbird-server
docker compose cp -a netbird-server:/var/lib/netbird/ backup/
docker compose start netbird-server
```

## Older Setup (Separate Containers)

If your deployment uses the older setup with separate containers (`management`, `signal`, `relay`, `coturn`), back up the configuration files:

```bash
mkdir backup
cp docker-compose.yml Caddyfile dashboard.env management.json relay.env backup/
```

To save the Management service database:

```bash
docker compose stop management
docker compose cp -a management:/var/lib/netbird/ backup/
docker compose start management
```

## Get In Touch

Feel free to ping us on Slack if you have any questions.

- NetBird managed version: <https://app.netbird.io>
- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
