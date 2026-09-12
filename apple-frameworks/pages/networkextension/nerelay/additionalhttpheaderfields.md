> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/additionalhttpheaderfields](https://developer.apple.com/documentation/networkextension/nerelay/additionalhttpheaderfields)

# additionalHTTPHeaderFields (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.

## Declaration

```swift
var additionalHTTPHeaderFields: [String : String] { get set }
```

## See Also

### Configuring client properties

- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

# additionalHTTPHeaderFields (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,NSString *> * additionalHTTPHeaderFields;
```

## See Also

### Configuring client properties

- [identityData](identitydata.md): The PKCS12 data for the relay client authentication.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.
