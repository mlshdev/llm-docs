> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/togglequicklookpreviewpanel(_:)](https://developer.apple.com/documentation/appkit/nstextview/togglequicklookpreviewpanel(_:))

# toggleQuickLookPreviewPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

An action message that toggles the visibility state of the Quick Look preview panel.

## Declaration

```swift
@IBAction func toggleQuickLookPreviewPanel(_ sender: Any?)
```

## Parameters

- `sender`: The message sender.

<a id="Discussion"></a>

## Discussion

This action message toggles the visibility state of the Quick Look preview panel if the receiver is the current Quick Look controller.

## See Also

### Supporting QuickLook

- [updateQuickLookPreviewPanel()](updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [quickLookPreviewableItems(inRanges:)](quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

# toggleQuickLookPreviewPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

An action message that toggles the visibility state of the Quick Look preview panel.

## Declaration

```objectivec
- (void) toggleQuickLookPreviewPanel:(id) sender;
```

## Parameters

- `sender`: The message sender.

<a id="Discussion"></a>

## Discussion

This action message toggles the visibility state of the Quick Look preview panel if the receiver is the current Quick Look controller.

## See Also

### Supporting QuickLook

- [updateQuickLookPreviewPanel](updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [quickLookPreviewableItemsInRanges:](quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.
