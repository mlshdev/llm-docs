> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell](https://developer.apple.com/documentation/appkit/nstextfieldcell)

# NSTextFieldCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that enhances the text display capabilities of a cell.

## Declaration

```swift
class NSTextFieldCell
```

<a id="overview"></a>

## Overview

The [NSTextFieldCell](nstextfieldcell.md) class adds to the text display capabilities of the [NSCell](nscell.md) class by allowing you to set the color of both the text and its background. You can also specify whether the cell draws its background at all.

All of the methods declared by this class are also declared by the [NSTextField](nstextfield.md) class, which uses [NSTextFieldCell](nstextfieldcell.md) objects to draw and edit text. The [NSTextField](nstextfield.md) cover methods call the corresponding [NSTextFieldCell](nstextfieldcell.md) methods.

Placeholder strings, set using the [placeholderString](nstextfieldcell/placeholderstring.md) or [placeholderAttributedString](nstextfieldcell/placeholderattributedstring.md) property, appear in the text field cell if the actual string is `nil` or an empty string. They’re drawn in gray on the cell and aren’t archived in the “pre-10.2” nib format.

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSTextFieldCell` you must implement the designated initializers [init(coder:)](nscell/init%28coder_%29.md) and [init(textCell:)](nscell/init%28textcell_%29.md).

## Topics

### Creating a Text Field Cell

- [init(textCell:)](nstextfieldcell/init%28textcell_%29.md): Initializes a text field cell that displays the specified string.
- [init(coder:)](nstextfieldcell/init%28coder_%29.md): Initializes a text field cell from data in the provided unarchiver.

### Setting the Text Color

- [textColor](nstextfieldcell/textcolor.md): The color to use to draw the cell’s text.

### Setting the Bezel Style

- [bezelStyle](nstextfieldcell/bezelstyle.md): The bezel style to use when drawing the text field.
- [NSTextField.BezelStyle](nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.

### Controlling the Background

- [backgroundColor](nstextfieldcell/backgroundcolor.md): The color of the cell’s background.
- [drawsBackground](nstextfieldcell/drawsbackground.md): A Boolean value that indicates whether the cell draws its background color.

### Managing the Field Editor

- [setUpFieldEditorAttributes(\_:)](nstextfieldcell/setupfieldeditorattributes%28__%29.md): Allows the cell to set up the field editor’s attributes before editing begins.
- [setWantsNotificationForMarkedText(\_:)](nstextfieldcell/setwantsnotificationformarkedtext%28__%29.md): Directs the cell’s associated field editor to post text change notifications.

### Managing Placeholder Strings

- [placeholderString](nstextfieldcell/placeholderstring.md): The placeholder text for the cell, specified as a plain text string.
- [placeholderAttributedString](nstextfieldcell/placeholderattributedstring.md): The placeholder text for the cell, specified as an attributed string.

### Accessing Input Source Locales

- [allowedInputSourceLocales](nstextfieldcell/allowedinputsourcelocales.md): An array of locale identifiers that represent the allowed input sources when the text field has the keyboard focus.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Inherited By

- [NSComboBoxCell](nscomboboxcell.md)
- [NSPathComponentCell](nspathcomponentcell.md)
- [NSSearchFieldCell](nssearchfieldcell.md)
- [NSSecureTextFieldCell](nssecuretextfieldcell.md)
- [NSTableHeaderCell](nstableheadercell.md)
- [NSTokenFieldCell](nstokenfieldcell.md)

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

## See Also

### Cell

- [NSSecureTextFieldCell](nssecuretextfieldcell.md): A text field whose value is hidden from the user.

# NSTextFieldCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that enhances the text display capabilities of a cell.

## Declaration

```objectivec
@interface NSTextFieldCell : NSActionCell
```

<a id="overview"></a>

## Overview

The [NSTextFieldCell](nstextfieldcell.md) class adds to the text display capabilities of the [NSCell](nscell.md) class by allowing you to set the color of both the text and its background. You can also specify whether the cell draws its background at all.

All of the methods declared by this class are also declared by the [NSTextField](nstextfield.md) class, which uses [NSTextFieldCell](nstextfieldcell.md) objects to draw and edit text. The [NSTextField](nstextfield.md) cover methods call the corresponding [NSTextFieldCell](nstextfieldcell.md) methods.

Placeholder strings, set using the [placeholderString](nstextfieldcell/placeholderstring.md) or [placeholderAttributedString](nstextfieldcell/placeholderattributedstring.md) property, appear in the text field cell if the actual string is `nil` or an empty string. They’re drawn in gray on the cell and aren’t archived in the “pre-10.2” nib format.

<a id="Designated-Initializers"></a>

### Designated Initializers

When subclassing `NSTextFieldCell` you must implement the designated initializers [initWithCoder:](nscell/init%28coder_%29.md) and [initTextCell:](nscell/init%28textcell_%29.md).

## Topics

### Creating a Text Field Cell

- [initTextCell:](nstextfieldcell/init%28textcell_%29.md): Initializes a text field cell that displays the specified string.
- [initWithCoder:](nstextfieldcell/init%28coder_%29.md): Initializes a text field cell from data in the provided unarchiver.

### Setting the Text Color

- [textColor](nstextfieldcell/textcolor.md): The color to use to draw the cell’s text.

### Setting the Bezel Style

- [bezelStyle](nstextfieldcell/bezelstyle.md): The bezel style to use when drawing the text field.
- [NSTextFieldBezelStyle](nstextfield/bezelstyle-swift.enum.md): The style of bezel the text field displays.

### Controlling the Background

- [backgroundColor](nstextfieldcell/backgroundcolor.md): The color of the cell’s background.
- [drawsBackground](nstextfieldcell/drawsbackground.md): A Boolean value that indicates whether the cell draws its background color.

### Managing the Field Editor

- [setUpFieldEditorAttributes:](nstextfieldcell/setupfieldeditorattributes%28__%29.md): Allows the cell to set up the field editor’s attributes before editing begins.
- [setWantsNotificationForMarkedText:](nstextfieldcell/setwantsnotificationformarkedtext%28__%29.md): Directs the cell’s associated field editor to post text change notifications.

### Managing Placeholder Strings

- [placeholderString](nstextfieldcell/placeholderstring.md): The placeholder text for the cell, specified as a plain text string.
- [placeholderAttributedString](nstextfieldcell/placeholderattributedstring.md): The placeholder text for the cell, specified as an attributed string.

### Accessing Input Source Locales

- [allowedInputSourceLocales](nstextfieldcell/allowedinputsourcelocales.md): An array of locale identifiers that represent the allowed input sources when the text field has the keyboard focus.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Inherited By

- [NSComboBoxCell](nscomboboxcell.md)
- [NSPathComponentCell](nspathcomponentcell.md)
- [NSSearchFieldCell](nssearchfieldcell.md)
- [NSSecureTextFieldCell](nssecuretextfieldcell.md)
- [NSTableHeaderCell](nstableheadercell.md)
- [NSTokenFieldCell](nstokenfieldcell.md)

## See Also

### Cell

- [NSSecureTextFieldCell](nssecuretextfieldcell.md): A text field whose value is hidden from the user.
