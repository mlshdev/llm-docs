> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:cacherenderingsurface:for:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:cacherenderingsurface:for:))

# textViewportLayoutController(\_:cacheRenderingSurface:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Asks the delegate to cache a rendering surface for later retrieval.

## Declaration

```swift
optional func textViewportLayoutController(_ textViewportLayoutController: NSTextViewportLayoutController, cacheRenderingSurface renderingSurface: any NSTextViewportRenderingSurface, for renderingSurfaceKey: any NSTextViewportRenderingSurfaceKey)
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurface`: The rendering surface to cache.
- `renderingSurfaceKey`: The key identifying the rendering surface.

# textViewportLayoutController:cacheRenderingSurface:forKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Asks the delegate to cache a rendering surface for later retrieval.

## Declaration

```objectivec
- (void) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController cacheRenderingSurface:(id<NSTextViewportRenderingSurface>) renderingSurface forKey:(id<NSTextViewportRenderingSurfaceKey>) renderingSurfaceKey;
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurface`: The rendering surface to cache.
- `renderingSurfaceKey`: The key identifying the rendering surface.
