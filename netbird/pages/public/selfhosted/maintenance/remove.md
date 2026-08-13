> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/selfhosted/maintenance/remove.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/selfhosted/maintenance/remove.mdx)

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
