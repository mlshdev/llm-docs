> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfield](https://developer.apple.com/documentation/appkit/nstokenfield)

# NSTokenField (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field that converts text into visually distinct tokens.

## Declaration

```swift
class NSTokenField
```

<a id="overview"></a>

## Overview

Use a token field when you want typed text to be transformed into “tokens”, which are visually distinct elements in the text field interface. For example, you might use a token field in a mail app to display email addresses for individual users. The distinct appearance of tokens makes them easy for users to distinguish from surrounding text.

`NSTokenField` uses an [NSTokenFieldCell](nstokenfieldcell.md) to implement much of the control’s functionality. `NSTokenField` provides cover methods for most methods of `NSTokenFieldCell`, which invoke the corresponding cell method.

> **Notes**

>  In OS X v10.4 and earlier, represented objects associated with token fields had to conform to [NSCoding](https://developer.apple.com/documentation/foundation/nscoding). Starting with OS X v10.5, they no longer need to.
>
> In OS X v10.4, `NSTokenField` trims whitespace around tokens but it does not trim whitespace in macOS versions 10.5.0 and 10.5.1. In OS X v10.5.2, you get whitespace-trimming behavior by either linking against the v10.4 binary or linking against the v10.5 binary and *not* implementing the [tokenField(\_:representedObjectForEditing:)](nstokenfielddelegate/tokenfield%28__representedobjectforediting_%29.md) method. If you do not want the whitespace-trimming behavior, link against the v10.5 binary and implement this method, returning the editing string if you have no represented object.

## Topics

### Configuring the Token Style

- [tokenStyle](nstokenfield/tokenstyle-swift.property.md): The token style of the receiver.

### Configuring the Tokenizing Character Set

- [tokenizingCharacterSet](nstokenfield/tokenizingcharacterset.md): The recevier’s tokenizing character set to `characterSet`.
- [defaultTokenizingCharacterSet](nstokenfield/defaulttokenizingcharacterset.md): Returns the default tokenizing character set.

### Configuring the Completion Delay

- [completionDelay](nstokenfield/completiondelay.md): The receiver’s completion delay.
- [defaultCompletionDelay](nstokenfield/defaultcompletiondelay.md): Returns the default completion delay.

### Getting and Setting the Delegate

- [delegate](nstokenfield/delegate.md): Returns the token field’s delegate.

### Enumerations

- [NSTokenField.TokenStyle](nstokenfield/tokenstyle-swift.enum.md): The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell(\_:styleForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityNavigableStaticText](nsaccessibilitynavigablestatictext.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilityStaticText](nsaccessibilitystatictext.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTextContent](nstextcontent.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSTokenField (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field that converts text into visually distinct tokens.

## Declaration

```objectivec
@interface NSTokenField : NSTextField
```

<a id="overview"></a>

## Overview

Use a token field when you want typed text to be transformed into “tokens”, which are visually distinct elements in the text field interface. For example, you might use a token field in a mail app to display email addresses for individual users. The distinct appearance of tokens makes them easy for users to distinguish from surrounding text.

`NSTokenField` uses an [NSTokenFieldCell](nstokenfieldcell.md) to implement much of the control’s functionality. `NSTokenField` provides cover methods for most methods of `NSTokenFieldCell`, which invoke the corresponding cell method.

> **Notes**

>  In OS X v10.4 and earlier, represented objects associated with token fields had to conform to [NSCoding](https://developer.apple.com/documentation/foundation/nscoding). Starting with OS X v10.5, they no longer need to.
>
> In OS X v10.4, `NSTokenField` trims whitespace around tokens but it does not trim whitespace in macOS versions 10.5.0 and 10.5.1. In OS X v10.5.2, you get whitespace-trimming behavior by either linking against the v10.4 binary or linking against the v10.5 binary and *not* implementing the [tokenField:representedObjectForEditingString:](nstokenfielddelegate/tokenfield%28__representedobjectforediting_%29.md) method. If you do not want the whitespace-trimming behavior, link against the v10.5 binary and implement this method, returning the editing string if you have no represented object.

## Topics

### Configuring the Token Style

- [tokenStyle](nstokenfield/tokenstyle-swift.property.md): The token style of the receiver.

### Configuring the Tokenizing Character Set

- [tokenizingCharacterSet](nstokenfield/tokenizingcharacterset.md): The recevier’s tokenizing character set to `characterSet`.
- [defaultTokenizingCharacterSet](nstokenfield/defaulttokenizingcharacterset.md): Returns the default tokenizing character set.

### Configuring the Completion Delay

- [completionDelay](nstokenfield/completiondelay.md): The receiver’s completion delay.
- [defaultCompletionDelay](nstokenfield/defaultcompletiondelay.md): Returns the default completion delay.

### Getting and Setting the Delegate

- [delegate](nstokenfield/delegate.md): Returns the token field’s delegate.

### Enumerations

- [NSTokenStyle](nstokenfield/tokenstyle-swift.enum.md): The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell:styleForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Relationships

### Inherits From

- [NSTextField](nstextfield.md)
