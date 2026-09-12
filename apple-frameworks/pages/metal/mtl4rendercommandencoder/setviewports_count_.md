> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setviewports:count:](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setviewports:count:)

# setViewports:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.

## Declaration

```objectivec
- (void) setViewports:(const MTLViewport[]) viewports count:(NSUInteger) count;
```

## Parameters

- `viewports`: Array of [MTLViewport](../mtlviewport.md) instances.
- `count`: Number of [MTLViewport](../mtlviewport.md) instances in the array.

<a id="discussion"></a>

## Discussion

Metal clips fragments that lie outside of the viewport, and optionally clamps fragments outside of z-near/z-far range, depending on the value you assign to [setDepthClipMode:](setdepthclipmode%28__%29.md).

Metal selects the viewport to use from the `[[ viewport_array_index ]]` attribute you specify in the pipeline state’s vertex shader function in the Metal Shading Language.

## See Also

### Configuring viewport and scissor behavior

- [setViewport:](setviewport%28__%29.md): Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.
- [setScissorRect:](setscissorrect%28__%29.md): Sets a scissor rectangle to discard fragments outside a specific area.
- [setScissorRects:count:](setscissorrects_count_.md): Sets an array of scissor rectangles for a fragment scissor test.
