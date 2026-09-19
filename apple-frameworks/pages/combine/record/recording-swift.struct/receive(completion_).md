> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/record/recording-swift.struct/receive(completion:)

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
