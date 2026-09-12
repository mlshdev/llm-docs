> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/disallowed](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/disallowed)

# disallowed

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Tools that the model must NOT call.

## Declaration

```swift
var disallowed: [ToolExpectation]
```

<a id="discussion"></a>

## Discussion

If a disallowed expectation includes argument matchers, only calls matching those specific arguments trigger a failure — the model can still call the tool with different arguments.

## See Also

### Combining expectations

- [ordered](ordered.md): Tool call steps that must be satisfied in sequential order.
- [unordered](unordered.md): Tool calls that must occur at some point, regardless of position.
- [allowsAdditionalCalls](allowsadditionalcalls.md): A Boolean value that indicates whether to allow tool calls that don’t match any expectation.
