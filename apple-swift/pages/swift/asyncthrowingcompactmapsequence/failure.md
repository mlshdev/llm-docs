> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingcompactmapsequence/failure](https://developer.apple.com/documentation/swift/asyncthrowingcompactmapsequence/failure)

# AsyncThrowingCompactMapSequence.Failure

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of element produced by this asynchronous sequence.

## Declaration

```swift
typealias Failure = any Error
```

<a id="discussion"></a>

## Discussion

The compact map sequence produces errors from either the base sequence or the transforming closure.
