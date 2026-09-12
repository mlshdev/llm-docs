> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct)

# NEVPNError

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Information about an error encountered while configuring or using a VPN.

## Declaration

```swift
struct NEVPNError
```

## Topics

### Inspecting error properties

- [NEVPNError.Code](nevpnerror-swift.struct/code.md): Codes that indicate the source of an error.

### Error codes

- [configurationDisabled](nevpnerror-swift.struct/configurationdisabled.md): An error code that indicates the VPN configuration associated with the VPN manager isn’t enabled.
- [configurationInvalid](nevpnerror-swift.struct/configurationinvalid.md): An error code that indicates the VPN configuration associated with the VPN manager object is invalid.
- [connectionFailed](nevpnerror-swift.struct/connectionfailed.md): An error code that indicates the connection to the VPN server failed.
- [configurationStale](nevpnerror-swift.struct/configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [configurationReadWriteFailed](nevpnerror-swift.struct/configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [configurationUnknown](nevpnerror-swift.struct/configurationunknown.md): An error code that indicates that unspecified error occurred.

### Type Properties

- [errorDomain](nevpnerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
