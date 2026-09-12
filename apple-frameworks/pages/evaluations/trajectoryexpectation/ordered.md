> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/ordered](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/ordered)

# ordered

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Tool call steps that must be satisfied in sequential order.

## Declaration

```swift
var ordered: [ToolExpectation]
```

<a id="discussion"></a>

## Discussion

Each entry is either a single [ToolExpectation](../toolexpectation.md) or an [anyOrder(\_:)](../toolexpectation/anyorder%28__%29.md) group where multiple tools must all be called at that position (in any relative order).

## See Also

### Combining expectations

- [unordered](unordered.md): Tool calls that must occur at some point, regardless of position.
- [disallowed](disallowed.md): Tools that the model must NOT call.
- [allowsAdditionalCalls](allowsadditionalcalls.md): A Boolean value that indicates whether to allow tool calls that don’t match any expectation.
