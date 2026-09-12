> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderinfo](https://developer.apple.com/documentation/coreimage/cirenderinfo)

# CIRenderInfo (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An encapsulation of a render task’s timing, passes, and pixels processed.

## Declaration

```swift
class CIRenderInfo
```

<a id="overview"></a>

## Overview

A `CIRenderInfo` object allows Xcode Quick Look to visualize the render graph with detailed timing information.

## Topics

### Instance Properties

- [kernelExecutionTime](cirenderinfo/kernelexecutiontime.md): The amount of time a render spent executing kernels.
- [passCount](cirenderinfo/passcount.md): The number of passes the render took.
- [pixelsProcessed](cirenderinfo/pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](cirenderinfo/kernelcompiletime.md)

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
- [CIRenderTask](cirendertask.md): A single render task.
- [CIRenderDestinationAlphaMode](cirenderdestinationalphamode.md): Different ways of representing alpha.

# CIRenderInfo (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An encapsulation of a render task’s timing, passes, and pixels processed.

## Declaration

```objectivec
@interface CIRenderInfo : NSObject
```

<a id="overview"></a>

## Overview

A `CIRenderInfo` object allows Xcode Quick Look to visualize the render graph with detailed timing information.

## Topics

### Instance Properties

- [kernelExecutionTime](cirenderinfo/kernelexecutiontime.md): The amount of time a render spent executing kernels.
- [passCount](cirenderinfo/passcount.md): The number of passes the render took.
- [pixelsProcessed](cirenderinfo/pixelsprocessed.md): The number of pixels the render produced executing kernels.
- [kernelCompileTime](cirenderinfo/kernelcompiletime.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Custom Render Destination

- [CIRenderDestination](cirenderdestination.md): A specification for configuring all attributes of a render task’s destination and issuing asynchronous render tasks.
- [CIRenderTask](cirendertask.md): A single render task.
- [CIRenderDestinationAlphaMode](cirenderdestinationalphamode.md): Different ways of representing alpha.
