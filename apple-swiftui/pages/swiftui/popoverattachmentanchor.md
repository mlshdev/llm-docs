> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/popoverattachmentanchor](https://developer.apple.com/documentation/swiftui/popoverattachmentanchor)

# PopoverAttachmentAnchor

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An attachment anchor for a popover.

## Declaration

```swift
enum PopoverAttachmentAnchor
```

## Topics

### Getting attachment anchors

- [PopoverAttachmentAnchor.point(\_:)](popoverattachmentanchor/point%28__%29.md): The anchor point for the popover expressed as a unit point that describes possible alignments relative to a SwiftUI view.
- [PopoverAttachmentAnchor.rect(\_:)](popoverattachmentanchor/rect%28__%29.md): The anchor point for the popover relative to the source’s frame.

## See Also

### Showing a sheet, cover, or popover

- [sheet(isPresented:onDismiss:content:)](view/sheet%28ispresented_ondismiss_content_%29.md): Presents a sheet when a binding to a Boolean value that you provide is true.
- [sheet(item:onDismiss:content:)](view/sheet%28item_ondismiss_content_%29.md): Presents a sheet using the given item as a data source for the sheet’s content.
- [fullScreenCover(isPresented:onDismiss:content:)](view/fullscreencover%28ispresented_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible when binding to a Boolean value you provide is true.
- [fullScreenCover(item:onDismiss:content:)](view/fullscreencover%28item_ondismiss_content_%29.md): Presents a modal view that covers as much of the screen as possible using the binding you provide as a data source for the sheet’s content.
- [popover(item:attachmentAnchor:arrowEdge:content:)](view/popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](view/popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
