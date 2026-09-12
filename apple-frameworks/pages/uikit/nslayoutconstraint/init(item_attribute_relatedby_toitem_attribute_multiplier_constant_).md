> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/init(item:attribute:relatedby:toitem:attribute:multiplier:constant:)](https://developer.apple.com/documentation/uikit/nslayoutconstraint/init(item:attribute:relatedby:toitem:attribute:multiplier:constant:))

# init(item:attribute:relatedBy:toItem:attribute:multiplier:constant:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a constraint that defines the relationship between the specified attributes of the given views.

## Declaration

```swift
convenience init(item view1: Any, attribute attr1: NSLayoutConstraint.Attribute, relatedBy relation: NSLayoutConstraint.Relation, toItem view2: Any?, attribute attr2: NSLayoutConstraint.Attribute, multiplier: CGFloat, constant c: CGFloat)
```

## Parameters

- `view1`: The view for the left side of the constraint.
- `attr1`: The attribute of the view for the left side of the constraint.
- `relation`: The relationship between the left side of the constraint and the right side of the constraint.
- `view2`: The view for the right side of the constraint.
- `attr2`: The attribute of the view for the right side of the constraint.
- `multiplier`: The constant multiplied with the attribute on the right side of the constraint as part of getting the modified attribute.
- `c`: The constant added to the multiplied attribute value on the right side of the constraint to yield the final modified attribute.

<a id="return-value"></a>

## Return Value

A constraint object relating the two provided views with the specified relation, attributes, multiplier, and constant.

<a id="Discussion"></a>

## Discussion

Constraints represent linear equations of the form `view1.attr1 <relation> multiplier × view2.attr2 + c`. If the constraint you wish to express does not have a second view and attribute, use `nil` and [NSLayoutConstraint.Attribute.notAnAttribute](attribute/notanattribute.md).

> **Note**

>  This method throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception if it is used to create an invalid constraint (for example, `view1.top == 0.0 x nil.NotAnAttribute + 200.0` or `view1.top == 1.0 x view2.height + 20.0`).
>
> In general, you should use the layout anchor API to programmatically create constraints. This API includes additional type information that can catch many invalid constraints at build time. For more information, see Creating Constraints Using Layout Anchors in [NSView](https://developer.apple.com/documentation/appkit/nsview) or [UIView](../uiview.md).

## See Also

### Creating constraints

- [constraints(withVisualFormat:options:metrics:views:)](constraints%28withvisualformat_options_metrics_views_%29.md): Creates constraints described by an ASCII art-like visual format string.

# constraintWithItem:attribute:relatedBy:toItem:attribute:multiplier:constant: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a constraint that defines the relationship between the specified attributes of the given views.

## Declaration

```objectivec
+ (instancetype) constraintWithItem:(id) view1 attribute:(NSLayoutAttribute) attr1 relatedBy:(NSLayoutRelation) relation toItem:(id) view2 attribute:(NSLayoutAttribute) attr2 multiplier:(CGFloat) multiplier constant:(CGFloat) c;
```

## Parameters

- `view1`: The view for the left side of the constraint.
- `attr1`: The attribute of the view for the left side of the constraint.
- `relation`: The relationship between the left side of the constraint and the right side of the constraint.
- `view2`: The view for the right side of the constraint.
- `attr2`: The attribute of the view for the right side of the constraint.
- `multiplier`: The constant multiplied with the attribute on the right side of the constraint as part of getting the modified attribute.
- `c`: The constant added to the multiplied attribute value on the right side of the constraint to yield the final modified attribute.

<a id="return-value"></a>

## Return Value

A constraint object relating the two provided views with the specified relation, attributes, multiplier, and constant.

<a id="Discussion"></a>

## Discussion

Constraints represent linear equations of the form `view1.attr1 <relation> multiplier × view2.attr2 + c`. If the constraint you wish to express does not have a second view and attribute, use `nil` and [NSLayoutAttributeNotAnAttribute](attribute/notanattribute.md).

> **Note**

>  This method throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception if it is used to create an invalid constraint (for example, `view1.top == 0.0 x nil.NotAnAttribute + 200.0` or `view1.top == 1.0 x view2.height + 20.0`).
>
> In general, you should use the layout anchor API to programmatically create constraints. This API includes additional type information that can catch many invalid constraints at build time. For more information, see Creating Constraints Using Layout Anchors in [NSView](https://developer.apple.com/documentation/appkit/nsview) or [UIView](../uiview.md).

## See Also

### Creating constraints

- [constraintsWithVisualFormat:options:metrics:views:](constraints%28withvisualformat_options_metrics_views_%29.md): Creates constraints described by an ASCII art-like visual format string.
