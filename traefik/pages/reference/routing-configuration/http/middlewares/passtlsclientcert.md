> Release-pinned source for Traefik Proxy v3.7.12: [docs/content/reference/routing-configuration/http/middlewares/passtlsclientcert.md](https://github.com/traefik/traefik/blob/e8f398ee30ca5643158ea9094b701b8eae9849e5/docs/content/reference/routing-configuration/http/middlewares/passtlsclientcert.md)

The `passTLSClientCert` middleware adds the selected data from the passed client TLS certificate to a header.

## Configuration Examples

Pass the pem in the `X-Forwarded-Tls-Client-Cert` header:

**Structured (YAML)**

```yaml
# Pass the pem in the `X-Forwarded-Tls-Client-Cert` header.
http:
  middlewares:
    test-passtlsclientcert:
      passTLSClientCert:
        pem: true
```

**Structured (TOML)**

```toml
# Pass the pem in the `X-Forwarded-Tls-Client-Cert` header.
[http.middlewares]
  [http.middlewares.test-passtlsclientcert.passTLSClientCert]
    pem = true
```

**Labels**

```yaml
# Pass the pem in the `X-Forwarded-Tls-Client-Cert` header.
labels:
  - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.pem=true"
```

**Tags**

```json
// Pass the pem in the `X-Forwarded-Tls-Client-Cert` header
{
  "Tags": [
    "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.pem=true"
  ]
}
```

**Kubernetes**

```yaml
apiVersion: traefik.io/v1alpha1
kind: Middleware
metadata:
  name: test-passtlsclientcert
spec:
  passTLSClientCert:
    pem: true
```

> **Pass the pem in the `X-Forwarded-Tls-Client-Cert` header**
> **Structured (YAML)**
>
> ```yaml
> # Pass all the available info in the `X-Forwarded-Tls-Client-Cert-Info` header
> http:
>   middlewares:
>     test-passtlsclientcert:
>       passTLSClientCert:
>         info:
>           notAfter: true
>           notBefore: true
>           sans: true
>           subject:
>             country: true
>             province: true
>             locality: true
>             organization: true
>             organizationalUnit: true
>             commonName: true
>             serialNumber: true
>             domainComponent: true
>           issuer:
>             country: true
>             province: true
>             locality: true
>             organization: true
>             commonName: true
>             serialNumber: true
>             domainComponent: true
> ```
>
> **Structured (TOML)**
>
> ```toml
> # Pass all the available info in the `X-Forwarded-Tls-Client-Cert-Info` header
> [http.middlewares]
>   [http.middlewares.test-passtlsclientcert.passTLSClientCert]
>     [http.middlewares.test-passtlsclientcert.passTLSClientCert.info]
>       notAfter = true
>       notBefore = true
>       sans = true
>       [http.middlewares.test-passtlsclientcert.passTLSClientCert.info.subject]
>         country = true
>         province = true
>         locality = true
>         organization = true
>         organizationalUnit = true
>         commonName = true
>         serialNumber = true
>         domainComponent = true
>       [http.middlewares.test-passtlsclientcert.passTLSClientCert.info.issuer]
>         country = true
>         province = true
>         locality = true
>         organization = true
>         commonName = true
>         serialNumber = true
>         domainComponent = true
> ```
>
> **Labels**
>
> ```yaml
> # Pass all the available info in the `X-Forwarded-Tls-Client-Cert-Info` header
> labels:
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.notafter=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.notbefore=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.sans=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.serialnumber=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.commonname=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.country=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.domaincomponent=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.locality=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.organization=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.organizationalunit=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.province=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.serialnumber=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.commonname=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.country=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.domaincomponent=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.locality=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.organization=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.province=true"
>   - "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.serialnumber=true"
> ```
>
> **Tags**
>
> ```json
> // Pass all the available info in the `X-Forwarded-Tls-Client-Cert-Info` header
> {
>   //...
>   "Tags" : [
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.notafter=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.notbefore=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.sans=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.commonname=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.country=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.domaincomponent=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.locality=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.organization=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.organizationalunit=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.province=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.subject.serialnumber=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.commonname=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.country=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.domaincomponent=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.locality=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.organization=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.province=true",
>     "traefik.http.middlewares.test-passtlsclientcert.passtlsclientcert.info.issuer.serialnumber=true"
>   ]
> }
> ```
>
> **Kubernetes**
>
> ```yaml
> # Pass all the available info in the `X-Forwarded-Tls-Client-Cert-Info` header
> apiVersion: traefik.io/v1alpha1
> kind: Middleware
> metadata:
>   name: test-passtlsclientcert
> spec:
>   passTLSClientCert:
>     info:
>       notAfter: true
>       notBefore: true
>       sans: true
>       subject:
>         country: true
>         province: true
>         locality: true
>         organization: true
>         organizationalUnit: true
>         commonName: true
>         serialNumber: true
>         domainComponent: true
>       issuer:
>         country: true
>         province: true
>         locality: true
>         organization: true
>         commonName: true
>         serialNumber: true
>         domainComponent: true
> ```

## General Information

`passTLSClientCert` can add two headers to the request:

- `X-Forwarded-Tls-Client-Cert` that contains the pem.
- `X-Forwarded-Tls-Client-Cert-Info` that contains all the selected certificate information in an escaped string.

> **Info**
>
> - `X-Forwarded-Tls-Client-Cert-Info` header value is a string that has been escaped in order to be a valid URL query.
> - These options only work accordingly to the MutualTLS configuration. i.e, only the certificates that match the `clientAuth.clientAuthType` policy are passed.

## Configuration Options

| Field                                                                             | Description                                                                                                                                                                                     | Default | Required |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- |
| <a id="opt-pem"></a>`pem`                                                         | Fills the `X-Forwarded-Tls-Client-Cert` header with the certificate information.<br /> More information [here](#pem).                                                                           | false   | No       |
| <a id="opt-info-serialNumber"></a>`info.serialNumber`                             | Add the `Serial Number` of the certificate.<br /> More information about `info` [here](#info).                                                                                                  | false   | No       |
| <a id="opt-info-notAfter"></a>`info.notAfter`                                     | Add the `Not After` information from the `Validity` part. <br /> More information about `info` [here](#info).                                                                                   | false   | No       |
| <a id="opt-info-notBefore"></a>`info.notBefore`                                   | Add the `Not Before` information from the `Validity` part. <br />More information about `info` [here](#info).                                                                                   | false   | No       |
| <a id="opt-info-sans"></a>`info.sans`                                             | Add the `Subject Alternative Name` information from the `Subject Alternative Name` part. <br /> More information about `info` [here](#info).                                                    | false   | No       |
| <a id="opt-info-subject"></a>`info.subject`                                       | The `info.subject` selects the specific client certificate subject details you want to add to the `X-Forwarded-Tls-Client-Cert-Info` header. <br />More information about `info` [here](#info). | false   | No       |
| <a id="opt-info-subject-country"></a>`info.subject.country`                       | Add the `country` information into the subject.<br /> The data is taken from the subject part with the `C` key. <br />More information about `info` [here](#info).                              | false   | No       |
| <a id="opt-info-subject-province"></a>`info.subject.province`                     | Add the `province` information into the subject.<br /> The data is taken from the subject part with the `ST` key. <br />More information about `info` [here](#info).                            | false   | No       |
| <a id="opt-info-subject-locality"></a>`info.subject.locality`                     | Add the `locality` information into the subject.<br /> The data is taken from the subject part with the `L` key. <br />More information about `info` [here](#info).                             | false   | No       |
| <a id="opt-info-subject-organization"></a>`info.subject.organization`             | Add the `organization` information into the subject.<br /> The data is taken from the subject part with the `O` key. <br />More information about `info` [here](#info).                         | false   | No       |
| <a id="opt-info-subject-organizationalUnit"></a>`info.subject.organizationalUnit` | Add the `organizationalUnit` information into the subject.<br /> The data is taken from the subject part with the `OU` key. <br />More information about `info` [here](#info).                  | false   | No       |
| <a id="opt-info-subject-commonName"></a>`info.subject.commonName`                 | Add the `commonName` information into the subject.<br /> The data is taken from the subject part with the `CN` key.                                                                             | false   | No       |
| <a id="opt-info-subject-serialNumber"></a>`info.subject.serialNumber`             | Add the `serialNumber` information into the subject.<br /> The data is taken from the subject part with the `SN` key.                                                                           | false   | No       |
| <a id="opt-info-subject-domainComponent"></a>`info.subject.domainComponent`       | Add the `domainComponent` information into the subject.<br />The data is taken from the subject part with the `DC` key. <br />More information about `info` [here](#info).                      | false   | No       |
| <a id="opt-info-issuer"></a>`info.issuer`                                         | The `info.issuer` selects the specific client certificate issuer details you want to add to the `X-Forwarded-Tls-Client-Cert-Info` header. <br />More information about `info` [here](#info).   | false   | No       |
| <a id="opt-info-issuer-country"></a>`info.issuer.country`                         | Add the `country` information into the issuer.<br /> The data is taken from the issuer part with the `C` key. <br />More information about `info` [here](#info).                                | false   | No       |
| <a id="opt-info-issuer-province"></a>`info.issuer.province`                       | Add the `province` information into the issuer.<br />The data is taken from the issuer part with the `ST` key. <br />More information about `info` [here](#info).                               | false   | No       |
| <a id="opt-info-issuer-locality"></a>`info.issuer.locality`                       | Add the `locality` information into the issuer.<br /> The data is taken from the issuer part with the `L` key. <br />More information about `info` [here](#info).                               | false   | No       |
| <a id="opt-info-issuer-organization"></a>`info.issuer.organization`               | Add the `organization` information into the issuer.<br /> The data is taken from the issuer part with the `O` key. <br />More information about `info` [here](#info).                           | false   | No       |
| <a id="opt-info-issuer-commonName"></a>`info.issuer.commonName`                   | Add the `commonName` information into the issuer.<br /> The data is taken from the issuer part with the `CN` key. <br />More information about `info` [here](#info).                            | false   | No       |
| <a id="opt-info-issuer-serialNumber"></a>`info.issuer.serialNumber`               | Add the `serialNumber` information into the issuer.<br /> The data is taken from the issuer part with the `SN` key. <br />More information about `info` [here](#info).                          | false   | No       |
| <a id="opt-info-issuer-domainComponent"></a>`info.issuer.domainComponent`         | Add the `domainComponent` information into the issuer.<br /> The data is taken from the issuer part with the `DC` key. <br />More information about `info` [here](#info).                       | false   | No       |

### pem

#### Data Format

The delimiters and `\n` will be removed.
If there are more than one certificate, they are separated by a "`,`".

#### Header size

The `X-Forwarded-Tls-Client-Cert` header value could exceed the web server header size limit

The header size limit of web servers is commonly between 4kb and 8kb.
If that turns out to be a problem, and if reconfiguring the server to allow larger headers is not an option,
one can alleviate the problem by selecting only the interesting parts of the cert,
through the use of the `info` options described below. (And by setting `pem` to false).

### info

The `info` option selects the specific client certificate details you want to add to the `X-Forwarded-Tls-Client-Cert-Info` header.

#### Data Format

The value of the header is an escaped concatenation of all the selected certificate details.
Unless specified otherwise, all the header values examples are shown unescaped, for readability.

If there are more than one certificate, they are separated by a `,`.

The following example shows such a concatenation, when all the available fields are selected:

```text
Subject="DC=org,DC=cheese,C=FR,C=US,ST=Cheese org state,ST=Cheese com state,L=TOULOUSE,L=LYON,O=Cheese,O=Cheese 2,CN=*.example.com";Issuer="DC=org,DC=cheese,C=FR,C=US,ST=Signing State,ST=Signing State 2,L=TOULOUSE,L=LYON,O=Cheese,O=Cheese 2,CN=Simple Signing CA 2";SerialNumber="1";NB="1747282426";NA="1778818426";SAN="*.example.org,*.example.net,*.example.com,test@example.org,test@example.net,10.0.1.0,10.0.1.2"
```
