> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/init(unordered:)](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/init(unordered:))

# init(unordered:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a trajectory expectation with only unordered requirements.

## Declaration

```swift
init(unordered: [ToolExpectation])
```

## Parameters

- `unordered`: Tool calls that must occur at some point, regardless of position.

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

<a id="discussion"></a>

## Discussion

Unordered-only expectations always allow additional calls.

## See Also

### Creating multi-tool expectations

- [init(ordered:unordered:allowsAdditionalToolCalls:)](init%28ordered_unordered_allowsadditionaltoolcalls_%29.md): Creates a trajectory expectation with ordered and unordered requirements, and controls whether unmatched tool calls are permitted.
- [init(ordered:unordered:disallowed:)](init%28ordered_unordered_disallowed_%29.md): Creates a trajectory expectation with ordered and unordered requirements, plus specific tools that the model must not call.
