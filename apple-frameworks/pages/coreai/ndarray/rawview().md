> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rawview()](https://developer.apple.com/documentation/coreai/ndarray/rawview())

# rawView()

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a read-only, raw view of this array’s storage.

## Declaration

```swift
func rawView() -> NDArray.RawView
```

<a id="return-value"></a>

## Return Value

A raw view of the array’s underlying bytes.

## See Also

### Accessing elements

- [view(as:)](view%28as_%29.md): Returns a read-only, typed view of this array’s elements.
- [mutableView(as:)](mutableview%28as_%29.md): Returns a mutable, typed view of this array’s elements.
- [mutableRawView()](mutablerawview%28%29.md): Returns a mutable, raw view of this array’s storage.
