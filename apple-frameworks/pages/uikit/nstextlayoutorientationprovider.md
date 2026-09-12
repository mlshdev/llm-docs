> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutorientationprovider](https://developer.apple.com/documentation/uikit/nstextlayoutorientationprovider)

# NSTextLayoutOrientationProvider (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods that define the orientation of text for an object.

## Declaration

```swift
protocol NSTextLayoutOrientationProvider
```

<a id="overview"></a>

## Overview

In macOS, the [NSTextContainer](nstextcontainer.md) and [NSTextView](https://developer.apple.com/documentation/appkit/nstextview) classes adopt this protocol; in iOS, only the [NSTextContainer](nstextcontainer.md) class implements it. An [NSTextContainer](nstextcontainer.md) object returns the value from its associated text view when present; otherwise, it returns [NSLayoutManager.TextLayoutOrientation.horizontal](nslayoutmanager/textlayoutorientation/horizontal.md) by default. If you define a custom [NSTextContainer](nstextcontainer.md) object, you can override this method and return [NSLayoutManager.TextLayoutOrientation.vertical](nslayoutmanager/textlayoutorientation/vertical.md) to support laying out text vertically.

## Topics

### Getting layout orientation

- [layoutOrientation](nstextlayoutorientationprovider/layoutorientation.md): The default layout orientation.
- [NSLayoutManager.TextLayoutOrientation](nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

## Relationships

### Conforming Types

- [NSTextContainer](nstextcontainer.md)

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
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.

# NSTextLayoutOrientationProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A set of methods that define the orientation of text for an object.

## Declaration

```objectivec
@protocol NSTextLayoutOrientationProvider
```

<a id="overview"></a>

## Overview

In macOS, the [NSTextContainer](nstextcontainer.md) and [NSTextView](https://developer.apple.com/documentation/appkit/nstextview) classes adopt this protocol; in iOS, only the [NSTextContainer](nstextcontainer.md) class implements it. An [NSTextContainer](nstextcontainer.md) object returns the value from its associated text view when present; otherwise, it returns [NSTextLayoutOrientationHorizontal](nslayoutmanager/textlayoutorientation/horizontal.md) by default. If you define a custom [NSTextContainer](nstextcontainer.md) object, you can override this method and return [NSTextLayoutOrientationVertical](nslayoutmanager/textlayoutorientation/vertical.md) to support laying out text vertically.

## Topics

### Getting layout orientation

- [layoutOrientation](nstextlayoutorientationprovider/layoutorientation.md): The default layout orientation.
- [NSTextLayoutOrientation](nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

## Relationships

### Conforming Types

- [NSTextContainer](nstextcontainer.md)

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
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
