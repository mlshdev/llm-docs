> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkerasertool-swift.struct/init(_:)](https://developer.apple.com/documentation/pencilkit/pkerasertool-swift.struct/init(_:))

# init(\_:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

Creates an eraser tool object that removes objects wholly or partially from a canvas view.

## Declaration

```swift
init(_ eraserType: PKEraserTool.EraserType)
```

## Parameters

- `eraserType`: A constant that determines how the eraser affects drawn content. For a list of possible values, see [PKEraserTool.EraserType](erasertype-swift.enum.md).

<a id="discussion"></a>

## Discussion

This initializer creates a new eraser tool object.

## See Also

### Creating an eraser tool

- [init(\_:width:)](init%28__width_%29.md): Creates an eraser tool object with the specified width.
