> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsactioncell](https://developer.apple.com/documentation/appkit/nsactioncell)

# NSActionCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An active area inside a control.

## Declaration

```swift
class NSActionCell
```

<a id="overview"></a>

## Overview

An [NSActionCell](nsactioncell.md) does three things: it displays text or an icon; it provides the target object and action method used by its [NSControl](nscontrol.md) object; and it handles mouse (cursor) tracking by properly highlighting its area and sending action messages to its target based on cursor movement.

The [controlView](nscell/controlview.md) of an [NSActionCell](nsactioncell.md) is the view in which the receiver was last drawn.

<a id="Obtaining-and-Setting-Cell-Values"></a>

### Obtaining and Setting Cell Values

The [floatValue](nscell/floatvalue.md), [intValue](nscell/intvalue.md), and [integerValue](nscell/integervalue.md) methods return the value with their corresponding types after validating any editing of cell content. If the cell is not a text-type cell or the cell value is not scannable to the appropriate type, these return 0.

The [stringValue](nscell/stringvalue.md) method returns the receiver’s value as a string object as converted by the cell’s formatter, if one exists. If no formatter exists and the value is an [NSString](https://developer.apple.com/documentation/foundation/nsstring), returns the value as a plain, attributed, or localized formatted string. If the value is not an `NSString` or cannot be converted to one, returns an empty string. The method supplements the [NSCell](nscell.md) implementation by validating and retaining any editing changes being made to cell text.

Calling `setObjectValue:` discards any editing of the receiver’s text and sets its object value to the specified object. After doing so, if the object value is different from what it was before the method was invoked, the method marks the receiver as needing redisplay.

<a id="Configuring-an-NSActionCell-Object"></a>

### Configuring an NSActionCell Object

The `NSActionCell` implementation of [setFloatingPointFormat:left:right:](nscell/setfloatingpointformat_left_right_.md) supplements the `NSCell` implementation by marking the receiver as needing redisplay after discarding any editing changes that were being made to cell text.

## Topics

### Assigning the Target and Action

- [action](nsactioncell/action.md): Returns the receiver’s action-message selector.
- [target](nsactioncell/target.md): Returns the receiver’s target object.

### Assigning a Tag

- [tag](nsactioncell/tag.md): Returns the receiver’s tag.

## Relationships

### Inherits From

- [NSCell](nscell.md)

### Inherited By

- [NSButtonCell](nsbuttoncell.md)
- [NSDatePickerCell](nsdatepickercell.md)
- [NSFormCell](nsformcell.md)
- [NSLevelIndicatorCell](nslevelindicatorcell.md)
- [NSPathCell](nspathcell.md)
- [NSSegmentedCell](nssegmentedcell.md)
- [NSSliderCell](nsslidercell.md)
- [NSStepperCell](nssteppercell.md)
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

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSControl](nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.
- [NSCell](nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.

# NSActionCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An active area inside a control.

## Declaration

```objectivec
@interface NSActionCell : NSCell
```

<a id="overview"></a>

## Overview

An [NSActionCell](nsactioncell.md) does three things: it displays text or an icon; it provides the target object and action method used by its [NSControl](nscontrol.md) object; and it handles mouse (cursor) tracking by properly highlighting its area and sending action messages to its target based on cursor movement.

The [controlView](nscell/controlview.md) of an [NSActionCell](nsactioncell.md) is the view in which the receiver was last drawn.

<a id="Obtaining-and-Setting-Cell-Values"></a>

### Obtaining and Setting Cell Values

The [floatValue](nscell/floatvalue.md), [intValue](nscell/intvalue.md), and [integerValue](nscell/integervalue.md) methods return the value with their corresponding types after validating any editing of cell content. If the cell is not a text-type cell or the cell value is not scannable to the appropriate type, these return 0.

The [stringValue](nscell/stringvalue.md) method returns the receiver’s value as a string object as converted by the cell’s formatter, if one exists. If no formatter exists and the value is an [NSString](https://developer.apple.com/documentation/foundation/nsstring), returns the value as a plain, attributed, or localized formatted string. If the value is not an `NSString` or cannot be converted to one, returns an empty string. The method supplements the [NSCell](nscell.md) implementation by validating and retaining any editing changes being made to cell text.

Calling `setObjectValue:` discards any editing of the receiver’s text and sets its object value to the specified object. After doing so, if the object value is different from what it was before the method was invoked, the method marks the receiver as needing redisplay.

<a id="Configuring-an-NSActionCell-Object"></a>

### Configuring an NSActionCell Object

The `NSActionCell` implementation of [setFloatingPointFormat:left:right:](nscell/setfloatingpointformat_left_right_.md) supplements the `NSCell` implementation by marking the receiver as needing redisplay after discarding any editing changes that were being made to cell text.

## Topics

### Assigning the Target and Action

- [action](nsactioncell/action.md): Returns the receiver’s action-message selector.
- [target](nsactioncell/target.md): Returns the receiver’s target object.

### Assigning a Tag

- [tag](nsactioncell/tag.md): Returns the receiver’s tag.

## Relationships

### Inherits From

- [NSCell](nscell.md)

### Inherited By

- [NSButtonCell](nsbuttoncell.md)
- [NSDatePickerCell](nsdatepickercell.md)
- [NSFormCell](nsformcell.md)
- [NSLevelIndicatorCell](nslevelindicatorcell.md)
- [NSPathCell](nspathcell.md)
- [NSSegmentedCell](nssegmentedcell.md)
- [NSSliderCell](nsslidercell.md)
- [NSStepperCell](nssteppercell.md)
- [NSTextFieldCell](nstextfieldcell.md)

## See Also

### View fundamentals

- [NSView](nsview.md): The infrastructure for drawing, printing, and handling events in an app.
- [NSControl](nscontrol.md): A specialized view, such as a button or text field, that notifies your app of relevant events using the target-action design pattern.
- [NSCell](nscell.md): A mechanism for displaying text or images in a view object without the overhead of a full [NSView](nsview.md) subclass.
