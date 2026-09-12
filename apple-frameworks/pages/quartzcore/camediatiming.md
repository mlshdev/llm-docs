> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatiming](https://developer.apple.com/documentation/quartzcore/camediatiming)

# CAMediaTiming (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.

## Declaration

```swift
protocol CAMediaTiming
```

<a id="overview"></a>

## Overview

Absolute time is defined as mach time converted to seconds. The [CACurrentMediaTime()](cacurrentmediatime%28%29.md) function is provided as a convenience for getting the current absolute time.

The conversion from parent time to local time has two stages:

1. Conversion to “active local time.” This includes the point at which the object appears in the parent object’s timeline and how fast it plays relative to the parent.
2. Conversion from “active local time” to “basic local time.” The timing model allows for objects to repeat their basic duration multiple times and, optionally, to play backwards before repeating.

## Topics

### Animation Start Time

- [beginTime](camediatiming/begintime.md): Specifies the begin time of the receiver in relation to its parent object, if applicable.
- [timeOffset](camediatiming/timeoffset.md): Specifies an additional time offset in active local time.

### Repeating Animations

- [repeatCount](camediatiming/repeatcount.md): Determines the number of times the animation will repeat.
- [repeatDuration](camediatiming/repeatduration.md): Determines how many seconds the animation will repeat for.

### Duration and Speed

- [duration](camediatiming/duration.md): Specifies the basic duration of the animation, in seconds.
- [speed](camediatiming/speed.md): Specifies how time is mapped to receiver’s time space from the parent time space.

### Playback Modes

- [autoreverses](camediatiming/autoreverses.md): Determines if the receiver plays in the reverse upon completion.
- [fillMode](camediatiming/fillmode.md): Determines if the receiver’s presentation is frozen or removed once its active duration has completed.

### Constants

- [Fill Modes](fill-modes.md): These constants determine how the timed object behaves once its active duration has completed. They are used with the [fillMode](camediatiming/fillmode.md) property.

## Relationships

### Conforming Types

- [CAAnimation](caanimation.md)
- [CAAnimationGroup](caanimationgroup.md)
- [CABasicAnimation](cabasicanimation.md)
- [CAEAGLLayer](caeagllayer.md)
- [CAEmitterCell](caemittercell.md)
- [CAEmitterLayer](caemitterlayer.md)
- [CAGradientLayer](cagradientlayer.md)
- [CAKeyframeAnimation](cakeyframeanimation.md)
- [CALayer](calayer.md)
- [CAMetalLayer](cametallayer.md)
- [CAOpenGLLayer](caopengllayer.md)
- [CAPropertyAnimation](capropertyanimation.md)
- [CAReplicatorLayer](careplicatorlayer.md)
- [CAScrollLayer](cascrolllayer.md)
- [CAShapeLayer](cashapelayer.md)
- [CASpringAnimation](caspringanimation.md)
- [CATextLayer](catextlayer.md)
- [CATiledLayer](catiledlayer.md)
- [CATransformLayer](catransformlayer.md)
- [CATransition](catransition.md)

## See Also

### Animation Timing

- [CACurrentMediaTime()](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

# CAMediaTiming (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.

## Declaration

```objectivec
@protocol CAMediaTiming
```

<a id="overview"></a>

## Overview

Absolute time is defined as mach time converted to seconds. The [CACurrentMediaTime](cacurrentmediatime%28%29.md) function is provided as a convenience for getting the current absolute time.

The conversion from parent time to local time has two stages:

1. Conversion to “active local time.” This includes the point at which the object appears in the parent object’s timeline and how fast it plays relative to the parent.
2. Conversion from “active local time” to “basic local time.” The timing model allows for objects to repeat their basic duration multiple times and, optionally, to play backwards before repeating.

## Topics

### Animation Start Time

- [beginTime](camediatiming/begintime.md): Specifies the begin time of the receiver in relation to its parent object, if applicable.
- [timeOffset](camediatiming/timeoffset.md): Specifies an additional time offset in active local time.

### Repeating Animations

- [repeatCount](camediatiming/repeatcount.md): Determines the number of times the animation will repeat.
- [repeatDuration](camediatiming/repeatduration.md): Determines how many seconds the animation will repeat for.

### Duration and Speed

- [duration](camediatiming/duration.md): Specifies the basic duration of the animation, in seconds.
- [speed](camediatiming/speed.md): Specifies how time is mapped to receiver’s time space from the parent time space.

### Playback Modes

- [autoreverses](camediatiming/autoreverses.md): Determines if the receiver plays in the reverse upon completion.
- [fillMode](camediatiming/fillmode.md): Determines if the receiver’s presentation is frozen or removed once its active duration has completed.

### Constants

- [Fill Modes](fill-modes.md): These constants determine how the timed object behaves once its active duration has completed. They are used with the [fillMode](camediatiming/fillmode.md) property.

## Relationships

### Conforming Types

- [CAAnimation](caanimation.md)
- [CAEmitterCell](caemittercell.md)
- [CALayer](calayer.md)

## See Also

### Animation Timing

- [CACurrentMediaTime](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.
