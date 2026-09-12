> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirenderdestinationalphamode](https://developer.apple.com/documentation/coreimage/cirenderdestinationalphamode)

# CIRenderDestinationAlphaMode (Swift)

**Framework:** Core Image  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Different ways of representing alpha.

## Declaration

```swift
enum CIRenderDestinationAlphaMode
```

## Topics

### Enumeration Cases

- [CIRenderDestinationAlphaMode.none](cirenderdestinationalphamode/none.md): Designates a destination with no alpha compositing.
- [CIRenderDestinationAlphaMode.premultiplied](cirenderdestinationalphamode/premultiplied.md): Designates a destination that expects premultiplied alpha values.
- [CIRenderDestinationAlphaMode.unpremultiplied](cirenderdestinationalphamode/unpremultiplied.md): Designates a destination that expects non-premultiplied alpha values.

### Initializers

- [init(rawValue:)](cirenderdestinationalphamode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom Render Destination

- [Generating an animation with a Core Image Render Destination](generating-an-animation-with-a-core-image-render-destination.md): Animate a filtered image to a Metal view in a SwiftUI app using a Core Image Render Destination.
- [CIRenderDestination](cirenderdestination.md): A specification for configuring all attributes of a render task’s destination and issuing asynchronous render tasks.
- [CIRenderInfo](cirenderinfo.md): An encapsulation of a render task’s timing, passes, and pixels processed.
- [CIRenderTask](cirendertask.md): A single render task.

# CIRenderDestinationAlphaMode (Objective-C)

**Framework:** Core Image  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Different ways of representing alpha.

## Declaration

```objectivec
enum CIRenderDestinationAlphaMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [CIRenderDestinationAlphaNone](cirenderdestinationalphamode/none.md): Designates a destination with no alpha compositing.
- [CIRenderDestinationAlphaPremultiplied](cirenderdestinationalphamode/premultiplied.md): Designates a destination that expects premultiplied alpha values.
- [CIRenderDestinationAlphaUnpremultiplied](cirenderdestinationalphamode/unpremultiplied.md): Designates a destination that expects non-premultiplied alpha values.

## See Also

### Custom Render Destination

- [CIRenderDestination](cirenderdestination.md): A specification for configuring all attributes of a render task’s destination and issuing asynchronous render tasks.
- [CIRenderInfo](cirenderinfo.md): An encapsulation of a render task’s timing, passes, and pixels processed.
- [CIRenderTask](cirendertask.md): A single render task.
