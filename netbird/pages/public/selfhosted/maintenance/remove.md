> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/selfhosted/maintenance/remove.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/selfhosted/maintenance/remove.mdx)

# Remove Your Self-Hosted NetBird Installation

To remove the NetBird installation and all related data from your server, run these commands from the folder where you installed NetBird:

```bash
# remove all NetBird-related containers and volumes (data)
docker compose down --volumes
# remove downloaded and generated config files
rm -f docker-compose.yml dashboard.env config.yaml nginx-netbird.conf caddyfile-netbird.txt npm-advanced-config.txt
```

## Get In Touch

Feel free to ping us on Slack if you have any questions.

- NetBird managed version: <https://app.netbird.io>
- Make sure to [star us on GitHub](https://github.com/netbirdio/netbird)
- Follow us [on X](https://x.com/netbird)
