> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/syntheticdnsansweripv4prefix](https://developer.apple.com/documentation/networkextension/nerelay/syntheticdnsansweripv4prefix)

# syntheticDNSAnswerIPv4Prefix (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An IPv4 address prefix the relay uses to handle address info requests.

## Declaration

```swift
var syntheticDNSAnswerIPv4Prefix: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an address prefix, such as `192.0.2.0/24`. The relay manager uses this prefix to synthesize DNS answers for apps that use `getaddrinfo()` to resolve domains included in [matchDomains](../nerelaymanager/matchdomains.md).

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

# syntheticDNSAnswerIPv4Prefix (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An IPv4 address prefix the relay uses to handle address info requests.

## Declaration

```objectivec
@property (copy, nullable) NSString * syntheticDNSAnswerIPv4Prefix;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an address prefix, such as `192.0.2.0/24`. The relay manager uses this prefix to synthesize DNS answers for apps that use `getaddrinfo()` to resolve domains included in [matchDomains](../nerelaymanager/matchdomains.md).

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.
