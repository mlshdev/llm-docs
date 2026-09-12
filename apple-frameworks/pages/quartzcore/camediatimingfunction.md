> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfunction](https://developer.apple.com/documentation/quartzcore/camediatimingfunction)

# CAMediaTimingFunction (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A function that defines the pacing of an animation as a timing curve.

## Declaration

```swift
class CAMediaTimingFunction
```

<a id="overview"></a>

## Overview

`CAMediaTimingFunction` represents one segment of a function that defines the pacing of an animation as a timing curve. The function maps an input time normalized to the range `[0,1]` to an output time also in the range `[0,1]`.

You can create a media timing function by supplying your own cubic Bézier curve control points using the [init(controlPoints:\_:\_:\_:)](camediatimingfunction/init%28controlpoints_______%29.md) method or by using one of the predefined timing functions.

## Topics

### Creating Timing Functions

- [init(name:)](camediatimingfunction/init%28name_%29.md): Creates and returns a new instance of `CAMediaTimingFunction` configured with the predefined timing function specified by `name`.
- [init(controlPoints:\_:\_:\_:)](camediatimingfunction/init%28controlpoints_______%29.md): Returns an initialized timing function modeled as a cubic Bézier curve using the specified control points.

### Accessing the Control Points

- [getControlPoint(at:values:)](camediatimingfunction/getcontrolpoint%28at_values_%29.md): Returns the control point for the specified index.

### Constants

- [Predefined Timing Functions](predefined-timing-functions.md): Constants that specify system-provided timing functions, used by [init(name:)](camediatimingfunction/init%28name_%29.md).

### Initializers

- [init(coder:)](camediatimingfunction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation Timing

- [CACurrentMediaTime()](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

# CAMediaTimingFunction (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A function that defines the pacing of an animation as a timing curve.

## Declaration

```objectivec
@interface CAMediaTimingFunction : NSObject
```

<a id="overview"></a>

## Overview

`CAMediaTimingFunction` represents one segment of a function that defines the pacing of an animation as a timing curve. The function maps an input time normalized to the range `[0,1]` to an output time also in the range `[0,1]`.

You can create a media timing function by supplying your own cubic Bézier curve control points using the [initWithControlPoints::::](camediatimingfunction/init%28controlpoints_______%29.md) method or by using one of the predefined timing functions.

## Topics

### Creating Timing Functions

- [functionWithName:](camediatimingfunction/init%28name_%29.md): Creates and returns a new instance of `CAMediaTimingFunction` configured with the predefined timing function specified by `name`.
- [functionWithControlPoints::::](camediatimingfunction/functionwithcontrolpoints____.md): Creates and returns a new instance of `CAMediaTimingFunction` timing function modeled as a cubic Bézier curve using the specified control points.
- [initWithControlPoints::::](camediatimingfunction/init%28controlpoints_______%29.md): Returns an initialized timing function modeled as a cubic Bézier curve using the specified control points.

### Accessing the Control Points

- [getControlPointAtIndex:values:](camediatimingfunction/getcontrolpoint%28at_values_%29.md): Returns the control point for the specified index.

### Constants

- [Predefined Timing Functions](predefined-timing-functions.md): Constants that specify system-provided timing functions, used by [functionWithName:](camediatimingfunction/init%28name_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation Timing

- [CACurrentMediaTime](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.
