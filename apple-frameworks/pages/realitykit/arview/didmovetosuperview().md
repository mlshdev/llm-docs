> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/didmovetosuperview()](https://developer.apple.com/documentation/realitykit/arview/didmovetosuperview())

# didMoveToSuperview()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 26.0+

Tells the view that its superview changed.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func didMoveToSuperview()
```

## See Also

### Managing the view

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in the coordinate system of the view’s superview.
- [contentScaleFactor](contentscalefactor.md): The scale factor of the content in the view.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window property is set to a new value.
- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [layout()](layout%28%29.md)
- [layerClass](layerclass.md): The class used to create the layer for view instances.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [viewDidChangeBackingProperties()](viewdidchangebackingproperties%28%29.md): Tells the view when its backing store properties change.
- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Tells the view that it has a new superview or that the view’s superview has been removed.
