> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setscissorrects(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setscissorrects(_:))

# setScissorRects(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an array of scissor rectangles for a fragment scissor test.

## Declaration

```swift
func setScissorRects(_ scissorRects: [MTLScissorRect])
```

## Parameters

- `scissorRects`: A Swift array of [MTLScissorRect](../mtlscissorrect.md) elements.

<a id="discussion"></a>

## Discussion

Metal uses the specific scissor rectangle corresponding to the index you specify via the `[[ viewport_array_index ]]` output attribute of the vertex shader function in the Metal Shading Language, discarding all fragments outside of the scissor rect.

## See Also

### Configuring viewport and scissor behavior

- [setViewport(\_:)](setviewport%28__%29.md): Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.
- [setViewports(\_:)](setviewports%28__%29.md): Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.
- [setScissorRect(\_:)](setscissorrect%28__%29.md): Sets a scissor rectangle to discard fragments outside a specific area.
