> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/view(as:)](https://developer.apple.com/documentation/coreai/ndarray/view(as:))

# view(as:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a read-only, typed view of this array’s elements.

## Declaration

```swift
func view<T>(as type: T.Type = T.self) -> NDArray.View<T> where T : BitwiseCopyable
```

## Parameters

- `type`: The Swift type that corresponds to this array’s [scalarType](scalartype-swift.property.md). For example, pass `Int32.self` for an array with scalar type `.int32`.

<a id="return-value"></a>

## Return Value

A read-only view of the array’s elements.

## See Also

### Accessing elements

- [mutableView(as:)](mutableview%28as_%29.md): Returns a mutable, typed view of this array’s elements.
- [rawView()](rawview%28%29.md): Returns a read-only, raw view of this array’s storage.
- [mutableRawView()](mutablerawview%28%29.md): Returns a mutable, raw view of this array’s storage.
