> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/recording-swift.struct/receive(completion:)](https://developer.apple.com/documentation/combine/record/recording-swift.struct/receive(completion:))

# receive(completion:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Add a completion to the recording.

## Declaration

```swift
mutating func receive(completion: Subscribers.Completion<Failure>)
```

<a id="discussion"></a>

## Discussion

A `fatalError` will be raised if more than one completion is added.
