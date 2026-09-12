> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelay/identitydata](https://developer.apple.com/documentation/networkextension/nerelay/identitydata)

# identityData (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The PKCS12 data for the relay client authentication.

## Declaration

```swift
var identityData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

The value is a [NSData](../../foundation/nsdata.md) object in PKCS12 format.

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.

# identityData (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The PKCS12 data for the relay client authentication.

## Declaration

```objectivec
@property (copy, nullable) NSData * identityData;
```

<a id="Discussion"></a>

## Discussion

The value is a [NSData](../../foundation/nsdata.md) object in PKCS12 format.

## See Also

### Configuring client properties

- [additionalHTTPHeaderFields](additionalhttpheaderfields.md): A dictionary of additional HTTP headers to send as part of `CONNECT` requests to the relay.
- [identityDataPassword](identitydatapassword.md): The password the relay uses to decrypt the PKCS12 identity data.
- [syntheticDNSAnswerIPv4Prefix](syntheticdnsansweripv4prefix.md): An IPv4 address prefix the relay uses to handle address info requests.
- [syntheticDNSAnswerIPv6Prefix](syntheticdnsansweripv6prefix.md): An IPv6 address prefix the relay uses to handle address info requests.
