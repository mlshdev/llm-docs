> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/transform](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/transform)

# transform (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The affine transform of the item.

## Declaration

```swift
var transform: CGAffineTransform { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property replaces the value in the [transform3D](transform3d.md) property with a 3D version of the affine transform you specify.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [isHidden](ishidden.md): Determines whether the item is currently displayed.

# transform (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The affine transform of the item.

## Declaration

```objectivec
@property (nonatomic) CGAffineTransform transform;
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property replaces the value in the [transform3D](transform3d.md) property with a 3D version of the affine transform you specify.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
- [hidden](ishidden.md): Determines whether the item is currently displayed.
