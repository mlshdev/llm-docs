> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/defaultchoice](https://developer.apple.com/documentation/permissionkit/permissionquestion/defaultchoice)

# defaultChoice

**Framework:** PermissionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The default answer choice associated with the question.

## Declaration

```swift
final var defaultChoice: PermissionChoice { get }
```

<a id="discussion"></a>

## Discussion

This default choice will default to the most restrictive choice.

> **Requires**

> This default answer choice must also be present in the list of possible choices provided in the question.

## See Also

### Working with choices

- [choices](choices.md): The possible answer choices associated with this question.
