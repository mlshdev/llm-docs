> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/quicklookpreviewableitems(inranges:)](https://developer.apple.com/documentation/appkit/nstextview/quicklookpreviewableitems(inranges:))

# quickLookPreviewableItems(inRanges:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

## Declaration

```swift
func quickLookPreviewableItems(inRanges ranges: [NSValue]) -> [any QLPreviewItem]
```

## Parameters

- `ranges`: An array of ranges.

<a id="return-value"></a>

## Return Value

Returns an array of document URLs for text attachment content, if available.

<a id="Discussion"></a>

## Discussion

Each preview item must conform to the [QLPreviewItem](../../quicklookui/qlpreviewitem.md) protocol.

## See Also

### Supporting QuickLook

- [updateQuickLookPreviewPanel()](updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [toggleQuickLookPreviewPanel(\_:)](togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.

# quickLookPreviewableItemsInRanges: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

## Declaration

```objectivec
- (NSArray<id<QLPreviewItem>> *) quickLookPreviewableItemsInRanges:(NSArray<NSValue *> *) ranges;
```

## Parameters

- `ranges`: An array of ranges.

<a id="return-value"></a>

## Return Value

Returns an array of document URLs for text attachment content, if available.

<a id="Discussion"></a>

## Discussion

Each preview item must conform to the [QLPreviewItem](../../quicklookui/qlpreviewitem.md) protocol.

## See Also

### Supporting QuickLook

- [updateQuickLookPreviewPanel](updatequicklookpreviewpanel%28%29.md): Notifies the QuickLook panel that an update may be required.
- [toggleQuickLookPreviewPanel:](togglequicklookpreviewpanel%28__%29.md): An action message that toggles the visibility state of the Quick Look preview panel.
