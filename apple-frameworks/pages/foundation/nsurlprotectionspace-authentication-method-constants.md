> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlprotectionspace-authentication-method-constants](https://developer.apple.com/documentation/foundation/nsurlprotectionspace-authentication-method-constants)

# NSURLProtectionSpace authentication method constants (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Constants describing known values of the [authenticationMethod](urlprotectionspace/authenticationmethod.md) property of a [URLProtectionSpace](urlprotectionspace.md).

<a id="overview"></a>

## Overview

These constants are also used with the [URLProtectionSpace](urlprotectionspace.md) initializers [init(host:port:protocol:realm:authenticationMethod:)](urlprotectionspace/init%28host_port_protocol_realm_authenticationmethod_%29.md) and [init(proxyHost:port:type:realm:authenticationMethod:)](urlprotectionspace/init%28proxyhost_port_type_realm_authenticationmethod_%29.md).

## Topics

### Session-wide authentication challenges

These constants indicate session-wide challenges. Delegates handle these challenges in the [URLSessionDelegate](urlsessiondelegate.md) method [urlSession(\_:didReceive:completionHandler:)](urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md).

- [NSURLAuthenticationMethodClientCertificate](nsurlauthenticationmethodclientcertificate.md): Use client certificate authentication for this protection space.
- [NSURLAuthenticationMethodNegotiate](nsurlauthenticationmethodnegotiate.md): Negotiate whether to use Kerberos or NTLM authentication for this protection space.
- [NSURLAuthenticationMethodNTLM](nsurlauthenticationmethodntlm.md): Use NTLM authentication for this protection space.
- [NSURLAuthenticationMethodServerTrust](nsurlauthenticationmethodservertrust.md): Perform server trust authentication (certificate validation) for this protection space.

### Task-specific authentication challenges

These constants indicate task-specific challenges. Delegates handle these challenges in the [URLSessionTaskDelegate](urlsessiontaskdelegate.md) method [urlSession(\_:task:didReceive:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md).

- [NSURLAuthenticationMethodDefault](nsurlauthenticationmethoddefault.md): Use the default authentication method for a protocol.
- [NSURLAuthenticationMethodHTMLForm](nsurlauthenticationmethodhtmlform.md): Use HTML form authentication for this protection space.
- [NSURLAuthenticationMethodHTTPBasic](nsurlauthenticationmethodhttpbasic.md): Use HTTP basic authentication for this protection space.
- [NSURLAuthenticationMethodHTTPDigest](nsurlauthenticationmethodhttpdigest.md): Use HTTP digest authentication for this protection space.

## See Also

### Related Documentation

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md): Evaluate the server’s security credentials in your app.

### Identifying protection space properties

- [NSURLProtectionSpace protocol types](nsurlprotectionspace-protocol-types.md): These constants describe the supported protocols for a protection space, as returned by [protocol](urlprotectionspace/protocol.md).
- [NSURLProtectionSpace proxy types](nsurlprotectionspace-proxy-types.md): These constants describe the supported proxy types used in [init(proxyHost:port:type:realm:authenticationMethod:)](urlprotectionspace/init%28proxyhost_port_type_realm_authenticationmethod_%29.md) and returned by [proxyType](urlprotectionspace/proxytype.md).

# NSURLProtectionSpace authentication method constants (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Constants describing known values of the [authenticationMethod](urlprotectionspace/authenticationmethod.md) property of a [NSURLProtectionSpace](urlprotectionspace.md).

<a id="overview"></a>

## Overview

These constants are also used with the [NSURLProtectionSpace](urlprotectionspace.md) initializers [initWithHost:port:protocol:realm:authenticationMethod:](urlprotectionspace/init%28host_port_protocol_realm_authenticationmethod_%29.md) and [initWithProxyHost:port:type:realm:authenticationMethod:](urlprotectionspace/init%28proxyhost_port_type_realm_authenticationmethod_%29.md).

## Topics

### Session-wide authentication challenges

These constants indicate session-wide challenges. Delegates handle these challenges in the [NSURLSessionDelegate](urlsessiondelegate.md) method [URLSession:didReceiveChallenge:completionHandler:](urlsessiondelegate/urlsession%28__didreceive_completionhandler_%29.md).

- [NSURLAuthenticationMethodClientCertificate](nsurlauthenticationmethodclientcertificate.md): Use client certificate authentication for this protection space.
- [NSURLAuthenticationMethodNegotiate](nsurlauthenticationmethodnegotiate.md): Negotiate whether to use Kerberos or NTLM authentication for this protection space.
- [NSURLAuthenticationMethodNTLM](nsurlauthenticationmethodntlm.md): Use NTLM authentication for this protection space.
- [NSURLAuthenticationMethodServerTrust](nsurlauthenticationmethodservertrust.md): Perform server trust authentication (certificate validation) for this protection space.

### Task-specific authentication challenges

These constants indicate task-specific challenges. Delegates handle these challenges in the [NSURLSessionTaskDelegate](urlsessiontaskdelegate.md) method [URLSession:task:didReceiveChallenge:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md).

- [NSURLAuthenticationMethodDefault](nsurlauthenticationmethoddefault.md): Use the default authentication method for a protocol.
- [NSURLAuthenticationMethodHTMLForm](nsurlauthenticationmethodhtmlform.md): Use HTML form authentication for this protection space.
- [NSURLAuthenticationMethodHTTPBasic](nsurlauthenticationmethodhttpbasic.md): Use HTTP basic authentication for this protection space.
- [NSURLAuthenticationMethodHTTPDigest](nsurlauthenticationmethodhttpdigest.md): Use HTTP digest authentication for this protection space.

## See Also

### Related Documentation

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md): Evaluate the server’s security credentials in your app.

### Identifying protection space properties

- [NSURLProtectionSpace protocol types](nsurlprotectionspace-protocol-types.md): These constants describe the supported protocols for a protection space, as returned by [protocol](urlprotectionspace/protocol.md).
- [NSURLProtectionSpace proxy types](nsurlprotectionspace-proxy-types.md): These constants describe the supported proxy types used in [initWithProxyHost:port:type:realm:authenticationMethod:](urlprotectionspace/init%28proxyhost_port_type_realm_authenticationmethod_%29.md) and returned by [proxyType](urlprotectionspace/proxytype.md).
