> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingcontext](https://developer.apple.com/documentation/appkit/nsstringdrawingcontext)

# NSStringDrawingContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that manages metrics for drawing attributed strings.

## Declaration

```swift
class NSStringDrawingContext
```

<a id="overview"></a>

## Overview

Prior to drawing, you can create an instance of this class and use it to specify the minimum scale factor and tracking adjustments for a string. After drawing, you can retrieve the actual values that were used during drawing.

To use this class, allocate and initialize a new instance, set the minimum values, and pass your object to one of the corresponding [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) methods that take the context object as a parameter. Upon completion of drawing, you can use the actual drawing values to make adjustments or record where the string was actually drawn.

## Topics

### Accessing the scale factors

- [minimumScaleFactor](nsstringdrawingcontext/minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
- [actualScaleFactor](nsstringdrawingcontext/actualscalefactor.md): The actual scale factor that the system applied to the font during drawing.

### Getting the drawing bounds

- [totalBounds](nsstringdrawingcontext/totalbounds.md): The most recent bounding rectangle that the system used to draw the string.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Strings

- [NSStringDrawingOptions](https://developer.apple.com/documentation/uikit/nsstringdrawingoptions): Constants that specify the rendering options for drawing a string.

# NSStringDrawingContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.11+

An object that manages metrics for drawing attributed strings.

## Declaration

```objectivec
@interface NSStringDrawingContext : NSObject
```

<a id="overview"></a>

## Overview

Prior to drawing, you can create an instance of this class and use it to specify the minimum scale factor and tracking adjustments for a string. After drawing, you can retrieve the actual values that were used during drawing.

To use this class, allocate and initialize a new instance, set the minimum values, and pass your object to one of the corresponding [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) methods that take the context object as a parameter. Upon completion of drawing, you can use the actual drawing values to make adjustments or record where the string was actually drawn.

## Topics

### Accessing the scale factors

- [minimumScaleFactor](nsstringdrawingcontext/minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
- [actualScaleFactor](nsstringdrawingcontext/actualscalefactor.md): The actual scale factor that the system applied to the font during drawing.

### Getting the drawing bounds

- [totalBounds](nsstringdrawingcontext/totalbounds.md): The most recent bounding rectangle that the system used to draw the string.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Strings

- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
