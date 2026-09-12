> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportrenderingsurface](https://developer.apple.com/documentation/appkit/nstextviewportrenderingsurface)

# NSTextViewportRenderingSurface (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A protocol that identifies a view or layer as a drawable element for a text layout fragment.

## Declaration

```swift
protocol NSTextViewportRenderingSurface : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Typically an `NSView`, `UIView`, or `CALayer`.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.

# NSTextViewportRenderingSurface (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A protocol that identifies a view or layer as a drawable element for a text layout fragment.

## Declaration

```objectivec
@protocol NSTextViewportRenderingSurface <NSObject>
```

<a id="overview"></a>

## Overview

Typically an `NSView`, `UIView`, or `CALayer`.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
