> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/self-hosting/deploy/linux.mdx](https://zitadel.com/docs/self-hosting/deploy/linux)

> **Warning**
>
> Be aware! This guide does not work for the newly updated version of Zitadel 4! [Learn more](https://github.com/zitadel/zitadel/issues/10526)
>
> Please use Docker version if you want to use Zitadel 4.

## Install PostgreSQL

Download a `postgresql` binary as described [in the PostgreSQL docs](https://www.postgresql.org/download/linux/).
Zitadel is tested against PostgreSQL latest stable tag and latest Ubuntu LTS.

## Run PostgreSQL

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Install Zitadel

Download the Zitadel release according to your architecture from [Github](https://github.com/zitadel/zitadel/releases/latest), unpack the archive and copy zitadel binary to /usr/local/bin

```bash
LATEST=$(curl -i https://github.com/zitadel/zitadel/releases/latest | grep location: | cut -d '/' -f 8 | tr -d '\r'); ARCH=$(uname -m); case $ARCH in armv5*) ARCH="armv5";; armv6*) ARCH="armv6";; armv7*) ARCH="arm";; aarch64) ARCH="arm64";; x86) ARCH="386";; x86_64) ARCH="amd64";;  i686) ARCH="386";; i386) ARCH="386";; esac; wget -c https://github.com/zitadel/zitadel/releases/download/$LATEST/zitadel-linux-$ARCH.tar.gz -O - | tar -xz && sudo mv zitadel-linux-$ARCH/zitadel /usr/local/bin
```

## Run Zitadel

```bash
ZITADEL_DATABASE_POSTGRES_DSN=postgresql://root:postgres@localhost:5432/postgres?sslmode=disable ZITADEL_EXTERNALSECURE=false zitadel start-from-init --masterkey "MasterkeyNeedsToHave32Characters" --tlsMode disabled
```

Visit <http://localhost:8080/ui/console?login_hint=zitadel-admin@zitadel.localhost> and enter `Password1!` to log in.

> **Note**
>
> This guide is based on a local setup.
> If you encounter an error "Instance Not Found" please read the following section:
> [Instance not found](https://zitadel.com/docs/self-hosting/deploy/troubleshooting/troubleshooting#instance-not-found)

## VideoGuide

[Open the embedded media](https://www.youtube.com/embed/YVLua-q7dbs)

### Setup Zitadel with a service account

```bash
ZITADEL_DATABASE_POSTGRES_DSN=postgresql://root:postgres@localhost:5432/postgres?sslmode=disable ZITADEL_EXTERNALSECURE=false ZITADEL_FIRSTINSTANCE_MACHINEKEYPATH=/tmp/zitadel-admin-sa.json ZITADEL_FIRSTINSTANCE_ORG_MACHINE_MACHINE_USERNAME=zitadel-admin-sa ZITADEL_FIRSTINSTANCE_ORG_MACHINE_MACHINE_NAME=Admin ZITADEL_FIRSTINSTANCE_ORG_MACHINE_MACHINEKEY_TYPE=1 zitadel start-from-init --masterkey "MasterkeyNeedsToHave32Characters" --tlsMode disabled

# then you can move your machine key
mv /tmp/zitadel-admin-sa.json $HOME/zitadel-admin-sa.json
```

This key can be used to provision resources with for example [Terraform](https://zitadel.com/docs/guides/manage/terraform-provider).

## What's next

For running a production grade ZITADEL instance in your environment, go on with the [configure ZITADEL](https://zitadel.com/docs/self-hosting/manage/configure) section.

> **Warning**
>
> The ZITADEL management console [requires end-to-end HTTP/2 support](https://zitadel.com/docs/self-hosting/manage/http2)

## Disclaimer

This guide is for development / demonstration purpose only and does NOT reflect a production setup.

Things such as TLS termination and email verification will not be available unless you

- Use an API gateway with valid certificates in front of the service
- Configure an appropriate email server
