> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfstreamerrorsocks4identdfailed](https://developer.apple.com/documentation/cfnetwork/kcfstreamerrorsocks4identdfailed)

# kCFStreamErrorSOCKS4IdentdFailed (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Request rejected by the server because it couldn’t connect to the `identd` daemon on the client.

## Declaration

```swift
var kCFStreamErrorSOCKS4IdentdFailed: Int { get }
```

<a id="Discussion"></a>

## Discussion

This error is specific to SOCKS4. This error code is only valid for errors in the `kCFStreamErrorSOCKS4SubDomainResponse` subdomain.

## See Also

### Constants

- [kCFStreamErrorSOCKS4IdConflict](kcfstreamerrorsocks4idconflict.md): Request rejected by the server because the client program and the `identd` daemon reported different user IDs.
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

# kCFStreamErrorSOCKS4IdentdFailed (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Request rejected by the server because it couldn’t connect to the `identd` daemon on the client.

## Declaration

```objectivec
kCFStreamErrorSOCKS4IdentdFailed
```

<a id="Discussion"></a>

## Discussion

This error is specific to SOCKS4. This error code is only valid for errors in the `kCFStreamErrorSOCKS4SubDomainResponse` subdomain.

## See Also

### Constants

- [kCFStreamErrorSOCKS4IdConflict](kcfstreamerrorsocks4idconflict.md): Request rejected by the server because the client program and the `identd` daemon reported different user IDs.
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
