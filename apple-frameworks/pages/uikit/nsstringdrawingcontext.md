> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingcontext](https://developer.apple.com/documentation/uikit/nsstringdrawingcontext)

# NSStringDrawingContext (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages metrics for drawing attributed strings.

## Declaration

```swift
class NSStringDrawingContext
```

<a id="overview"></a>

## Overview

Prior to drawing, you can create an instance of this class and use it to specify the minimum scale factor and tracking adjustments for a string. After drawing, you can retrieve the actual values that were used during drawing.

To use this class, allocate and initialize a new instance, set the minimum values, and pass your object to one of the corresponding [NSAttributedString](../foundation/nsattributedstring.md) methods that take the context object as a parameter. Upon completion of drawing, you can use the actual drawing values to make adjustments or record where the string was actually drawn.

## Topics

### Accessing the scale factors

- [minimumScaleFactor](nsstringdrawingcontext/minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
- [actualScaleFactor](nsstringdrawingcontext/actualscalefactor.md): The actual scale factor that the system applied to the font during drawing.

### Getting the drawing bounds

- [totalBounds](nsstringdrawingcontext/totalbounds.md): The most recent bounding rectangle that the system used to draw the string.

### Deprecated

- [minimumTrackingAdjustment](nsstringdrawingcontext/minimumtrackingadjustment.md): Deprecated. The smallest amount of space, in points, to maintain between characters.
- [actualTrackingAdjustment](nsstringdrawingcontext/actualtrackingadjustment.md): Deprecated. The actual tracking value that the system applied during drawing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Strings

- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.

# NSStringDrawingContext (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that manages metrics for drawing attributed strings.

## Declaration

```objectivec
@interface NSStringDrawingContext : NSObject
```

<a id="overview"></a>

## Overview

Prior to drawing, you can create an instance of this class and use it to specify the minimum scale factor and tracking adjustments for a string. After drawing, you can retrieve the actual values that were used during drawing.

To use this class, allocate and initialize a new instance, set the minimum values, and pass your object to one of the corresponding [NSAttributedString](../foundation/nsattributedstring.md) methods that take the context object as a parameter. Upon completion of drawing, you can use the actual drawing values to make adjustments or record where the string was actually drawn.

## Topics

### Accessing the scale factors

- [minimumScaleFactor](nsstringdrawingcontext/minimumscalefactor.md): The scale factor that determines the smallest font size to use during drawing.
- [actualScaleFactor](nsstringdrawingcontext/actualscalefactor.md): The actual scale factor that the system applied to the font during drawing.

### Getting the drawing bounds

- [totalBounds](nsstringdrawingcontext/totalbounds.md): The most recent bounding rectangle that the system used to draw the string.

### Deprecated

- [minimumTrackingAdjustment](nsstringdrawingcontext/minimumtrackingadjustment.md): Deprecated. The smallest amount of space, in points, to maintain between characters.
- [actualTrackingAdjustment](nsstringdrawingcontext/actualtrackingadjustment.md): Deprecated. The actual tracking value that the system applied during drawing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Strings

- [NSStringDrawingOptions](nsstringdrawingoptions.md): Constants that specify the rendering options for drawing a string.
- [UIBaselineAdjustment](uibaselineadjustment.md): Vertical adjustment options.
- [UILineBreakMode](uilinebreakmode.md): Deprecated. Options for wrapping and truncating text.
- [UITextAlignment](uitextalignment.md): Deprecated. Options for aligning text horizontally.
- [UITextAttributeFont](uitextattributefont.md): Deprecated. The key to the font in a text attributes dictionary.
- [UITextAttributeTextColor](uitextattributetextcolor.md): Deprecated. The key to the text color in a text attributes dictionary.
- [UITextAttributeTextShadowColor](uitextattributetextshadowcolor.md): Deprecated. The key to the text shadow color in a text attributes dictionary.
- [UITextAttributeTextShadowOffset](uitextattributetextshadowoffset.md): Deprecated. The key to the offset for the text shadow in a text attributes dictionary.
