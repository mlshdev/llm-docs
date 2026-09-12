> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanel/accessorysummarykey](https://developer.apple.com/documentation/appkit/nsprintpanel/accessorysummarykey)

# NSPrintPanel.AccessorySummaryKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that specify the accessory panel keys.

## Declaration

```swift
struct AccessorySummaryKey
```

<a id="Discussion"></a>

## Discussion

These keys must be included in the dictionaries returned by the [localizedSummaryItems()](../nsprintpanelaccessorizing/localizedsummaryitems%28%29.md) method.

## Topics

### Summary Keys

- [itemName](accessorysummarykey/itemname.md): A key that specifies the name of the accessory panel setting.
- [itemDescription](accessorysummarykey/itemdescription.md): A key that identfies the current value of the accessory panel setting.

### Initializers

- [init(rawValue:)](accessorysummarykey/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to Being Loaded from a Nib File

- [localizedSummaryItems()](../nsprintpanelaccessorizing/localizedsummaryitems%28%29.md): Returns an array of dictionaries containing the localized user setting summary strings.
- [keyPathsForValuesAffectingPreview()](../nsprintpanelaccessorizing/keypathsforvaluesaffectingpreview%28%29.md): Returns a set of strings identifying the key paths for any properties that might affect the built-in print preview.

# NSPrintPanelAccessorySummaryKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that specify the accessory panel keys.

## Declaration

```objectivec
typedef NSString * NSPrintPanelAccessorySummaryKey;
```

<a id="Discussion"></a>

## Discussion

These keys must be included in the dictionaries returned by the [localizedSummaryItems](../nsprintpanelaccessorizing/localizedsummaryitems%28%29.md) method.

## Topics

### Summary Keys

- [NSPrintPanelAccessorySummaryItemNameKey](accessorysummarykey/itemname.md): A key that specifies the name of the accessory panel setting.
- [NSPrintPanelAccessorySummaryItemDescriptionKey](accessorysummarykey/itemdescription.md): A key that identfies the current value of the accessory panel setting.

## See Also

### Responding to Being Loaded from a Nib File

- [localizedSummaryItems](../nsprintpanelaccessorizing/localizedsummaryitems%28%29.md): Returns an array of dictionaries containing the localized user setting summary strings.
- [keyPathsForValuesAffectingPreview](../nsprintpanelaccessorizing/keypathsforvaluesaffectingpreview%28%29.md): Returns a set of strings identifying the key paths for any properties that might affect the built-in print preview.
