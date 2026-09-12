> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssecuretextfieldcell](https://developer.apple.com/documentation/appkit/nssecuretextfieldcell)

# NSSecureTextFieldCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field whose value is hidden from the user.

## Declaration

```swift
class NSSecureTextFieldCell
```

<a id="overview"></a>

## Overview

[NSSecureTextFieldCell](nssecuretextfieldcell.md) works with [NSSecureTextField](nssecuretextfield.md) and overrides the general cell use of the field editor to provide its own field editor, which doesn’t display text or allow the user to cut or copy its value.

## Topics

### Working with character echo

- [echosBullets](nssecuretextfieldcell/echosbullets.md): A Boolean that indicates whether the receiver echoes a bullet character rather than each character typed.

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

## See Also

### Cell

- [NSTextFieldCell](nstextfieldcell.md): An object that enhances the text display capabilities of a cell.

# NSSecureTextFieldCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A text field whose value is hidden from the user.

## Declaration

```objectivec
@interface NSSecureTextFieldCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

[NSSecureTextFieldCell](nssecuretextfieldcell.md) works with [NSSecureTextField](nssecuretextfield.md) and overrides the general cell use of the field editor to provide its own field editor, which doesn’t display text or allow the user to cut or copy its value.

## Topics

### Working with character echo

- [echosBullets](nssecuretextfieldcell/echosbullets.md): A Boolean that indicates whether the receiver echoes a bullet character rather than each character typed.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### Cell

- [NSTextFieldCell](nstextfieldcell.md): An object that enhances the text display capabilities of a cell.
