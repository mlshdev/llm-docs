> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/replaceuniforms(_:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/replaceuniforms(_:))

# replaceUniforms(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces the entire uniform buffer with the given data.

## Declaration

```swift
mutating func replaceUniforms(_ data: Data)
```

## Parameters

- `data`: Raw bytes to write into the uniform buffer.

<a id="discussion"></a>

## Discussion

You can query `pipelines.assembly.uniformBufferSize` for the required size. If too few bytes are provided, the remaining bytes retain their previous values.
