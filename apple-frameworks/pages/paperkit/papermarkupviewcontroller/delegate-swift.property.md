> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.property](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.property)

# delegate

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The delegate for responding to a person’s actions.

## Declaration

```swift
@MainActor @preconcurrency weak var delegate: (any PaperMarkupViewController.Delegate)? { get set }
```

## See Also

### Responding to changes

- [PaperMarkupViewController.Delegate](delegate-swift.protocol.md): The interface for responding to interactions in a markup view controller.
- [undoManager](undomanager.md)
