> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/loader/stream](https://developer.apple.com/documentation/evaluations/loader/stream)

# stream

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The async sequence for iteration during an evaluation run.

## Declaration

```swift
var stream: any AsyncSequence<Self.Sample, any Error> { get }
```
