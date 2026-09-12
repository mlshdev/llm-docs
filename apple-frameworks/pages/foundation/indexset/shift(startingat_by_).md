> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/shift(startingat:by:)](https://developer.apple.com/documentation/foundation/indexset/shift(startingat:by:))

# shift(startingAt:by:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

For a positive delta, shifts the indexes in \[index, INT_MAX\] to the right, thereby inserting an “empty space” \[index, delta\], for a negative delta, shifts the indexes in \[index, INT_MAX\] to the left, thereby deleting the indexes in the range \[index - delta, delta\].

## Declaration

```swift
mutating func shift(startingAt integer: IndexSet.Element, by delta: Int)
```
