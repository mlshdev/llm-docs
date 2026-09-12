> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/unordered](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/unordered)

# unordered

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Tool calls that must occur at some point, regardless of position.

## Declaration

```swift
var unordered: [ToolExpectation]
```

## See Also

### Combining expectations

- [ordered](ordered.md): Tool call steps that must be satisfied in sequential order.
- [disallowed](disallowed.md): Tools that the model must NOT call.
- [allowsAdditionalCalls](allowsadditionalcalls.md): A Boolean value that indicates whether to allow tool calls that don’t match any expectation.
