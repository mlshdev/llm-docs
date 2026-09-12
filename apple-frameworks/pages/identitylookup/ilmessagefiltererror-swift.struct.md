> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltererror-swift.struct](https://developer.apple.com/documentation/identitylookup/ilmessagefiltererror-swift.struct)

# ILMessageFilterError

**Framework:** SMS and Call Reporting  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An error type that indicates problems with network requests and responses related to IdentityLookup APIs.

## Declaration

```swift
struct ILMessageFilterError
```

## Topics

### Enumerations

- [ILMessageFilterError.Code](ilmessagefiltererror-swift.struct/code.md): IdentityLookup error codes.

### Error Codes

- [invalidNetworkURL](ilmessagefiltererror-swift.struct/invalidnetworkurl.md): The network request URL given by the `ILMessageFilterExtensionNetworkURL` key in the app extension’s information property list file is either missing or invalid.
- [networkRequestFailed](ilmessagefiltererror-swift.struct/networkrequestfailed.md): The network request failed.
- [networkURLUnauthorized](ilmessagefiltererror-swift.struct/networkurlunauthorized.md): The app extension’s containing app isn’t authorized to allow the app extension to defer network requests to the host specified in its information property list file.
- [redundantNetworkDeferral](ilmessagefiltererror-swift.struct/redundantnetworkdeferral.md): The app extension tried to defer a request to its network service more than once, which isn’t allowed.
- [system](ilmessagefiltererror-swift.struct/system.md): An unspecified system error occurred.

### Error Domain

- [ILMessageFilterErrorDomain](ilmessagefiltererrordomain.md): The error domain for errors associated with the IdentityLookup APIs.

### Type Properties

- [errorDomain](ilmessagefiltererror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ILMessageFilterErrorDomain](ilmessagefiltererrordomain.md): The error domain for errors associated with the IdentityLookup APIs.
