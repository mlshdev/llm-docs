> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/1518266-secure-sockets-socks-errors](https://developer.apple.com/documentation/cfnetwork/1518266-secure-sockets-socks-errors)

# Secure Sockets (SOCKS) Errors

**Framework:** CFNetwork  
**Kind:** API Collection

Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.

<a id="overview"></a>

## Overview

Error codes in the `kCFStreamErrorDomainSOCKS` domain can come from multiple parts of the protocol stack, many of which define their own error values as part of outside specifications such as the HTTP specification.

To avoid confusion from conflicting error numbers, error codes in the `kCFStreamErrorDomainSOCKS` domain contain two parts: a subdomain, which tells which part of the protocol stack generated the error, and the error code itself.

Calling [CFSocketStreamSOCKSGetErrorSubdomain(\_:)](cfsocketstreamsocksgeterrorsubdomain%28__%29.md) returns an identifier that tells which layer of the protocol stack produced the error.

Calling [CFSocketStreamSOCKSGetError(\_:)](cfsocketstreamsocksgeterror%28__%29.md) returns the actual error code that the subdomain describes. This list of constants contains the possible values that this function will return. They must be interpreted within the context of the relevant error subdomain.

## Topics

### Constants

- [kCFStreamErrorSOCKS4IdConflict](kcfstreamerrorsocks4idconflict.md): Request rejected by the server because the client program and the `identd` daemon reported different user IDs.
- [kCFStreamErrorSOCKS4IdentdFailed](kcfstreamerrorsocks4identdfailed.md): Request rejected by the server because it couldn’t connect to the `identd` daemon on the client.
- [kCFStreamErrorSOCKS4RequestFailed](kcfstreamerrorsocks4requestfailed.md): Request rejected by the server or request failed.
- [kCFStreamErrorSOCKS4SubDomainResponse](kcfstreamerrorsocks4subdomainresponse.md): The SOCKS4 status code returned by the server.
- [kCFStreamErrorSOCKS5SubDomainMethod](kcfstreamerrorsocks5subdomainmethod.md): The server’s desired negotiation method.
- [kCFStreamErrorSOCKS5SubDomainResponse](kcfstreamerrorsocks5subdomainresponse.md): The response code that the server returned in reply to the connection request.
- [kCFStreamErrorSOCKS5SubDomainUserPass](kcfstreamerrorsocks5subdomainuserpass.md): The status code that the server returned during authentication.
- [kCFStreamErrorSOCKSSubDomainNone](kcfstreamerrorsockssubdomainnone.md): A general SOCKS error.
- [kCFStreamErrorSOCKSSubDomainVersionCode](kcfstreamerrorsockssubdomainversioncode.md): The version of SOCKS that the server wants to use.
- [kSOCKS5NoAcceptableMethod](ksocks5noacceptablemethod.md): The client and server couldn’t find a mutually agreeable authentication method.
- [kCFStreamErrorSOCKS5BadResponseAddr](kcfstreamerrorsocks5badresponseaddr.md): The address returned is not of a known type. This error code is only valid for errors in the `kCFStreamErrorSOCKSSubDomainNone` subdomain.
- [kCFStreamErrorSOCKS5BadState](kcfstreamerrorsocks5badstate.md): The stream is not in a state that allows the requested operation. This error code is only valid for errors in the `kCFStreamErrorSOCKSSubDomainNone` subdomain..
- [kCFStreamErrorSOCKSUnknownClientVersion](kcfstreamerrorsocksunknownclientversion.md): The SOCKS server rejected access because it does not support connections with the requested SOCKS version. SOCKS client version. You can query the `kCFSOCKSVersionKey` key to find out what version the server requested. This error code is only valid for errors in the `kCFStreamErrorSOCKSSubDomainNone` subdomain.

## See Also

### Streams

- [CFReadStreamCreateForHTTPRequest(\_:\_:)](cfreadstreamcreateforhttprequest%28____%29.md): Deprecated. Creates a read stream for a CFHTTP request message.
- [CFReadStreamCreateForStreamedHTTPRequest(\_:\_:\_:)](cfreadstreamcreateforstreamedhttprequest%28______%29.md): Deprecated. Creates a read stream for a CFHTTP request message object whose body is too long to keep in memory.
- [kCFStreamPropertyHTTPAttemptPersistentConnection](kcfstreampropertyhttpattemptpersistentconnection.md): Deprecated.
- [kCFStreamPropertyHTTPFinalRequest](kcfstreampropertyhttpfinalrequest.md): Deprecated. HTTP Final Request property. A value of type CFHTTPMessage containing the final message transmitted by the stream after all modifications (including authentication, connection policy, redirects, and so on) have been made. This property cannot be set.
- [kCFStreamPropertyHTTPFinalURL](kcfstreampropertyhttpfinalurl.md): Deprecated. HTTP Final URL property. A value of type CFURL containing the final HTTP URL. This value differs from the URL in the original HTTP request if an autoredirection occurred. This property cannot be set.
- [kCFStreamPropertyHTTPProxy](kcfstreampropertyhttpproxy.md): Deprecated.
- [kCFStreamPropertyHTTPProxyHost](kcfstreampropertyhttpproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPProxyPort](kcfstreampropertyhttpproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPRequestBytesWrittenCount](kcfstreampropertyhttprequestbyteswrittencount.md): Deprecated.
- [kCFStreamPropertyHTTPResponseHeader](kcfstreampropertyhttpresponseheader.md): Deprecated. HTTP Response Header property. When copied by [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md), the header of an HTTP response message is returned.
- [kCFStreamPropertyHTTPSProxyHost](kcfstreampropertyhttpsproxyhost.md): Deprecated.
- [kCFStreamPropertyHTTPSProxyPort](kcfstreampropertyhttpsproxyport.md): Deprecated.
- [kCFStreamPropertyHTTPShouldAutoredirect](kcfstreampropertyhttpshouldautoredirect.md): Deprecated. HTTP Should Auto Redirect property. Set this property to `kCFBooleanTrue` to enable autoredirection; set this property to `kCFBooleanFalse` to disable autoredirection.
- [CFWriteStreamCreateWithFTPURL(\_:\_:)](cfwritestreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP write stream.
- [CFReadStreamCreateWithFTPURL(\_:\_:)](cfreadstreamcreatewithftpurl%28____%29.md): Deprecated. Creates an FTP read stream.
