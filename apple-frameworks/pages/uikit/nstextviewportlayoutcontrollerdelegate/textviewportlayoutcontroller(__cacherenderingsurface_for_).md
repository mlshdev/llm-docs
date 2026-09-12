> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:cacherenderingsurface:for:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:cacherenderingsurface:for:))

# textViewportLayoutController(\_:cacheRenderingSurface:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate to cache a rendering surface for later retrieval.

## Declaration

```swift
optional func textViewportLayoutController(_ textViewportLayoutController: NSTextViewportLayoutController, cacheRenderingSurface renderingSurface: any NSTextViewportRenderingSurface, for renderingSurfaceKey: any NSTextViewportRenderingSurfaceKey)
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurface`: The rendering surface to cache.
- `renderingSurfaceKey`: The key identifying the rendering surface.

## See Also

### Storing rendering surfaces

- [textViewportLayoutController(\_:retrieveCachedRenderingSurfaceFor:)](textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.

# textViewportLayoutController:cacheRenderingSurface:forKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate to cache a rendering surface for later retrieval.

## Declaration

```objectivec
- (void) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController cacheRenderingSurface:(id<NSTextViewportRenderingSurface>) renderingSurface forKey:(id<NSTextViewportRenderingSurfaceKey>) renderingSurfaceKey;
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurface`: The rendering surface to cache.
- `renderingSurfaceKey`: The key identifying the rendering surface.

## See Also

### Storing rendering surfaces

- [textViewportLayoutController:retrieveCachedRenderingSurfaceForKey:](textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.
