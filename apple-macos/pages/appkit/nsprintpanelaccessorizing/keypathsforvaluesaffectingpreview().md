> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintpanelaccessorizing/keypathsforvaluesaffectingpreview()](https://developer.apple.com/documentation/appkit/nsprintpanelaccessorizing/keypathsforvaluesaffectingpreview())

# keyPathsForValuesAffectingPreview() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a set of strings identifying the key paths for any properties that might affect the built-in print preview.

## Declaration

```swift
@MainActor optional func keyPathsForValuesAffectingPreview() -> Set<String>
```

<a id="return-value"></a>

## Return Value

A set of `NSString` objects identifying one or more key paths. Only key paths for properties that might affect the contents of the print preview should be returned.

<a id="Discussion"></a>

## Discussion

If an accessory view modifies printing-related properties that are used by the print preview, you should implement this method to return the key paths for those properties. For example, if you write an accessory view that lets the user change the left and right document margins in the current `NSPrintInfo` object, you would return the following key paths: `representedObject.leftMargin`, `representedObject.rightMargin`. (The `NSPrintInfo` object is the represented object of the accessory controller.)

Implementation of this method is optional. You do not need to implement this method if you are not using the `NSPrintPanel` object’s built-in preview facilities. If you do use these facilities, however, you should implement this method.

## See Also

### Responding to Being Loaded from a Nib File

- [localizedSummaryItems()](localizedsummaryitems%28%29.md): Returns an array of dictionaries containing the localized user setting summary strings.
- [NSPrintPanel.AccessorySummaryKey](../nsprintpanel/accessorysummarykey.md): Constants that specify the accessory panel keys.

# keyPathsForValuesAffectingPreview (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a set of strings identifying the key paths for any properties that might affect the built-in print preview.

## Declaration

```objectivec
- (NSSet<NSString *> *) keyPathsForValuesAffectingPreview;
```

<a id="return-value"></a>

## Return Value

A set of `NSString` objects identifying one or more key paths. Only key paths for properties that might affect the contents of the print preview should be returned.

<a id="Discussion"></a>

## Discussion

If an accessory view modifies printing-related properties that are used by the print preview, you should implement this method to return the key paths for those properties. For example, if you write an accessory view that lets the user change the left and right document margins in the current `NSPrintInfo` object, you would return the following key paths: `representedObject.leftMargin`, `representedObject.rightMargin`. (The `NSPrintInfo` object is the represented object of the accessory controller.)

Implementation of this method is optional. You do not need to implement this method if you are not using the `NSPrintPanel` object’s built-in preview facilities. If you do use these facilities, however, you should implement this method.

## See Also

### Responding to Being Loaded from a Nib File

- [localizedSummaryItems](localizedsummaryitems%28%29.md): Returns an array of dictionaries containing the localized user setting summary strings.
- [NSPrintPanelAccessorySummaryKey](../nsprintpanel/accessorysummarykey.md): Constants that specify the accessory panel keys.
