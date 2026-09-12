> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markup/allowedinteractions](https://developer.apple.com/documentation/paperkit/markup/allowedinteractions)

# allowedInteractions

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Interactions that people can perform on this markup.

## Declaration

```swift
var allowedInteractions: MarkupInteractions { get set }
```

<a id="discussion"></a>

## Discussion

Use this to configure how people can interact with the markup, such as preventing resizing, rotation, or deletion. The default is `.all`, which allows all interactions. Set to `.readOnly` to prevent all modifications.

## See Also

### Controlling interactions

- [MarkupInteractions](../markupinteractions.md): Interactions that people can perform on markup elements.
