> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/arguments](https://developer.apple.com/documentation/evaluations/toolexpectation/arguments)

# arguments

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

The argument matchers to validate against the tool call.

## Declaration

```swift
var arguments: [ArgumentMatcher] { get }
```

<a id="discussion"></a>

## Discussion

Returns an empty array for [anyOrder(\_:)](anyorder%28__%29.md) groups.

## See Also

### Accessing expectation details

- [name](name.md): The name of the tool that the evaluation expects the model to call.
- [isAnyOrderGroup](isanyordergroup.md): A Boolean value that indicates whether this expectation represents a group of expectations that can be satisfied in any order.
