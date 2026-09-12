> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/rendercontextchanged(_:)](https://developer.apple.com/documentation/avfoundation/avvideocompositing/rendercontextchanged(_:))

# renderContextChanged(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Tells the compositor that the composition changed render contexts.

## Declaration

```swift
func renderContextChanged(_ newRenderContext: AVVideoCompositionRenderContext)
```

## Parameters

- `newRenderContext`: The new render context of the video composition.

## See Also

### Observing render context changes

- [AVVideoCompositionRenderContext](../avvideocompositionrendercontext.md): An object that defines the context in which custom compositors render pixel buffers.

# renderContextChanged: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Tells the compositor that the composition changed render contexts.

## Declaration

```objectivec
- (void) renderContextChanged:(AVVideoCompositionRenderContext *) newRenderContext;
```

## Parameters

- `newRenderContext`: The new render context of the video composition.

## See Also

### Observing render context changes

- [AVVideoCompositionRenderContext](../avvideocompositionrendercontext.md): An object that defines the context in which custom compositors render pixel buffers.
