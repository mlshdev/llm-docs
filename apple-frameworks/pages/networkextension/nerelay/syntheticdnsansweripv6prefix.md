> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/syntheticdnsansweripv6prefix](https://developer.apple.com/documentation/networkextension/nerelay/syntheticdnsansweripv6prefix)

# syntheticDNSAnswerIPv6Prefix (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An IPv6 address prefix the relay uses to handle address info requests.

## Declaration

```swift
var syntheticDNSAnswerIPv6Prefix: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an address prefix, such as `2001:DB8::/32`. The relay manager uses this prefix to synthesize DNS answers for apps that use `getaddrinfo()` to resolve domains included in [matchDomains](../nerelaymanager/matchdomains.md).

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.

# syntheticDNSAnswerIPv6Prefix (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An IPv6 address prefix the relay uses to handle address info requests.

## Declaration

```objectivec
@property (copy, nullable) NSString * syntheticDNSAnswerIPv6Prefix;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an address prefix, such as `2001:DB8::/32`. The relay manager uses this prefix to synthesize DNS answers for apps that use `getaddrinfo()` to resolve domains included in [matchDomains](../nerelaymanager/matchdomains.md).

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
