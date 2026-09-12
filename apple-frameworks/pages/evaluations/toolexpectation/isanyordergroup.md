> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/isanyordergroup](https://developer.apple.com/documentation/evaluations/toolexpectation/isanyordergroup)

# isAnyOrderGroup

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A Boolean value that indicates whether this expectation represents a group of expectations that can be satisfied in any order.

## Declaration

```swift
var isAnyOrderGroup: Bool { get }
```

## See Also

### Accessing expectation details

- [name](name.md): The name of the tool that the evaluation expects the model to call.
- [arguments](arguments.md): The argument matchers to validate against the tool call.
