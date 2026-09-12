> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/flattensequence/iterator/next()](https://developer.apple.com/documentation/swift/flattensequence/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances to the next element and returns it, or `nil` if no next element exists.

## Declaration

```swift
mutating func next() -> FlattenSequence<Base>.Iterator.Element?
```

<a id="discussion"></a>

## Discussion

Once `nil` has been returned, all subsequent calls return `nil`.

> **Precondition**

> `next()` has not been applied to a copy of `self` since the copy was made.
