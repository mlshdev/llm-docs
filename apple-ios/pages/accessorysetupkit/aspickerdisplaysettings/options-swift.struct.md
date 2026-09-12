> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/options-swift.struct](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/options-swift.struct)

# ASPickerDisplaySettings.Options (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Options offered by the accessory picker.

## Declaration

```swift
struct Options
```

## Topics

### Working with filter options

- [filterDiscoveryResults](options-swift.struct/filterdiscoveryresults.md): An option to pass discovered accessories to the app for more custom filtering, before they’re displayed in the picker for selection.

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Customizing picker options

- [options](options-swift.property.md): Custom options for the picker.

# ASPickerDisplaySettingsOptions (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

Options offered by the accessory picker.

## Declaration

```objectivec
enum ASPickerDisplaySettingsOptions : NSUInteger;
```

## Topics

### Working with filter options

- [ASPickerDisplaySettingsOptionFilterDiscoveryResults](options-swift.struct/filterdiscoveryresults.md): An option to pass discovered accessories to the app for more custom filtering, before they’re displayed in the picker for selection.

## See Also

### Customizing picker options

- [options](options-swift.property.md): Custom options for the picker.
