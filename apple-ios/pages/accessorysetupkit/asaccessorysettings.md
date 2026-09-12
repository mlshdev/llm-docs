> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessorysettings](https://developer.apple.com/documentation/accessorysetupkit/asaccessorysettings)

# ASAccessorySettings (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Properties of an accessory.

## Declaration

```swift
class ASAccessorySettings
```

## Topics

### Applying default settings

- [default](asaccessorysettings/default.md): An empty settings object.

### Inspecting accessory settings

- [ssid](asaccessorysettings/ssid.md): A hotspot identifier that clients can use to connect to an accessory’s hotspot.
- [bluetoothTransportBridgingIdentifier](asaccessorysettings/bluetoothtransportbridgingidentifier.md): A 6-byte identifier for bridging classic transport profiles.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing authorization

- [finishAuthorization(for:settings:completionHandler:)](asaccessorysession/finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [failAuthorization(for:completionHandler:)](asaccessorysession/failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization(for:descriptor:completionHandler:)](asaccessorysession/updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.

# ASAccessorySettings (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Properties of an accessory.

## Declaration

```objectivec
@interface ASAccessorySettings : NSObject
```

## Topics

### Applying default settings

- [defaultSettings](asaccessorysettings/default.md): An empty settings object.

### Inspecting accessory settings

- [SSID](asaccessorysettings/ssid.md): A hotspot identifier that clients can use to connect to an accessory’s hotspot.
- [bluetoothTransportBridgingIdentifier](asaccessorysettings/bluetoothtransportbridgingidentifier.md): A 6-byte identifier for bridging classic transport profiles.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Managing authorization

- [finishAuthorization:settings:completionHandler:](asaccessorysession/finishauthorization%28for_settings_completionhandler_%29.md): Finish authorization of a partially-setup accessory.
- [failAuthorization:completionHandler:](asaccessorysession/failauthorization%28for_completionhandler_%29.md): End authorization of a partially-configured accessory as a failure.
- [updateAuthorization:descriptor:completionHandler:](asaccessorysession/updateauthorization%28for_descriptor_completionhandler_%29.md): Displays a view to upgrade an accessory with additional technology permissions.
