> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/selfhosted/maintenance/remove.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/selfhosted/maintenance/remove.mdx)

# Remove Your Self-Hosted NetBird Installation

To remove the NetBird installation and all related data from your server, run these commands from the folder where you installed NetBird:

```bash
# remove all NetBird-related containers and volumes (data)
docker compose down --volumes
# remove downloaded and generated config files
rm -f docker-compose.yml dashboard.env config.yaml proxy.env .env traefik-dynamic.yaml nginx-netbird.conf caddyfile-netbird.txt npm-advanced-config.txt
rm -rf crowdsec/
```

## Get In Touch

Feel free to ping us on Slack or Discord if you have any questions.

- NetBird managed version: <https://app.netbird.io>
- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
