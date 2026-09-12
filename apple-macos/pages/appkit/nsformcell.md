> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell](https://developer.apple.com/documentation/appkit/nsformcell)

# NSFormCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.

## Declaration

```swift
class NSFormCell
```

<a id="overview"></a>

## Overview

An `NSFormCell` object implements the user interface of an [NSForm](nsform.md) object.

## Topics

### Initializers

- [init(coder:)](nsformcell/init%28coder_%29.md)

### Initializing an NSFormCell

- [init(textCell:)](nsformcell/init%28textcell_%29.md): Returns an `NSFormCell` object initialized with the specified title string.

### Asking About a Cell’s Appearance

- [isOpaque](nsformcell/isopaque.md): A Boolean value indicating whether the title is empty and an opaque bezel is set.

### Accessing a Cell’s Title

- [attributedTitle](nsformcell/attributedtitle.md): The title of the cell as an attributed string.
- [title](nsformcell/title.md): The cell’s title text.
- [titleAlignment](nsformcell/titlealignment.md): The alignment of the title.
- [titleBaseWritingDirection](nsformcell/titlebasewritingdirection.md): The default writing direction used to render the form cell’s title.
- [titleFont](nsformcell/titlefont.md): The font used to draw cell’s title.
- [titleWidth](nsformcell/titlewidth.md): The width of the title field.

### Asking About Placeholder Values

- [placeholderAttributedString](nsformcell/placeholderattributedstring.md): The cell’s attributed placeholder string.
- [placeholderString](nsformcell/placeholderstring.md): The cell’s plain text placeholder string.

### Sizing for Auto Layout

- [preferredTextFieldWidth](nsformcell/preferredtextfieldwidth.md): The preferred text field width.

### Instance Methods

- [titleWidth(\_:)](nsformcell/titlewidth%28__%29.md): Returns the width of the title field constrained to the specified size.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSFormCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.

## Declaration

```objectivec
@interface NSFormCell : NSActionCell
```

<a id="overview"></a>

## Overview

An `NSFormCell` object implements the user interface of an [NSForm](nsform.md) object.

## Topics

### Initializers

- [initWithCoder:](nsformcell/init%28coder_%29.md)

### Initializing an NSFormCell

- [initTextCell:](nsformcell/init%28textcell_%29.md): Returns an `NSFormCell` object initialized with the specified title string.

### Asking About a Cell’s Appearance

- [opaque](nsformcell/isopaque.md): A Boolean value indicating whether the title is empty and an opaque bezel is set.

### Accessing a Cell’s Title

- [attributedTitle](nsformcell/attributedtitle.md): The title of the cell as an attributed string.
- [title](nsformcell/title.md): The cell’s title text.
- [titleAlignment](nsformcell/titlealignment.md): The alignment of the title.
- [titleBaseWritingDirection](nsformcell/titlebasewritingdirection.md): The default writing direction used to render the form cell’s title.
- [titleFont](nsformcell/titlefont.md): The font used to draw cell’s title.
- [titleWidth](nsformcell/titlewidth.md): The width of the title field.

### Setting a Keyboard Equivalent

- [setTitleWithMnemonic:](nsformcell/settitlewithmnemonic_.md): Deprecated. Sets the cell title and mnemonic character.

### Asking About Placeholder Values

- [placeholderAttributedString](nsformcell/placeholderattributedstring.md): The cell’s attributed placeholder string.
- [placeholderString](nsformcell/placeholderstring.md): The cell’s plain text placeholder string.

### Sizing for Auto Layout

- [preferredTextFieldWidth](nsformcell/preferredtextfieldwidth.md): The preferred text field width.

### Instance Methods

- [titleWidth:](nsformcell/titlewidth%28__%29.md): Returns the width of the title field constrained to the specified size.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSForm](nsform.md): Deprecated. An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
