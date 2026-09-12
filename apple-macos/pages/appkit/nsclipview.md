> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview](https://developer.apple.com/documentation/appkit/nsclipview)

# NSClipView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that clips a document view to a scroll view’s frame.

## Declaration

```swift
class NSClipView
```

<a id="overview"></a>

## Overview

An [NSClipView](nsclipview.md) holds the document view of an [NSScrollView](nsscrollview.md), clipping the document view to its frame, handling the details of scrolling in an efficient manner, and updating the [NSScrollView](nsscrollview.md) when the document view’s size or position changes.

You don’t typically use the [NSClipView](nsclipview.md) class directly; it’s provided primarily as the scrolling machinery for the [NSScrollView](nsscrollview.md) class. However, you might use the [NSClipView](nsclipview.md) class to implement a class similar to [NSScrollView](nsscrollview.md).

<a id="Interaction-with-NSScrollView"></a>

### Interaction with NSScrollView

When using an [NSClipView](nsclipview.md) within an [NSScrollView](nsscrollview.md) (the usual configuration), you should access the [NSScrollView](nsscrollview.md) properties that control background drawing state, rather than accessing these properties of the [NSClipView](nsclipview.md). This recommendation applies to the following properties:

- [backgroundColor](nsclipview/backgroundcolor.md)
- [drawsBackground](nsclipview/drawsbackground.md)

The [NSClipView](nsclipview.md) methods are intended for when the [NSClipView](nsclipview.md) is used independently of a containing [NSScrollView](nsscrollview.md). In the usual case, [NSScrollView](nsscrollview.md) should be allowed to manage the background-drawing properties of its associated [NSClipView](nsclipview.md).

There is only one background-drawing state per [NSScrollView](nsscrollview.md)/[NSClipView](nsclipview.md) pair. The two objects do not maintain independent and distinct [drawsBackground](nsclipview/drawsbackground.md) and [backgroundColor](nsclipview/backgroundcolor.md) properties; rather, the accessors for these properties on [NSScrollView](nsscrollview.md) largely defer to the associated [NSClipView](nsclipview.md) and allow the [NSClipView](nsclipview.md) to maintain the state. Note that this state is not cached by the [NSScrollView](nsscrollview.md) object.

It is also important to note that setting [drawsBackground](nsclipview/drawsbackground.md) to [false](https://developer.apple.com/documentation/swift/false) in an [NSScrollView](nsscrollview.md) has the added effect of setting the [NSClipView](nsclipview.md) property [copiesOnScroll](nsclipview/copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting the [drawsBackground](nsclipview/drawsbackground.md) property directly to the [NSClipView](nsclipview.md) is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## Topics

### Setting the Document View

- [documentView](nsclipview/documentview.md): The clip view’s document view.

### Scrolling

- [scroll(to:)](nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll(with:)](nsclipview/autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScroll(\_:)](nsclipview/constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect(\_:)](nsclipview/constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.

### Determining Scrolling Efficiency

- [copiesOnScroll](nsclipview/copiesonscroll.md): Deprecated. A Boolean value that indicates if the clip view copies rendered images while scrolling.

### Accessing the Content Insets

- [contentInsets](nsclipview/contentinsets.md): The distance that the content view is inset from the enclosing scroll view.
- [automaticallyAdjustsContentInsets](nsclipview/automaticallyadjustscontentinsets.md): A Boolean value that indicates if the clip view automatically accounts for other scroll view subviews.

### Accessing the Visible Portion

- [documentRect](nsclipview/documentrect.md): The rectangle defining the document view’s frame, adjusted to the size of the clip view if the document view is smaller.
- [documentVisibleRect](nsclipview/documentvisiblerect.md): The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.

### Setting the Document Cursor

- [documentCursor](nsclipview/documentcursor.md): The cursor object used when the pointer lies over the view.

### Working with Background Color

- [drawsBackground](nsclipview/drawsbackground.md): A Boolean value that indicates if the clip view draws its background color.
- [backgroundColor](nsclipview/backgroundcolor.md): The color of the clip view’s background.

### Overriding NSView Methods

- [viewBoundsChanged(\_:)](nsclipview/viewboundschanged%28__%29.md): Handles an [boundsDidChangeNotification](nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](nsscrollview.md) based on the new bounds.
- [viewFrameChanged(\_:)](nsclipview/viewframechanged%28__%29.md): Handles an [frameDidChangeNotification](nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](nsscrollview.md) based on the new frame.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Views

- [NSScrollView](nsscrollview.md): A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.
- [NSScroller](nsscroller.md): An object that controls scrolling of a document view within a scroll view or other type of container view.

# NSClipView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that clips a document view to a scroll view’s frame.

## Declaration

```objectivec
@interface NSClipView : NSView
```

<a id="overview"></a>

## Overview

An [NSClipView](nsclipview.md) holds the document view of an [NSScrollView](nsscrollview.md), clipping the document view to its frame, handling the details of scrolling in an efficient manner, and updating the [NSScrollView](nsscrollview.md) when the document view’s size or position changes.

You don’t typically use the [NSClipView](nsclipview.md) class directly; it’s provided primarily as the scrolling machinery for the [NSScrollView](nsscrollview.md) class. However, you might use the [NSClipView](nsclipview.md) class to implement a class similar to [NSScrollView](nsscrollview.md).

<a id="Interaction-with-NSScrollView"></a>

### Interaction with NSScrollView

When using an [NSClipView](nsclipview.md) within an [NSScrollView](nsscrollview.md) (the usual configuration), you should access the [NSScrollView](nsscrollview.md) properties that control background drawing state, rather than accessing these properties of the [NSClipView](nsclipview.md). This recommendation applies to the following properties:

- [backgroundColor](nsclipview/backgroundcolor.md)
- [drawsBackground](nsclipview/drawsbackground.md)

The [NSClipView](nsclipview.md) methods are intended for when the [NSClipView](nsclipview.md) is used independently of a containing [NSScrollView](nsscrollview.md). In the usual case, [NSScrollView](nsscrollview.md) should be allowed to manage the background-drawing properties of its associated [NSClipView](nsclipview.md).

There is only one background-drawing state per [NSScrollView](nsscrollview.md)/[NSClipView](nsclipview.md) pair. The two objects do not maintain independent and distinct [drawsBackground](nsclipview/drawsbackground.md) and [backgroundColor](nsclipview/backgroundcolor.md) properties; rather, the accessors for these properties on [NSScrollView](nsscrollview.md) largely defer to the associated [NSClipView](nsclipview.md) and allow the [NSClipView](nsclipview.md) to maintain the state. Note that this state is not cached by the [NSScrollView](nsscrollview.md) object.

It is also important to note that setting [drawsBackground](nsclipview/drawsbackground.md) to [false](https://developer.apple.com/documentation/swift/false) in an [NSScrollView](nsscrollview.md) has the added effect of setting the [NSClipView](nsclipview.md) property [copiesOnScroll](nsclipview/copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting the [drawsBackground](nsclipview/drawsbackground.md) property directly to the [NSClipView](nsclipview.md) is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## Topics

### Setting the Document View

- [documentView](nsclipview/documentview.md): The clip view’s document view.

### Scrolling

- [scrollToPoint:](nsclipview/scroll%28to_%29.md): Changes the origin of the clip view’s bounds rectangle to `newOrigin`.
- [autoscroll:](nsclipview/autoscroll%28with_%29.md): Scrolls the clip view proportionally to `theEvent`’s distance outside of it.
- [constrainScrollPoint:](nsclipview/constrainscroll%28__%29.md): Deprecated. Returns a scroll point adjusted from the proposed new origin, if necessary, to guarantee the view will lie within its document view.
- [constrainBoundsRect:](nsclipview/constrainboundsrect%28__%29.md): Constrains the bounds of the clip view while the user is magnifying and scrolling.

### Determining Scrolling Efficiency

- [copiesOnScroll](nsclipview/copiesonscroll.md): Deprecated. A Boolean value that indicates if the clip view copies rendered images while scrolling.

### Accessing the Content Insets

- [contentInsets](nsclipview/contentinsets.md): The distance that the content view is inset from the enclosing scroll view.
- [automaticallyAdjustsContentInsets](nsclipview/automaticallyadjustscontentinsets.md): A Boolean value that indicates if the clip view automatically accounts for other scroll view subviews.

### Accessing the Visible Portion

- [documentRect](nsclipview/documentrect.md): The rectangle defining the document view’s frame, adjusted to the size of the clip view if the document view is smaller.
- [documentVisibleRect](nsclipview/documentvisiblerect.md): The exposed rectangle of the clip view’s document view, in the document view’s own coordinate system.

### Setting the Document Cursor

- [documentCursor](nsclipview/documentcursor.md): The cursor object used when the pointer lies over the view.

### Working with Background Color

- [drawsBackground](nsclipview/drawsbackground.md): A Boolean value that indicates if the clip view draws its background color.
- [backgroundColor](nsclipview/backgroundcolor.md): The color of the clip view’s background.

### Overriding NSView Methods

- [viewBoundsChanged:](nsclipview/viewboundschanged%28__%29.md): Handles an [NSViewBoundsDidChangeNotification](nsview/boundsdidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](nsscrollview.md) based on the new bounds.
- [viewFrameChanged:](nsclipview/viewframechanged%28__%29.md): Handles an [NSViewFrameDidChangeNotification](nsview/framedidchangenotification.md), passed in the `aNotification` argument, by updating a containing [NSScrollView](nsscrollview.md) based on the new frame.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Views

- [NSScrollView](nsscrollview.md): A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.
- [NSScroller](nsscroller.md): An object that controls scrolling of a document view within a scroll view or other type of container view.
