> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutdimension/constraint(lessthanorequalto:multiplier:constant:)](https://developer.apple.com/documentation/appkit/nslayoutdimension/constraint(lessthanorequalto:multiplier:constant:))

# constraint(lessThanOrEqualTo:multiplier:constant:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.

## Declaration

```swift
func constraint(lessThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat, constant c: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `anchor`: A dimension anchor from an [NSView](../nsview.md) or [NSLayoutGuide](../nslayoutguide.md) object.
- `m`: The multiplier constant for the constraint.
- `c`: The constant offset for this relationship.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as less than or equal to the attribute represented by the `anchor` parameter multiplied by the `m` constant plus the constant `c`.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute <= (m * second attribute) + c`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: button,
                   attribute: .Width,
                   relatedBy: .LessThanOrEqual,
                   toItem: button,
                   attribute: .Height,
                   multiplier: 2.0,
                   constant: 40.0).isActive = true
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:multiplier:constant:
button.widthAnchor.constraintLessThanOrEqualToAnchor(button.heightAnchor, multiplier: 2.0, constant: 40.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.button
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationLessThanOrEqual
 toItem:self.button
 attribute:NSLayoutAttributeHeight
 multiplier:2.0
 constant:40.0].active = YES;
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:multiplier:constant:
[self.button.widthAnchor constraintLessThanOrEqualToAnchor:self.button.heightAnchor multiplier:2.0 constant: 40.0].active = YES;
```

## See Also

### Building constraints

- [constraint(equalTo:multiplier:)](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraint(equalTo:multiplier:constant:)](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraint(equalToConstant:)](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraint(greaterThanOrEqualTo:multiplier:)](constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraint(greaterThanOrEqualTo:multiplier:constant:)](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(greaterThanOrEqualToConstant:)](constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraint(lessThanOrEqualTo:multiplier:)](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraint(lessThanOrEqualToConstant:)](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.

# constraintLessThanOrEqualToAnchor:multiplier:constant: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintLessThanOrEqualToAnchor:(NSLayoutDimension *) anchor multiplier:(CGFloat) m constant:(CGFloat) c;
```

## Parameters

- `anchor`: A dimension anchor from an [NSView](../nsview.md) or [NSLayoutGuide](../nslayoutguide.md) object.
- `m`: The multiplier constant for the constraint.
- `c`: The constant offset for this relationship.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as less than or equal to the attribute represented by the `anchor` parameter multiplied by the `m` constant plus the constant `c`.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute <= (m * second attribute) + c`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: button,
                   attribute: .Width,
                   relatedBy: .LessThanOrEqual,
                   toItem: button,
                   attribute: .Height,
                   multiplier: 2.0,
                   constant: 40.0).isActive = true
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:multiplier:constant:
button.widthAnchor.constraintLessThanOrEqualToAnchor(button.heightAnchor, multiplier: 2.0, constant: 40.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.button
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationLessThanOrEqual
 toItem:self.button
 attribute:NSLayoutAttributeHeight
 multiplier:2.0
 constant:40.0].active = YES;
 
// Creating the same constraint using constraintLessThanOrEqualToAnchor:multiplier:constant:
[self.button.widthAnchor constraintLessThanOrEqualToAnchor:self.button.heightAnchor multiplier:2.0 constant: 40.0].active = YES;
```

## See Also

### Building constraints

- [constraintEqualToAnchor:multiplier:](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraintEqualToAnchor:multiplier:constant:](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraintEqualToConstant:](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraintGreaterThanOrEqualToAnchor:multiplier:](constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraintGreaterThanOrEqualToAnchor:multiplier:constant:](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintGreaterThanOrEqualToConstant:](constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraintLessThanOrEqualToAnchor:multiplier:](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraintLessThanOrEqualToConstant:](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.
