> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.property](https://developer.apple.com/documentation/paperkit/markuptoolbarviewcontroller/delegate-swift.property)

# delegate

**Framework:** PaperKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

The delegate for responding to user actions.

## Declaration

```swift
@MainActor @preconcurrency weak var delegate: (any MarkupToolbarViewController.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Observe `selectedIndirectPointerTouchMode` or `selectedDrawingTool` to watch for mode / tool changes.

## See Also

### Configuring the toolbar

- [supportedFeatureSet](supportedfeatureset.md): The supported features of this toolbar.
