> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/scattermode](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/scattermode)

# BNNSGraph.Builder.ScatterMode

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Constants that specify how scatter operations overwrite destination elements.

## Declaration

```swift
enum ScatterMode
```

## Topics

### Enumeration Cases

- [BNNSGraph.Builder.ScatterMode.add](scattermode/add.md): The operation adds existing values to scattered values.
- [BNNSGraph.Builder.ScatterMode.divide](scattermode/divide.md): The operation divides scattered values by existing values.
- [BNNSGraph.Builder.ScatterMode.maximum](scattermode/maximum.md): The operation writes the maximum of the existing value and the scattered value.
- [BNNSGraph.Builder.ScatterMode.minimum](scattermode/minimum.md): The operation writes the minimum of the existing value and the scattered value.
- [BNNSGraph.Builder.ScatterMode.multiply](scattermode/multiply.md): The operation multiplies existing values by scattered values.
- [BNNSGraph.Builder.ScatterMode.subtract](scattermode/subtract.md): The operation subtracts scattered values from existing values.
- [BNNSGraph.Builder.ScatterMode.update](scattermode/update.md): The operation overwrites existing values with scattered values.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
