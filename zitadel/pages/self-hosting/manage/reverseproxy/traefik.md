> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/self-hosting/manage/reverseproxy/traefik/index.mdx](https://zitadel.com/docs/self-hosting/manage/reverseproxy/traefik)

With these examples, you create and run a minimal  configuration for Zitadel with [Docker Compose](https://docs.docker.com/compose).
Whereas the guide focuses on the configuration for Traefik, you can inspect the settings for the Zitadel API, the Zitadel login and the database in the base Docker Compose file.

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

For running Traefik, you will extend the base Docker Compose file with the Traefik specific Docker Compose file.

**specific docker-compose.yaml**

```yaml
services:

  proxy-disabled-tls:
    image: "traefik:latest"
    volumes:
      - "./traefik-disabled-tls.yaml:/etc/traefik/traefik.yaml:ro"
    ports:
      - "80:80"
    networks:
      - app
    depends_on:
      zitadel-disabled-tls:
        condition: 'service_healthy'

  proxy-external-tls:
    image: "traefik:latest"
    volumes:
      - "./traefik-external-tls.yaml:/etc/traefik/traefik.yaml:ro"
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
    image: "traefik:latest"
    volumes:
      - "./traefik-enabled-tls.yaml:/etc/traefik/traefik.yaml:ro"
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

You can either setup your environment for TLS mode disabled, [TLS mode external](#tls-mode-external) or [TLS mode enabled](#tls-mode-enabled).

## TLS mode external

**traefik-external-tls.yaml**

```yaml
log:
  level: "DEBUG"
providers:
  file:
    filename: "/etc/traefik/traefik.yaml"
entrypoints:
  web:
    address: ":443"
http:
  routers:
    zitadel:
      entryPoints:
        - "web"
      service: "zitadel"
      rule: '!PathPrefix(`/ui/v2/login`)'
      tls: {}
    login:
      entryPoints:
        - "web"
      service: "login"
      rule: 'PathPrefix(`/ui/v2/login`)'
      tls: {}
  services:
    zitadel:
      loadBalancer:
        passHostHeader: true
        servers:
          - url: "h2c://zitadel-external-tls:8080"
    login:
      loadBalancer:
        passHostHeader: true
        servers:
          - url: "http://login-external-tls:3000"
tls:
  stores:
    default:
      defaultCertificate:
        certFile: /etc/certs/selfsigned.crt
        keyFile: /etc/certs/selfsigned.key
```

When the docker compose command exits successfully, go to  and log in:

- **username**: *<zitadel-admin@zitadel.127.0.0.1.sslip.io>*
- **password**: *Password1!*

If the management console loads normally, you know that the HTTP and gRPC-Web and gRPC APIs are working correctly.

```bash
# You can now stop the database, the Zitadel API, the Zitadel login and Traefik.
docker compose --file docker-compose-base.yaml --file docker-compose-traefik.yaml down
```

## TLS mode enabled

**traefik-enabled-tls.yaml**

```yaml
log:
  level: "DEBUG"
providers:
  file:
    filename: "/etc/traefik/traefik.yaml"
entrypoints:
  web:
    address: ":443"
http:
  routers:
    zitadel:
      entryPoints:
        - "web"
      service: "zitadel"
      rule: '!PathPrefix(`/ui/v2/login`)'
      tls: {}
    login:
      entryPoints:
        - "web"
      service: "login"
      rule: 'PathPrefix(`/ui/v2/login`)'
      tls: {}
  services:
    zitadel:
      loadBalancer:
        serversTransport: "zitadel"
        passHostHeader: true
        servers:
          - url: "https://zitadel-enabled-tls:8080"
    login:
      loadBalancer:
        serversTransport: "login"
        passHostHeader: true
        servers:
          - url: "http://login-enabled-tls:3000"
  serversTransports:
    zitadel:
      insecureSkipVerify: true
    login:
      insecureSkipVerify: true
tls:
  stores:
    default:
      defaultCertificate:
        certFile: /etc/certs/selfsigned.crt
        keyFile: /etc/certs/selfsigned.key
```

When the docker compose command exits successfully, go to  and log in:

- **username**: *<zitadel-admin@zitadel.127.0.0.1.sslip.io>*
- **password**: *Password1!*

If the management console loads normally, you know that the HTTP and gRPC-Web and gRPC APIs are working correctly.

```bash
# You can now stop the database, the Zitadel API, the Zitadel login and Traefik.
docker compose --file docker-compose-base.yaml --file docker-compose-traefik.yaml down
```

## More Information

- [Read more about Zitadel's TLS Modes](https://zitadel.com/docs/self-hosting/manage/tls_modes)
- [Read more about how Zitadel uses HTTP/2](https://zitadel.com/docs/self-hosting/manage/http2)
