> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutguide/layoutframe](https://developer.apple.com/documentation/uikit/uilayoutguide/layoutframe)

# layoutFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout guide’s frame in its owning view’s coordinate system.

## Declaration

```swift
var layoutFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The layout guide defines a rectangular space in its owning view’s coordinate system. This property contains a valid [CGRect](../../corefoundation/cgrect.md) value by the time its owning view’s [layoutSubviews()](../uiview/layoutsubviews%28%29.md) method is called.

## See Also

### Related Documentation

- [layoutSubviews()](../uiview/layoutsubviews%28%29.md): Lays out subviews.

### Working with layout guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [owningView](owningview.md): The view that owns this layout guide.

# layoutFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The layout guide’s frame in its owning view’s coordinate system.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect layoutFrame;
```

<a id="Discussion"></a>

## Discussion

The layout guide defines a rectangular space in its owning view’s coordinate system. This property contains a valid [CGRect](../../corefoundation/cgrect.md) value by the time its owning view’s [layoutSubviews](../uiview/layoutsubviews%28%29.md) method is called.

## See Also

### Related Documentation

- [layoutSubviews](../uiview/layoutsubviews%28%29.md): Lays out subviews.

### Working with layout guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [owningView](owningview.md): The view that owns this layout guide.
