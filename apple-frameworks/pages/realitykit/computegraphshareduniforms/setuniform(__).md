> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphshareduniforms/setuniform(_:)

# setUniform(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Stores a uniform value, replacing any previously stored value of the same type.

## Declaration

```swift
func setUniform<V>(_ value: borrowing V) where V : BitwiseCopyable
```

## Parameters

- `value`: The value to store. Must conform to `BitwiseCopyable`.
