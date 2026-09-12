> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/init(uncheckedbounds:)](https://developer.apple.com/documentation/swift/closedrange/init(uncheckedbounds:))

# init(uncheckedBounds:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance with the given bounds.

## Declaration

```swift
init(uncheckedBounds bounds: (lower: Bound, upper: Bound))
```

## Parameters

- `bounds`: A tuple of the lower and upper bounds of the range.

<a id="discussion"></a>

## Discussion

Because this initializer does not perform any checks, it should be used as an optimization only when you are absolutely certain that `lower` is less than or equal to `upper`. Using the closed range operator (`...`) to form `ClosedRange` instances is preferred.

## See Also

### Infrequently Used Functionality

- [hashValue](hashvalue.md): Conforms when `Bound` conforms to `Comparable` and `Hashable`. The hash value.
