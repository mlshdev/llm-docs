> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caconstraint/constraintwithattribute:relativeto:attribute:scale:offset:](https://developer.apple.com/documentation/quartzcore/caconstraint/constraintwithattribute:relativeto:attribute:scale:offset:)

# constraintWithAttribute:relativeTo:attribute:scale:offset:

**Interface language:** Objective-C

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Creates and returns an `CAConstraint` object with the specified parameters.

## Declaration

```objectivec
+ (instancetype) constraintWithAttribute:(CAConstraintAttribute) attr relativeTo:(NSString *) srcId attribute:(CAConstraintAttribute) srcAttr scale:(CGFloat) m offset:(CGFloat) c;
```

## Parameters

- `attr`: The attribute of the layer for which to create a new constraint.
- `srcId`: The name of the layer that this constraint is calculated relative to.
- `srcAttr`: The attribute of `srcLayer` the constraint is calculated relative to.
- `m`: The amount to scale the value of `srcAttr`.
- `c`: The offset from the `srcAttr`.

<a id="return-value"></a>

## Return Value

A new `CAConstraint` object with the specified parameters.

<a id="Discussion"></a>

## Discussion

The value for the constraint is calculated as ((`srcAttr` \* scale) + offset).

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Create a New Constraint

- [constraintWithAttribute:relativeTo:attribute:offset:](init%28attribute_relativeto_attribute_offset_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [constraintWithAttribute:relativeTo:attribute:](init%28attribute_relativeto_attribute_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [initWithAttribute:relativeTo:attribute:scale:offset:](init%28attribute_relativeto_attribute_scale_offset_%29.md): Returns an `CAConstraint` object with the specified parameters. Designated initializer.
