> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/setuniformdata(_:for:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/setuniformdata(_:for:))

# setUniformData(\_:for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of a uniform to raw bytes.

## Declaration

```swift
mutating func setUniformData(_ data: RawSpan, for handle: ComputeGraphComponent.UniformHandle)
```

## Parameters

- `data`: Raw bytes to write into the uniform.
- `handle`: The handle identifying the target uniform.
