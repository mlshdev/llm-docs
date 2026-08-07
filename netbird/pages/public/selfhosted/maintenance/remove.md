> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/selfhosted/maintenance/remove.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/selfhosted/maintenance/remove.mdx)

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
