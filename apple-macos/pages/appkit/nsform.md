> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform](https://developer.apple.com/documentation/appkit/nsform)

# NSForm (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.10)

An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```swift
class NSForm
```

## Topics

### Adding and Removing Entries

- [addEntry(\_:)](nsform/addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [insertEntry(\_:at:)](nsform/insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.
- [removeEntry(at:)](nsform/removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.

### Changing the Appearance of All the Entries

- [setBezeled(\_:)](nsform/setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered(\_:)](nsform/setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth(\_:)](nsform/setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize(\_:)](nsform/setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing(\_:)](nsform/setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment(\_:)](nsform/settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTitleBaseWritingDirection(\_:)](nsform/settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment(\_:)](nsform/settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection(\_:)](nsform/settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont(\_:)](nsform/settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont(\_:)](nsform/settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields

### Getting Cells and Indices

- [indexOfCell(withTag:)](nsform/indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem()](nsform/indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
- [cell(at:)](nsform/cell%28at_%29.md): Deprecated. Returns the entry at the specified index.

### Displaying a Cell

- [drawCell(at:)](nsform/drawcell%28at_%29.md): Deprecated. Displays the entry at the specified index.

### Auto Layout Sizing

- [preferredTextFieldWidth()](nsform/preferredtextfieldwidth%28%29.md): Deprecated. The preferred width of the form’s cells when using Auto Layout.
- [setPreferredTextFieldWidth(\_:)](nsform/setpreferredtextfieldwidth%28__%29.md): Deprecated. Sets the preferred text field width used by Auto Layout.

### Editing Text

- [selectText(at:)](nsform/selecttext%28at_%29.md): Deprecated. Selects the entry at the specified index.

## Relationships

### Inherits From

- [NSMatrix](nsmatrix.md)

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
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [NSViewToolTipOwner](nsviewtooltipowner.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.

# NSForm (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.10)

An `NSForm` object is a vertical matrix of [NSFormCell](nsformcell.md) objects to implement the fields.

> Use NSTextField directly instead, and consider NSStackView for layout assistance

## Declaration

```objectivec
@interface NSForm : NSMatrix
```

## Topics

### Adding and Removing Entries

- [addEntry:](nsform/addentry%28__%29.md): Deprecated. Adds a new entry to the end of the receiver and gives it the specified title.
- [insertEntry:atIndex:](nsform/insertentry%28__at_%29.md): Deprecated. Inserts an entry with the specified title into the receiver.
- [removeEntryAtIndex:](nsform/removeentry%28at_%29.md): Deprecated. Removes and releases the entry at the specified index.

### Changing the Appearance of All the Entries

- [setBezeled:](nsform/setbezeled%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a bezel around their editable text.
- [setBordered:](nsform/setbordered%28__%29.md): Deprecated. Sets whether the receiver’s entries should display a border around their editable text fields.
- [setEntryWidth:](nsform/setentrywidth%28__%29.md): Deprecated. Sets the width of all the entries in the receiver.
- [setFrameSize:](nsform/setframesize%28__%29.md): Deprecated. Sets the size of the receiver’s frame size to the specified value.
- [setInterlineSpacing:](nsform/setinterlinespacing%28__%29.md): Deprecated. Sets the spacing between entries
- [setTitleAlignment:](nsform/settitlealignment%28__%29.md): Deprecated. Sets the alignment for all of the entry titles.
- [setTitleBaseWritingDirection:](nsform/settitlebasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the title of every control embedded in the form.
- [setTextAlignment:](nsform/settextalignment%28__%29.md): Deprecated. Sets the alignment for all of the receiver’s editable text.
- [setTextBaseWritingDirection:](nsform/settextbasewritingdirection%28__%29.md): Deprecated. Sets the writing direction for the text content of every control embedded in the form.
- [setTitleFont:](nsform/settitlefont%28__%29.md): Deprecated. Sets the font for all of the entry titles.
- [setTextFont:](nsform/settextfont%28__%29.md): Deprecated. Sets the font for all of the receiver’s editable text fields

### Getting Cells and Indices

- [indexOfCellWithTag:](nsform/indexofcell%28withtag_%29.md): Deprecated. Returns the index of the entry whose tag is `tag`.
- [indexOfSelectedItem](nsform/indexofselecteditem%28%29.md): Deprecated. Returns the index of the selected entry.
- [cellAtIndex:](nsform/cell%28at_%29.md): Deprecated. Returns the entry at the specified index.

### Displaying a Cell

- [drawCellAtIndex:](nsform/drawcell%28at_%29.md): Deprecated. Displays the entry at the specified index.

### Auto Layout Sizing

- [preferredTextFieldWidth](nsform/preferredtextfieldwidth%28%29.md): Deprecated. The preferred width of the form’s cells when using Auto Layout.
- [setPreferredTextFieldWidth:](nsform/setpreferredtextfieldwidth%28__%29.md): Deprecated. Sets the preferred text field width used by Auto Layout.

### Editing Text

- [selectTextAtIndex:](nsform/selecttext%28at_%29.md): Deprecated. Selects the entry at the specified index.

## Relationships

### Inherits From

- [NSMatrix](nsmatrix.md)

## See Also

### Classes

- [NSOpenGLView](nsopenglview.md): Deprecated. A view that displays OpenGL content in a view.
- [NSOpenGLContext](nsopenglcontext.md): Deprecated. An object that represents an OpenGL graphics context, into which all OpenGL calls are rendered.
- [NSOpenGLLayer](nsopengllayer.md): Deprecated. A subclass of `CAOpenGLLayer` that is suitable for rendering OpenGL into layers.
- [NSOpenGLPixelBuffer](nsopenglpixelbuffer.md): Deprecated. An object that provides access to accelerated offscreen rendering.
- [NSOpenGLPixelFormat](nsopenglpixelformat.md): Deprecated. An object that specifies the types of buffers and other attributes of the OpenGL context.
- [NSCachedImageRep](nscachedimagerep.md): Deprecated. An object that stores image data in a form that can be readily transferred to the screen.
- [NSDrawer](nsdrawer.md): Deprecated. A user interface element that contains and displays text, scroll, and browser views, in addition to other view subclasses.
- [NSFormCell](nsformcell.md): The `NSFormCell` class is used to implement text entry fields in a form. The left part of an `NSFormCell` object contains a title. The right part contains an editable text entry field.
- [NSMenuItemCell](nsmenuitemcell.md): An object that handles the measurement and display of a single menu item in its encompassing frame.
- [NSInputManager](nsinputmanager.md): Deprecated.
- [NSInputServer](nsinputserver.md): Deprecated.
- [NSMovie](nsmovie.md): Deprecated.
