> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint](https://developer.apple.com/documentation/appkit/nslayoutconstraint)

# NSLayoutConstraint (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

## Declaration

```swift
class NSLayoutConstraint
```

<a id="overview"></a>

## Overview

Each constraint is a linear equation with the following format:

```objc
item1.attribute1 = multiplier × item2.attribute2 + constant
```

In this equation, `attribute1` and `attribute2` are the variables that Auto Layout can adjust when solving these constraints. The other values are defined when you create the constraint. For example, If you’re defining the relative position of two buttons, you might say “the leading edge of the second button should be 8 points after the trailing edge of the first button.” The linear equation for this relationship is shown below:

```objc
// positive values move to the right in left-to-right languages like English.
button2.leading = 1.0 × button1.trailing + 8.0
```

Auto Layout then modifies the values of the specified leading and trailing edges until both sides of the equation are equal. Note that Auto Layout does not simply assign the value of the right side of this equation to the left side. Instead, the system can modify either attribute or both attributes as needed to solve for this constraint.

The fact that constraints are equations (and not assignment operators) means that you can switch the order of the items in the equation as needed to more clearly express the desired relationship. However, if you switch the order, you must also invert the multiplier and constant. For example, the following two equations produce identical constraints:

```objc
// These equations produce identical constraints
button2.leading = 1.0 × button1.trailing + 8.0
button1.trailing = 1.0 × button2.leading - 8.0
```

A valid layout is defined as a set of constraints with one and only one possible solution. Valid layouts are also referred to as nonambiguous, nonconflicting layouts. Constraints with more than one solution are ambiguous. Constraints with no valid solutions are conflicting. Additionally, constraints are not limited to equality relationships. They can also use greater than or equal to (\>=) or less than or equal to (\<=) to describe the relationship between the two attributes. Constraints also have priorities between 1 and 1,000. Constraints with a priority of 1,000 are required. All priorities less than 1,000 are optional. By default, all constraints are required (priority = 1,000).

After solving for the required constraints, Auto Layout tries to solve all the optional constraints in priority order from highest to lowest. If it cannot solve for an optional constraint, it tries to come as close as possible to the desired result, and then moves on to the next constraint.

This combination of inequalities, equalities, and priorities gives you a great amount of flexibility and power. By combining multiple constraints, you can define layouts that dynamically adapt as the size and location of the elements in your user interface change. For more information, see [NSStackView](nsstackview.md).

## Topics

### Creating constraints

- [constraints(withVisualFormat:options:metrics:views:)](nslayoutconstraint/constraints%28withvisualformat_options_metrics_views_%29.md): Creates constraints described by an ASCII art-like visual format string.
- [init(item:attribute:relatedBy:toItem:attribute:multiplier:constant:)](nslayoutconstraint/init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.

### Activating and deactivating constraints

- [isActive](nslayoutconstraint/isactive.md): The active state of the constraint.
- [activate(\_:)](nslayoutconstraint/activate%28__%29.md): Activates each constraint in the specified array.
- [deactivate(\_:)](nslayoutconstraint/deactivate%28__%29.md): Deactivates each constraint in the specified array.

### Accessing constraint data

- [firstItem](nslayoutconstraint/firstitem.md): The first object participating in the constraint.
- [firstAttribute](nslayoutconstraint/firstattribute.md): The attribute of the first object participating in the constraint.
- [relation](nslayoutconstraint/relation-swift.property.md): The relation between the two attributes in the constraint.
- [secondItem](nslayoutconstraint/seconditem.md): The second object participating in the constraint.
- [secondAttribute](nslayoutconstraint/secondattribute.md): The attribute of the second object participating in the constraint.
- [multiplier](nslayoutconstraint/multiplier.md): The multiplier applied to the second attribute participating in the constraint.
- [constant](nslayoutconstraint/constant.md): The constant added to the multiplied second attribute participating in the constraint.
- [firstAnchor](nslayoutconstraint/firstanchor.md): The first anchor that defines the constraint.
- [secondAnchor](nslayoutconstraint/secondanchor.md): The second anchor that defines the constraint.

### Getting the layout priority

- [priority](nslayoutconstraint/priority-swift.property.md): The priority of the constraint.
- [NSLayoutConstraint.Priority](nslayoutconstraint/priority-swift.struct.md): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

### Identifying a constraint

- [identifier](nslayoutconstraint/identifier.md): The name that identifies the constraint.

### Controlling constraint archiving

- [shouldBeArchived](nslayoutconstraint/shouldbearchived.md): A Boolean value that determines whether the constraint should be archived by its owning view.

### Constants

- [NSLayoutConstraint.Relation](nslayoutconstraint/relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutConstraint.Attribute](nslayoutconstraint/attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraint.FormatOptions](nslayoutconstraint/formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraint.Orientation](nslayoutconstraint/orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSLayoutConstraint (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

The relationship between two user interface objects that must be satisfied by the constraint-based layout system.

## Declaration

```objectivec
@interface NSLayoutConstraint : NSObject
```

<a id="overview"></a>

## Overview

Each constraint is a linear equation with the following format:

```objc
item1.attribute1 = multiplier × item2.attribute2 + constant
```

In this equation, `attribute1` and `attribute2` are the variables that Auto Layout can adjust when solving these constraints. The other values are defined when you create the constraint. For example, If you’re defining the relative position of two buttons, you might say “the leading edge of the second button should be 8 points after the trailing edge of the first button.” The linear equation for this relationship is shown below:

```objc
// positive values move to the right in left-to-right languages like English.
button2.leading = 1.0 × button1.trailing + 8.0
```

Auto Layout then modifies the values of the specified leading and trailing edges until both sides of the equation are equal. Note that Auto Layout does not simply assign the value of the right side of this equation to the left side. Instead, the system can modify either attribute or both attributes as needed to solve for this constraint.

The fact that constraints are equations (and not assignment operators) means that you can switch the order of the items in the equation as needed to more clearly express the desired relationship. However, if you switch the order, you must also invert the multiplier and constant. For example, the following two equations produce identical constraints:

```objc
// These equations produce identical constraints
button2.leading = 1.0 × button1.trailing + 8.0
button1.trailing = 1.0 × button2.leading - 8.0
```

A valid layout is defined as a set of constraints with one and only one possible solution. Valid layouts are also referred to as nonambiguous, nonconflicting layouts. Constraints with more than one solution are ambiguous. Constraints with no valid solutions are conflicting. Additionally, constraints are not limited to equality relationships. They can also use greater than or equal to (\>=) or less than or equal to (\<=) to describe the relationship between the two attributes. Constraints also have priorities between 1 and 1,000. Constraints with a priority of 1,000 are required. All priorities less than 1,000 are optional. By default, all constraints are required (priority = 1,000).

After solving for the required constraints, Auto Layout tries to solve all the optional constraints in priority order from highest to lowest. If it cannot solve for an optional constraint, it tries to come as close as possible to the desired result, and then moves on to the next constraint.

This combination of inequalities, equalities, and priorities gives you a great amount of flexibility and power. By combining multiple constraints, you can define layouts that dynamically adapt as the size and location of the elements in your user interface change. For more information, see [NSStackView](nsstackview.md).

## Topics

### Creating constraints

- [constraintsWithVisualFormat:options:metrics:views:](nslayoutconstraint/constraints%28withvisualformat_options_metrics_views_%29.md): Creates constraints described by an ASCII art-like visual format string.
- [constraintWithItem:attribute:relatedBy:toItem:attribute:multiplier:constant:](nslayoutconstraint/init%28item_attribute_relatedby_toitem_attribute_multiplier_constant_%29.md): Creates a constraint that defines the relationship between the specified attributes of the given views.

### Activating and deactivating constraints

- [active](nslayoutconstraint/isactive.md): The active state of the constraint.
- [activateConstraints:](nslayoutconstraint/activate%28__%29.md): Activates each constraint in the specified array.
- [deactivateConstraints:](nslayoutconstraint/deactivate%28__%29.md): Deactivates each constraint in the specified array.

### Accessing constraint data

- [firstItem](nslayoutconstraint/firstitem.md): The first object participating in the constraint.
- [firstAttribute](nslayoutconstraint/firstattribute.md): The attribute of the first object participating in the constraint.
- [relation](nslayoutconstraint/relation-swift.property.md): The relation between the two attributes in the constraint.
- [secondItem](nslayoutconstraint/seconditem.md): The second object participating in the constraint.
- [secondAttribute](nslayoutconstraint/secondattribute.md): The attribute of the second object participating in the constraint.
- [multiplier](nslayoutconstraint/multiplier.md): The multiplier applied to the second attribute participating in the constraint.
- [constant](nslayoutconstraint/constant.md): The constant added to the multiplied second attribute participating in the constraint.
- [firstAnchor](nslayoutconstraint/firstanchor.md): The first anchor that defines the constraint.
- [secondAnchor](nslayoutconstraint/secondanchor.md): The second anchor that defines the constraint.

### Getting the layout priority

- [priority](nslayoutconstraint/priority-swift.property.md): The priority of the constraint.
- [NSLayoutPriority](nslayoutconstraint/priority-swift.struct.md): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

### Identifying a constraint

- [identifier](nslayoutconstraint/identifier.md): The name that identifies the constraint.

### Controlling constraint archiving

- [shouldBeArchived](nslayoutconstraint/shouldbearchived.md): A Boolean value that determines whether the constraint should be archived by its owning view.

### Constants

- [NSLayoutRelation](nslayoutconstraint/relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutAttribute](nslayoutconstraint/attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutFormatOptions](nslayoutconstraint/formatoptions.md): A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.
- [NSLayoutConstraintOrientation](nslayoutconstraint/orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
