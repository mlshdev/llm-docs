> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcomponentcell](https://developer.apple.com/documentation/appkit/nspathcomponentcell)

# NSPathComponentCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A component of a path.

## Declaration

```swift
class NSPathComponentCell
```

<a id="overview"></a>

## Overview

An `NSPathCell` object manages a collection of `NSPathComponentCell` objects, in conjunction with an `NSPathControl` object, to represent a path.

## Topics

### Setting the Image

- [image](nspathcomponentcell/image.md): The image displayed for this component cell.

### Setting the Path

- [url](nspathcomponentcell/url.md): The portion of the path from the root through the component represented by the receiver.

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

### Cells

- [NSPathCell](nspathcell.md): The user interface of a path control object.
- [NSPathCellDelegate](nspathcelldelegate.md): A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathControl.Style.popUp](nspathcontrol/style/popup.md).
- [NSPathControlItem](nspathcontrolitem.md)

# NSPathComponentCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

A component of a path.

## Declaration

```objectivec
@interface NSPathComponentCell : NSTextFieldCell
```

<a id="overview"></a>

## Overview

An `NSPathCell` object manages a collection of `NSPathComponentCell` objects, in conjunction with an `NSPathControl` object, to represent a path.

## Topics

### Setting the Image

- [image](nspathcomponentcell/image.md): The image displayed for this component cell.

### Setting the Path

- [URL](nspathcomponentcell/url.md): The portion of the path from the root through the component represented by the receiver.

## Relationships

### Inherits From

- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### Cells

- [NSPathCell](nspathcell.md): The user interface of a path control object.
- [NSPathCellDelegate](nspathcelldelegate.md): A set of methods that enable the delegate of a path cell object to customize the Open panel or pop-up menu of a path whose style is set to [NSPathStylePopUp](nspathcontrol/style/popup.md).
- [NSPathControlItem](nspathcontrolitem.md)
