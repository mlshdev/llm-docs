> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch](https://developer.apple.com/documentation/appkit/nstouch)

# NSTouch (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

A snapshot of a particular touch at an instant in time.

## Declaration

```swift
class NSTouch
```

<a id="overview"></a>

## Overview

A touch event is not persistent throughout the touch. A touch creates new instances as it progresses. Use the identity property to follow a specific touch across its lifetime.

Touches do not have a corresponding screen location. The first touch of a touch collection latches to the view underlying the cursor using the same hit detection as mouse events. Additional touches on the same device latch to the same view. Latches remain on views until the user ends a touch or an event cancels it.

## Topics

### Getting the Touch Type

- [type](nstouch/type.md): A type of touch from a Touch Bar interaction.
- [NSTouch.TouchType](nstouch/touchtype.md): A bit mask identifying a direct or indirect touch type.
- [NSTouch.TouchTypeMask](nstouch/touchtypemask.md): A bit mask identifying a direct or indirect touch type.

### Using Touch Properties

- [identity](nstouch/identity.md): The changes to a particular touch during its lifetime.
- [phase](nstouch/phase-swift.property.md): The current phase of the touch.
- [NSTouch.Phase](nstouch/phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](nstouch/normalizedposition.md): The normalized position of the touch.
- [isResting](nstouch/isresting.md): The indicator for a resting touch.

### Using Touch Device Properties

- [device](nstouch/device.md): The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.
- [deviceSize](nstouch/devicesize.md): The range of the touch device in points, such as 72 ppi.

### Getting the Touch Location

- [location(in:)](nstouch/location%28in_%29.md): Indicates the location of the touch in the view’s coordinates.
- [previousLocation(in:)](nstouch/previouslocation%28in_%29.md): Indicates the previous location of the touch in the view’s coordinates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mouse, Keyboard, and Touch Events

- [NSEvent](nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.

# NSTouch (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

A snapshot of a particular touch at an instant in time.

## Declaration

```objectivec
@interface NSTouch : NSObject
```

<a id="overview"></a>

## Overview

A touch event is not persistent throughout the touch. A touch creates new instances as it progresses. Use the identity property to follow a specific touch across its lifetime.

Touches do not have a corresponding screen location. The first touch of a touch collection latches to the view underlying the cursor using the same hit detection as mouse events. Additional touches on the same device latch to the same view. Latches remain on views until the user ends a touch or an event cancels it.

## Topics

### Getting the Touch Type

- [type](nstouch/type.md): A type of touch from a Touch Bar interaction.
- [NSTouchType](nstouch/touchtype.md): A bit mask identifying a direct or indirect touch type.
- [NSTouchTypeMask](nstouch/touchtypemask.md): A bit mask identifying a direct or indirect touch type.

### Using Touch Properties

- [identity](nstouch/identity.md): The changes to a particular touch during its lifetime.
- [phase](nstouch/phase-swift.property.md): The current phase of the touch.
- [NSTouchPhase](nstouch/phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](nstouch/normalizedposition.md): The normalized position of the touch.
- [resting](nstouch/isresting.md): The indicator for a resting touch.

### Using Touch Device Properties

- [device](nstouch/device.md): The digitizer that generates the touch. Useful to distinguish touches emanating from multiple-device scenarios.
- [deviceSize](nstouch/devicesize.md): The range of the touch device in points, such as 72 ppi.

### Getting the Touch Location

- [locationInView:](nstouch/location%28in_%29.md): Indicates the location of the touch in the view’s coordinates.
- [previousLocationInView:](nstouch/previouslocation%28in_%29.md): Indicates the previous location of the touch in the view’s coordinates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Mouse, Keyboard, and Touch Events

- [NSEvent](nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.
