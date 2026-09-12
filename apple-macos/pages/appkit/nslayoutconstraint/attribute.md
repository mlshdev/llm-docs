> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/attribute](https://developer.apple.com/documentation/appkit/nslayoutconstraint/attribute)

# NSLayoutConstraint.Attribute (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The part of the object’s visual representation that should be used to get the value for the constraint.

## Declaration

```swift
enum Attribute
```

## Topics

### Constants

- [NSLayoutConstraint.Attribute.left](attribute/left.md): The left side of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.right](attribute/right.md): The right side of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.top](attribute/top.md): The top of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.bottom](attribute/bottom.md): The bottom of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.leading](attribute/leading.md): The leading edge of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.trailing](attribute/trailing.md): The trailing edge of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.width](attribute/width.md): The width of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.height](attribute/height.md): The height of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.centerX](attribute/centerx.md): The center along the x-axis of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.centerY](attribute/centery.md): The center along the y-axis of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.lastBaseline](attribute/lastbaseline.md): The object’s baseline.
- [NSLayoutConstraint.Attribute.firstBaseline](attribute/firstbaseline.md): The object’s baseline.
- [NSLayoutConstraint.Attribute.notAnAttribute](attribute/notanattribute.md): A placeholder value for indicating that the constraint’s second item and second attribute aren’t used in any calculations.

### Initializers

- [init(rawValue:)](attribute/init%28rawvalue_%29.md)

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
- [NSLayoutConstraint.FormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraint.Orientation](orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.

# NSLayoutAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The part of the object’s visual representation that should be used to get the value for the constraint.

## Declaration

```objectivec
enum NSLayoutAttribute : NSInteger;
```

## Topics

### Constants

- [NSLayoutAttributeLeft](attribute/left.md): The left side of the object’s alignment rectangle.
- [NSLayoutAttributeRight](attribute/right.md): The right side of the object’s alignment rectangle.
- [NSLayoutAttributeTop](attribute/top.md): The top of the object’s alignment rectangle.
- [NSLayoutAttributeBottom](attribute/bottom.md): The bottom of the object’s alignment rectangle.
- [NSLayoutAttributeLeading](attribute/leading.md): The leading edge of the object’s alignment rectangle.
- [NSLayoutAttributeTrailing](attribute/trailing.md): The trailing edge of the object’s alignment rectangle.
- [NSLayoutAttributeWidth](attribute/width.md): The width of the object’s alignment rectangle.
- [NSLayoutAttributeHeight](attribute/height.md): The height of the object’s alignment rectangle.
- [NSLayoutAttributeCenterX](attribute/centerx.md): The center along the x-axis of the object’s alignment rectangle.
- [NSLayoutAttributeCenterY](attribute/centery.md): The center along the y-axis of the object’s alignment rectangle.
- [NSLayoutAttributeLastBaseline](attribute/lastbaseline.md): The object’s baseline.
- [NSLayoutAttributeFirstBaseline](attribute/firstbaseline.md): The object’s baseline.
- [NSLayoutAttributeNotAnAttribute](attribute/notanattribute.md): A placeholder value for indicating that the constraint’s second item and second attribute aren’t used in any calculations.

### Enumeration Cases

- [NSLayoutAttributeBaseline](../nslayoutattribute/nslayoutattributebaseline.md)

## See Also

### Constants

- [NSLayoutRelation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutFormatOptions](formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraintOrientation](orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.
