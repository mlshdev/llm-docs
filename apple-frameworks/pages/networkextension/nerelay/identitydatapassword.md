> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/identitydatapassword](https://developer.apple.com/documentation/networkextension/nerelay/identitydatapassword)

# identityDataPassword (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The password the relay uses to decrypt the PKCS12 identity data.

## Declaration

```swift
var identityDataPassword: String? { get set }
```

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

# identityDataPassword (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The password the relay uses to decrypt the PKCS12 identity data.

## Declaration

```objectivec
@property (copy, nullable) NSString * identityDataPassword;
```

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.
