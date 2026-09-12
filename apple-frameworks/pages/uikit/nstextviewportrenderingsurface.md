> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportrenderingsurface](https://developer.apple.com/documentation/uikit/nstextviewportrenderingsurface)

# NSTextViewportRenderingSurface (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that identifies a view or layer as a drawable element for a text layout fragment.

## Declaration

```swift
protocol NSTextViewportRenderingSurface : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Conform a view or layer to `NSTextViewportRenderingSurface` to associate it with an [NSTextLayoutFragment](nstextlayoutfragment.md) during viewport layout. TextKit uses this to track, configure, and reuse visual elements across layout passes.

This protocol has no required methods. It gives TextKit a way to identify and manage the visual elements your delegate provides through [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md).

<a id="Implement-a-rendering-surface"></a>

### Implement a rendering surface

You can conform any `UIView`, `NSView`, or `CALayer` subclass to this protocol:

```swift
class TextFragmentView: UIView, NSTextViewportRenderingSurface {
    var layoutFragment: NSTextLayoutFragment?
}
```

Return instances from [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md) so TextKit can manage them during layout.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.

# NSTextViewportRenderingSurface (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that identifies a view or layer as a drawable element for a text layout fragment.

## Declaration

```objectivec
@protocol NSTextViewportRenderingSurface <NSObject>
```

<a id="overview"></a>

## Overview

Conform a view or layer to `NSTextViewportRenderingSurface` to associate it with an [NSTextLayoutFragment](nstextlayoutfragment.md) during viewport layout. TextKit uses this to track, configure, and reuse visual elements across layout passes.

This protocol has no required methods. It gives TextKit a way to identify and manage the visual elements your delegate provides through [NSTextViewportLayoutControllerDelegate](nstextviewportlayoutcontrollerdelegate.md).

<a id="Implement-a-rendering-surface"></a>

### Implement a rendering surface

You can conform any `UIView`, `NSView`, or `CALayer` subclass to this protocol:

```swift
class TextFragmentView: UIView, NSTextViewportRenderingSurface {
    var layoutFragment: NSTextLayoutFragment?
}
```

Return instances from [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md) so TextKit can manage them during layout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Layout

- [Using TextKit 2 to interact with text](using-textkit-2-to-interact-with-text.md): Interact with text by managing text selection and inserting custom text elements.
- [Display text with a custom layout](display-text-with-a-custom-layout.md): Lay out text in a custom-shaped container and apply glyph substitutions.
- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextLineFragment](nstextlinefragment.md): A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
