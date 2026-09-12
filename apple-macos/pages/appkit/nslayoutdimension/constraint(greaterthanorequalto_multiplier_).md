> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutdimension/constraint(greaterthanorequalto:multiplier:)](https://developer.apple.com/documentation/appkit/nslayoutdimension/constraint(greaterthanorequalto:multiplier:))

# constraint(greaterThanOrEqualTo:multiplier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.

## Declaration

```swift
func constraint(greaterThanOrEqualTo anchor: NSLayoutDimension, multiplier m: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `anchor`: A dimension anchor from an [NSView](../nsview.md) or [NSLayoutGuide](../nslayoutguide.md) object.
- `m`: The multiplier constant for the constraint.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as greater than or equal to the attribute represented by the `anchor` parameter multiplied by the `m` constant.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute >= m * second attribute`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: saveButton,
                   attribute: .Width,
                   relatedBy: .GreaterThanOrEqual,
                   toItem: cancelButton,
                   attribute: .Width,
                   multiplier: 2.0,
                   constant: 0.0).isActive = true
 
// Creating the same constraint using constraintGreaterThanOrEqualToAnchor:multiplier:
saveButton.widthAnchor.constraintGreaterThanOrEqualToAnchor(cancelButton.widthAnchor, multiplier: 2.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.saveButton
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationGreaterThanOrEqual
 toItem:self.cancelButton
 attribute:NSLayoutAttributeWidth
 multiplier:2.0
 constant:0.0].active = YES;
 
// Creating the same constraint using constraintGreaterThanOrEqualToAnchor:multiplier:
[self.saveButton.widthAnchor constraintGreaterThanOrEqualToAnchor:self.cancelButton.widthAnchor multiplier:2.0].active = YES;
```

## See Also

### Building constraints

- [constraint(equalTo:multiplier:)](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraint(equalTo:multiplier:constant:)](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraint(equalToConstant:)](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraint(greaterThanOrEqualTo:multiplier:constant:)](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(greaterThanOrEqualToConstant:)](constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraint(lessThanOrEqualTo:multiplier:)](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraint(lessThanOrEqualTo:multiplier:constant:)](constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(lessThanOrEqualToConstant:)](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.

# constraintGreaterThanOrEqualToAnchor:multiplier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintGreaterThanOrEqualToAnchor:(NSLayoutDimension *) anchor multiplier:(CGFloat) m;
```

## Parameters

- `anchor`: A dimension anchor from an [NSView](../nsview.md) or [NSLayoutGuide](../nslayoutguide.md) object.
- `m`: The multiplier constant for the constraint.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines the attribute represented by this layout anchor as greater than or equal to the attribute represented by the `anchor` parameter multiplied by the `m` constant.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute >= m * second attribute`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call, and `second attribute` is the layout attribute represented by the `anchor` parameter.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: saveButton,
                   attribute: .Width,
                   relatedBy: .GreaterThanOrEqual,
                   toItem: cancelButton,
                   attribute: .Width,
                   multiplier: 2.0,
                   constant: 0.0).isActive = true
 
// Creating the same constraint using constraintGreaterThanOrEqualToAnchor:multiplier:
saveButton.widthAnchor.constraintGreaterThanOrEqualToAnchor(cancelButton.widthAnchor, multiplier: 2.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.saveButton
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationGreaterThanOrEqual
 toItem:self.cancelButton
 attribute:NSLayoutAttributeWidth
 multiplier:2.0
 constant:0.0].active = YES;
 
// Creating the same constraint using constraintGreaterThanOrEqualToAnchor:multiplier:
[self.saveButton.widthAnchor constraintGreaterThanOrEqualToAnchor:self.cancelButton.widthAnchor multiplier:2.0].active = YES;
```

## See Also

### Building constraints

- [constraintEqualToAnchor:multiplier:](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraintEqualToAnchor:multiplier:constant:](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraintEqualToConstant:](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraintGreaterThanOrEqualToAnchor:multiplier:constant:](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintGreaterThanOrEqualToConstant:](constraint%28greaterthanorequaltoconstant_%29.md): Returns a constraint that defines the minimum size for the anchor’s size attribute.
- [constraintLessThanOrEqualToAnchor:multiplier:](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraintLessThanOrEqualToAnchor:multiplier:constant:](constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintLessThanOrEqualToConstant:](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.
