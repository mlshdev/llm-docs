> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylinkdelegate](https://developer.apple.com/documentation/quartzcore/cametaldisplaylinkdelegate)

# CAMetalDisplayLinkDelegate (Swift)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

## Declaration

```swift
protocol CAMetalDisplayLinkDelegate
```

<a id="overview"></a>

## Overview

Your app responds to the system on behalf of a [CAMetalDisplayLink](cametaldisplaylink.md) with this protocol. Implement a type that adopts the protocol and assign an instance of it to a display link’s [delegate](cametaldisplaylink/delegate.md) property.

## Topics

### Receiving Display Updates

- [metalDisplayLink(\_:needsUpdate:)](cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md): A method the system calls to notify your app when it plans to update the display.

## See Also

### Animation Timing

- [CACurrentMediaTime()](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.

# CAMetalDisplayLinkDelegate (Objective-C)

**Framework:** Core Animation  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

## Declaration

```objectivec
@protocol CAMetalDisplayLinkDelegate
```

<a id="overview"></a>

## Overview

Your app responds to the system on behalf of a [CAMetalDisplayLink](cametaldisplaylink.md) with this protocol. Implement a type that adopts the protocol and assign an instance of it to a display link’s [delegate](cametaldisplaylink/delegate.md) property.

## Topics

### Receiving Display Updates

- [metalDisplayLink:needsUpdate:](cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md): A method the system calls to notify your app when it plans to update the display.

## See Also

### Animation Timing

- [CACurrentMediaTime](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink](cametaldisplaylink.md): A class your Metal app uses to register for callbacks to synchronize its animations for a display.
- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
