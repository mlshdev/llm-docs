> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell](https://developer.apple.com/documentation/appkit/nsmenuitemcell)

# NSMenuItemCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that handles the measurement and display of a single menu item in its encompassing frame.

## Declaration

```swift
class NSMenuItemCell
```

<a id="overview"></a>

## Overview

> **Note**

>  `NSMenuItemCell` is no longer used to draw menus. Using it does not affect the appearance of your menus.

## Topics

### Initializers

- [init(coder:)](nsmenuitemcell/init%28coder_%29.md)
- [init(textCell:)](nsmenuitemcell/init%28textcell_%29.md)

### Configuring Menu-Item Attributes

- [menuItem](nsmenuitemcell/menuitem.md): The menu item object associated with the cell.

### Calculating the Size of a Menu Item

- [calcSize()](nsmenuitemcell/calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](nsmenuitemcell/needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](nsmenuitemcell/imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](nsmenuitemcell/titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](nsmenuitemcell/keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](nsmenuitemcell/stateimagewidth.md): The width of the image used to indicate the state of the menu item.

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRect(forBounds:)](nsmenuitemcell/keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [stateImageRect(forBounds:)](nsmenuitemcell/stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.
- [titleRect(forBounds:)](nsmenuitemcell/titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.

### Drawing the Menu Item

- [drawBorderAndBackground(withFrame:in:)](nsmenuitemcell/drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawImage(withFrame:in:)](nsmenuitemcell/drawimage%28withframe_in_%29.md): Draws the image associated with the menu item.
- [drawKeyEquivalent(withFrame:in:)](nsmenuitemcell/drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawSeparatorItem(withFrame:in:)](nsmenuitemcell/drawseparatoritem%28withframe_in_%29.md): Draws a menu item separator.
- [drawStateImage(withFrame:in:)](nsmenuitemcell/drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitle(withFrame:in:)](nsmenuitemcell/drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](nsmenuitemcell/needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.

### Assigning a Tag

- [tag](nsmenuitemcell/tag.md): The integer tag of the selected menu item.

## Relationships

### Inherits From

- [NSButtonCell](nsbuttoncell.md)

### Inherited By

- [NSPopUpButtonCell](nspopupbuttoncell.md)

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
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.

# NSMenuItemCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that handles the measurement and display of a single menu item in its encompassing frame.

## Declaration

```objectivec
@interface NSMenuItemCell : NSButtonCell
```

<a id="overview"></a>

## Overview

> **Note**

>  `NSMenuItemCell` is no longer used to draw menus. Using it does not affect the appearance of your menus.

## Topics

### Initializers

- [initWithCoder:](nsmenuitemcell/init%28coder_%29.md)
- [initTextCell:](nsmenuitemcell/init%28textcell_%29.md)

### Configuring Menu-Item Attributes

- [menuItem](nsmenuitemcell/menuitem.md): The menu item object associated with the cell.

### Calculating the Size of a Menu Item

- [calcSize](nsmenuitemcell/calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](nsmenuitemcell/needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](nsmenuitemcell/imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](nsmenuitemcell/titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](nsmenuitemcell/keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](nsmenuitemcell/stateimagewidth.md): The width of the image used to indicate the state of the menu item.

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRectForBounds:](nsmenuitemcell/keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [stateImageRectForBounds:](nsmenuitemcell/stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.
- [titleRectForBounds:](nsmenuitemcell/titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.

### Drawing the Menu Item

- [drawBorderAndBackgroundWithFrame:inView:](nsmenuitemcell/drawborderandbackground%28withframe_in_%29.md): Draws the borders and background associated with the receiver’s menu item (if any).
- [drawImageWithFrame:inView:](nsmenuitemcell/drawimage%28withframe_in_%29.md): Draws the image associated with the menu item.
- [drawKeyEquivalentWithFrame:inView:](nsmenuitemcell/drawkeyequivalent%28withframe_in_%29.md): Draws the key equivalent associated with the menu item.
- [drawSeparatorItemWithFrame:inView:](nsmenuitemcell/drawseparatoritem%28withframe_in_%29.md): Draws a menu item separator.
- [drawStateImageWithFrame:inView:](nsmenuitemcell/drawstateimage%28withframe_in_%29.md): Draws the state image associated with the menu item.
- [drawTitleWithFrame:inView:](nsmenuitemcell/drawtitle%28withframe_in_%29.md): Draws the title associated with the menu item.
- [needsDisplay](nsmenuitemcell/needsdisplay.md): A Boolean value indicating whether the menu item needs to be displayed.

### Assigning a Tag

- [tag](nsmenuitemcell/tag.md): The integer tag of the selected menu item.

## Relationships

### Inherits From

- [NSButtonCell](nsbuttoncell.md)

### Inherited By

- [NSPopUpButtonCell](nspopupbuttoncell.md)

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
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
