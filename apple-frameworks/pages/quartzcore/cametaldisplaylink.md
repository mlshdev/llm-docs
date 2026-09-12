> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldisplaylink](https://developer.apple.com/documentation/quartzcore/cametaldisplaylink)

# CAMetalDisplayLink (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class your Metal app uses to register for callbacks to synchronize its animations for a display.

## Declaration

```swift
class CAMetalDisplayLink
```

<a id="overview"></a>

## Overview

[CAMetalDisplayLink](cametaldisplaylink.md) instances are a specialized way to interact with variable-rate displays when you need more control over the timing window to render your app’s frames. Controlling the timing window and rendering delay for frames can help you achieve smoother frame rates and avoid visual artifacts.

> **Tip**

>  When working with less visually intensive apps or apps which don’t use Metal, use [CADisplayLink](cadisplaylink.md) to handle variable refresh rates.

Your app initializes a new Metal display link by providing a target [CAMetalLayer](cametallayer.md). Set this instance’s [delegate](cametaldisplaylink/delegate.md) property to an implementation that encodes the rendering work for Metal to perform. With a set delegate, synchronize the display with a run loop to perform rendering on by calling the [add(to:forMode:)](cametaldisplaylink/add%28to_formode_%29.md) method.

Once you associate the display link with a run loop, the system calls the delegate’s [metalDisplayLink(\_:needsUpdate:)](cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md) method to request new frames. This method receives update requests based on the [preferredFrameRateRange](cametaldisplaylink/preferredframeraterange.md) and [preferredFrameLatency](cametaldisplaylink/preferredframelatency.md) of the display link. The system makes a best effort to make callbacks at appropriate times. Your app should complete any commits to the Metal device’s [MTLCommandQueue](../metal/mtlcommandqueue.md) for rendering the display layer before calling [present()](../metal/mtldrawable/present%28%29.md) on a drawable element.

Your app can disable notifications by setting [isPaused](cametaldisplaylink/ispaused.md) to `true`. When your app finishes with a display link, call [invalidate()](cametaldisplaylink/invalidate%28%29.md)to remove it from all run loops and the target.

## Topics

### Creating a Display Link

- [init(metalLayer:)](cametaldisplaylink/init%28metallayer_%29.md): Creates a display link for Metal from a Core Animation layer.

### Configuring a Display Link

- [preferredFrameRateRange](cametaldisplaylink/preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFrameLatency](cametaldisplaylink/preferredframelatency.md): The amount of time, in frames, your app requests to render a frame.
- [delegate](cametaldisplaylink/delegate.md): An instance of a type your app implements that responds to the system’s callbacks.

### Registering for Callbacks

- [add(to:forMode:)](cametaldisplaylink/add%28to_formode_%29.md): Registers the display link with a run loop.

### Pausing Callbacks

- [isPaused](cametaldisplaylink/ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

### Deregistering for callbacks

- [remove(from:forMode:)](cametaldisplaylink/remove%28from_formode_%29.md): Removes a mode’s display link from a run loop.
- [invalidate()](cametaldisplaylink/invalidate%28%29.md): Removes the display link from all run loops for all modes.

### Classes

- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.

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

### Animation Timing

- [CACurrentMediaTime()](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLink.Update](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.

# CAMetalDisplayLink (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A class your Metal app uses to register for callbacks to synchronize its animations for a display.

## Declaration

```objectivec
@interface CAMetalDisplayLink : NSObject
```

<a id="overview"></a>

## Overview

[CAMetalDisplayLink](cametaldisplaylink.md) instances are a specialized way to interact with variable-rate displays when you need more control over the timing window to render your app’s frames. Controlling the timing window and rendering delay for frames can help you achieve smoother frame rates and avoid visual artifacts.

> **Tip**

>  When working with less visually intensive apps or apps which don’t use Metal, use [CADisplayLink](cadisplaylink.md) to handle variable refresh rates.

Your app initializes a new Metal display link by providing a target [CAMetalLayer](cametallayer.md). Set this instance’s [delegate](cametaldisplaylink/delegate.md) property to an implementation that encodes the rendering work for Metal to perform. With a set delegate, synchronize the display with a run loop to perform rendering on by calling the [addToRunLoop:forMode:](cametaldisplaylink/add%28to_formode_%29.md) method.

Once you associate the display link with a run loop, the system calls the delegate’s [metalDisplayLink:needsUpdate:](cametaldisplaylinkdelegate/metaldisplaylink%28__needsupdate_%29.md) method to request new frames. This method receives update requests based on the [preferredFrameRateRange](cametaldisplaylink/preferredframeraterange.md) and [preferredFrameLatency](cametaldisplaylink/preferredframelatency.md) of the display link. The system makes a best effort to make callbacks at appropriate times. Your app should complete any commits to the Metal device’s [MTLCommandQueue](../metal/mtlcommandqueue.md) for rendering the display layer before calling [present](../metal/mtldrawable/present%28%29.md) on a drawable element.

Your app can disable notifications by setting [paused](cametaldisplaylink/ispaused.md) to `true`. When your app finishes with a display link, call [invalidate](cametaldisplaylink/invalidate%28%29.md)to remove it from all run loops and the target.

## Topics

### Creating a Display Link

- [initWithMetalLayer:](cametaldisplaylink/init%28metallayer_%29.md): Creates a display link for Metal from a Core Animation layer.

### Configuring a Display Link

- [preferredFrameRateRange](cametaldisplaylink/preferredframeraterange.md): A range of frequencies your app allows for frame updates, affecting how often the system invokes your delegate’s callback.
- [preferredFrameLatency](cametaldisplaylink/preferredframelatency.md): The amount of time, in frames, your app requests to render a frame.
- [delegate](cametaldisplaylink/delegate.md): An instance of a type your app implements that responds to the system’s callbacks.

### Registering for Callbacks

- [addToRunLoop:forMode:](cametaldisplaylink/add%28to_formode_%29.md): Registers the display link with a run loop.

### Pausing Callbacks

- [paused](cametaldisplaylink/ispaused.md): A Boolean value that indicates whether the system suspends the display link’s notifications to the target.

### Deregistering for callbacks

- [removeFromRunLoop:forMode:](cametaldisplaylink/remove%28from_formode_%29.md): Removes a mode’s display link from a run loop.
- [invalidate](cametaldisplaylink/invalidate%28%29.md): Removes the display link from all run loops for all modes.

### Classes

- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Animation Timing

- [CACurrentMediaTime](cacurrentmediatime%28%29.md): Returns the current absolute time, in seconds.
- [CAMediaTimingFunction](camediatimingfunction.md): A function that defines the pacing of an animation as a timing curve.
- [CAMediaTiming](camediatiming.md): Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
- [CADisplayLink](cadisplaylink.md): A timer object that allows your app to synchronize its drawing to the refresh rate of the display.
- [CAMetalDisplayLinkUpdate](cametaldisplaylink/update.md): Stores information about a single update from a Metal display link instance.
- [CAMetalDisplayLinkDelegate](cametaldisplaylinkdelegate.md): A protocol your app implements to respond to callbacks from Core Animation for a Metal display link.
