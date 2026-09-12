> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/allowsadditionalcalls](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/allowsadditionalcalls)

# allowsAdditionalCalls

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A Boolean value that indicates whether to allow tool calls that don’t match any expectation.

## Declaration

```swift
var allowsAdditionalCalls: Bool
```

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

When `false`, any unmatched tool call causes evaluation to fail. When `true` (the default), unmatched calls are ignored as long as all expectations are met.

## See Also

### Combining expectations

- [ordered](ordered.md): Tool call steps that must be satisfied in sequential order.
- [unordered](unordered.md): Tool calls that must occur at some point, regardless of position.
- [disallowed](disallowed.md): Tools that the model must NOT call.
