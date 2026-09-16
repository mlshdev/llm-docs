> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncflatmapsequence/failure

# AsyncFlatMapSequence.Failure

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type of error produced by this asynchronous sequence.

## Declaration

```swift
typealias Failure = Base.Failure
```

<a id="discussion"></a>

## Discussion

The flat map sequence produces the type of error in the base asynchronous sequence. By construction, the sequence produced by the `transform` closure must either produce this type of error or not produce errors at all.
