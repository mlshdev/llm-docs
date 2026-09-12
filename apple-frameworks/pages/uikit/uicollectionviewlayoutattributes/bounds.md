> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/bounds](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/bounds)

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The bounds of the item.

## Declaration

```swift
var bounds: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

When setting the bounds, the origin of the bounds rectangle must always be at (0, 0). Changing the bounds rectangle also changes the value in the [size](size.md) property to match the new bounds size.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [isHidden](ishidden.md): Determines whether the item is currently displayed.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The bounds of the item.

## Declaration

```objectivec
@property (nonatomic) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

When setting the bounds, the origin of the bounds rectangle must always be at (0, 0). Changing the bounds rectangle also changes the value in the [size](size.md) property to match the new bounds size.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [hidden](ishidden.md): Determines whether the item is currently displayed.
