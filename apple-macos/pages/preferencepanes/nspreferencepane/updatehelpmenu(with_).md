> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepane/updatehelpmenu(with:)](https://developer.apple.com/documentation/preferencepanes/nspreferencepane/updatehelpmenu(with:))

# updateHelpMenu(with:) (Swift)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Updates the help menu.

## Declaration

```swift
func updateHelpMenu(with inArrayOfMenuItems: [[String : String]]?)
```

<a id="Discussion"></a>

## Discussion

Call this method if you need to update help menu items dynamically. If you have static help menu items, you should not use this method. Specify them under the `NSPrefPanelHelpAnchors` key in the bundle’s `Info.plist` instead.

The array contains dictionaries with two keys. Use [NSPreferencePane](../nspreferencepane.md) for the help menu item title, and [NSPreferencePane](../nspreferencepane.md) for the anchor reference for `AHLookupAnchor`.

# updateHelpMenuWithArray: (Objective-C)

**Framework:** Preference Panes  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Updates the help menu.

## Declaration

```objectivec
- (void) updateHelpMenuWithArray:(NSArray<NSDictionary<NSString *,NSString *> *> *) inArrayOfMenuItems;
```

<a id="Discussion"></a>

## Discussion

Call this method if you need to update help menu items dynamically. If you have static help menu items, you should not use this method. Specify them under the `NSPrefPanelHelpAnchors` key in the bundle’s `Info.plist` instead.

The array contains dictionaries with two keys. Use [NSPreferencePane](../nspreferencepane.md) for the help menu item title, and [NSPreferencePane](../nspreferencepane.md) for the anchor reference for `AHLookupAnchor`.
