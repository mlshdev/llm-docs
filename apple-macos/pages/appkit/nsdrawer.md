> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer](https://developer.apple.com/documentation/appkit/nsdrawer)

# NSDrawer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.

> Drawers are deprecated and should not be used in modern macOS apps.

## Declaration

```swift
class NSDrawer
```

<a id="overview"></a>

## Overview

A drawer is associated with a window, called its parent, and can appear only while its parent is visible onscreen. A drawer cannot be moved or ordered independently of a window, but is instead attached to one edge of its parent and moves along with it.

## Topics

### Creating Drawers

- [init(contentSize:preferredEdge:)](nsdrawer/init%28contentsize_preferrededge_%29.md): Deprecated. Creates a new drawer with the given size on the specified edge of the parent window.
- [delegate](nsdrawer/delegate.md): Deprecated. The receiver’s delegate.

### Opening and Closing Drawers

- [close()](nsdrawer/close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close(\_:)](nsdrawer/close%28__%29.md): Deprecated. An action method to close the receiver.
- [open()](nsdrawer/open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open(\_:)](nsdrawer/open%28__%29.md): Deprecated. An action method to open the drawer.
- [open(on:)](nsdrawer/open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle(\_:)](nsdrawer/toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](nsdrawer/state-swift.property.md): Deprecated. The state of the receiver.

### Managing Drawer Size

- [contentSize](nsdrawer/contentsize.md): Deprecated. The size of the receiver’s content area.
- [leadingOffset](nsdrawer/leadingoffset.md): Deprecated. The receiver’s leading offset.
- [maxContentSize](nsdrawer/maxcontentsize.md): Deprecated. The maximum allowed size of the receiver’s content area.
- [minContentSize](nsdrawer/mincontentsize.md): Deprecated. The minimum allowed size of the receiver’s content area.
- [trailingOffset](nsdrawer/trailingoffset.md): Deprecated. The receiver’s trailing offset.

### Managing Drawer Edges

- [edge](nsdrawer/edge.md): Deprecated. The edge of the window that the receiver is connected to.
- [preferredEdge](nsdrawer/preferrededge.md): Deprecated. The receiver’s preferred, or default, edge.

### Managing Drawer Views

- [contentView](nsdrawer/contentview.md): Deprecated. The receiver’s content view.
- [parentWindow](nsdrawer/parentwindow.md): Deprecated. The receiver’s parent window.

### Constants

- [NSDrawer.State](nsdrawer/state-swift.enum.md): These constants specify the possible states of a drawer.

### Notifications

- [didCloseNotification](nsdrawer/didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [didOpenNotification](nsdrawer/didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [willCloseNotification](nsdrawer/willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [willOpenNotification](nsdrawer/willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSDrawer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.

> Drawers are deprecated and should not be used in modern macOS apps.

## Declaration

```objectivec
@interface NSDrawer : NSResponder
```

<a id="overview"></a>

## Overview

A drawer is associated with a window, called its parent, and can appear only while its parent is visible onscreen. A drawer cannot be moved or ordered independently of a window, but is instead attached to one edge of its parent and moves along with it.

## Topics

### Creating Drawers

- [initWithContentSize:preferredEdge:](nsdrawer/init%28contentsize_preferrededge_%29.md): Deprecated. Creates a new drawer with the given size on the specified edge of the parent window.
- [delegate](nsdrawer/delegate.md): Deprecated. The receiver’s delegate.

### Opening and Closing Drawers

- [close](nsdrawer/close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close:](nsdrawer/close%28__%29.md): Deprecated. An action method to close the receiver.
- [open](nsdrawer/open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open:](nsdrawer/open%28__%29.md): Deprecated. An action method to open the drawer.
- [openOnEdge:](nsdrawer/open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle:](nsdrawer/toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](nsdrawer/state-swift.property.md): Deprecated. The state of the receiver.

### Managing Drawer Size

- [contentSize](nsdrawer/contentsize.md): Deprecated. The size of the receiver’s content area.
- [leadingOffset](nsdrawer/leadingoffset.md): Deprecated. The receiver’s leading offset.
- [maxContentSize](nsdrawer/maxcontentsize.md): Deprecated. The maximum allowed size of the receiver’s content area.
- [minContentSize](nsdrawer/mincontentsize.md): Deprecated. The minimum allowed size of the receiver’s content area.
- [trailingOffset](nsdrawer/trailingoffset.md): Deprecated. The receiver’s trailing offset.

### Managing Drawer Edges

- [edge](nsdrawer/edge.md): Deprecated. The edge of the window that the receiver is connected to.
- [preferredEdge](nsdrawer/preferrededge.md): Deprecated. The receiver’s preferred, or default, edge.

### Managing Drawer Views

- [contentView](nsdrawer/contentview.md): Deprecated. The receiver’s content view.
- [parentWindow](nsdrawer/parentwindow.md): Deprecated. The receiver’s parent window.

### Constants

- [NSDrawerState](nsdrawer/state-swift.enum.md): These constants specify the possible states of a drawer.

### Notifications

- [NSDrawerDidCloseNotification](nsdrawer/didclosenotification.md): Deprecated. Posted whenever the drawer is closed.
- [NSDrawerDidOpenNotification](nsdrawer/didopennotification.md): Deprecated. Posted whenever the drawer is opened.
- [NSDrawerWillCloseNotification](nsdrawer/willclosenotification.md): Deprecated. Posted whenever the drawer is about to close.
- [NSDrawerWillOpenNotification](nsdrawer/willopennotification.md): Deprecated. Posted whenever the drawer is about to open.

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
