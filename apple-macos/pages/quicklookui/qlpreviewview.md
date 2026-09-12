> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview](https://developer.apple.com/documentation/quicklookui/qlpreviewview)

# QLPreviewView (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 10.6+

A Quick Look preview of an item that you can embed into your view hierarchy.

## Declaration

```swift
class QLPreviewView
```

## Topics

### Creating a Preview View

- [init(frame:style:)](qlpreviewview/init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [init(frame:)](qlpreviewview/init%28frame_%29.md): Creates a preview view with the provided frame.
- [QLPreviewViewStyle](qlpreviewviewstyle.md): Styles for a Preview View.

### Displaying a Preview

- [previewItem](qlpreviewview/previewitem.md): The item to preview.
- [refreshPreviewItem()](qlpreviewview/refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](qlpreviewview/displaystate.md): The current display state of the [previewItem](qlpreviewview/previewitem.md).
- [autostarts](qlpreviewview/autostarts.md): A Boolean value that determines whether the preview starts automatically.

### Closing a Preview

- [shouldCloseWithWindow](qlpreviewview/shouldclosewithwindow.md): A Boolean value that determines whether the preview should close when its window closes.
- [close()](qlpreviewview/close%28%29.md): Closes the view, releasing the current preview item.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

# QLPreviewView (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 10.6+

A Quick Look preview of an item that you can embed into your view hierarchy.

## Declaration

```objectivec
@interface QLPreviewView : NSView
```

## Topics

### Creating a Preview View

- [initWithFrame:style:](qlpreviewview/init%28frame_style_%29.md): Creates a preview view with the provided frame and style.
- [initWithFrame:](qlpreviewview/init%28frame_%29.md): Creates a preview view with the provided frame.
- [QLPreviewViewStyle](qlpreviewviewstyle.md): Styles for a Preview View.

### Displaying a Preview

- [previewItem](qlpreviewview/previewitem.md): The item to preview.
- [refreshPreviewItem](qlpreviewview/refreshpreviewitem%28%29.md): Updates the preview to display the currently previewed item.
- [displayState](qlpreviewview/displaystate.md): The current display state of the [previewItem](qlpreviewview/previewitem.md).
- [autostarts](qlpreviewview/autostarts.md): A Boolean value that determines whether the preview starts automatically.

### Closing a Preview

- [shouldCloseWithWindow](qlpreviewview/shouldclosewithwindow.md): A Boolean value that determines whether the preview should close when its window closes.
- [close](qlpreviewview/close%28%29.md): Closes the view, releasing the current preview item.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Previews

- [QLPreviewPanel](qlpreviewpanel.md): A class that implements the Quick Look preview panel to display a preview of a list of items.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.
