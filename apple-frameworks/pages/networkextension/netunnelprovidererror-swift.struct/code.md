> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidererror-swift.struct/code](https://developer.apple.com/documentation/networkextension/netunnelprovidererror-swift.struct/code)

# NETunnelProviderError.Code (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Error codes that the tunnel provider declares.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [NETunnelProviderError.Code.networkSettingsInvalid](code/networksettingsinvalid.md): The provided tunnel network settings are invalid.
- [NETunnelProviderError.Code.networkSettingsCanceled](code/networksettingscanceled.md): The request to set or clear the tunnel network settings was canceled.
- [NETunnelProviderError.Code.networkSettingsFailed](code/networksettingsfailed.md): The request to set or clear the tunnel network settings failed.

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

# NETunnelProviderError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Error codes that the tunnel provider declares.

## Declaration

```objectivec
enum NETunnelProviderError : NSInteger;
```

## Topics

### Error codes

- [NETunnelProviderErrorNetworkSettingsInvalid](code/networksettingsinvalid.md): The provided tunnel network settings are invalid.
- [NETunnelProviderErrorNetworkSettingsCanceled](code/networksettingscanceled.md): The request to set or clear the tunnel network settings was canceled.
- [NETunnelProviderErrorNetworkSettingsFailed](code/networksettingsfailed.md): The request to set or clear the tunnel network settings failed.
