> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asaccessory/renameoptions](https://developer.apple.com/documentation/accessorysetupkit/asaccessory/renameoptions)

# ASAccessory.RenameOptions (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Options that affect the behavior of an accessory renaming operation.

## Declaration

```swift
struct RenameOptions
```

## Topics

### Creating an options instance

- [init(rawValue:)](renameoptions/init%28rawvalue_%29.md)

### Options

- [ssid](renameoptions/ssid.md): An option to change an accessory’s SSID along with its display name.

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

### Managing accessories

- [renameAccessory(\_:options:completionHandler:)](../asaccessorysession/renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [removeAccessory(\_:completionHandler:)](../asaccessorysession/removeaccessory%28__completionhandler_%29.md): Removes an accessory.

# ASAccessoryRenameOptions (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

Options that affect the behavior of an accessory renaming operation.

## Declaration

```objectivec
enum ASAccessoryRenameOptions : NSUInteger;
```

## Topics

### Options

- [ASAccessoryRenameSSID](renameoptions/ssid.md): An option to change an accessory’s SSID along with its display name.

## See Also

### Managing accessories

- [renameAccessory:options:completionHandler:](../asaccessorysession/renameaccessory%28__options_completionhandler_%29.md): Displays a view to rename an accessory.
- [removeAccessory:completionHandler:](../asaccessorysession/removeaccessory%28__completionhandler_%29.md): Removes an accessory.
