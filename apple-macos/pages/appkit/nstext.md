> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext](https://developer.apple.com/documentation/appkit/nstext)

# NSText (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The most general programmatic interface for objects that manage text.

## Declaration

```swift
class NSText
```

<a id="overview"></a>

## Overview

[NSText](nstext.md) draws text for user interface objects, provides text editing capabilities, and controls text attributes such as type size, font, and color.

[NSText](nstext.md) initialization creates an instance of a concrete subclass, such as [NSTextView](nstextview.md) (generically called a text object). In general, you’re more likely to use the [NSTextView](nstextview.md) subclass, because it extends the interface declared by [NSText](nstext.md) and provides much more sophisticated functionality than that declared in [NSText](nstext.md).

AppKit uses text objects wherever text appears in interface objects. For example, a text object draws the title of a window, the commands in a menu, the title of a button, and the items in a browser. Your app can also create text objects for its own purposes.

## Topics

### Creating a Text Object

- [init(coder:)](nstext/init%28coder_%29.md)
- [init(frame:)](nstext/init%28frame_%29.md)

### Getting the characters

- [string](nstext/string.md): The characters of the receiver’s text.

### Setting graphics attributes

- [backgroundColor](nstext/backgroundcolor.md): The receiver’s background color to a given color.
- [drawsBackground](nstext/drawsbackground.md): A Boolean that controls whether the receiver draws its background.

### Setting behavioral attributes

- [isEditable](nstext/iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [isSelectable](nstext/isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [isFieldEditor](nstext/isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [isRichText](nstext/isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](nstext/importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

### Using the Font panel and menu

- [usesFontPanel](nstext/usesfontpanel.md): A Boolean that controls whether the receiver uses the Font panel and Font menu.

### Using the ruler

- [toggleRuler(\_:)](nstext/toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.
- [isRulerVisible](nstext/isrulervisible.md): A Boolean value that indicates whether the receiver’s enclosing scroll view shows its ruler.

### Changing the selection

- [selectedRange](nstext/selectedrange.md): The receiver’s characters within `aRange`.

### Replacing text

- [replaceCharacters(in:withRTF:)](nstext/replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharacters(in:withRTFD:)](nstext/replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.
- [replaceCharacters(in:with:)](nstext/replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

### Action methods for editing

- [selectAll(\_:)](nstext/selectall%28__%29.md): This action method selects all of the receiver’s text.
- [copy(\_:)](nstext/copy%28__%29.md): This action method copies the selected text onto the general pasteboard, in as many formats as the receiver supports.
- [cut(\_:)](nstext/cut%28__%29.md): This action method deletes the selected text and places it onto the general pasteboard, in as many formats as the receiver supports.
- [paste(\_:)](nstext/paste%28__%29.md): This action method pastes text from the general pasteboard at the insertion point or over the selection.
- [copyFont(\_:)](nstext/copyfont%28__%29.md): This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard, as `NSFontPboardType`.
- [pasteFont(\_:)](nstext/pastefont%28__%29.md): This action method pastes font information from the font pasteboard onto the selected text or insertion point of a rich text object, or over all text of a plain text object.
- [copyRuler(\_:)](nstext/copyruler%28__%29.md): This action method copies the paragraph style information for first selected paragraph onto the ruler pasteboard, as `NSRulerPboardType`, and expands the selection to paragraph boundaries.
- [pasteRuler(\_:)](nstext/pasteruler%28__%29.md): This action method pastes paragraph style information from the ruler pasteboard onto the selected paragraphs of a rich text object.
- [delete(\_:)](nstext/delete%28__%29.md): This action method deletes the selected text.

### Changing the font

- [changeFont(\_:)](nstext/changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [font](nstext/font.md): The font of all the receiver’s text.
- [setFont(\_:range:)](nstext/setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.

### Setting text alignment

- [alignment](nstext/alignment.md): The alignment of all the receiver’s text.
- [alignCenter(\_:)](nstext/aligncenter%28__%29.md): This action method applies center alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignLeft(\_:)](nstext/alignleft%28__%29.md): This action method applies left alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignRight(\_:)](nstext/alignright%28__%29.md): This action method applies right alignment to selected paragraphs (or all text if the receiver is a plain text object).

### Setting text color

- [textColor](nstext/textcolor.md): The text color of all characters in the receiver.
- [setTextColor(\_:range:)](nstext/settextcolor%28__range_%29.md): Sets the text color of characters within the specified range to the specified color.

### Writing direction

- [baseWritingDirection](nstext/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

### Setting superscripting and subscripting

- [superscript(\_:)](nstext/superscript%28__%29.md): This action method applies a superscript attribute to selected text (or all text if the receiver is a plain text object), raising its baseline offset by a predefined amount.
- [subscript(\_:)](nstext/subscript%28__%29.md): This action method applies a subscript attribute to selected text (or all text if the receiver is a plain text object), lowering its baseline offset by a predefined amount.
- [unscript(\_:)](nstext/unscript%28__%29.md): This action method removes any superscripting or subscripting from selected text (or all text if the receiver is a plain text object).

### Underlining text

- [underline(\_:)](nstext/underline%28__%29.md): Adds the underline attribute to the selected text attributes if absent; removes the attribute if present.

### Reading and writing RTF files

- [readRTFD(fromFile:)](nstext/readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [writeRTFD(toFile:atomically:)](nstext/writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [rtfd(from:)](nstext/rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [rtf(from:)](nstext/rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

### Checking spelling

- [checkSpelling(\_:)](nstext/checkspelling%28__%29.md): This action method searches for a misspelled word in the receiver’s text.
- [showGuessPanel(\_:)](nstext/showguesspanel%28__%29.md): This action method opens the Spelling panel, allowing the user to make a correction during spell checking.

### Constraining size

- [maxSize](nstext/maxsize.md): The receiver’s maximum size.
- [minSize](nstext/minsize.md): The receiver’s minimum size.
- [isVerticallyResizable](nstext/isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [isHorizontallyResizable](nstext/ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [sizeToFit()](nstext/sizetofit%28%29.md): Resizes the receiver to fit its text.

### Scrolling

- [scrollRangeToVisible(\_:)](nstext/scrollrangetovisible%28__%29.md): Scrolls the receiver in its enclosing scroll view so the first characters of `aRange` are visible.

### Setting the delegate

- [delegate](nstext/delegate.md): The receiver’s delegate.

### Constants

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.
- [Movement Codes](movement-codes.md): The reason for a change of editing focus among text fields.
- [Common Unicode Characters](common-unicode-characters.md)

### Notifications

- [didBeginEditingNotification](nstext/didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [didChangeNotification](nstext/didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [didEndEditingNotification](nstext/didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [movementUserInfoKey](nstext/movementuserinfokey.md): The `userInfo` dictionary key for the [didEndEditingNotification](nstext/didendeditingnotification.md) notification.
- [NSTextMovement](nstextmovement.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSTextView](nstextview.md)

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
- [NSChangeSpelling](nschangespelling.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.

# NSText (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The most general programmatic interface for objects that manage text.

## Declaration

```objectivec
@interface NSText : NSView
```

<a id="overview"></a>

## Overview

[NSText](nstext.md) draws text for user interface objects, provides text editing capabilities, and controls text attributes such as type size, font, and color.

[NSText](nstext.md) initialization creates an instance of a concrete subclass, such as [NSTextView](nstextview.md) (generically called a text object). In general, you’re more likely to use the [NSTextView](nstextview.md) subclass, because it extends the interface declared by [NSText](nstext.md) and provides much more sophisticated functionality than that declared in [NSText](nstext.md).

AppKit uses text objects wherever text appears in interface objects. For example, a text object draws the title of a window, the commands in a menu, the title of a button, and the items in a browser. Your app can also create text objects for its own purposes.

## Topics

### Creating a Text Object

- [initWithCoder:](nstext/init%28coder_%29.md)
- [initWithFrame:](nstext/init%28frame_%29.md)

### Getting the characters

- [string](nstext/string.md): The characters of the receiver’s text.

### Setting graphics attributes

- [backgroundColor](nstext/backgroundcolor.md): The receiver’s background color to a given color.
- [drawsBackground](nstext/drawsbackground.md): A Boolean that controls whether the receiver draws its background.

### Setting behavioral attributes

- [editable](nstext/iseditable.md): A Boolean that controls whether the receiver allows the user to edit its text.
- [selectable](nstext/isselectable.md): A Boolean that controls whether the receiver allows the user to select its text.
- [fieldEditor](nstext/isfieldeditor.md): A Boolean that controls whether the receiver interprets Tab, Shift-Tab, and Return (Enter) as cues to end editing and possibly to change the first responder.
- [richText](nstext/isrichtext.md): A Boolean that controls whether the receiver allows the user to apply attributes to specific ranges of the text.
- [importsGraphics](nstext/importsgraphics.md): A Boolean that controls whether the receiver allows the user to import files by dragging.

### Using the Font panel and menu

- [usesFontPanel](nstext/usesfontpanel.md): A Boolean that controls whether the receiver uses the Font panel and Font menu.

### Using the ruler

- [toggleRuler:](nstext/toggleruler%28__%29.md): This action method shows or hides the ruler, if the receiver is enclosed in a scroll view.
- [rulerVisible](nstext/isrulervisible.md): A Boolean value that indicates whether the receiver’s enclosing scroll view shows its ruler.

### Changing the selection

- [selectedRange](nstext/selectedrange.md): The receiver’s characters within `aRange`.

### Replacing text

- [replaceCharactersInRange:withRTF:](nstext/replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharactersInRange:withRTFD:](nstext/replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.
- [replaceCharactersInRange:withString:](nstext/replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

### Action methods for editing

- [selectAll:](nstext/selectall%28__%29.md): This action method selects all of the receiver’s text.
- [copy:](nstext/copy%28__%29.md): This action method copies the selected text onto the general pasteboard, in as many formats as the receiver supports.
- [cut:](nstext/cut%28__%29.md): This action method deletes the selected text and places it onto the general pasteboard, in as many formats as the receiver supports.
- [paste:](nstext/paste%28__%29.md): This action method pastes text from the general pasteboard at the insertion point or over the selection.
- [copyFont:](nstext/copyfont%28__%29.md): This action method copies the font information for the first character of the selection (or for the insertion point) onto the font pasteboard, as `NSFontPboardType`.
- [pasteFont:](nstext/pastefont%28__%29.md): This action method pastes font information from the font pasteboard onto the selected text or insertion point of a rich text object, or over all text of a plain text object.
- [copyRuler:](nstext/copyruler%28__%29.md): This action method copies the paragraph style information for first selected paragraph onto the ruler pasteboard, as `NSRulerPboardType`, and expands the selection to paragraph boundaries.
- [pasteRuler:](nstext/pasteruler%28__%29.md): This action method pastes paragraph style information from the ruler pasteboard onto the selected paragraphs of a rich text object.
- [delete:](nstext/delete%28__%29.md): This action method deletes the selected text.

### Changing the font

- [changeFont:](nstext/changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [font](nstext/font.md): The font of all the receiver’s text.
- [setFont:range:](nstext/setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.

### Setting text alignment

- [alignment](nstext/alignment.md): The alignment of all the receiver’s text.
- [alignCenter:](nstext/aligncenter%28__%29.md): This action method applies center alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignLeft:](nstext/alignleft%28__%29.md): This action method applies left alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignRight:](nstext/alignright%28__%29.md): This action method applies right alignment to selected paragraphs (or all text if the receiver is a plain text object).

### Setting text color

- [textColor](nstext/textcolor.md): The text color of all characters in the receiver.
- [setTextColor:range:](nstext/settextcolor%28__range_%29.md): Sets the text color of characters within the specified range to the specified color.

### Writing direction

- [baseWritingDirection](nstext/basewritingdirection.md): The initial writing direction used to determine the actual writing direction for text.

### Setting superscripting and subscripting

- [superscript:](nstext/superscript%28__%29.md): This action method applies a superscript attribute to selected text (or all text if the receiver is a plain text object), raising its baseline offset by a predefined amount.
- [subscript:](nstext/subscript%28__%29.md): This action method applies a subscript attribute to selected text (or all text if the receiver is a plain text object), lowering its baseline offset by a predefined amount.
- [unscript:](nstext/unscript%28__%29.md): This action method removes any superscripting or subscripting from selected text (or all text if the receiver is a plain text object).

### Underlining text

- [underline:](nstext/underline%28__%29.md): Adds the underline attribute to the selected text attributes if absent; removes the attribute if present.

### Reading and writing RTF files

- [readRTFDFromFile:](nstext/readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [writeRTFDToFile:atomically:](nstext/writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [RTFDFromRange:](nstext/rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [RTFFromRange:](nstext/rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

### Checking spelling

- [checkSpelling:](nstext/checkspelling%28__%29.md): This action method searches for a misspelled word in the receiver’s text.
- [showGuessPanel:](nstext/showguesspanel%28__%29.md): This action method opens the Spelling panel, allowing the user to make a correction during spell checking.

### Constraining size

- [maxSize](nstext/maxsize.md): The receiver’s maximum size.
- [minSize](nstext/minsize.md): The receiver’s minimum size.
- [verticallyResizable](nstext/isverticallyresizable.md): A Boolean that controls whether the receiver changes its height to fit the height of its text.
- [horizontallyResizable](nstext/ishorizontallyresizable.md): A Boolean that controls whether the receiver changes its width to fit the width of its text.
- [sizeToFit](nstext/sizetofit%28%29.md): Resizes the receiver to fit its text.

### Scrolling

- [scrollRangeToVisible:](nstext/scrollrangetovisible%28__%29.md): Scrolls the receiver in its enclosing scroll view so the first characters of `aRange` are visible.

### Setting the delegate

- [delegate](nstext/delegate.md): The receiver’s delegate.

### Constants

- [NSTextAlignment](nstextalignment.md): Constants that specify text alignment.
- [NSWritingDirection](nswritingdirection.md): Constants that specify the writing direction.
- [Movement Codes](movement-codes.md): The reason for a change of editing focus among text fields.
- [Common Unicode Characters](common-unicode-characters.md)

### Notifications

- [NSTextDidBeginEditingNotification](nstext/didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [NSTextDidChangeNotification](nstext/didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextMovementUserInfoKey](nstext/movementuserinfokey.md): The `userInfo` dictionary key for the [NSTextDidEndEditingNotification](nstext/didendeditingnotification.md) notification.
- [NSTextMovement](nstextmovement.md)

## Relationships

### Inherits From

- [NSView](nsview.md)

### Inherited By

- [NSTextView](nstextview.md)

### Conforms To

- [NSChangeSpelling](nschangespelling.md)
- [NSIgnoreMisspelledWords](nsignoremisspelledwords.md)

## See Also

### Text views

- [NSTextField](nstextfield.md): Text the user can select or edit to send an action message to a target when the user presses the Return key.
- [NSTextFieldDelegate](nstextfielddelegate.md): A protocol that a text field delegate can use to control its field editor action menu.
- [NSTextView](nstextview.md): A view that draws text and handles user interactions with that text.
- [NSTextViewDelegate](nstextviewdelegate.md): A set of optional methods that text view delegates can use to manage selection, set text attributes, work with the spell checker, and more.
- [NSTextDelegate](nstextdelegate.md): A set of optional methods implemented by the delegate of an [NSText](nstext.md) object to edit text and change text formats.
