> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caconstraint/init(attribute:relativeto:attribute:offset:)](https://developer.apple.com/documentation/quartzcore/caconstraint/init(attribute:relativeto:attribute:offset:))

# init(attribute:relativeTo:attribute:offset:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Creates and returns an `CAConstraint` object with the specified parameters.

## Declaration

```swift
convenience init(attribute attr: CAConstraintAttribute, relativeTo srcId: String, attribute srcAttr: CAConstraintAttribute, offset c: CGFloat)
```

## Parameters

- `attr`: The attribute of the layer for which to create a new constraint.
- `srcId`: The name of the layer that this constraint is calculated relative to.
- `srcAttr`: The attribute of `srcLayer` the constraint is calculated relative to.
- `c`: The offset added to the value of `srcAttr`.

<a id="return-value"></a>

## Return Value

A new `CAConstraint` object with the specified parameters. The scale of the constraint is set to 1.0.

<a id="Discussion"></a>

## Discussion

The value for the constraint is calculated as (`srcAttr` \+ `offset`).

## See Also

### Create a New Constraint

- [init(attribute:relativeTo:attribute:)](init%28attribute_relativeto_attribute_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [init(attribute:relativeTo:attribute:scale:offset:)](init%28attribute_relativeto_attribute_scale_offset_%29.md): Returns an `CAConstraint` object with the specified parameters. Designated initializer.

# constraintWithAttribute:relativeTo:attribute:offset: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Creates and returns an `CAConstraint` object with the specified parameters.

## Declaration

```objectivec
+ (instancetype) constraintWithAttribute:(CAConstraintAttribute) attr relativeTo:(NSString *) srcId attribute:(CAConstraintAttribute) srcAttr offset:(CGFloat) c;
```

## Parameters

- `attr`: The attribute of the layer for which to create a new constraint.
- `srcId`: The name of the layer that this constraint is calculated relative to.
- `srcAttr`: The attribute of `srcLayer` the constraint is calculated relative to.
- `c`: The offset added to the value of `srcAttr`.

<a id="return-value"></a>

## Return Value

A new `CAConstraint` object with the specified parameters. The scale of the constraint is set to 1.0.

<a id="Discussion"></a>

## Discussion

The value for the constraint is calculated as (`srcAttr` \+ `offset`).

## See Also

### Create a New Constraint

- [constraintWithAttribute:relativeTo:attribute:scale:offset:](constraintwithattribute_relativeto_attribute_scale_offset_.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [constraintWithAttribute:relativeTo:attribute:](init%28attribute_relativeto_attribute_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [initWithAttribute:relativeTo:attribute:scale:offset:](init%28attribute_relativeto_attribute_scale_offset_%29.md): Returns an `CAConstraint` object with the specified parameters. Designated initializer.
