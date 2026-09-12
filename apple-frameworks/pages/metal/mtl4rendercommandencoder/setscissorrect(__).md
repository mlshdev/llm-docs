> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setscissorrect(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setscissorrect(_:))

# setScissorRect(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets a scissor rectangle to discard fragments outside a specific area.

## Declaration

```swift
func setScissorRect(_ rect: MTLScissorRect)
```

## Parameters

- `rect`: [MTLScissorRect](../mtlscissorrect.md) rectangle to specify. This rectangle needs to lie completely within the current render attachment.

<a id="discussion"></a>

## Discussion

Metal performs a scissor test and discards all fragments outside of the scissor rect.

## See Also

### Configuring viewport and scissor behavior

- [setViewport(\_:)](setviewport%28__%29.md): Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.
- [setViewports(\_:)](setviewports%28__%29.md): Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.
- [setScissorRects(\_:)](setscissorrects%28__%29.md): Sets an array of scissor rectangles for a fragment scissor test.

# setScissorRect: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets a scissor rectangle to discard fragments outside a specific area.

## Declaration

```objectivec
- (void) setScissorRect:(MTLScissorRect) rect;
```

## Parameters

- `rect`: [MTLScissorRect](../mtlscissorrect.md) rectangle to specify. This rectangle needs to lie completely within the current render attachment.

<a id="discussion"></a>

## Discussion

Metal performs a scissor test and discards all fragments outside of the scissor rect.

## See Also

### Configuring viewport and scissor behavior

- [setViewport:](setviewport%28__%29.md): Sets the viewport which that transforms vertices from normalized device coordinates to window coordinates.
- [setViewports:count:](setviewports_count_.md): Sets an array of viewports to transform vertices from normalized device coordinates to window coordinates.
- [setScissorRects:count:](setscissorrects_count_.md): Sets an array of scissor rectangles for a fragment scissor test.
