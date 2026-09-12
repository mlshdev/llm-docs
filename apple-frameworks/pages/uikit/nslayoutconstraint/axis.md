> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/axis](https://developer.apple.com/documentation/uikit/nslayoutconstraint/axis)

# NSLayoutConstraint.Axis (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys that specify a horizontal or vertical layout constraint between objects.

## Declaration

```swift
enum Axis
```

## Topics

### Constants

- [NSLayoutConstraint.Axis.horizontal](axis/horizontal.md): The constraint applied when laying out the horizontal relationship between objects.
- [NSLayoutConstraint.Axis.vertical](axis/vertical.md): The constraint applied when laying out the vertical relationship between objects.

### Initializers

- [init(rawValue:)](axis/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSLayoutConstraint.Relation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutConstraint.Attribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraint.FormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraint.Orientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)

# UILayoutConstraintAxis (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys that specify a horizontal or vertical layout constraint between objects.

## Declaration

```objectivec
enum UILayoutConstraintAxis : NSInteger;
```

## Topics

### Constants

- [UILayoutConstraintAxisHorizontal](axis/horizontal.md): The constraint applied when laying out the horizontal relationship between objects.
- [UILayoutConstraintAxisVertical](axis/vertical.md): The constraint applied when laying out the vertical relationship between objects.

## See Also

### Constants

- [NSLayoutRelation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutAttribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutFormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraintOrientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)
