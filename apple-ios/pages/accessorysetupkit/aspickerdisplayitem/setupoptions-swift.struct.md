> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplayitem/setupoptions-swift.struct](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplayitem/setupoptions-swift.struct)

# ASPickerDisplayItem.SetupOptions (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Setup options offered by the accessory picker.

## Declaration

```swift
struct SetupOptions
```

## Topics

### Creating an options instance

- [init(rawValue:)](setupoptions-swift.struct/init%28rawvalue_%29.md)

### Options

- [rename](setupoptions-swift.struct/rename.md): An option to ask the person using the app to rename the accessory.
- [confirmAuthorization](setupoptions-swift.struct/confirmauthorization.md): An option to require the app to finish accessory authorization before showing the setup view.
- [finishInApp](setupoptions-swift.struct/finishinapp.md): An option to ask the person setting up the accessory to finish additional setup in the app after the accessory is authorized.

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

### Customizing setup options

- [setupOptions](setupoptions-swift.property.md): Custom setup options for the accessory.
- [renameOptions](renameoptions.md): Options to allow renaming a matched accessory.
- [ASAccessory.RenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.

# ASPickerDisplayItemSetupOptions (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

Setup options offered by the accessory picker.

## Declaration

```objectivec
enum ASPickerDisplayItemSetupOptions : NSUInteger;
```

## Topics

### Options

- [ASPickerDisplayItemSetupRename](setupoptions-swift.struct/rename.md): An option to ask the person using the app to rename the accessory.
- [ASPickerDisplayItemSetupConfirmAuthorization](setupoptions-swift.struct/confirmauthorization.md): An option to require the app to finish accessory authorization before showing the setup view.
- [ASPickerDisplayItemSetupFinishInApp](setupoptions-swift.struct/finishinapp.md): An option to ask the person setting up the accessory to finish additional setup in the app after the accessory is authorized.

## See Also

### Customizing setup options

- [setupOptions](setupoptions-swift.property.md): Custom setup options for the accessory.
- [renameOptions](renameoptions.md): Options to allow renaming a matched accessory.
- [ASAccessoryRenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
