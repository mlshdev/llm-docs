> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caconstraint](https://developer.apple.com/documentation/quartzcore/caconstraint)

# CAConstraint (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A representation of a single layout constraint between two layers.

## Declaration

```swift
class CAConstraint
```

<a id="overview"></a>

## Overview

Each [CAConstraint](caconstraint.md) instance encapsulates one geometry relationship between two layers on the same axis.

Sibling layers are referenced by name, using the name property of each layer. The special name `superlayer` is used to refer to the layer’s superlayer.

For example, to specify that a layer should be horizontally centered in its superview you would use the following:

**Swift**

```swift
let theConstraint = CAConstraint(attribute: .midX,
                                 relativeTo: "superlayer",
                                 attribute: .midX)
```

**Objective-C**

```objc
theConstraint=[CAConstraint constraintWithAttribute:kCAConstraintMidX
                                         relativeTo:@"superlayer"
                                         attribute:kCAConstraintMidX];
```

A minimum of two relationships must be specified per axis. If you specify constraints for the left and right edges of a layer, the width will vary. If you specify constraints for the left edge and the width, the right edge of the layer will move relative to the superlayer’s frame. Often you’ll specify only a single edge constraint, the layer’s size in the same axis will be used as the second relationship.

> **Important**

>  It is possible to create constraints that result in circular references to the same attributes. In cases where the layout is unable to be computed the behavior is undefined.

## Topics

### Create a New Constraint

- [init(attribute:relativeTo:attribute:offset:)](caconstraint/init%28attribute_relativeto_attribute_offset_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [init(attribute:relativeTo:attribute:)](caconstraint/init%28attribute_relativeto_attribute_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [init(attribute:relativeTo:attribute:scale:offset:)](caconstraint/init%28attribute_relativeto_attribute_scale_offset_%29.md): Returns an `CAConstraint` object with the specified parameters. Designated initializer.

### Accessing Constraint Values

- [attribute](caconstraint/attribute.md): The attribute the constraint affects.
- [offset](caconstraint/offset.md): Offset value of the constraint attribute.
- [scale](caconstraint/scale.md): Scale factor of the constraint attribute.
- [sourceAttribute](caconstraint/sourceattribute.md): The constraint attribute of the layer the receiver is calculated relative to
- [sourceName](caconstraint/sourcename.md): Name of the layer that the constraint is calculated relative to.

### Constants

- [CAConstraintAttribute](caconstraintattribute.md): The constraint attribute type.

### Initializers

- [init(coder:)](caconstraint/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.

# CAConstraint (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

A representation of a single layout constraint between two layers.

## Declaration

```objectivec
@interface CAConstraint : NSObject
```

<a id="overview"></a>

## Overview

Each [CAConstraint](caconstraint.md) instance encapsulates one geometry relationship between two layers on the same axis.

Sibling layers are referenced by name, using the name property of each layer. The special name `superlayer` is used to refer to the layer’s superlayer.

For example, to specify that a layer should be horizontally centered in its superview you would use the following:

**Swift**

```swift
let theConstraint = CAConstraint(attribute: .midX,
                                 relativeTo: "superlayer",
                                 attribute: .midX)
```

**Objective-C**

```objc
theConstraint=[CAConstraint constraintWithAttribute:kCAConstraintMidX
                                         relativeTo:@"superlayer"
                                         attribute:kCAConstraintMidX];
```

A minimum of two relationships must be specified per axis. If you specify constraints for the left and right edges of a layer, the width will vary. If you specify constraints for the left edge and the width, the right edge of the layer will move relative to the superlayer’s frame. Often you’ll specify only a single edge constraint, the layer’s size in the same axis will be used as the second relationship.

> **Important**

>  It is possible to create constraints that result in circular references to the same attributes. In cases where the layout is unable to be computed the behavior is undefined.

## Topics

### Create a New Constraint

- [constraintWithAttribute:relativeTo:attribute:scale:offset:](caconstraint/constraintwithattribute_relativeto_attribute_scale_offset_.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [constraintWithAttribute:relativeTo:attribute:offset:](caconstraint/init%28attribute_relativeto_attribute_offset_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [constraintWithAttribute:relativeTo:attribute:](caconstraint/init%28attribute_relativeto_attribute_%29.md): Creates and returns an `CAConstraint` object with the specified parameters.
- [initWithAttribute:relativeTo:attribute:scale:offset:](caconstraint/init%28attribute_relativeto_attribute_scale_offset_%29.md): Returns an `CAConstraint` object with the specified parameters. Designated initializer.

### Accessing Constraint Values

- [attribute](caconstraint/attribute.md): The attribute the constraint affects.
- [offset](caconstraint/offset.md): Offset value of the constraint attribute.
- [scale](caconstraint/scale.md): Scale factor of the constraint attribute.
- [sourceAttribute](caconstraint/sourceattribute.md): The constraint attribute of the layer the receiver is calculated relative to
- [sourceName](caconstraint/sourcename.md): Name of the layer that the constraint is calculated relative to.

### Constants

- [CAConstraintAttribute](caconstraintattribute.md): The constraint attribute type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Basics

- [CALayer](calayer.md): An object that manages image-based content and allows you to perform animations on that content.
- [CALayerDelegate](calayerdelegate.md): Methods your app can implement to respond to layer-related events.
- [CALayoutManager](calayoutmanager.md): Methods that allow an object to manage the layout of a layer and its sublayers.
- [CAConstraintLayoutManager](caconstraintlayoutmanager.md): An object that provides a constraint-based layout manager.
- [CAAction](caaction.md): An interface that allows instances to respond to actions triggered by a Core Animation layer change.
