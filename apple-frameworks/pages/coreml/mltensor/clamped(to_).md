> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/clamped(to:)](https://developer.apple.com/documentation/coreml/mltensor/clamped(to:))

# clamped(to:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Clamps all elements to the given lower and upper bounds, inclusively.

## Declaration

```swift
func clamped(to bounds: ClosedRange<Float>) -> MLTensor
```

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor([-1.0, 1.0, 2.0])
let y = x.clamped(to: 0...1)
await y.shapedArray(of: Float.self) // is [0.0, 1.0, 1.0]
```

## See Also

### Clamping and concatenating

- [concatenated(with:alongAxis:)](concatenated%28with_alongaxis_%29.md): Returns a concatenated tensor along the specified axis.
