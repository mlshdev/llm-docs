> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/setuniformvalue(_:for:)

# setUniformValue(\_:for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of a uniform to a `BitwiseCopyable` typed value.

## Declaration

```swift
mutating func setUniformValue<V>(_ value: V, for handle: ComputeGraphComponent.UniformHandle) where V : BitwiseCopyable
```

## Parameters

- `value`: The value to write.
- `handle`: The handle identifying the target uniform.
