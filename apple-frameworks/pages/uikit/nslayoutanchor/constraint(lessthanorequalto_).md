> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutanchor/constraint(lessthanorequalto:)](https://developer.apple.com/documentation/uikit/nslayoutanchor/constraint(lessthanorequalto:))

# constraint(lessThanOrEqualTo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a constraint that defines one item’s attribute as less than or equal to another.

## Declaration

```swift
func constraint(lessThanOrEqualTo anchor: NSLayoutAnchor<AnchorType>) -> NSLayoutConstraint
```

## Parameters

- `anchor`: A layout anchor from a [UIView](../uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](../uilayoutguide.md) object. You must use a subclass of [NSLayoutAnchor](../nslayoutanchor.md) that matches the current anchor. For example, if you call this method on an [NSLayoutXAxisAnchor](../nslayoutxaxisanchor.md) object, this parameter must be another [NSLayoutXAxisAnchor](../nslayoutxaxisanchor.md).

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as less than or equal to the attribute represented by the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute <= second attribute`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter. All values are measured in points; however, these values can be interpreted in different ways, depending on the type of layout anchor.

- For leading or trailing anchors, the values increase as you move in the current language’s reading direction. For English, values increase as you move to the right.
- For left and right anchors, the values increase as you move to the right.
- For [NSLayoutYAxisAnchor](../nslayoutyaxisanchor.md) objects, the values increase as you move down.
- For [NSLayoutDimension](../nslayoutdimension.md) objects, the values increase as the items increase in size.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: subview,
                   attribute: .Leading,
                   relatedBy: .LessThanOrEqual,
                   toItem: view,
                   attribute: .LeadingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:
let margins = view.layoutMarginsGuide
subview.leadingAnchor.constraintLessThanOrEqualToAnchor(margins.leadingAnchor).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeLeading
 relatedBy:NSLayoutRelationLessThanOrEqual
 toItem:self.view
 attribute:NSLayoutAttributeLeadingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:
UILayoutGuide *margin = self.view.layoutMarginsGuide;
[subview.leadingAnchor constraintLessThanOrEqualToAnchor:margin.leadingAnchor].active = YES;
```

## See Also

### Building constraints

- [constraint(equalTo:)](constraint%28equalto_%29.md): Returns a constraint that defines one item’s attribute as equal to another.
- [constraint(equalTo:constant:)](constraint%28equalto_constant_%29.md): Returns a constraint that defines one item’s attribute as equal to another item’s attribute plus a constant offset.
- [constraint(greaterThanOrEqualTo:)](constraint%28greaterthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another.
- [constraint(greaterThanOrEqualTo:constant:)](constraint%28greaterthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another item’s attribute plus a constant offset.
- [constraint(lessThanOrEqualTo:constant:)](constraint%28lessthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another item’s attribute plus a constant offset.

# constraintLessThanOrEqualToAnchor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a constraint that defines one item’s attribute as less than or equal to another.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintLessThanOrEqualToAnchor:(NSLayoutAnchor<id> *) anchor;
```

## Parameters

- `anchor`: A layout anchor from a [UIView](../uiview.md), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [UILayoutGuide](../uilayoutguide.md) object. You must use a subclass of [NSLayoutAnchor](../nslayoutanchor.md) that matches the current anchor. For example, if you call this method on an [NSLayoutXAxisAnchor](../nslayoutxaxisanchor.md) object, this parameter must be another [NSLayoutXAxisAnchor](../nslayoutxaxisanchor.md).

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as less than or equal to the attribute represented by the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute <= second attribute`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter. All values are measured in points; however, these values can be interpreted in different ways, depending on the type of layout anchor.

- For leading or trailing anchors, the values increase as you move in the current language’s reading direction. For English, values increase as you move to the right.
- For left and right anchors, the values increase as you move to the right.
- For [NSLayoutYAxisAnchor](../nslayoutyaxisanchor.md) objects, the values increase as you move down.
- For [NSLayoutDimension](../nslayoutdimension.md) objects, the values increase as the items increase in size.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: subview,
                   attribute: .Leading,
                   relatedBy: .LessThanOrEqual,
                   toItem: view,
                   attribute: .LeadingMargin,
                   multiplier: 1.0,
                   constant: 0.0).isActive = true
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:
let margins = view.layoutMarginsGuide
subview.leadingAnchor.constraintLessThanOrEqualToAnchor(margins.leadingAnchor).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:subview
 attribute:NSLayoutAttributeLeading
 relatedBy:NSLayoutRelationLessThanOrEqual
 toItem:self.view
 attribute:NSLayoutAttributeLeadingMargin
 multiplier:1.0
 constant:0.0].active = YES;
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:
UILayoutGuide *margin = self.view.layoutMarginsGuide;
[subview.leadingAnchor constraintLessThanOrEqualToAnchor:margin.leadingAnchor].active = YES;
```

## See Also

### Building constraints

- [constraintEqualToAnchor:](constraint%28equalto_%29.md): Returns a constraint that defines one item’s attribute as equal to another.
- [constraintEqualToAnchor:constant:](constraint%28equalto_constant_%29.md): Returns a constraint that defines one item’s attribute as equal to another item’s attribute plus a constant offset.
- [constraintGreaterThanOrEqualToAnchor:](constraint%28greaterthanorequalto_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another.
- [constraintGreaterThanOrEqualToAnchor:constant:](constraint%28greaterthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as greater than or equal to another item’s attribute plus a constant offset.
- [constraintLessThanOrEqualToAnchor:constant:](constraint%28lessthanorequalto_constant_%29.md): Returns a constraint that defines one item’s attribute as less than or equal to another item’s attribute plus a constant offset.
