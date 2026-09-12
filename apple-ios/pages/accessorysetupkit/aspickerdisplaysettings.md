> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings)

# ASPickerDisplaySettings (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that contains settings to customize the display of the accessory picker

## Declaration

```swift
class ASPickerDisplaySettings
```

## Topics

### Accessing the default instance

- [default](aspickerdisplaysettings/default.md): An empty settings object.

### Customizing the discovery timeout

- [discoveryTimeout](aspickerdisplaysettings/discoverytimeout-swift.property.md): Custom timeout for picker. Default is 30 seconds.
- [ASPickerDisplaySettings.DiscoveryTimeout](aspickerdisplaysettings/discoverytimeout-swift.struct.md): The type used for the accessory picker’s discovery timeout value.

### Customizing picker options

- [options](aspickerdisplaysettings/options-swift.property.md): Custom options for the picker.
- [ASPickerDisplaySettings.Options](aspickerdisplaysettings/options-swift.struct.md): Options offered by the accessory picker.

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

### Customizing picker behavior

- [pickerDisplaySettings](asaccessorysession/pickerdisplaysettings.md): Settings that affect the display of the accessory picker.

# ASPickerDisplaySettings (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that contains settings to customize the display of the accessory picker

## Declaration

```objectivec
@interface ASPickerDisplaySettings : NSObject
```

## Topics

### Accessing the default instance

- [defaultSettings](aspickerdisplaysettings/default.md): An empty settings object.

### Customizing the discovery timeout

- [discoveryTimeout](aspickerdisplaysettings/discoverytimeout-swift.property.md): Custom timeout for picker. Default is 30 seconds.
- [ASPickerDisplaySettingsDiscoveryTimeout](aspickerdisplaysettings/discoverytimeout-swift.struct.md): The type used for the accessory picker’s discovery timeout value.

### Customizing picker options

- [options](aspickerdisplaysettings/options-swift.property.md): Custom options for the picker.
- [ASPickerDisplaySettingsOptions](aspickerdisplaysettings/options-swift.struct.md): Options offered by the accessory picker.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Customizing picker behavior

- [pickerDisplaySettings](asaccessorysession/pickerdisplaysettings.md): Settings that affect the display of the accessory picker.
