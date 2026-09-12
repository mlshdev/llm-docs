> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutanchor](https://developer.apple.com/documentation/uikit/nslayoutanchor)

# NSLayoutAnchor (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A factory class for creating layout constraint objects using a fluent API.

## Declaration

```swift
@MainActor class NSLayoutAnchor<AnchorType> where AnchorType : AnyObject
```

<a id="overview"></a>

## Overview

Use these constraints to programatically define your layout using Auto Layout. Instead of creating [NSLayoutConstraint](nslayoutconstraint.md) objects directly, start with a [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md) object you wish to constrain, and select one of that object’s anchor properties. These properties correspond to the main [NSLayoutConstraint.Attribute](nslayoutconstraint/attribute.md) values used in Auto Layout, and provide an appropriate [NSLayoutAnchor](nslayoutanchor.md) subclass for creating constraints to that attribute. Use the anchor’s methods to construct your constraint.

> **Note**

>  [UIView](uiview.md) does not provide anchor properties for the layout margin attributes. Instead, the [layoutMarginsGuide](uiview/layoutmarginsguide.md) property provides a [UILayoutGuide](uilayoutguide.md) object that represents these margins. Use the guide’s anchor properties to create your constraints.

**Swift**

```swift
// Creating constraints using NSLayoutConstraint
NSLayoutConstraint(item: subview,
                   attribute: .leading,
                   relatedBy: .equal,
                   toItem: view,
                   attribute: .leadingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true

NSLayoutConstraint(item: subview,
                   attribute: .trailing,
                   relatedBy: .equal,
                   toItem: view,
                   attribute: .trailingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true

// Creating the same constraints using Layout Anchors
let margins = view.layoutMarginsGuide

subview.leadingAnchor.constraint(equalTo: margins.leadingAnchor).isActive = true
subview.trailingAnchor.constraint(equalTo: margins.trailingAnchor).isActive = true

```

**Objective-C**

```objc
// Creating constraints using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeLeading
 relatedBy:NSLayoutRelationEqual
 toItem:self.view
 attribute:NSLayoutAttributeLeadingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeTrailing
 relatedBy:NSLayoutRelationEqual
 toItem:self.view
 attribute:NSLayoutAttributeTrailingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
// Creating the same constraints using Layout Anchors
UILayoutGuide *margin = self.view.layoutMarginsGuide;
 
[subview.leadingAnchor constraintEqualToAnchor:margin.leadingAnchor].active = YES;
[subview.trailingAnchor constraintEqualToAnchor:margin.trailingAnchor].active = YES;
```

As you can see from these examples, the [NSLayoutAnchor](nslayoutanchor.md) class provides several advantages over using the [NSLayoutConstraint](nslayoutconstraint.md) API directly.

- The code is cleaner, more concise, and easier to read.
- The [NSLayoutConstraint.Attribute](nslayoutconstraint/attribute.md) subclasses provide additional type checking, preventing you from creating invalid constraints.

> **Note**

>  While the [NSLayoutAnchor](nslayoutanchor.md) class provides additional type checking, it is still possible to create invalid constraints. For example, the compiler allows you to constrain one view’s [leadingAnchor](uiview/leadinganchor.md) with another view’s [leftAnchor](uiview/leftanchor.md), since they are both [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) instances. However, Auto Layout does not allow constraints that mix leading and trailing attributes with left or right attributes. As a result, this constraint crashes at runtime.

For more information on the anchor properties, see [bottomAnchor](https://developer.apple.com/documentation/appkit/nsview/bottomanchor) in the [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md).

> **Note**

>  You never use the [NSLayoutAnchor](nslayoutanchor.md) class directly. Instead, use one of its subclasses, based on the type of constraint you wish to create.
>
> - Use [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) to create horizontal constraints.
> - Use [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) to create vertical constraints.
> - Use [NSLayoutDimension](nslayoutdimension.md) to create constraints that affect the view’s height or width.
>
> However, since you access [NSLayoutAnchor](nslayoutanchor.md) objects using the anchor properties of a [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md), a correct subclass is automatically provided.

## Topics

### Building constraints

- [constraint(equalTo:)](nslayoutanchor/constraint%28equalto_%29.md): Returns a constraint that defines one item’s attribute as equal to another.
- [constraint(equalTo:constant:)](nslayoutanchor/constraint%28equalto_constant_%29.md): Returns a constraint that defines one item’s attribute as equal to another item’s attribute plus a constant offset.
- [constraint(greaterThanOrEqualTo:)](nslayoutanchor/constraint%28greaterthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another.
- [constraint(greaterThanOrEqualTo:constant:)](nslayoutanchor/constraint%28greaterthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another item’s attribute plus a constant offset.
- [constraint(lessThanOrEqualTo:)](nslayoutanchor/constraint%28lessthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another.
- [constraint(lessThanOrEqualTo:constant:)](nslayoutanchor/constraint%28lessthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another item’s attribute plus a constant offset.

### Debugging the anchor

- [constraintsAffectingLayout](https://developer.apple.com/documentation/appkit/nslayoutanchor/constraintsaffectinglayout): The constraints that impact the layout of the anchor.
- [hasAmbiguousLayout](https://developer.apple.com/documentation/appkit/nslayoutanchor/hasambiguouslayout): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](https://developer.apple.com/documentation/appkit/nslayoutanchor/name): The name assigned to the anchor for debugging purposes.
- [item](https://developer.apple.com/documentation/appkit/nslayoutanchor/item): The layout item used to calculate the anchor’s position.

### Initializers

- [init(coder:)](nslayoutanchor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSLayoutDimension](nslayoutdimension.md)
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md)
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Anchors

- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.
- [NSLAYOUTANCHOR_H](nslayoutanchor_h.md)

# NSLayoutAnchor (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A factory class for creating layout constraint objects using a fluent API.

## Declaration

```objectivec
@interface NSLayoutAnchor : NSObject
```

<a id="overview"></a>

## Overview

Use these constraints to programatically define your layout using Auto Layout. Instead of creating [NSLayoutConstraint](nslayoutconstraint.md) objects directly, start with a [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md) object you wish to constrain, and select one of that object’s anchor properties. These properties correspond to the main [NSLayoutAttribute](nslayoutconstraint/attribute.md) values used in Auto Layout, and provide an appropriate [NSLayoutAnchor](nslayoutanchor.md) subclass for creating constraints to that attribute. Use the anchor’s methods to construct your constraint.

> **Note**

>  [UIView](uiview.md) does not provide anchor properties for the layout margin attributes. Instead, the [layoutMarginsGuide](uiview/layoutmarginsguide.md) property provides a [UILayoutGuide](uilayoutguide.md) object that represents these margins. Use the guide’s anchor properties to create your constraints.

**Swift**

```swift
// Creating constraints using NSLayoutConstraint
NSLayoutConstraint(item: subview,
                   attribute: .leading,
                   relatedBy: .equal,
                   toItem: view,
                   attribute: .leadingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true

NSLayoutConstraint(item: subview,
                   attribute: .trailing,
                   relatedBy: .equal,
                   toItem: view,
                   attribute: .trailingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true

// Creating the same constraints using Layout Anchors
let margins = view.layoutMarginsGuide

subview.leadingAnchor.constraint(equalTo: margins.leadingAnchor).isActive = true
subview.trailingAnchor.constraint(equalTo: margins.trailingAnchor).isActive = true

```

**Objective-C**

```objc
// Creating constraints using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeLeading
 relatedBy:NSLayoutRelationEqual
 toItem:self.view
 attribute:NSLayoutAttributeLeadingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeTrailing
 relatedBy:NSLayoutRelationEqual
 toItem:self.view
 attribute:NSLayoutAttributeTrailingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
// Creating the same constraints using Layout Anchors
UILayoutGuide *margin = self.view.layoutMarginsGuide;
 
[subview.leadingAnchor constraintEqualToAnchor:margin.leadingAnchor].active = YES;
[subview.trailingAnchor constraintEqualToAnchor:margin.trailingAnchor].active = YES;
```

As you can see from these examples, the [NSLayoutAnchor](nslayoutanchor.md) class provides several advantages over using the [NSLayoutConstraint](nslayoutconstraint.md) API directly.

- The code is cleaner, more concise, and easier to read.
- The [NSLayoutAttribute](nslayoutconstraint/attribute.md) subclasses provide additional type checking, preventing you from creating invalid constraints.

> **Note**

>  While the [NSLayoutAnchor](nslayoutanchor.md) class provides additional type checking, it is still possible to create invalid constraints. For example, the compiler allows you to constrain one view’s [leadingAnchor](uiview/leadinganchor.md) with another view’s [leftAnchor](uiview/leftanchor.md), since they are both [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) instances. However, Auto Layout does not allow constraints that mix leading and trailing attributes with left or right attributes. As a result, this constraint crashes at runtime.

For more information on the anchor properties, see [bottomAnchor](https://developer.apple.com/documentation/appkit/nsview/bottomanchor) in the [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md).

> **Note**

>  You never use the [NSLayoutAnchor](nslayoutanchor.md) class directly. Instead, use one of its subclasses, based on the type of constraint you wish to create.
>
> - Use [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md) to create horizontal constraints.
> - Use [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md) to create vertical constraints.
> - Use [NSLayoutDimension](nslayoutdimension.md) to create constraints that affect the view’s height or width.
>
> However, since you access [NSLayoutAnchor](nslayoutanchor.md) objects using the anchor properties of a [UIView](uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](uilayoutguide.md), a correct subclass is automatically provided.

## Topics

### Building constraints

- [constraintEqualToAnchor:](nslayoutanchor/constraint%28equalto_%29.md): Returns a constraint that defines one item’s attribute as equal to another.
- [constraintEqualToAnchor:constant:](nslayoutanchor/constraint%28equalto_constant_%29.md): Returns a constraint that defines one item’s attribute as equal to another item’s attribute plus a constant offset.
- [constraintGreaterThanOrEqualToAnchor:](nslayoutanchor/constraint%28greaterthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another.
- [constraintGreaterThanOrEqualToAnchor:constant:](nslayoutanchor/constraint%28greaterthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another item’s attribute plus a constant offset.
- [constraintLessThanOrEqualToAnchor:](nslayoutanchor/constraint%28lessthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another.
- [constraintLessThanOrEqualToAnchor:constant:](nslayoutanchor/constraint%28lessthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another item’s attribute plus a constant offset.

### Debugging the anchor

- [constraintsAffectingLayout](https://developer.apple.com/documentation/appkit/nslayoutanchor/constraintsaffectinglayout): The constraints that impact the layout of the anchor.
- [hasAmbiguousLayout](https://developer.apple.com/documentation/appkit/nslayoutanchor/hasambiguouslayout): A Boolean value indicating whether the constraints impacting the anchor specify its location ambiguously.
- [name](https://developer.apple.com/documentation/appkit/nslayoutanchor/name): The name assigned to the anchor for debugging purposes.
- [item](https://developer.apple.com/documentation/appkit/nslayoutanchor/item): The layout item used to calculate the anchor’s position.

### Instance Properties

- [constraintsAffectingLayout](nslayoutanchor/constraintsaffectinglayout.md)
- [hasAmbiguousLayout](nslayoutanchor/hasambiguouslayout.md)
- [item](nslayoutanchor/item.md)
- [name](nslayoutanchor/name.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSLayoutDimension](nslayoutdimension.md)
- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md)
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Anchors

- [NSLayoutXAxisAnchor](nslayoutxaxisanchor.md): A factory class for creating horizontal layout constraint objects using a fluent API.
- [NSLayoutYAxisAnchor](nslayoutyaxisanchor.md): A factory class for creating vertical layout constraint objects using a fluent API.
