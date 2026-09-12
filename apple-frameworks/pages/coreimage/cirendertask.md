> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirendertask](https://developer.apple.com/documentation/coreimage/cirendertask)

# CIRenderTask (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A single render task.

## Declaration

```swift
class CIRenderTask
```

<a id="overview"></a>

## Overview

A single render task issued in conjunction with [CIRenderDestination](cirenderdestination.md).

A `CIRenderTask` object appears in Xcode Quick Look as a graph.

## Topics

### Instance Methods

- [waitUntilCompleted()](cirendertask/waituntilcompleted%28%29.md): Waits until the [CIRenderTask](cirendertask.md) finishes and returns.

### Instance Properties

- [plannedPassCount](cirendertask/plannedpasscount.md)
- [plannedPeakMemory](cirendertask/plannedpeakmemory.md)
- [plannedPixelsOverdrawn](cirendertask/plannedpixelsoverdrawn.md)
- [plannedPixelsProcessed](cirendertask/plannedpixelsprocessed.md)

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

### Custom Render Destination

- [Generating an animation with a Core Image Render Destination](generating-an-animation-with-a-core-image-render-destination.md): Animate a filtered image to a Metal view in a SwiftUI app using a Core Image Render Destination.
- [CIRenderDestination](cirenderdestination.md): A specification for configuring all attributes of a render task’s destination and issuing asynchronous render tasks.
- [CIRenderInfo](cirenderinfo.md): An encapsulation of a render task’s timing, passes, and pixels processed.
- [CIRenderDestinationAlphaMode](cirenderdestinationalphamode.md): Different ways of representing alpha.

# CIRenderTask (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A single render task.

## Declaration

```objectivec
@interface CIRenderTask : NSObject
```

<a id="overview"></a>

## Overview

A single render task issued in conjunction with [CIRenderDestination](cirenderdestination.md).

A `CIRenderTask` object appears in Xcode Quick Look as a graph.

## Topics

### Instance Methods

- [waitUntilCompletedAndReturnError:](cirendertask/waituntilcompleted%28%29.md): Waits until the [CIRenderTask](cirendertask.md) finishes and returns.

### Instance Properties

- [plannedPassCount](cirendertask/plannedpasscount.md)
- [plannedPeakMemory](cirendertask/plannedpeakmemory.md)
- [plannedPixelsOverdrawn](cirendertask/plannedpixelsoverdrawn.md)
- [plannedPixelsProcessed](cirendertask/plannedpixelsprocessed.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Render Destination

- [CIRenderDestination](cirenderdestination.md): A specification for configuring all attributes of a render task’s destination and issuing asynchronous render tasks.
- [CIRenderInfo](cirenderinfo.md): An encapsulation of a render task’s timing, passes, and pixels processed.
- [CIRenderDestinationAlphaMode](cirenderdestinationalphamode.md): Different ways of representing alpha.
