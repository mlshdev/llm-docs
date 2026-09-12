> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplayitem/renameoptions](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplayitem/renameoptions)

# renameOptions (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Options to allow renaming a matched accessory.

## Declaration

```swift
var renameOptions: ASAccessory.RenameOptions { get set }
```

<a id="discussion"></a>

## Discussion

To permit renaming, include [rename](setupoptions-swift.struct/rename.md) in the [setupOptions](setupoptions-swift.property.md)

## See Also

### Customizing setup options

- [setupOptions](setupoptions-swift.property.md): Custom setup options for the accessory.
- [ASPickerDisplayItem.SetupOptions](setupoptions-swift.struct.md): Setup options offered by the accessory picker.
- [ASAccessory.RenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.

# renameOptions (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Options to allow renaming a matched accessory.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) ASAccessoryRenameOptions renameOptions;
```

<a id="discussion"></a>

## Discussion

To permit renaming, include [ASPickerDisplayItemSetupRename](setupoptions-swift.struct/rename.md) in the [setupOptions](setupoptions-swift.property.md)

## See Also

### Customizing setup options

- [setupOptions](setupoptions-swift.property.md): Custom setup options for the accessory.
- [ASPickerDisplayItemSetupOptions](setupoptions-swift.struct.md): Setup options offered by the accessory picker.
- [ASAccessoryRenameOptions](../asaccessory/renameoptions.md): Options that affect the behavior of an accessory renaming operation.
