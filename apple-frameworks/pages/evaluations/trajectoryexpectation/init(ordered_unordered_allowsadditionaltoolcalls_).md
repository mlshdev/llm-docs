> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/init(ordered:unordered:allowsadditionaltoolcalls:)](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/init(ordered:unordered:allowsadditionaltoolcalls:))

# init(ordered:unordered:allowsAdditionalToolCalls:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a trajectory expectation with ordered and unordered requirements, and controls whether unmatched tool calls are permitted.

## Declaration

```swift
init(ordered: [ToolExpectation] = [], unordered: [ToolExpectation] = [], allowsAdditionalToolCalls: Bool = true)
```

## Parameters

- `ordered`: Steps that must be satisfied in sequential order.
- `unordered`: Tool calls that must occur at some point, regardless of position.
- `allowsAdditionalToolCalls`: A Boolean value indicating whether to allow tool calls that don’t match any expectation; defaults to `true`

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

Use this initializer when you want to control the blanket policy for unexpected tool calls. To forbid specific tools instead, use [init(ordered:unordered:disallowed:)](init%28ordered_unordered_disallowed_%29.md).

## See Also

### Creating multi-tool expectations

- [init(ordered:unordered:disallowed:)](init%28ordered_unordered_disallowed_%29.md): Creates a trajectory expectation with ordered and unordered requirements, plus specific tools that the model must not call.
- [init(unordered:)](init%28unordered_%29.md): Creates a trajectory expectation with only unordered requirements.
