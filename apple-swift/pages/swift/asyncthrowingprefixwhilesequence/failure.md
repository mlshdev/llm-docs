> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncthrowingprefixwhilesequence/failure](https://developer.apple.com/documentation/swift/asyncthrowingprefixwhilesequence/failure)

# AsyncThrowingPrefixWhileSequence.Failure

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

The prefix-while sequence produces errors from either the base sequence or the filtering closure.
