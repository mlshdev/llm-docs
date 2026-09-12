> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/tickmarkposition-swift.enum](https://developer.apple.com/documentation/appkit/nsslider/tickmarkposition-swift.enum)

# NSSlider.TickMarkPosition (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The position where a linear slider’s tick marks appear (above, below, leading, or trailing).

## Declaration

```swift
enum TickMarkPosition
```

<a id="overview"></a>

## Overview

Use these constants for setting [tickMarkPosition](../nsslidercell/tickmarkposition.md).

## Topics

### Configuring Horizontal Sliders

- [NSSlider.TickMarkPosition.below](tickmarkposition-swift.enum/below.md): A constant indicating that tick marks are displayed below the slider.
- [NSSlider.TickMarkPosition.above](tickmarkposition-swift.enum/above.md): A constant indicating that tick marks are displayed above the slider.

### Configuring Vertical Sliders

- [leading](tickmarkposition-swift.enum/leading.md): A constant indicating that tick marks are displayed on the leading side of the slider.
- [trailing](tickmarkposition-swift.enum/trailing.md): A constant indicating that tick marks are displayed on the trailing side of the slider.

### Initializers

- [init(rawValue:)](tickmarkposition-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [tickMarkValue(at:)](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

# NSTickMarkPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The position where a linear slider’s tick marks appear (above, below, leading, or trailing).

## Declaration

```objectivec
enum NSTickMarkPosition : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these constants for setting [tickMarkPosition](../nsslidercell/tickmarkposition.md).

## Topics

### Configuring Horizontal Sliders

- [NSTickMarkPositionBelow](tickmarkposition-swift.enum/below.md): A constant indicating that tick marks are displayed below the slider.
- [NSTickMarkPositionAbove](tickmarkposition-swift.enum/above.md): A constant indicating that tick marks are displayed above the slider.

### Configuring Vertical Sliders

- [NSTickMarkPositionLeading](tickmarkposition-swift.enum/leading.md): A constant indicating that tick marks are displayed on the leading side of the slider.
- [NSTickMarkPositionTrailing](tickmarkposition-swift.enum/trailing.md): A constant indicating that tick marks are displayed on the trailing side of the slider.

### Constants

- [NSTickMarkBelow](../nstickmarkbelow.md): Deprecated.
- [NSTickMarkAbove](../nstickmarkabove.md): Deprecated.
- [NSTickMarkLeft](../nstickmarkleft.md): Deprecated.
- [NSTickMarkRight](../nstickmarkright.md): Deprecated.

## See Also

### Managing tick marks

- [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [tickMarkValueAtIndex:](tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.
