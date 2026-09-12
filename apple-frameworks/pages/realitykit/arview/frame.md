> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/frame](https://developer.apple.com/documentation/realitykit/arview/frame)

# frame

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** macOS

The frame rectangle, which describes the view’s location and size in the coordinate system of the view’s superview.

## Declaration

```swift
@MainActor @preconcurrency override dynamic var frame: NSRect { get set }
```

## See Also

### Managing the view

- [contentScaleFactor](contentscalefactor.md): The scale factor of the content in the view.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window property is set to a new value.
- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [layout()](layout%28%29.md)
- [layerClass](layerclass.md): The class used to create the layer for view instances.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [viewDidChangeBackingProperties()](viewdidchangebackingproperties%28%29.md): Tells the view when its backing store properties change.
- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Tells the view that it has a new superview or that the view’s superview has been removed.
