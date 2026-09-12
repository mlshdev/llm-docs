> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutattributes/ishidden](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutattributes/ishidden)

# isHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Determines whether the item is currently displayed.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). As an optimization, the collection view might not create the corresponding view if this property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.

# hidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Determines whether the item is currently displayed.

## Declaration

```objectivec
@property (nonatomic, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). As an optimization, the collection view might not create the corresponding view if this property is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the layout attributes

- [frame](frame.md): The frame rectangle of the item.
- [bounds](bounds.md): The bounds of the item.
- [center](center.md): The center point of the item.
- [size](size.md): The size of the item.
- [transform3D](transform3d.md): The 3D transform of the item.
- [transform](transform.md): The affine transform of the item.
- [alpha](alpha.md): The transparency of the item.
- [zIndex](zindex.md): Specifies the item’s position on the z axis.
