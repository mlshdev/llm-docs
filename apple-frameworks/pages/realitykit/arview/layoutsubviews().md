> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/layoutsubviews()](https://developer.apple.com/documentation/realitykit/arview/layoutsubviews())

# layoutSubviews()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 26.0+

Lays out subviews.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func layoutSubviews()
```

## See Also

### Managing the view

- [frame](frame.md): The frame rectangle, which describes the view’s location and size in the coordinate system of the view’s superview.
- [contentScaleFactor](contentscalefactor.md): The scale factor of the content in the view.
- [didMoveToSuperview()](didmovetosuperview%28%29.md): Tells the view that its superview changed.
- [didMoveToWindow()](didmovetowindow%28%29.md): Tells the view that its window property is set to a new value.
- [layout()](layout%28%29.md)
- [layerClass](layerclass.md): The class used to create the layer for view instances.
- [makeBackingLayer()](makebackinglayer%28%29.md): Creates the view’s backing layer.
- [viewDidChangeBackingProperties()](viewdidchangebackingproperties%28%29.md): Tells the view when its backing store properties change.
- [viewDidMoveToSuperview()](viewdidmovetosuperview%28%29.md): Tells the view that it has a new superview or that the view’s superview has been removed.
