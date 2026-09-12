> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/constant](https://developer.apple.com/documentation/uikit/nslayoutconstraint/constant)

# constant (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The constant added to the multiplied second attribute participating in the constraint.

## Declaration

```swift
var constant: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Unlike the other properties, the constant can be modified after constraint creation. Setting the constant on an existing constraint performs much better than removing the constraint and adding a new one that’s exactly like the old except that it has a different constant.

## See Also

### Accessing constraint data

- [firstItem](firstitem.md): The first object participating in the constraint.
- [firstAttribute](firstattribute.md): The attribute of the first object participating in the constraint.
- [relation](relation-swift.property.md): The relation between the two attributes in the constraint.
- [secondItem](seconditem.md): The second object participating in the constraint.
- [secondAttribute](secondattribute.md): The attribute of the second object participating in the constraint.
- [multiplier](multiplier.md): The multiplier applied to the second attribute participating in the constraint.
- [firstAnchor](firstanchor.md): The first anchor that defines the constraint.
- [secondAnchor](secondanchor.md): The second anchor that defines the constraint.

# constant (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The constant added to the multiplied second attribute participating in the constraint.

## Declaration

```objectivec
@property CGFloat constant;
```

<a id="Discussion"></a>

## Discussion

Unlike the other properties, the constant can be modified after constraint creation. Setting the constant on an existing constraint performs much better than removing the constraint and adding a new one that’s exactly like the old except that it has a different constant.

## See Also

### Accessing constraint data

- [firstItem](firstitem.md): The first object participating in the constraint.
- [firstAttribute](firstattribute.md): The attribute of the first object participating in the constraint.
- [relation](relation-swift.property.md): The relation between the two attributes in the constraint.
- [secondItem](seconditem.md): The second object participating in the constraint.
- [secondAttribute](secondattribute.md): The attribute of the second object participating in the constraint.
- [multiplier](multiplier.md): The multiplier applied to the second attribute participating in the constraint.
- [firstAnchor](firstanchor.md): The first anchor that defines the constraint.
- [secondAnchor](secondanchor.md): The second anchor that defines the constraint.
