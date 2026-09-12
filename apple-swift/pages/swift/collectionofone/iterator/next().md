> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectionofone/iterator/next()](https://developer.apple.com/documentation/swift/collectionofone/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances to the next element and returns it, or `nil` if no next element exists.

## Declaration

```swift
mutating func next() -> Element?
```

<a id="return-value"></a>

## Return Value

The next element in the underlying sequence, if a next element exists; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Once `nil` has been returned, all subsequent calls return `nil`.
