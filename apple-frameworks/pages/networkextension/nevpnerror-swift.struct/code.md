> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/code](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/code)

# NEVPNError.Code (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Codes that indicate the source of an error.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [NEVPNError.Code.configurationDisabled](code/configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNError.Code.configurationInvalid](code/configurationinvalid.md): An error code indicating the VPN configuration associated with the VPN manager object is invalid.
- [NEVPNError.Code.connectionFailed](code/connectionfailed.md): The connection to the VPN server failed.
- [NEVPNError.Code.configurationStale](code/configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [NEVPNError.Code.configurationReadWriteFailed](code/configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNError.Code.configurationUnknown](code/configurationunknown.md): An error code that indicates that unspecified error occurred.

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

# NEVPNError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Codes that indicate the source of an error.

## Declaration

```objectivec
enum NEVPNError : NSInteger;
```

## Topics

### Error codes

- [NEVPNErrorConfigurationDisabled](code/configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNErrorConfigurationInvalid](code/configurationinvalid.md): An error code indicating the VPN configuration associated with the VPN manager object is invalid.
- [NEVPNErrorConnectionFailed](code/connectionfailed.md): The connection to the VPN server failed.
- [NEVPNErrorConfigurationStale](code/configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [NEVPNErrorConfigurationReadWriteFailed](code/configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNErrorConfigurationUnknown](code/configurationunknown.md): An error code that indicates that unspecified error occurred.
