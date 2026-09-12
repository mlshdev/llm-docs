> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:retrievecachedrenderingsurfacefor:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:retrievecachedrenderingsurfacefor:))

# textViewportLayoutController(\_:retrieveCachedRenderingSurfaceFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate to return a previously cached rendering surface.

## Declaration

```swift
optional func textViewportLayoutController(_ textViewportLayoutController: NSTextViewportLayoutController, retrieveCachedRenderingSurfaceFor renderingSurfaceKey: any NSTextViewportRenderingSurfaceKey) -> any NSTextViewportRenderingSurface
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurfaceKey`: The key identifying the rendering surface.

<a id="return-value"></a>

## Return Value

The cached rendering surface, or `nil`.

## See Also

### Storing rendering surfaces

- [textViewportLayoutController(\_:cacheRenderingSurface:for:)](textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.

# textViewportLayoutController:retrieveCachedRenderingSurfaceForKey: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Asks the delegate to return a previously cached rendering surface.

## Declaration

```objectivec
- (id<NSTextViewportRenderingSurface>) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController retrieveCachedRenderingSurfaceForKey:(id<NSTextViewportRenderingSurfaceKey>) renderingSurfaceKey;
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `renderingSurfaceKey`: The key identifying the rendering surface.

<a id="return-value"></a>

## Return Value

The cached rendering surface, or `nil`.

## See Also

### Storing rendering surfaces

- [textViewportLayoutController:cacheRenderingSurface:forKey:](textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.
