> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/performing-a-ws-trust-metadata-exchange-data-mex-request](https://developer.apple.com/documentation/authenticationservices/performing-a-ws-trust-metadata-exchange-data-mex-request)

# Performing a WS-Trust metadata exchange data (MEX) request (Swift)

**Framework:** Authentication Services  
**Kind:** Article

Send and process a WS-Trust MEX request to determine the version and URLs for authentication.

<a id="overview"></a>

## Overview

After receiving a preauthentication response from the identity provider (IdP), the next step the system performs for federated authentication with WS-Trust, meaning between security domains, is to send a WS-Trust MEX request to the federated IdP.

The system sends a WS-Trust MEX request to determine the WS-Trust version and URLs to use for authentication. It sends this request when the [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md) is [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.wsTrust](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum/wstrust.md), or when the [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md) is [ASAuthorizationProviderExtensionLoginConfiguration.FederationType.dynamicWSTrust](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum/dynamicwstrust.md) and the MEX URL is parsed from the preauthentication response. See [Performing a preauthentication request](performing-a-preauthentication-request.md) for more information.

<a id="Create-the-WS-Trust-MEX-network-request"></a>

### Create the WS-Trust MEX network request

The request is an HTTP GET to the URL in [federationMEXURL](asauthorizationproviderextensionloginconfiguration/federationmexurl.md) or to the URL received from the pre-authentication request, as shown here:

```http
GET /wstrust/mex HTTP/1.1
Host: auth.example.com
```

<a id="Receive-the-WS-Trust-MEX-network-response"></a>

### Receive the WS-Trust MEX network response

If the http status is `200`, the response body loads as XML. The system parses the XML to determine the WSTrust endpoint and version to use. The system supports WS-Trust versions 2005 and 1.3; however, version 1.3 is preferred. The system only supports https as the transport.

## See Also

### Pre-login

- [Obtaining a server nonce](obtaining-a-server-nonce.md): Request and process a server nonce to verify communication and detect replays.
- [Performing a preauthentication request](performing-a-preauthentication-request.md): Request and process a preauthentication for dynamic WS-Trust authentication.

# Performing a WS-Trust metadata exchange data (MEX) request (Objective-C)

**Framework:** Authentication Services  
**Kind:** Article

Send and process a WS-Trust MEX request to determine the version and URLs for authentication.

<a id="overview"></a>

## Overview

After receiving a preauthentication response from the identity provider (IdP), the next step the system performs for federated authentication with WS-Trust, meaning between security domains, is to send a WS-Trust MEX request to the federated IdP.

The system sends a WS-Trust MEX request to determine the WS-Trust version and URLs to use for authentication. It sends this request when the [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md) is [ASAuthorizationProviderExtensionFederationTypeWSTrust](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum/wstrust.md), or when the [federationType](asauthorizationproviderextensionloginconfiguration/federationtype-swift.property.md) is [ASAuthorizationProviderExtensionFederationTypeDynamicWSTrust](asauthorizationproviderextensionloginconfiguration/federationtype-swift.enum/dynamicwstrust.md) and the MEX URL is parsed from the preauthentication response. See [Performing a preauthentication request](performing-a-preauthentication-request.md) for more information.

<a id="Create-the-WS-Trust-MEX-network-request"></a>

### Create the WS-Trust MEX network request

The request is an HTTP GET to the URL in [federationMEXURL](asauthorizationproviderextensionloginconfiguration/federationmexurl.md) or to the URL received from the pre-authentication request, as shown here:

```http
GET /wstrust/mex HTTP/1.1
Host: auth.example.com
```

<a id="Receive-the-WS-Trust-MEX-network-response"></a>

### Receive the WS-Trust MEX network response

If the http status is `200`, the response body loads as XML. The system parses the XML to determine the WSTrust endpoint and version to use. The system supports WS-Trust versions 2005 and 1.3; however, version 1.3 is preferred. The system only supports https as the transport.

## See Also

### Pre-login

- [Obtaining a server nonce](obtaining-a-server-nonce.md): Request and process a server nonce to verify communication and detect replays.
- [Performing a preauthentication request](performing-a-preauthentication-request.md): Request and process a preauthentication for dynamic WS-Trust authentication.
