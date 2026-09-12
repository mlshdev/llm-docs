> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/updatequicklookpreviewpanel()](https://developer.apple.com/documentation/appkit/nstextview/updatequicklookpreviewpanel())

# updateQuickLookPreviewPanel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the QuickLook panel that an update may be required.

## Declaration

```swift
func updateQuickLookPreviewPanel()
```

<a id="Discussion"></a>

## Discussion

Notifies the  [QLPreviewPanel](../../quicklookui/qlpreviewpanel.md) class for possible status changes with the data source or controller.  Typically invoked in response to selection changes.

## See Also

### Supporting QuickLook

- [toggleQuickLookPreviewPanel(\_:)](togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.
- [quickLookPreviewableItems(inRanges:)](quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

# updateQuickLookPreviewPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Notifies the QuickLook panel that an update may be required.

## Declaration

```objectivec
- (void) updateQuickLookPreviewPanel;
```

<a id="Discussion"></a>

## Discussion

Notifies the  [QLPreviewPanel](../../quicklookui/qlpreviewpanel.md) class for possible status changes with the data source or controller.  Typically invoked in response to selection changes.

## See Also

### Supporting QuickLook

- [toggleQuickLookPreviewPanel:](togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.
- [quickLookPreviewableItemsInRanges:](quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.
