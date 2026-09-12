> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(capacity:)](https://developer.apple.com/documentation/foundation/data/init(capacity:))

# init(capacity:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty data buffer of a specified size.

## Declaration

```swift
init(capacity: Int)
```

## Parameters

- `capacity`: The size of the data.

<a id="Discussion"></a>

## Discussion

This initializer doesn’t necessarily allocate the requested memory right away. `Data` allocates additional memory as needed, so `capacity` simply establishes the initial capacity. When it does allocate the initial memory, though, it allocates the specified amount.

This method sets the `count` of the data to 0.

If the capacity specified in `capacity` is greater than four memory pages in size, this may round the amount of requested memory up to the nearest full page.

## See Also

### Creating Empty Data

- [init()](init%28%29.md): Creates an empty data buffer.
- [init(count:)](init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.
- [resetBytes(in:)](resetbytes%28in_%29.md): Sets a region of the data buffer to `0`.
