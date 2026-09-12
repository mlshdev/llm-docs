> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/zindex](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/zindex)

# zIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies the item’s position on the z axis.

## Declaration

```swift
var zIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property is used to determine the front-to-back ordering of items during layout. Items with higher index values appear on top of items with lower values. Items with the same value have an undetermined order.

The default value of this property is 0.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [isHidden](ishidden.md): Determines whether the item is currently displayed.

# zIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Specifies the item’s position on the z axis.

## Declaration

```objectivec
@property (nonatomic) NSInteger zIndex;
```

<a id="Discussion"></a>

## Discussion

This property is used to determine the front-to-back ordering of items during layout. Items with higher index values appear on top of items with lower values. Items with the same value have an undetermined order.

The default value of this property is 0.

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [hidden](ishidden.md): Determines whether the item is currently displayed.
