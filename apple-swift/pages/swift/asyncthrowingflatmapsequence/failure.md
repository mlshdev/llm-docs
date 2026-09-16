> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncthrowingflatmapsequence/failure

# AsyncThrowingFlatMapSequence.Failure

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The type of error produced by this asynchronous sequence.

## Declaration

```swift
typealias Failure = any Error
```

<a id="discussion"></a>

## Discussion

The flat map sequence produces errors from either the base sequence or the `transform` closure.
