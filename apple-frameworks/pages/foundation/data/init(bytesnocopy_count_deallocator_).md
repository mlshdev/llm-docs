> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(bytesnocopy:count:deallocator:)](https://developer.apple.com/documentation/foundation/data/init(bytesnocopy:count:deallocator:))

# init(bytesNoCopy:count:deallocator:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data buffer with memory content without copying the bytes.

## Declaration

```swift
init(bytesNoCopy bytes: UnsafeMutableRawPointer, count: Int, deallocator: Data.Deallocator)
```

## Parameters

- `bytes`: A pointer to the bytes.
- `count`: The size of the bytes.
- `deallocator`: Specifies the mechanism to free the indicated buffer, or `.none`.

<a id="Discussion"></a>

## Discussion

If the result is mutated and is not a unique reference, then the `Data` will still follow copy-on-write semantics. In this case, the copy will use its own deallocator. Therefore, it is usually best to only use this initializer when you either enforce immutability with `let` or ensure that no other references to the underlying data are formed.

## See Also

### Creating Populated Data

- [init()](init%28%29.md): Creates an empty data buffer.
- [init(buffer:)](init%28buffer_%29-75sng.md): Creates a data buffer with copied memory content using a buffer pointer.
- [init(buffer:)](init%28buffer_%29-6xgv4.md): Creates a data buffer with copied memory content using a mutable buffer pointer.
- [init(bytes:count:)](init%28bytes_count_%29.md): Creates data with copied memory content.
- [init(capacity:)](init%28capacity_%29.md): Creates an empty data buffer of a specified size.
- [init(count:)](init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.
