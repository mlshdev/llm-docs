> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/resetbytes(in:)](https://developer.apple.com/documentation/foundation/data/resetbytes(in:))

# resetBytes(in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a region of the data buffer to `0`.

## Declaration

```swift
mutating func resetBytes(in range: Range<Data.Index>)
```

## Parameters

- `range`: The range in the data to set to `0`.

<a id="Discussion"></a>

## Discussion

If `range` exceeds the bounds of the data, then the data is resized to fit.

## See Also

### Creating Empty Data

- [init()](init%28%29.md): Creates an empty data buffer.
- [init(capacity:)](init%28capacity_%29.md): Creates an empty data buffer of a specified size.
- [init(count:)](init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.
