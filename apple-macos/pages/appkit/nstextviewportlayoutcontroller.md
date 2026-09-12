> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontroller](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontroller)

# NSTextViewportLayoutController (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

Manages the layout process inside the viewport interacting with its delegate.

## Declaration

```swift
class NSTextViewportLayoutController
```

<a id="overview"></a>

## Overview

A viewport is a rectangular area within a flipped coordinate system expanding along the y-axis. With text contents, lines advance expanding the view in the current writing direction. The viewport defines the active area where the framework lays out text fragments. In most cases, the area corresponds to the user visible area with an additional over-scroll region.

## Topics

### Creating a viewport layout controller

- [init(textLayoutManager:)](nstextviewportlayoutcontroller/init%28textlayoutmanager_%29.md): Creates a new instance with the text layout manager you provide.

### Accessing the layout manager

- [textLayoutManager](nstextviewportlayoutcontroller/textlayoutmanager.md): Returns the text layout manager for this viewport layout controller.

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.
- [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.

### Accessing the viewport characteristics

- [viewportBounds](nstextviewportlayoutcontroller/viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](nstextviewportlayoutcontroller/viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewport(byVerticalOffset:)](nstextviewportlayoutcontroller/adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport()](nstextviewportlayoutcontroller/layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewport(to:)](nstextviewportlayoutcontroller/relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.

# NSTextViewportLayoutController (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

Manages the layout process inside the viewport interacting with its delegate.

## Declaration

```objectivec
@interface NSTextViewportLayoutController : NSObject
```

<a id="overview"></a>

## Overview

A viewport is a rectangular area within a flipped coordinate system expanding along the y-axis. With text contents, lines advance expanding the view in the current writing direction. The viewport defines the active area where the framework lays out text fragments. In most cases, the area corresponds to the user visible area with an additional over-scroll region.

## Topics

### Creating a viewport layout controller

- [initWithTextLayoutManager:](nstextviewportlayoutcontroller/init%28textlayoutmanager_%29.md): Creates a new instance with the text layout manager you provide.

### Accessing the layout manager

- [textLayoutManager](nstextviewportlayoutcontroller/textlayoutmanager.md): Returns the text layout manager for this viewport layout controller.

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.
- [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md): Optional methods that delegates implement to respond to viewport layout changes.

### Accessing the viewport characteristics

- [viewportBounds](nstextviewportlayoutcontroller/viewportbounds.md): Returns the visible bounds of the view, plus the overdraw area.
- [viewportRange](nstextviewportlayoutcontroller/viewportrange.md): Returns the text range of the current viewport layout.
- [adjustViewportByVerticalOffset:](nstextviewportlayoutcontroller/adjustviewport%28byverticaloffset_%29.md): Adjusts the viewport rect by the specified offset if needed.
- [layoutViewport](nstextviewportlayoutcontroller/layoutviewport%28%29.md): Performs layout in the viewport.
- [relocateViewportToTextLocation:](nstextviewportlayoutcontroller/relocateviewport%28to_%29.md): Relocates the viewport to the location you specify.

### Instance Methods

- [renderingSurfaceForKey:](nstextviewportlayoutcontroller/renderingsurfaceforkey_.md): Returns a rendering surface corresponding to the specified key.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
