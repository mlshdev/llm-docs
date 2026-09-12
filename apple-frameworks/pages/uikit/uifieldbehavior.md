> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior](https://developer.apple.com/documentation/uikit/uifieldbehavior)

# UIFieldBehavior (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that applies field-based physics to dynamic items.

## Declaration

```swift
@MainActor class UIFieldBehavior
```

<a id="overview"></a>

## Overview

A field behavior defines an area in which forces such as gravity, magnetism, drag, velocity, turbulence, and others can be applied. After creating a field behavior object of the appropriate type, configure the strength of the intended force along with any other field attributes.

After creating a field behavior object, call the [addItem(\_:)](uifieldbehavior/additem%28__%29.md) method to associate the field with that item. For many types of fields, you must also configure a [UIDynamicItemBehavior](uidynamicitembehavior.md) object for the item to define relevant attributes of the item such as its density (mass) or charge. After configuring the field, add it to the [UIDynamicAnimator](uidynamicanimator.md) object associated with your interface to begin the animations.

The [position](uifieldbehavior/position.md) of a field defines its location in your interface and the field’s [region](uifieldbehavior/region.md) defines its area of influence. The region you specify is centered on the field’s position. Regions can be circular or rectangular, and you can combine regions in different ways to create more complex region shapes.

Most fields use only a subset of the field attributes in their computations. All fields have a [strength](uifieldbehavior/strength.md) value that helps define the intensity of the field. Most fields also use the [falloff](uifieldbehavior/falloff.md) property to vary the field strength over distance. You configure other attributes only as needed for the type of field.

## Topics

### Getting the field behaviors

- [dragField()](uifieldbehavior/dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField()](uifieldbehavior/springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityField(direction:)](uifieldbehavior/velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField()](uifieldbehavior/electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField()](uifieldbehavior/magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityField(position:)](uifieldbehavior/radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityField(direction:)](uifieldbehavior/lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField()](uifieldbehavior/vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseField(smoothness:animationSpeed:)](uifieldbehavior/noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceField(smoothness:animationSpeed:)](uifieldbehavior/turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [field(evaluationBlock:)](uifieldbehavior/field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

### Managing the associated dynamic items

- [addItem(\_:)](uifieldbehavior/additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [removeItem(\_:)](uifieldbehavior/removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.
- [items](uifieldbehavior/items.md): The dynamic items associated with the current field behavior.

### Configuring the field attributes

- [position](uifieldbehavior/position.md): The position of the field in the reference coordinate system.
- [region](uifieldbehavior/region.md): The shape of the field.
- [strength](uifieldbehavior/strength.md): The strength of the field.
- [falloff](uifieldbehavior/falloff.md): The rate of decay for the field strength.
- [minimumRadius](uifieldbehavior/minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](uifieldbehavior/direction.md): The direction of motion for a linear field.
- [smoothness](uifieldbehavior/smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](uifieldbehavior/animationspeed.md): The rate at which the animation should proceed.

## Relationships

### Inherits From

- [UIDynamicBehavior](uidynamicbehavior.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Behaviors

- [UIDynamicBehavior](uidynamicbehavior.md): An object that confers a behavioral configuration on one or more dynamic items, for their participation in 2D animation.
- [UIAttachmentBehavior](uiattachmentbehavior.md): A relationship between two dynamic items, or between a dynamic item and an anchor point.
- [UICollisionBehavior](uicollisionbehavior.md): An object that confers to a specified array of dynamic items the ability to engage in collisions with each other and with the behavior’s specified boundaries.
- [UIGravityBehavior](uigravitybehavior.md): An object that applies a gravity-like force to all of its associated dynamic items.
- [UIPushBehavior](uipushbehavior.md): A behavior that applies a continuous or instantaneous force to one or more dynamic items, causing those items to change position accordingly.
- [UISnapBehavior](uisnapbehavior.md): A spring-like behavior whose initial motion is damped over time so that the object settles at a specific point.

# UIFieldBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An object that applies field-based physics to dynamic items.

## Declaration

```objectivec
@interface UIFieldBehavior : UIDynamicBehavior
```

<a id="overview"></a>

## Overview

A field behavior defines an area in which forces such as gravity, magnetism, drag, velocity, turbulence, and others can be applied. After creating a field behavior object of the appropriate type, configure the strength of the intended force along with any other field attributes.

After creating a field behavior object, call the [addItem:](uifieldbehavior/additem%28__%29.md) method to associate the field with that item. For many types of fields, you must also configure a [UIDynamicItemBehavior](uidynamicitembehavior.md) object for the item to define relevant attributes of the item such as its density (mass) or charge. After configuring the field, add it to the [UIDynamicAnimator](uidynamicanimator.md) object associated with your interface to begin the animations.

The [position](uifieldbehavior/position.md) of a field defines its location in your interface and the field’s [region](uifieldbehavior/region.md) defines its area of influence. The region you specify is centered on the field’s position. Regions can be circular or rectangular, and you can combine regions in different ways to create more complex region shapes.

Most fields use only a subset of the field attributes in their computations. All fields have a [strength](uifieldbehavior/strength.md) value that helps define the intensity of the field. Most fields also use the [falloff](uifieldbehavior/falloff.md) property to vary the field strength over distance. You configure other attributes only as needed for the type of field.

## Topics

### Getting the field behaviors

- [dragField](uifieldbehavior/dragfield%28%29.md): Creates and returns a field behavior for slowing an object’s velocity.
- [springField](uifieldbehavior/springfield%28%29.md): Creates and returns a spring field behavior.
- [velocityFieldWithVector:](uifieldbehavior/velocityfield%28direction_%29.md): Creates and returns a field behavior object that applies a directional velocity to items.
- [electricField](uifieldbehavior/electricfield%28%29.md): Creates and returns a field behavior object that interacts with charged items.
- [magneticField](uifieldbehavior/magneticfield%28%29.md): Creates and returns a field behavior that interacts with charged items.
- [radialGravityFieldWithPosition:](uifieldbehavior/radialgravityfield%28position_%29.md): Creates and returns a field behavior object that models a radial gravitational force.
- [linearGravityFieldWithVector:](uifieldbehavior/lineargravityfield%28direction_%29.md): Creates and returns a field behavior object that models a linear gravitational force.
- [vortexField](uifieldbehavior/vortexfield%28%29.md): Creates and returns a field behavior object that applies a rotational force relative to the field’s position.
- [noiseFieldWithSmoothness:animationSpeed:](uifieldbehavior/noisefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies random noise to other forces.
- [turbulenceFieldWithSmoothness:animationSpeed:](uifieldbehavior/turbulencefield%28smoothness_animationspeed_%29.md): Creates and returns a field behavior object that applies noise to an item in motion.
- [fieldWithEvaluationBlock:](uifieldbehavior/field%28evaluationblock_%29.md): Creates and returns a field behavior object that applies an app-specified field to items.

### Managing the associated dynamic items

- [addItem:](uifieldbehavior/additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [removeItem:](uifieldbehavior/removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.
- [items](uifieldbehavior/items.md): The dynamic items associated with the current field behavior.

### Configuring the field attributes

- [position](uifieldbehavior/position.md): The position of the field in the reference coordinate system.
- [region](uifieldbehavior/region.md): The shape of the field.
- [strength](uifieldbehavior/strength.md): The strength of the field.
- [falloff](uifieldbehavior/falloff.md): The rate of decay for the field strength.
- [minimumRadius](uifieldbehavior/minimumradius.md): The minimum distance at which to start calculating new values for the field.
- [direction](uifieldbehavior/direction.md): The direction of motion for a linear field.
- [smoothness](uifieldbehavior/smoothness.md): The smoothness of the noise used to generate the field.
- [animationSpeed](uifieldbehavior/animationspeed.md): The rate at which the animation should proceed.

## Relationships

### Inherits From

- [UIDynamicBehavior](uidynamicbehavior.md)

## See Also

### Behaviors

- [UIDynamicBehavior](uidynamicbehavior.md): An object that confers a behavioral configuration on one or more dynamic items, for their participation in 2D animation.
- [UIAttachmentBehavior](uiattachmentbehavior.md): A relationship between two dynamic items, or between a dynamic item and an anchor point.
- [UICollisionBehavior](uicollisionbehavior.md): An object that confers to a specified array of dynamic items the ability to engage in collisions with each other and with the behavior’s specified boundaries.
- [UIGravityBehavior](uigravitybehavior.md): An object that applies a gravity-like force to all of its associated dynamic items.
- [UIPushBehavior](uipushbehavior.md): A behavior that applies a continuous or instantaneous force to one or more dynamic items, causing those items to change position accordingly.
- [UISnapBehavior](uisnapbehavior.md): A spring-like behavior whose initial motion is damped over time so that the object settles at a specific point.
