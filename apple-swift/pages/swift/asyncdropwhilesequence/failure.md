> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/asyncdropwhilesequence/failure

# AsyncDropWhileSequence.Failure

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type of errors produced by this asynchronous sequence.

## Declaration

```swift
typealias Failure = Base.Failure
```

<a id="discussion"></a>

## Discussion

The drop-while sequence produces whatever type of error its base sequence produces.
