> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:retrievecachedrenderingsurfacefor:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:retrievecachedrenderingsurfacefor:))

# textViewportLayoutController(\_:retrieveCachedRenderingSurfaceFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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

# textViewportLayoutController:retrieveCachedRenderingSurfaceForKey: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
