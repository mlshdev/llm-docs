> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrange-swift.typealias/length](https://developer.apple.com/documentation/foundation/nsrange-swift.typealias/length)

# length

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of items in the range.

## Declaration

```swift
var length: Int
```

<a id="Discussion"></a>

## Discussion

This value can be `0` to represent an empty range. For type compatibility with the rest of the system, the maximum value you should use for length is `LONG_MAX`.

## See Also

### Accessing range properties

- [location](location.md): The index of the first member of the range.
