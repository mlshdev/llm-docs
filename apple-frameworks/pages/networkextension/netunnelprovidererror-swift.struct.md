> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidererror-swift.struct](https://developer.apple.com/documentation/networkextension/netunnelprovidererror-swift.struct)

# NETunnelProviderError

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error that the tunnel provider encounters.

## Declaration

```swift
struct NETunnelProviderError
```

## Topics

### Error information

- [NETunnelProviderError.Code](netunnelprovidererror-swift.struct/code.md): Error codes that the tunnel provider declares.

### Error codes

- [networkSettingsInvalid](netunnelprovidererror-swift.struct/networksettingsinvalid.md): The provided tunnel network settings are invalid.
- [networkSettingsCanceled](netunnelprovidererror-swift.struct/networksettingscanceled.md): The request to set or clear the tunnel network settings was canceled.
- [networkSettingsFailed](netunnelprovidererror-swift.struct/networksettingsfailed.md): The request to set or clear the tunnel network settings failed.

### Type Properties

- [errorDomain](netunnelprovidererror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
