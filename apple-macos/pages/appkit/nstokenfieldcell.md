> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfieldcell](https://developer.apple.com/documentation/appkit/nstokenfieldcell)

# NSTokenFieldCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field cell subclass that enables tokenized editing of an array of objects.

## Declaration

```swift
class NSTokenFieldCell
```

<a id="overview"></a>

## Overview

[NSTokenFieldCell](nstokenfieldcell.md) is a subclass of [NSTextFieldCell](nstextfieldcell.md) that provides tokenized editing of an array of objects similar to the address field in the Mail app. The objects may be strings or objects that can be represented as strings. A single token field cell can be presented in an [NSTokenField](nstokenfield.md) control.

## Topics

### Managing the Token Style

- [tokenStyle](nstokenfieldcell/tokenstyle.md): The token style of the receiver.

### Managing the Tokenizing Character Set

- [defaultTokenizingCharacterSet](nstokenfieldcell/defaulttokenizingcharacterset.md): Returns the default tokenizing character set.
- [tokenizingCharacterSet](nstokenfieldcell/tokenizingcharacterset.md): The receiver’s tokenizing character set to a given character set.

### Configuring the Completion Delay

- [completionDelay](nstokenfieldcell/completiondelay.md): The receiver’s completion delay to a given delay.
- [defaultCompletionDelay](nstokenfieldcell/defaultcompletiondelay.md): Returns the default completion delay.

### Managing the Delegate

- [delegate](nstokenfieldcell/delegate.md): The receiver’s delegate.

### Constants

- [NSTokenField.TokenStyle](nstokenfield/tokenstyle-swift.enum.md): The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell(\_:styleForRepresentedObject:)](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

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

### Cell

- [NSTokenFieldCellDelegate](nstokenfieldcelldelegate.md): A set of optional methods implemented by delegates of [NSTokenFieldCell](nstokenfieldcell.md) objects to work with tokenized strings.

# NSTokenFieldCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field cell subclass that enables tokenized editing of an array of objects.

## Declaration

```objectivec
@interface NSTokenFieldCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

[NSTokenFieldCell](nstokenfieldcell.md) is a subclass of [NSTextFieldCell](nstextfieldcell.md) that provides tokenized editing of an array of objects similar to the address field in the Mail app. The objects may be strings or objects that can be represented as strings. A single token field cell can be presented in an [NSTokenField](nstokenfield.md) control.

## Topics

### Managing the Token Style

- [tokenStyle](nstokenfieldcell/tokenstyle.md): The token style of the receiver.

### Managing the Tokenizing Character Set

- [defaultTokenizingCharacterSet](nstokenfieldcell/defaulttokenizingcharacterset.md): Returns the default tokenizing character set.
- [tokenizingCharacterSet](nstokenfieldcell/tokenizingcharacterset.md): The receiver’s tokenizing character set to a given character set.

### Configuring the Completion Delay

- [completionDelay](nstokenfieldcell/completiondelay.md): The receiver’s completion delay to a given delay.
- [defaultCompletionDelay](nstokenfieldcell/defaultcompletiondelay.md): Returns the default completion delay.

### Managing the Delegate

- [delegate](nstokenfieldcell/delegate.md): The receiver’s delegate.

### Constants

- [NSTokenStyle](nstokenfield/tokenstyle-swift.enum.md): The NSTokenStyle constants define how tokens are displayed and editable in the `NSTokenFieldCell`. These values are used by [tokenStyle](nstokenfieldcell/tokenstyle.md) and the delegate method [tokenFieldCell:styleForRepresentedObject:](nstokenfieldcelldelegate/tokenfieldcell%28__styleforrepresentedobject_%29.md).

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### Cell

- [NSTokenFieldCellDelegate](nstokenfieldcelldelegate.md): A set of optional methods implemented by delegates of [NSTokenFieldCell](nstokenfieldcell.md) objects to work with tokenized strings.
