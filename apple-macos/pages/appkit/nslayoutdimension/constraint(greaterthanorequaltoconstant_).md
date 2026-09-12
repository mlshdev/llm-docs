> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutdimension/constraint(greaterthanorequaltoconstant:)](https://developer.apple.com/documentation/appkit/nslayoutdimension/constraint(greaterthanorequaltoconstant:))

# constraint(greaterThanOrEqualToConstant:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the minimum size for the anchor’s size attribute.

## Declaration

```swift
func constraint(greaterThanOrEqualToConstant c: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `c`: A constant representing the minimum size of the attribute associated with this dimension anchor.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines a minimum size for the attribute associated with this dimension anchor.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute >= c`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: button,
                   attribute: .Width,
                   relatedBy: .GreaterThanOrEqual,
                   toItem: nil,
                   attribute: .NotAnAttribute,
                   multiplier: 1.0,
                   constant: 40.0).isActive = true
 
// Creating the same constraint using constraintGreaterThanOrEqualToConstant:
button.widthAnchor.constraintGreaterThanOrEqualToConstant(40.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.button
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationGreaterThanOrEqual
 toItem:nil
 attribute:NSLayoutAttributeNotAnAttribute
 multiplier:1.0
 constant:40.0].active = YES;
 
// Creating the same constraint using constraintGreaterThanOrEqualToConstant:
[self.button.widthAnchor constraintGreaterThanOrEqualToConstant: 40.0].active = YES;
```

## See Also

### Building constraints

- [constraint(equalTo:multiplier:)](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraint(equalTo:multiplier:constant:)](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraint(equalToConstant:)](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraint(greaterThanOrEqualTo:multiplier:)](constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraint(greaterThanOrEqualTo:multiplier:constant:)](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(lessThanOrEqualTo:multiplier:)](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraint(lessThanOrEqualTo:multiplier:constant:)](constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraint(lessThanOrEqualToConstant:)](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.

# constraintGreaterThanOrEqualToConstant: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a constraint that defines the minimum size for the anchor’s size attribute.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintGreaterThanOrEqualToConstant:(CGFloat) c;
```

## Parameters

- `c`: A constant representing the minimum size of the attribute associated with this dimension anchor.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that defines a minimum size for the attribute associated with this dimension anchor.

<a id="Discussion"></a>

## Discussion

This method defines the relationship `first attribute >= c`. Where `first attribute` is the layout attribute represented by the anchor receiving this method call.

The constraints produced by the following two examples are identical.

**Swift**

```swift
// Creating a constraint using NSLayoutConstraint
NSLayoutConstraint(item: button,
                   attribute: .Width,
                   relatedBy: .GreaterThanOrEqual,
                   toItem: nil,
                   attribute: .NotAnAttribute,
                   multiplier: 1.0,
                   constant: 40.0).isActive = true
 
// Creating the same constraint using constraintGreaterThanOrEqualToConstant:
button.widthAnchor.constraintGreaterThanOrEqualToConstant(40.0).isActive = true
```

**Objective-C**

```objc
// Creating a constraint using NSLayoutConstraint
[NSLayoutConstraint
 constraintWithItem:self.button
 attribute:NSLayoutAttributeWidth
 relatedBy:NSLayoutRelationGreaterThanOrEqual
 toItem:nil
 attribute:NSLayoutAttributeNotAnAttribute
 multiplier:1.0
 constant:40.0].active = YES;
 
// Creating the same constraint using constraintGreaterThanOrEqualToConstant:
[self.button.widthAnchor constraintGreaterThanOrEqualToConstant: 40.0].active = YES;
```

## See Also

### Building constraints

- [constraintEqualToAnchor:multiplier:](constraint%28equalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified anchor multiplied by the constant.
- [constraintEqualToAnchor:multiplier:constant:](constraint%28equalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as equal to the specified size attribute multiplied by a constant plus an offset.
- [constraintEqualToConstant:](constraint%28equaltoconstant_%29.md): Returns a constraint that defines a constant size for the anchor’s size attribute.
- [constraintGreaterThanOrEqualToAnchor:multiplier:](constraint%28greaterthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant.
- [constraintGreaterThanOrEqualToAnchor:multiplier:constant:](constraint%28greaterthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintLessThanOrEqualToAnchor:multiplier:](constraint%28lessthanorequalto_multiplier_%29.md): Returns a constraint that defines the anchor’s size attribute as less than or equal to the specified anchor multiplied by the constant.
- [constraintLessThanOrEqualToAnchor:multiplier:constant:](constraint%28lessthanorequalto_multiplier_constant_%29.md): Returns a constraint that defines the anchor’s size attribute as greater than or equal to the specified anchor multiplied by the constant plus an offset.
- [constraintLessThanOrEqualToConstant:](constraint%28lessthanorequaltoconstant_%29.md): Returns a constraint that defines the maximum size for the anchor’s size attribute.
