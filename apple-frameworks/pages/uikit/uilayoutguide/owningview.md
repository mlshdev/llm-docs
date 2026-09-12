> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutguide/owningview](https://developer.apple.com/documentation/uikit/uilayoutguide/owningview)

# owningView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view that owns this layout guide.

## Declaration

```swift
weak var owningView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`. To participate in Auto Layout, the layout guide must be added to a view by calling its [addLayoutGuide(\_:)](../uiview/addlayoutguide%28__%29.md) method. Do not modify this property directly. Instead, use the view’s [addLayoutGuide(\_:)](../uiview/addlayoutguide%28__%29.md) and [removeLayoutGuide(\_:)](../uiview/removelayoutguide%28__%29.md) methods, which update this property as necessary.

## See Also

### Working with layout guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [layoutFrame](layoutframe.md): The layout guide’s frame in its owning view’s coordinate system.

# owningView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The view that owns this layout guide.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * owningView;
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`. To participate in Auto Layout, the layout guide must be added to a view by calling its [addLayoutGuide:](../uiview/addlayoutguide%28__%29.md) method. Do not modify this property directly. Instead, use the view’s [addLayoutGuide:](../uiview/addlayoutguide%28__%29.md) and [removeLayoutGuide:](../uiview/removelayoutguide%28__%29.md) methods, which update this property as necessary.

## See Also

### Working with layout guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [layoutFrame](layoutframe.md): The layout guide’s frame in its owning view’s coordinate system.
