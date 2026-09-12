> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skreachconstraints](https://developer.apple.com/documentation/spritekit/skreachconstraints)

# SKReachConstraints (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A specification of the degree of freedom when solving inverse kinematics.

## Declaration

```swift
class SKReachConstraints
```

<a id="overview"></a>

## Overview

An [SKReachConstraints](skreachconstraints.md) object is used to describe the range of motion for an [SKNode](sknode.md) object whenever an inverse kinematic (IK) action is executed. To use reach constraints, create an [SKReachConstraints](skreachconstraints.md) object and assign it to a node’s [reachConstraints](sknode/reachconstraints.md) property. For more information on using reach actions to perform IK animations, see the [SKAction](skaction.md) class.

## Topics

### Working with Reach Constraints

- [init(lowerAngleLimit:upperAngleLimit:)](skreachconstraints/init%28loweranglelimit_upperanglelimit_%29.md): Initializes a new reach constraint object.
- [lowerAngleLimit](skreachconstraints/loweranglelimit.md): The minimum angle that the node can have after it is rotated by a reach event.
- [upperAngleLimit](skreachconstraints/upperanglelimit.md): The maximum angle that the node can have after it is rotated by a reach event.

### Initializers

- [init(coder:)](skreachconstraints/init%28coder_%29.md)

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

### Constraints

- [SKConstraint](skconstraint.md): A specification for constraining a node’s position or rotation.

# SKReachConstraints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A specification of the degree of freedom when solving inverse kinematics.

## Declaration

```objectivec
@interface SKReachConstraints : NSObject
```

<a id="overview"></a>

## Overview

An [SKReachConstraints](skreachconstraints.md) object is used to describe the range of motion for an [SKNode](sknode.md) object whenever an inverse kinematic (IK) action is executed. To use reach constraints, create an [SKReachConstraints](skreachconstraints.md) object and assign it to a node’s [reachConstraints](sknode/reachconstraints.md) property. For more information on using reach actions to perform IK animations, see the [SKAction](skaction.md) class.

## Topics

### Working with Reach Constraints

- [initWithLowerAngleLimit:upperAngleLimit:](skreachconstraints/init%28loweranglelimit_upperanglelimit_%29.md): Initializes a new reach constraint object.
- [lowerAngleLimit](skreachconstraints/loweranglelimit.md): The minimum angle that the node can have after it is rotated by a reach event.
- [upperAngleLimit](skreachconstraints/upperanglelimit.md): The maximum angle that the node can have after it is rotated by a reach event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Constraints

- [SKConstraint](skconstraint.md): A specification for constraining a node’s position or rotation.
