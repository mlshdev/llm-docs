> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrange-swift.typealias/location](https://developer.apple.com/documentation/foundation/nsrange-swift.typealias/location)

# location

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The index of the first member of the range.

## Declaration

```swift
var location: Int
```

<a id="Discussion"></a>

## Discussion

The minimum first index is `0`, as in C arrays. For type compatibility with the rest of the system, the maximum value you should use for the location is `LONG_MAX`.

## See Also

### Accessing range properties

- [length](length.md): The number of items in the range.
