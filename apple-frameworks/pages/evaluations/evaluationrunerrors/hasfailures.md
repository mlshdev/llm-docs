> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluationrunerrors/hasfailures](https://developer.apple.com/documentation/evaluations/evaluationrunerrors/hasfailures)

# hasFailures

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Whether this represents any failure worth persisting.

## Declaration

```swift
var hasFailures: Bool { get }
```

<a id="discussion"></a>

## Discussion

A clean run is all-zero, produced inference, and referenced no missing metrics. Used to decide whether to write the error summary when serializing — a clean run omits it entirely.
