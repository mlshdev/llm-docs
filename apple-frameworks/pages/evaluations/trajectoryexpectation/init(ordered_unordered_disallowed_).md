> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/init(ordered:unordered:disallowed:)](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/init(ordered:unordered:disallowed:))

# init(ordered:unordered:disallowed:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a trajectory expectation with ordered and unordered requirements, plus specific tools that the model must not call.

## Declaration

```swift
init(ordered: [ToolExpectation] = [], unordered: [ToolExpectation] = [], disallowed: [ToolExpectation])
```

## Parameters

- `ordered`: Steps that must be satisfied in sequential order.
- `unordered`: Tool calls that must occur at some point, regardless of position.
- `disallowed`: Tools that the model must not call.

<a id="discussion"></a>

## Discussion

Using disallowed expectations always allows additional tool calls; the disallowed list targets specific tools while permitting everything else. To disallow *all* unexpected calls instead, use [init(ordered:unordered:allowsAdditionalToolCalls:)](init%28ordered_unordered_allowsadditionaltoolcalls_%29.md) with `allowsAdditionalToolCalls: false`.

## See Also

### Creating multi-tool expectations

- [init(ordered:unordered:allowsAdditionalToolCalls:)](init%28ordered_unordered_allowsadditionaltoolcalls_%29.md): Creates a trajectory expectation with ordered and unordered requirements, and controls whether unmatched tool calls are permitted.
- [init(unordered:)](init%28unordered_%29.md): Creates a trajectory expectation with only unordered requirements.
