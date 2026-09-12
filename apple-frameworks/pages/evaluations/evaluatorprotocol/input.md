> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/evaluatorprotocol/input](https://developer.apple.com/documentation/evaluations/evaluatorprotocol/input)

# Input

**Framework:** Evaluations  
**Kind:** Associated Type  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The input sample type.

## Declaration

```swift
associatedtype Input : SampleProtocol where Self.Input.ExpectedValue == Self.Subject.Value
```
