> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/attribute/notanattribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/notanattribute)

# NSLayoutConstraint.Attribute.notAnAttribute (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
- [NSLayoutConstraint.Attribute.leftMargin](leftmargin.md): The object’s left margin.
- [NSLayoutConstraint.Attribute.rightMargin](rightmargin.md): The object’s right margin.
- [NSLayoutConstraint.Attribute.topMargin](topmargin.md): The object’s top margin.

# NSLayoutAttributeNotAnAttribute (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
- [NSLayoutAttributeBaseline](../../nslayoutattribute/nslayoutattributebaseline.md): The object’s baseline.
- [NSLayoutAttributeLastBaseline](lastbaseline.md): The object’s baseline.
- [NSLayoutAttributeFirstBaseline](firstbaseline.md): The object’s baseline.
- [NSLayoutAttributeLeftMargin](leftmargin.md): The object’s left margin.
- [NSLayoutAttributeRightMargin](rightmargin.md): The object’s right margin.
