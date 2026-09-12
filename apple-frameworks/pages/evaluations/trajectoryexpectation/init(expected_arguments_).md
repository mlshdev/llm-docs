> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/trajectoryexpectation/init(expected:arguments:)](https://developer.apple.com/documentation/evaluations/trajectoryexpectation/init(expected:arguments:))

# init(expected:arguments:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a trajectory expectation for a single expected tool call.

## Declaration

```swift
init(expected toolName: String, arguments: [ArgumentMatcher] = [])
```

## Parameters

- `toolName`: The name of the tool expected to be called.
- `arguments`: The argument matchers to validate.

## See Also

### Creating a single-tool expectation

- [ToolExpectation](../toolexpectation.md): A specification for an expected tool call, or a group of expectations that can be satisfied in any order.
