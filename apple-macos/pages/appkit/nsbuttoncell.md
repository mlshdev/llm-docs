> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell](https://developer.apple.com/documentation/appkit/nsbuttoncell)

# NSButtonCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that defines the user interface of a button or other clickable region of a view.

## Declaration

```swift
class NSButtonCell
```

<a id="overview"></a>

## Overview

Setting the integer, float, double, or object value of an `NSButtonCell` object results in a call to [state](nscell/state.md) with the value converted to integer. In the case of [objectValue](nscell/objectvalue.md), `nil` is equivalent to `0`, and a non-`nil` object that doesn’t respond to [intValue](nscell/intvalue.md) sets the state to `1`. Otherwise, the state is set to the object’s [intValue](nscell/intvalue.md). Similarly, for most button types, querying the integer, float, double, or object value of an `NSButtonCell` returns the current state in the requested representation. In the case of [objectValue](nscell/objectvalue.md), this is an `NSNumber` containing [true](https://developer.apple.com/documentation/swift/true) for on, [false](https://developer.apple.com/documentation/swift/false) for off, and integer value `-1` for the mixed state. For accelerator buttons (type [NSAcceleratorButton](nsacceleratorbutton.md) or [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md)) on systems that support pressure sensitivity, querying [doubleValue](nscontrol/doublevalue.md) returns the amount of pressure applied while pressing the button.

The configuration of an [NSButtonCell](nsbuttoncell.md) object controls how the button object appears and behaves, but it’s [NSButton](nsbutton.md) that sends a message when the control is clicked. For more information on the behavior of [NSButtonCell](nsbuttoncell.md), see the [NSButton](nsbutton.md) and [NSMatrix](nsmatrix.md) class specifications.

<a id="Exceptions"></a>

### Exceptions

In its implementation of the [compare(\_:)](nscell/compare%28__%29.md) method (declared in `NSCell`), `NSButtonCell` raises an `NSBadComparisonException` if the `otherCell` argument is not of the `NSButtonCell` class.

<a id="Fonts"></a>

### Fonts

Setting the [font](nscell/font.md) property does nothing if the button has no title or alternate title. If the button cell has a key equivalent, its font is not changed, but the key equivalent’s font size is changed to match the new title font.

## Topics

### Creating the Cell

- [init(coder:)](nsbuttoncell/init%28coder_%29.md)
- [init(imageCell:)](nsbuttoncell/init%28imagecell_%29.md)
- [init(textCell:)](nsbuttoncell/init%28textcell_%29.md)

### Setting Titles

- [alternateTitle](nsbuttoncell/alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](nsbuttoncell/attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](nsbuttoncell/attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [title](nsbuttoncell/title.md): The title displayed on the button when it’s in its normal state.

### Managing Images

- [alternateImage](nsbuttoncell/alternateimage.md): The image the button displays in its alternate state.
- [imagePosition](nsbuttoncell/imageposition.md): The position of the button’s image relative to its title.
- [imageScaling](nsbuttoncell/imagescaling.md): The scale factor for the button’s image.

### Managing the Repeat Interval

- [getPeriodicDelay(\_:interval:)](nsbuttoncell/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay(\_:interval:)](nsbuttoncell/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval for the button.

### Managing the Key Equivalent

- [keyEquivalent](nsbuttoncell/keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](nsbuttoncell/keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](nsbuttoncell/keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont(\_:size:)](nsbuttoncell/setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.

### Managing Graphics Attributes

- [backgroundColor](nsbuttoncell/backgroundcolor.md): The background color of the button.
- [bezelStyle](nsbuttoncell/bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](nsbuttoncell/gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](nsbuttoncell/imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [isOpaque](nsbuttoncell/isopaque.md): A Boolean value that indicates if the button is opaque.
- [isTransparent](nsbuttoncell/istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](nsbuttoncell/showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

### Displaying the Cell

- [highlightsBy](nsbuttoncell/highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [setButtonType(\_:)](nsbuttoncell/setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.
- [showsStateBy](nsbuttoncell/showsstateby.md): The flags that indicate how the button cell shows its alternate state.

### Managing the Sound

- [sound](nsbuttoncell/sound.md): The sound that’s played when the user presses the button (that is during a mouse-down event).

### Handling Events and Action Messages

- [mouseEntered(with:)](nsbuttoncell/mouseentered%28with_%29.md): Draws the button’s border.
- [mouseExited(with:)](nsbuttoncell/mouseexited%28with_%29.md): Erases the button’s border.
- [performClick(\_:)](nsbuttoncell/performclick%28__%29.md): Simulates the user clicking the button with the pointer.

### Drawing the Button Content

- [drawBezel(withFrame:in:)](nsbuttoncell/drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawImage(\_:withFrame:in:)](nsbuttoncell/drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.
- [drawTitle(\_:withFrame:in:)](nsbuttoncell/drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

### Constants

- [NSButton.BezelStyle](nsbutton/bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSButton.ButtonType](nsbutton/buttontype.md): Button types that you can specify using [setButtonType(\_:)](nsbuttoncell/setbuttontype%28__%29.md).
- [NSButton.GradientType](nsbutton/gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](nsbuttoncell/gradienttype.md) property.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Inherited By

- [NSMenuItemCell](nsmenuitemcell.md)

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

# NSButtonCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that defines the user interface of a button or other clickable region of a view.

## Declaration

```objectivec
@interface NSButtonCell : NSActionCell
```

<a id="overview"></a>

## Overview

Setting the integer, float, double, or object value of an `NSButtonCell` object results in a call to [state](nscell/state.md) with the value converted to integer. In the case of [objectValue](nscell/objectvalue.md), `nil` is equivalent to `0`, and a non-`nil` object that doesn’t respond to [intValue](nscell/intvalue.md) sets the state to `1`. Otherwise, the state is set to the object’s [intValue](nscell/intvalue.md). Similarly, for most button types, querying the integer, float, double, or object value of an `NSButtonCell` returns the current state in the requested representation. In the case of [objectValue](nscell/objectvalue.md), this is an `NSNumber` containing [true](https://developer.apple.com/documentation/swift/true) for on, [false](https://developer.apple.com/documentation/swift/false) for off, and integer value `-1` for the mixed state. For accelerator buttons (type [NSAcceleratorButton](nsacceleratorbutton.md) or [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md)) on systems that support pressure sensitivity, querying [doubleValue](nscontrol/doublevalue.md) returns the amount of pressure applied while pressing the button.

The configuration of an [NSButtonCell](nsbuttoncell.md) object controls how the button object appears and behaves, but it’s [NSButton](nsbutton.md) that sends a message when the control is clicked. For more information on the behavior of [NSButtonCell](nsbuttoncell.md), see the [NSButton](nsbutton.md) and [NSMatrix](nsmatrix.md) class specifications.

<a id="Exceptions"></a>

### Exceptions

In its implementation of the [compare:](nscell/compare%28__%29.md) method (declared in `NSCell`), `NSButtonCell` raises an `NSBadComparisonException` if the `otherCell` argument is not of the `NSButtonCell` class.

<a id="Fonts"></a>

### Fonts

Setting the [font](nscell/font.md) property does nothing if the button has no title or alternate title. If the button cell has a key equivalent, its font is not changed, but the key equivalent’s font size is changed to match the new title font.

## Topics

### Creating the Cell

- [initWithCoder:](nsbuttoncell/init%28coder_%29.md)
- [initImageCell:](nsbuttoncell/init%28imagecell_%29.md)
- [initTextCell:](nsbuttoncell/init%28textcell_%29.md)

### Setting Titles

- [alternateMnemonic](nsbuttoncell/alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](nsbuttoncell/alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](nsbuttoncell/alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](nsbuttoncell/attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](nsbuttoncell/attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](nsbuttoncell/setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](nsbuttoncell/setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [setTitleWithMnemonic:](nsbuttoncell/settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [title](nsbuttoncell/title.md): The title displayed on the button when it’s in its normal state.

### Managing Images

- [alternateImage](nsbuttoncell/alternateimage.md): The image the button displays in its alternate state.
- [imagePosition](nsbuttoncell/imageposition.md): The position of the button’s image relative to its title.
- [imageScaling](nsbuttoncell/imagescaling.md): The scale factor for the button’s image.

### Managing the Repeat Interval

- [getPeriodicDelay:interval:](nsbuttoncell/getperiodicdelay%28__interval_%29.md): Returns by reference the delay and interval periods for a continuous button.
- [setPeriodicDelay:interval:](nsbuttoncell/setperiodicdelay%28__interval_%29.md): Sets the message delay and interval for the button.

### Managing the Key Equivalent

- [keyEquivalent](nsbuttoncell/keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](nsbuttoncell/keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](nsbuttoncell/keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont:size:](nsbuttoncell/setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.

### Managing Graphics Attributes

- [backgroundColor](nsbuttoncell/backgroundcolor.md): The background color of the button.
- [bezelStyle](nsbuttoncell/bezelstyle.md): The appearance of the button’s border, if it has one.
- [gradientType](nsbuttoncell/gradienttype.md): Deprecated. The gradient of the button’s border.
- [imageDimsWhenDisabled](nsbuttoncell/imagedimswhendisabled.md): A Boolean value that indicates if the button’s image and text appear “dim” when the button is disabled.
- [opaque](nsbuttoncell/isopaque.md): A Boolean value that indicates if the button is opaque.
- [transparent](nsbuttoncell/istransparent.md): A Boolean value that indicates if the button is transparent.
- [showsBorderOnlyWhileMouseInside](nsbuttoncell/showsborderonlywhilemouseinside.md): A Boolean value that indicates if the button displays its border only when the pointer is over it.

### Displaying the Cell

- [highlightsBy](nsbuttoncell/highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [setButtonType:](nsbuttoncell/setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.
- [showsStateBy](nsbuttoncell/showsstateby.md): The flags that indicate how the button cell shows its alternate state.

### Managing the Sound

- [sound](nsbuttoncell/sound.md): The sound that’s played when the user presses the button (that is during a mouse-down event).

### Handling Events and Action Messages

- [mouseEntered:](nsbuttoncell/mouseentered%28with_%29.md): Draws the button’s border.
- [mouseExited:](nsbuttoncell/mouseexited%28with_%29.md): Erases the button’s border.
- [performClick:](nsbuttoncell/performclick%28__%29.md): Simulates the user clicking the button with the pointer.

### Drawing the Button Content

- [drawBezelWithFrame:inView:](nsbuttoncell/drawbezel%28withframe_in_%29.md): Draws the border of the button using the current bezel style.
- [drawImage:withFrame:inView:](nsbuttoncell/drawimage%28__withframe_in_%29.md): Draws the image associated with the button’s current state.
- [drawTitle:withFrame:inView:](nsbuttoncell/drawtitle%28__withframe_in_%29.md): Draws the button’s title centered vertically in a specified rectangle.

### Constants

- [NSBezelStyle](nsbutton/bezelstyle-swift.enum.md): The set of bezel styles to style buttons in your app.
- [NSButtonType](nsbutton/buttontype.md): Button types that you can specify using [setButtonType:](nsbuttoncell/setbuttontype%28__%29.md).
- [NSGradientType](nsbutton/gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](nsbuttoncell/gradienttype.md) property.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Inherited By

- [NSMenuItemCell](nsmenuitemcell.md)
