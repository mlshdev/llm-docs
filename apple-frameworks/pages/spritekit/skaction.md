> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction](https://developer.apple.com/documentation/spritekit/skaction)

# SKAction (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that is run by a node to change its structure or content.

## Declaration

```swift
class SKAction
```

## Mentioned In

- [Getting Started with Actions](getting-started-with-actions.md)
- [Getting Started with Spring Joints](getting-started-with-spring-joints.md)
- [Working with Inverse Kinematics](working-with-inverse-kinematics.md)

<a id="overview"></a>

## Overview

[SKAction](skaction.md) is an animation that is executed by a node in the scene. Actions are used to change a node in some way (like move its position over time), but you can also use actions to change the scene, like doing a fadeout. When the scene processes its nodes, the actions associated with those nodes are processed.

## Topics

### First Steps

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [Action Initializers](action-initializers.md): Use these functions to create actions.

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](skactiontimingfunction.md): The signature for the custom timing block.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.

### Using Action Names

- [Controlling Actions Precisely by Using Names](controlling-actions-precisely-by-using-names.md): Set an action’s name property so you can access it later without needing an instance variable.

### Observing Live Changes

- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md): Get notified of a property change on your node subclass and retrieve the amount of change.

### Initializers

- [init(coder:)](skaction/init%28coder_%29.md)
- [init(named:from:)](skaction/init%28named_from_%29.md): Creates an action of the given name from an action file.
- [init(named:from:duration:)](skaction/init%28named_from_duration_%29.md): Creates an action of the given name from an action file with a new duration.

### Default Implementations

- [SKAction Implementations](skaction/skaction-implementations.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.

# SKAction (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that is run by a node to change its structure or content.

## Declaration

```objectivec
@interface SKAction : NSObject
```

## Mentioned In

- [Getting Started with Actions](getting-started-with-actions.md)
- [Getting Started with Spring Joints](getting-started-with-spring-joints.md)
- [Working with Inverse Kinematics](working-with-inverse-kinematics.md)

<a id="overview"></a>

## Overview

[SKAction](skaction.md) is an animation that is executed by a node in the scene. Actions are used to change a node in some way (like move its position over time), but you can also use actions to change the scene, like doing a fadeout. When the scene processes its nodes, the actions associated with those nodes are processed.

## Topics

### First Steps

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [Action Initializers](action-initializers.md): Use these functions to create actions.

### Controlling Action Timing

- [Configuring Action Timing](configuring-action-timing.md): Time an action in a scene, by adding or modifying timing properties, or cancel an action.
- [duration](skaction/duration.md): The duration required to complete an action.
- [timingMode](skaction/timingmode.md): A setting that controls the speed curve of an animation.
- [SKActionTimingMode](skactiontimingmode.md): The modes that an action can use to adjust the apparent timing of the action.
- [timingFunction](skaction/timingfunction.md): A block used to customize the timing function.
- [SKActionTimingFunction](skactiontimingfunction.md): The signature for the custom timing block.
- [speed](skaction/speed.md): A speed factor that modifies how fast an action runs.

### Using Action Names

- [Controlling Actions Precisely by Using Names](controlling-actions-precisely-by-using-names.md): Set an action’s name property so you can access it later without needing an instance variable.

### Observing Live Changes

- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md): Get notified of a property change on your node subclass and retrieve the amount of change.

### Type Methods

- [actionNamed:fromURL:](skaction/init%28named_from_%29.md): Creates an action of the given name from an action file.
- [actionNamed:fromURL:duration:](skaction/init%28named_from_duration_%29.md): Creates an action of the given name from an action file with a new duration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Animation

- [Getting Started with Actions](getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
