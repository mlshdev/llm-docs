> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/renderstate-swift.struct](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/renderstate-swift.struct)

# PKStroke.RenderState

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A value that captures the render-time state of a stroke, such as grain texture position.

## Declaration

```swift
struct RenderState
```

## Mentioned In

- [Controlling stroke rendering for animation and editing](../controlling-stroke-rendering-for-animation-and-editing.md)

<a id="overview"></a>

## Overview

Use `RenderState` to preserve rendering fidelity when you manipulate strokes programmatically. For example, substrokes returned by [substroke(range:)](substroke%28range_%29.md) may include a `renderState` so that the extracted portion renders identically to the corresponding section of the original stroke. A value of `nil` uses default rendering.

The [grainOffset](renderstate-swift.struct/grainoffset.md) property is directly readable and writable. All state, including opaque internal properties, can be persisted by encoding the value using `Codable`.

## Topics

### Creating a render state

- [init(grainOffset:)](renderstate-swift.struct/init%28grainoffset_%29.md): Creates a render state with the specified grain offset.

### Getting the render state

- [grainOffset](renderstate-swift.struct/grainoffset.md): The pre-transform position of the grain texture for strokes with a backing grain texture such as crayon.

### Using reference types

- [PKStrokeRenderStateReference](../pkstrokerenderstatereference.md): An object that captures the render-time state of a stroke, such as grain texture position.

### Initializers

- [init(\_:)](renderstate-swift.struct/init%28__%29.md): Creates a `RenderState` from its Objective-C counterpart `PKStrokeRenderStateReference`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring rendering

- [renderGroupID](rendergroupid.md): Strokes with certain inks (such as marker) can composite to look as if they were drawn while the previous stroke with the same ink was still wet. This UUID may be set to a single value for a run of strokes which should be rendered together in this manner.
- [renderState](renderstate-swift.property.md): Contains information about the render details (such as particle positioning) of this stroke, which can be useful when manipulating the model in certain ways. For example, this may be set on substrokes returned by `substroke(range:)`. nil uses default rendering.
