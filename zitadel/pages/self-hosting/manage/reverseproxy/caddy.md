> Release-pinned source for ZITADEL v4.17.3: [apps/docs/content/self-hosting/manage/reverseproxy/caddy/index.mdx](https://zitadel.com/docs/self-hosting/manage/reverseproxy/caddy)

With these examples, you create and run a minimal  configuration for Zitadel with [Docker Compose](https://docs.docker.com/compose).
Whereas the guide focuses on the configuration for Caddy, you can inspect the settings for the Zitadel API, the Zitadel login and the database in the base Docker Compose file.

**base docker-compose.yaml**

```yaml
services:

  zitadel-disabled-tls:
    extends:
      service: zitadel-init
    command: 'start-from-setup --masterkey "MasterkeyNeedsToHave32Characters"'
    environment:
      ZITADEL_EXTERNALPORT: 80
      ZITADEL_EXTERNALSECURE: false
      ZITADEL_TLS_ENABLED: false
    networks:
      - app
      - db
    depends_on:
      zitadel-init:
        condition: 'service_completed_successfully'
      db:
        condition: 'service_healthy'

  zitadel-external-tls:
    extends:
      service: zitadel-init
    command: 'start-from-setup --masterkey "MasterkeyNeedsToHave32Characters"'
    environment:
      ZITADEL_EXTERNALPORT: 443
      ZITADEL_EXTERNALSECURE: true
      ZITADEL_TLS_ENABLED: false
    networks:
      - app
      - db
    depends_on:
      db:
        condition: 'service_healthy'
      zitadel-init:
        condition: 'service_completed_successfully'

  zitadel-enabled-tls:
    extends:
      service: zitadel-init
    command: 'start-from-setup --masterkey "MasterkeyNeedsToHave32Characters"'
    environment:
      ZITADEL_EXTERNALPORT: 443
      ZITADEL_EXTERNALSECURE: true
      ZITADEL_TLS_ENABLED: true
      ZITADEL_TLS_CERTPATH: /etc/certs/selfsigned.crt
      ZITADEL_TLS_KEYPATH: /etc/certs/selfsigned.key
    volumes:
      - ./selfsigned.crt:/etc/certs/selfsigned.crt
      - ./selfsigned.key:/etc/certs/selfsigned.key
    networks:
      - app
      - db
    depends_on:
      zitadel-init:
        condition: 'service_completed_successfully'
      db:
        condition: 'service_healthy'

  zitadel-init:
    image: '${ZITADEL_IMAGE:-ghcr.io/zitadel/zitadel:latest}'
    command: 'init'
    depends_on:
      db:
        condition: 'service_healthy'
    environment:
      # Using an external domain other than localhost proofs, that the proxy configuration works.
      # If Zitadel can't resolve a requests original host to this domain,
      # it will return a 404 Instance not found error.
      ZITADEL_EXTERNALDOMAIN: 127.0.0.1.sslip.io
      # In case something doesn't work as expected,
      # it can be handy to be able to read the access logs.
      ZITADEL_LOGSTORE_ACCESS_STDOUT_ENABLED: true
      # For convenience, ZITADEL should not ask to change the initial admin users password.
      ZITADEL_FIRSTINSTANCE_ORG_HUMAN_PASSWORDCHANGEREQUIRED: false
      # database configuration
      ZITADEL_DATABASE_POSTGRES_HOST: db
      ZITADEL_DATABASE_POSTGRES_USER_PASSWORD: zitadel_pw
      # Set up a service account with IAM_LOGIN_CLIENT role and write the PAT to the file ./login-client.pat
      ZITADEL_FIRSTINSTANCE_LOGINCLIENTPATPATH: /current-dir/login-client.pat
      ZITADEL_FIRSTINSTANCE_ORG_LOGINCLIENT_MACHINE_USERNAME: login-client
      ZITADEL_FIRSTINSTANCE_ORG_LOGINCLIENT_MACHINE_NAME: Automatically Initialized instance Login Client
      ZITADEL_FIRSTINSTANCE_ORG_LOGINCLIENT_PAT_EXPIRATIONDATE: '2029-01-01T00:00:00Z'
      # The master key is used to
    networks:
      - db
    healthcheck:
      test: [ "CMD", "/app/zitadel", "ready" ]
      interval: '10s'
      timeout: '5s'
      retries: 5
      start_period: '10s'
    volumes:
      - '.:/current-dir:rw'

  db:
    restart: 'always'
    image: postgres:17-alpine
    environment:
      POSTGRES_PASSWORD: postgres
    healthcheck:
      test: [ "CMD-SHELL", "pg_isready" ]
      interval: 5s
      timeout: 60s
      retries: 10
      start_period: 5s
    networks:
      - db
    volumes:
      - 'data:/var/lib/postgresql/data:rw'

  login-disabled-tls:
    restart: 'unless-stopped'
    image: 'ghcr.io/zitadel/zitadel-login:latest'
    environment:
      - ZITADEL_API_URL=http://zitadel-disabled-tls:8080
      - NEXT_PUBLIC_BASE_PATH=/ui/v2/login
      - ZITADEL_SERVICE_USER_TOKEN_FILE=/current-dir/login-client.pat
      - CUSTOM_REQUEST_HEADERS=Host:127.0.0.1.sslip.io
      - NODE_ENV=test
    volumes:
      - '.:/current-dir:ro'
    networks:
      - app      
    depends_on:
      zitadel-disabled-tls:
        condition: 'service_healthy'

  login-external-tls:
    restart: 'unless-stopped'
    image: 'ghcr.io/zitadel/zitadel-login:latest'
    environment:
      - ZITADEL_API_URL=http://zitadel-external-tls:8080
      - NEXT_PUBLIC_BASE_PATH=/ui/v2/login
      - ZITADEL_SERVICE_USER_TOKEN_FILE=/current-dir/login-client.pat
      - CUSTOM_REQUEST_HEADERS=Host:127.0.0.1.sslip.io
    volumes:
      - '.:/current-dir:ro'
    networks:
      - app      
    depends_on:
      zitadel-external-tls:
        condition: 'service_healthy'

  login-enabled-tls:
    restart: 'unless-stopped'
    image: 'ghcr.io/zitadel/zitadel-login:latest'
    environment:
      - ZITADEL_API_URL=https://zitadel-enabled-tls:8080
      - NEXT_PUBLIC_BASE_PATH=/ui/v2/login
      - ZITADEL_SERVICE_USER_TOKEN_FILE=/current-dir/login-client.pat
      - CUSTOM_REQUEST_HEADERS=Host:127.0.0.1.sslip.io
      - NODE_TLS_REJECT_UNAUTHORIZED=0
    volumes:
      - '.:/current-dir:ro'
    networks:
      - app
    depends_on:
      zitadel-enabled-tls:
        condition: 'service_healthy'

networks:
  app:
  db:

volumes:
  data:
```

For running Caddy, you will extend the base Docker Compose file with the Caddy specific Docker Compose file.

**specific docker-compose.yaml**

```yaml
services:

  proxy-disabled-tls:
    image: "caddy:latest"
    volumes:
      - "./disabled-tls.Caddyfile:/etc/caddy/Caddyfile:ro"
    ports:
      - "80:80"
    networks:
      - app
    depends_on:
      zitadel-disabled-tls:
        condition: 'service_healthy'

  proxy-external-tls:
    image: "caddy:latest"
    volumes:
      - "./external-tls.Caddyfile:/etc/caddy/Caddyfile:ro"
      - "./selfsigned.crt:/etc/certs/selfsigned.crt:ro"
      - "./selfsigned.key:/etc/certs/selfsigned.key:ro"
    ports:
      - "443:443"
    networks:
      - app
    depends_on:
      zitadel-external-tls:
        condition: 'service_healthy'

  proxy-enabled-tls:
    image: "caddy:latest"
    volumes:
      - "./enabled-tls.Caddyfile:/etc/caddy/Caddyfile:ro"
      - "./selfsigned.crt:/etc/certs/selfsigned.crt:ro"
      - "./selfsigned.key:/etc/certs/selfsigned.key:ro"
    ports:
      - "443:443"
    networks:
      - app
    depends_on:
      zitadel-enabled-tls:
        condition: 'service_healthy'
```

You can either setup your environment for [TLS mode external](#tls-mode-external) or [TLS mode enabled](#tls-mode-enabled).

## TLS mode external

**external-tls.Caddyfile**

```caddy
https://127.0.0.1.sslip.io {
	tls /etc/certs/selfsigned.crt /etc/certs/selfsigned.key
	reverse_proxy /ui/v2/login/* http://login-external-tls:3000
	reverse_proxy h2c://zitadel-external-tls:8080
}
```

When the docker compose command exits successfully, go to  and log in:

- **username**: *<zitadel-admin@zitadel.127.0.0.1.sslip.io>*
- **password**: *Password1!*

If the management console loads normally, you know that the HTTP and gRPC-Web and gRPC APIs are working correctly.

```bash
# You can now stop the database, the Zitadel API, the Zitadel login and Caddy.
docker compose --file docker-compose-base.yaml --file docker-compose-caddy.yaml down
```

## TLS mode enabled

**enabled-tls.Caddyfile**

```caddy
https://127.0.0.1.sslip.io {
	tls /etc/certs/selfsigned.crt /etc/certs/selfsigned.key
	reverse_proxy /ui/v2/login/* http://login-enabled-tls:3000
	reverse_proxy https://zitadel-enabled-tls:8080 {
		transport http {
			tls_insecure_skip_verify
		}
	}
}
```

When the docker compose command exits successfully, go to  and log in:

- **username**: *<zitadel-admin@zitadel.127.0.0.1.sslip.io>*
- **password**: *Password1!*

If the management console loads normally, you know that the HTTP and gRPC-Web and gRPC APIs are working correctly.

```bash
# You can now stop the database, the Zitadel API, the Zitadel login and Caddy.
docker compose --file docker-compose-base.yaml --file docker-compose-caddy.yaml down
```

## Known issues

### TE: trailers header causes requests to hang

When a browser sends a `TE: trailers` HTTP header (common with HTTP/2), Caddy may forward it upstream where it conflicts with ZITADEL's gRPC-gateway handling.
Requests that result in an error response will hang indefinitely instead of returning the error to the client.

**Workaround**: strip the header in Caddy before it reaches ZITADEL:

```
reverse_proxy h2c://zitadel:8080 {
    header_up -TE
}
```

## More Information

- [Read more about Zitadel's TLS Modes](https://zitadel.com/docs/self-hosting/manage/tls_modes)
- [Read more about how Zitadel uses HTTP/2](https://zitadel.com/docs/self-hosting/manage/http2)
