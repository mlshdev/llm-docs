> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncprefixsequence/iterator/next()](https://developer.apple.com/documentation/swift/asyncprefixsequence/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Produces the next element in the prefix sequence.

## Declaration

```swift
mutating func next() async rethrows -> Base.Element?
```

<a id="discussion"></a>

## Discussion

Until reaching the number of elements to include, this iterator calls `next()` on its base iterator and passes through the result. After reaching the maximum number of elements, subsequent calls to `next()` return `nil`.
