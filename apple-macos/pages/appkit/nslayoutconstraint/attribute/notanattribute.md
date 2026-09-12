> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/attribute/notanattribute](https://developer.apple.com/documentation/appkit/nslayoutconstraint/attribute/notanattribute)

# NSLayoutConstraint.Attribute.notAnAttribute (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A placeholder value for indicating that the constraint’s second item and second attribute aren’t used in any calculations.

## Declaration

```swift
case notAnAttribute
```

<a id="Discussion"></a>

## Discussion

Use this value when creating a constraint that assigns a constant to an attribute. For example, `item1.height >= 40`. If a constraint only has one item, set the second item to `nil`, and set the second attribute to [NSLayoutConstraint.Attribute.notAnAttribute](notanattribute.md).

## See Also

### Constants

- [NSLayoutConstraint.Attribute.left](left.md): The left side of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.right](right.md): The right side of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.top](top.md): The top of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.bottom](bottom.md): The bottom of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.leading](leading.md): The leading edge of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.trailing](trailing.md): The trailing edge of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.width](width.md): The width of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.height](height.md): The height of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.centerX](centerx.md): The center along the x-axis of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.centerY](centery.md): The center along the y-axis of the object’s alignment rectangle.
- [NSLayoutConstraint.Attribute.lastBaseline](lastbaseline.md): The object’s baseline.
- [NSLayoutConstraint.Attribute.firstBaseline](firstbaseline.md): The object’s baseline.

# NSLayoutAttributeNotAnAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A placeholder value for indicating that the constraint’s second item and second attribute aren’t used in any calculations.

## Declaration

```objectivec
NSLayoutAttributeNotAnAttribute
```

<a id="Discussion"></a>

## Discussion

Use this value when creating a constraint that assigns a constant to an attribute. For example, `item1.height >= 40`. If a constraint only has one item, set the second item to `nil`, and set the second attribute to [NSLayoutAttributeNotAnAttribute](notanattribute.md).

## See Also

### Constants

- [NSLayoutAttributeLeft](left.md): The left side of the object’s alignment rectangle.
- [NSLayoutAttributeRight](right.md): The right side of the object’s alignment rectangle.
- [NSLayoutAttributeTop](top.md): The top of the object’s alignment rectangle.
- [NSLayoutAttributeBottom](bottom.md): The bottom of the object’s alignment rectangle.
- [NSLayoutAttributeLeading](leading.md): The leading edge of the object’s alignment rectangle.
- [NSLayoutAttributeTrailing](trailing.md): The trailing edge of the object’s alignment rectangle.
- [NSLayoutAttributeWidth](width.md): The width of the object’s alignment rectangle.
- [NSLayoutAttributeHeight](height.md): The height of the object’s alignment rectangle.
- [NSLayoutAttributeCenterX](centerx.md): The center along the x-axis of the object’s alignment rectangle.
- [NSLayoutAttributeCenterY](centery.md): The center along the y-axis of the object’s alignment rectangle.
- [NSLayoutAttributeLastBaseline](lastbaseline.md): The object’s baseline.
- [NSLayoutAttributeFirstBaseline](firstbaseline.md): The object’s baseline.
