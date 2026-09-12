> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/relation-swift.enum](https://developer.apple.com/documentation/uikit/nslayoutconstraint/relation-swift.enum)

# NSLayoutConstraint.Relation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The relation between the first attribute and the modified second attribute in a constraint.

## Declaration

```swift
enum Relation
```

## Topics

### Constants

- [NSLayoutConstraint.Relation.lessThanOrEqual](relation-swift.enum/lessthanorequal.md): The constraint requires the first attribute to be less than or equal to the modified second attribute.
- [NSLayoutConstraint.Relation.equal](relation-swift.enum/equal.md): The constraint requires the first attribute to be exactly equal to the modified second attribute.
- [NSLayoutConstraint.Relation.greaterThanOrEqual](relation-swift.enum/greaterthanorequal.md): The constraint requires the first attribute to be greater than or equal to the modified second attribute.

### Initializers

- [init(rawValue:)](relation-swift.enum/init%28rawvalue_%29.md)

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

- [NSLayoutConstraint.Attribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraint.FormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraint.Orientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSLayoutConstraint.Axis](axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)

# NSLayoutRelation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The relation between the first attribute and the modified second attribute in a constraint.

## Declaration

```objectivec
enum NSLayoutRelation : NSInteger;
```

## Topics

### Constants

- [NSLayoutRelationLessThanOrEqual](relation-swift.enum/lessthanorequal.md): The constraint requires the first attribute to be less than or equal to the modified second attribute.
- [NSLayoutRelationEqual](relation-swift.enum/equal.md): The constraint requires the first attribute to be exactly equal to the modified second attribute.
- [NSLayoutRelationGreaterThanOrEqual](relation-swift.enum/greaterthanorequal.md): The constraint requires the first attribute to be greater than or equal to the modified second attribute.

## See Also

### Constants

- [NSLayoutAttribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutFormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraintOrientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [UILayoutConstraintAxis](axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)
