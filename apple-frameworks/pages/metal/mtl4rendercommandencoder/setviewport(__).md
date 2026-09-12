> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setviewport(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setviewport(_:))

# setViewport(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.

## Declaration

```swift
func setViewport(_ viewport: MTLViewport)
```

## Parameters

- `viewport`: [MTLViewport](../mtlviewport.md) to set.

<a id="discussion"></a>

## Discussion

Metal clips fragments that lie outside this viewport, and optionally clamps fragments outside of z-near/z-far range depending on the value you assign to [setDepthClipMode(\_:)](setdepthclipmode%28__%29.md).

## See Also

### Configuring viewport and scissor behavior

- [setViewports(\_:)](setviewports%28__%29.md): Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.
- [setScissorRect(\_:)](setscissorrect%28__%29.md): Sets a scissor rectangle to discard fragments outside a specific area.
- [setScissorRects(\_:)](setscissorrects%28__%29.md): Sets an array of scissor rectangles for a fragment scissor test.

# setViewport: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.

## Declaration

```objectivec
- (void) setViewport:(MTLViewport) viewport;
```

## Parameters

- `viewport`: [MTLViewport](../mtlviewport.md) to set.

<a id="discussion"></a>

## Discussion

Metal clips fragments that lie outside this viewport, and optionally clamps fragments outside of z-near/z-far range depending on the value you assign to [setDepthClipMode:](setdepthclipmode%28__%29.md).

## See Also

### Configuring viewport and scissor behavior

- [setViewports:count:](setviewports_count_.md): Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.
- [setScissorRect:](setscissorrect%28__%29.md): Sets a scissor rectangle to discard fragments outside a specific area.
- [setScissorRects:count:](setscissorrects_count_.md): Sets an array of scissor rectangles for a fragment scissor test.
