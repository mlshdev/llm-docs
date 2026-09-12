> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphshareduniforms/uniform(_:)](https://developer.apple.com/documentation/realitykit/computegraphshareduniforms/uniform(_:))

# uniform(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the stored uniform value for the given type, or `nil` if none has been set.

## Declaration

```swift
func uniform<V>(_ type: V.Type) -> V? where V : BitwiseCopyable
```

## Parameters

- `type`: The `BitwiseCopyable` type to retrieve.

<a id="return-value"></a>

## Return Value

The stored value, or `nil`.
