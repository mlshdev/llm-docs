> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphshareduniforms/setuniformtransform(type:transform:)](https://developer.apple.com/documentation/realitykit/computegraphshareduniforms/setuniformtransform(type:transform:))

# setUniformTransform(type:transform:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Registers a raw-data transformer closure for a uniform of type `V`.

## Declaration

```swift
func setUniformTransform<V>(type: V.Type, transform: @escaping @_lifetime(0: copy 0) (inout MutableRawSpan, Entity) -> Void) where V : BitwiseCopyable
```

## Parameters

- `type`: The `BitwiseCopyable` type the transformer operates on.
- `transform`: A closure `(inout MutableRawSpan, Entity) -> Void`.

<a id="discussion"></a>

## Discussion

Use this overload when the transformation is most naturally expressed over the raw byte representation of the value.
