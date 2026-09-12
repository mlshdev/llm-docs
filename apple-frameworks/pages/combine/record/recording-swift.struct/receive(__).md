> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/recording-swift.struct/receive(_:)](https://developer.apple.com/documentation/combine/record/recording-swift.struct/receive(_:))

# receive(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Add an output to the recording.

## Declaration

```swift
mutating func receive(_ input: Record<Output, Failure>.Recording.Input)
```

<a id="discussion"></a>

## Discussion

A `fatalError` will be raised if output is added after adding completion.
