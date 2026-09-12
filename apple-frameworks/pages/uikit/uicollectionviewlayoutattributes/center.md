> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/center](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/center)

# center (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The center point of the item.

## Declaration

```swift
var center: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

The center point is specified in the coordinate system of the collection view. Setting the value of this property also updates the origin of the rectangle in the [frame](frame.md) property.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [isHidden](ishidden.md): Determines whether the item is currently displayed.

# center (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The center point of the item.

## Declaration

```objectivec
@property (nonatomic) CGPoint center;
```

<a id="Discussion"></a>

## Discussion

The center point is specified in the coordinate system of the collection view. Setting the value of this property also updates the origin of the rectangle in the [frame](frame.md) property.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [hidden](ishidden.md): Determines whether the item is currently displayed.
