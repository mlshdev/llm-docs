> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel)

# QLPreviewPanel (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 10.6+

A class that implements the Quick Look preview panel to display a preview of a list of items.

## Declaration

```swift
class QLPreviewPanel
```

<a id="overview"></a>

## Overview

Every application has a single shared instance of [QLPreviewPanel](qlpreviewpanel.md) accessible through [shared()](qlpreviewpanel/shared%28%29.md). The preview panel follows the responder chain and adapts to the first responder willing to control it. A preview panel controller provides the content through methods defined in the [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md) protocol.

You can’t subclass [QLPreviewPanel](qlpreviewpanel.md); you can, however, customize its behavior using a [delegate](qlpreviewpanel/delegate.md). See the [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md) protocol for the methods to customize a preview panel’s behavior.

<a id="Take-control-of-the-preview-panel"></a>

### Take control of the preview panel

A preview panel has no controller until an object in the responder chain accepts control of it. The panel sends `acceptsPreviewPanelControl(_:)` to each object in the responder chain, and the first object to return `true` becomes the panel’s controller. Implement these methods in your window controller or delegate.

A controlling object also implements `beginPreviewPanelControl(_:)` and `endPreviewPanelControl(_:)`. Set up the panel’s data source and delegate in `beginPreviewPanelControl(_:)`, and tear them down in `endPreviewPanelControl(_:)`. The panel sends all three messages itself, so never call them directly.

> **Important**

> Don’t modify a preview panel’s state unless you’re controlling it.

## Topics

### Accessing the Shared Panel

- [shared()](qlpreviewpanel/shared%28%29.md): Returns the shared Quick Look preview panel instance.
- [sharedPreviewPanelExists()](qlpreviewpanel/sharedpreviewpanelexists%28%29.md): Returns a Boolean value that indicates whether the system has created a shared Quick Look preview panel.

### Accessing the Preview Panel Controller

- [currentController](qlpreviewpanel/currentcontroller.md): The current first responder accepting to control the preview panel.
- [updateController()](qlpreviewpanel/updatecontroller%28%29.md): Asks the preview panel to update its current controller.

### Managing the Preview Items

- [dataSource](qlpreviewpanel/datasource.md): The preview panel data source.
- [reloadData()](qlpreviewpanel/reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem()](qlpreviewpanel/refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](qlpreviewpanel/currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](qlpreviewpanel/currentpreviewitem.md): The currently previewed item.
- [displayState](qlpreviewpanel/displaystate.md): The preview panel’s display state.

### The Panel’s Delegate

- [delegate](qlpreviewpanel/delegate.md): The delegate object that controls the preview panel’s behavior.

### Managing Full Screen Mode

- [enterFullScreenMode(\_:withOptions:)](qlpreviewpanel/enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [exitFullScreenMode(options:)](qlpreviewpanel/exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.
- [isInFullScreenMode](qlpreviewpanel/isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

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
- [NSMenuItemValidation](../appkit/nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](../appkit/nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Previews

- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.

# QLPreviewPanel (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 10.6+

A class that implements the Quick Look preview panel to display a preview of a list of items.

## Declaration

```objectivec
@interface QLPreviewPanel : NSPanel
```

<a id="overview"></a>

## Overview

Every application has a single shared instance of [QLPreviewPanel](qlpreviewpanel.md) accessible through [sharedPreviewPanel](qlpreviewpanel/shared%28%29.md). The preview panel follows the responder chain and adapts to the first responder willing to control it. A preview panel controller provides the content through methods defined in the [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md) protocol.

You can’t subclass [QLPreviewPanel](qlpreviewpanel.md); you can, however, customize its behavior using a [delegate](qlpreviewpanel/delegate.md). See the [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md) protocol for the methods to customize a preview panel’s behavior.

<a id="Take-control-of-the-preview-panel"></a>

### Take control of the preview panel

A preview panel has no controller until an object in the responder chain accepts control of it. The panel sends `acceptsPreviewPanelControl(_:)` to each object in the responder chain, and the first object to return `true` becomes the panel’s controller. Implement these methods in your window controller or delegate.

A controlling object also implements `beginPreviewPanelControl(_:)` and `endPreviewPanelControl(_:)`. Set up the panel’s data source and delegate in `beginPreviewPanelControl(_:)`, and tear them down in `endPreviewPanelControl(_:)`. The panel sends all three messages itself, so never call them directly.

> **Important**

> Don’t modify a preview panel’s state unless you’re controlling it.

## Topics

### Accessing the Shared Panel

- [sharedPreviewPanel](qlpreviewpanel/shared%28%29.md): Returns the shared Quick Look preview panel instance.
- [sharedPreviewPanelExists](qlpreviewpanel/sharedpreviewpanelexists%28%29.md): Returns a Boolean value that indicates whether the system has created a shared Quick Look preview panel.

### Accessing the Preview Panel Controller

- [currentController](qlpreviewpanel/currentcontroller.md): The current first responder accepting to control the preview panel.
- [updateController](qlpreviewpanel/updatecontroller%28%29.md): Asks the preview panel to update its current controller.

### Managing the Preview Items

- [dataSource](qlpreviewpanel/datasource.md): The preview panel data source.
- [reloadData](qlpreviewpanel/reloaddata%28%29.md): Asks the preview panel to reload its data from its data source.
- [refreshCurrentPreviewItem](qlpreviewpanel/refreshcurrentpreviewitem%28%29.md): Asks the preview panel to recompute the preview of the current preview item.
- [currentPreviewItemIndex](qlpreviewpanel/currentpreviewitemindex.md): The index of the current preview item.
- [currentPreviewItem](qlpreviewpanel/currentpreviewitem.md): The currently previewed item.
- [displayState](qlpreviewpanel/displaystate.md): The preview panel’s display state.

### The Panel’s Delegate

- [delegate](qlpreviewpanel/delegate.md): The delegate object that controls the preview panel’s behavior.

### Managing Full Screen Mode

- [enterFullScreenMode:withOptions:](qlpreviewpanel/enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [exitFullScreenModeWithOptions:](qlpreviewpanel/exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.
- [inFullScreenMode](qlpreviewpanel/isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.

## Relationships

### Inherits From

- [NSPanel](../appkit/nspanel.md)

## See Also

### Previews

- [QLPreviewView](qlpreviewview.md): A Quick Look preview of an item that you can embed into your view hierarchy.
- [QLPreviewItem](qlpreviewitem.md): A protocol that defines a set of properties you implement to make a preview of your app’s content.
- [QLPreviewPanelDataSource](qlpreviewpaneldatasource.md): A protocol that the Quick Look preview panel uses to access the contents of its data source object.
- [QLPreviewPanelDelegate](qlpreviewpaneldelegate.md): A protocol for the delegate of the Quick Look preview panel.
- [QLPreviewItemLoadingBlock](qlpreviewitemloadingblock.md): Deprecated. A type that defines a block used to load a Quick Look preview item.
