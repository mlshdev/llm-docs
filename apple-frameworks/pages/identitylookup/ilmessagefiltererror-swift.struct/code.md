> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltererror-swift.struct/code](https://developer.apple.com/documentation/identitylookup/ilmessagefiltererror-swift.struct/code)

# ILMessageFilterError.Code (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

IdentityLookup error codes.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [ILMessageFilterError.Code.system](code/system.md): An unspecified system error occurred.
- [ILMessageFilterError.Code.invalidNetworkURL](code/invalidnetworkurl.md): The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.
- [ILMessageFilterError.Code.networkURLUnauthorized](code/networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterError.Code.networkRequestFailed](code/networkrequestfailed.md): The network request failed.
- [ILMessageFilterError.Code.redundantNetworkDeferral](code/redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ILMessageFilterError (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

IdentityLookup error codes.

## Declaration

```objectivec
enum ILMessageFilterError : NSInteger;
```

## Topics

### Error Codes

- [ILMessageFilterErrorSystem](code/system.md): An unspecified system error occurred.
- [ILMessageFilterErrorInvalidNetworkURL](code/invalidnetworkurl.md): The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s `Info.plist` file is either missing or invalid.
- [ILMessageFilterErrorNetworkURLUnauthorized](code/networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its `Info.plist` file.
- [ILMessageFilterErrorNetworkRequestFailed](code/networkrequestfailed.md): The network request failed.
- [ILMessageFilterErrorRedundantNetworkDeferral](code/redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.

## See Also

### Errors

- [ILMessageFilterErrorDomain](../ilmessagefiltererrordomain.md): The error domain for errors associated with the IdentityLookup APIs.
