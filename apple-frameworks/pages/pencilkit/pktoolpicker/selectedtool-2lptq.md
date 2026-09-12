> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/selectedtool-2lptq](https://developer.apple.com/documentation/pencilkit/pktoolpicker/selectedtool-2lptq)

# selectedTool

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The currently selected tool in the tool picker.

> Use [selectedToolItem](selectedtoolitem.md) instead.

## Declaration

```swift
var selectedTool: any PKTool { get set }
```

<a id="Discussion"></a>

## Discussion

This is one of the available tools associated with a [PKCanvasView](../pkcanvasview.md) that adopt the [PKTool](../pktool-swift.protocol.md) protocol.

## See Also

### Deprecated

- [shared(for:)](shared%28for_%29.md): Deprecated. Returns the tool picker object to use for the specified window.
