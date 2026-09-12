> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncdropwhilesequence/iterator/next()-6nmld](https://developer.apple.com/documentation/swift/asyncdropwhilesequence/iterator/next()-6nmld)

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Default implementation of `next()` in terms of `next(isolation:)`, which is required to maintain backward compatibility with existing async iterators.

## Declaration

```swift
mutating func next() async throws(Self.Failure) -> Self.Element?
```
