> Release-pinned source for ZITADEL v4.17.2: [apps/docs/content/self-hosting/manage/reverseproxy/httpd/index.mdx](https://zitadel.com/docs/self-hosting/manage/reverseproxy/httpd)

With these examples, you create and run a minimal  configuration for Zitadel with [Docker Compose](https://docs.docker.com/compose).
Whereas the guide focuses on the configuration for Apache httpd, you can inspect the settings for the Zitadel API, the Zitadel login and the database in the base Docker Compose file.

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

For running Apache httpd, you will extend the base Docker Compose file with the Apache httpd specific Docker Compose file.

**specific docker-compose.yaml**

```yaml
services:

  proxy-disabled-tls:
    image: "httpd:latest"
    volumes:
      - "./httpd-disabled-tls.conf:/usr/local/apache2/conf/httpd.conf"
    ports:
      - "80:80"
    networks:
      - app      
    depends_on:
      zitadel-disabled-tls:
        condition: 'service_healthy'

  proxy-external-tls:
    image: "httpd:latest"
    volumes:
      - "./httpd-external-tls.conf:/usr/local/apache2/conf/httpd.conf"
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
    image: "httpd:latest"
    volumes:
      - "./httpd-enabled-tls.conf:/usr/local/apache2/conf/httpd.conf"
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

You can either setup your environment for TLS mode disabled, [TLS mode external](#tls-mode-external) or TLS mode enabled.

## TLS mode external

**httpd-external-tls.conf**

```conf
LoadModule mpm_event_module modules/mod_mpm_event.so
LoadModule authn_file_module modules/mod_authn_file.so
LoadModule authn_core_module modules/mod_authn_core.so
LoadModule authz_host_module modules/mod_authz_host.so
LoadModule authz_groupfile_module modules/mod_authz_groupfile.so
LoadModule authz_user_module modules/mod_authz_user.so
LoadModule authz_core_module modules/mod_authz_core.so
LoadModule access_compat_module modules/mod_access_compat.so
LoadModule auth_basic_module modules/mod_auth_basic.so
LoadModule reqtimeout_module modules/mod_reqtimeout.so
LoadModule filter_module modules/mod_filter.so
LoadModule mime_module modules/mod_mime.so
LoadModule log_config_module modules/mod_log_config.so
LoadModule env_module modules/mod_env.so
LoadModule headers_module modules/mod_headers.so
LoadModule setenvif_module modules/mod_setenvif.so
LoadModule version_module modules/mod_version.so
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
LoadModule ssl_module modules/mod_ssl.so
LoadModule proxy_http2_module modules/mod_proxy_http2.so
LoadModule unixd_module modules/mod_unixd.so
LoadModule status_module modules/mod_status.so
LoadModule autoindex_module modules/mod_autoindex.so
LoadModule dir_module modules/mod_dir.so
LoadModule alias_module modules/mod_alias.so
LoadModule rewrite_module modules/mod_rewrite.so
LoadModule http2_module modules/mod_http2.so

LogLevel debug
ErrorLog /proc/self/fd/2
CustomLog /proc/self/fd/1 "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\""

Listen 443

<VirtualHost *:443>
    # Enable HTTP/2 and configure ALPN
    Protocols h2 http/1.1
    H2Direct on
    
    # Configure SSL for gRPC
    SSLEngine on
    SSLCertificateFile /etc/certs/selfsigned.crt
    SSLCertificateKeyFile /etc/certs/selfsigned.key

    # Enable ALPN protocols for gRPC
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305
    SSLHonorCipherOrder off
    SSLSessionTickets off

    ProxyPreserveHost on
    ProxyAddHeaders on
    RequestHeader set X-Forwarded-Proto "https"

    # Route login requests    
    ProxyPass /ui/v2/login http://login-external-tls:3000/ui/v2/login
    ProxyPassReverse /ui/v2/login http://login-external-tls:3000/ui/v2/login
    
    # Route gRPC/API requests with HTTP/2 support
    ProxyPass / h2c://zitadel-external-tls:8080/
    ProxyPassReverse / h2c://zitadel-external-tls:8080/
</VirtualHost>
```

When the docker compose command exits successfully, go to  and log in:

- **username**: *<zitadel-admin@zitadel.127.0.0.1.sslip.io>*
- **password**: *Password1!*

If the management console loads normally, you know that the HTTP and gRPC-Web and gRPC APIs are working correctly.

```bash
# You can now stop the database, the Zitadel API, the Zitadel login and Apache httpd.
docker compose --file docker-compose-base.yaml --file docker-compose-httpd.yaml down
```

## More Information

- [Read more about Zitadel's TLS Modes](https://zitadel.com/docs/self-hosting/manage/tls_modes)
- [Read more about how Zitadel uses HTTP/2](https://zitadel.com/docs/self-hosting/manage/http2)
