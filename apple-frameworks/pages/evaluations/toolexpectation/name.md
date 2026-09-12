> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/name](https://developer.apple.com/documentation/evaluations/toolexpectation/name)

# name

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The name of the tool that the evaluation expects the model to call.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

This is only valid for single expectations. Accessing this on an [anyOrder(\_:)](anyorder%28__%29.md) group is a programming error.

## See Also

### Accessing expectation details

- [arguments](arguments.md): The argument matchers to validate against the tool call.
- [isAnyOrderGroup](isanyordergroup.md): A Boolean value that indicates whether this expectation represents a group of expectations that can be satisfied in any order.
