> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/fieldbitmask](https://developer.apple.com/documentation/spritekit/skemitternode/fieldbitmask)

# fieldBitMask (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories of physics fields can exert forces on the particles.

## Declaration

```swift
var fieldBitMask: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

When a particle is inside the region of a [SKFieldNode](../skfieldnode.md) object, that field node’s [categoryBitMask](../skfieldnode/categorybitmask.md) property is compared to the emitter’s [fieldBitMask](fieldbitmask.md) property by performing a logical AND operation. If the result is a non-zero value, then the field node’s effect is applied to the particle as if it had a physics body. The physics body is assumed to have a [mass](../skphysicsbody/mass.md) of `1.0` and a [charge](../skphysicsbody/charge.md) of `1.0`

The default value is `0x00000000` (all bits cleared).

# fieldBitMask (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A mask that defines which categories of physics fields can exert forces on the particles.

## Declaration

```objectivec
@property (nonatomic, assign) uint32_t fieldBitMask;
```

<a id="Discussion"></a>

## Discussion

When a particle is inside the region of a [SKFieldNode](../skfieldnode.md) object, that field node’s [categoryBitMask](../skfieldnode/categorybitmask.md) property is compared to the emitter’s [fieldBitMask](fieldbitmask.md) property by performing a logical AND operation. If the result is a non-zero value, then the field node’s effect is applied to the particle as if it had a physics body. The physics body is assumed to have a [mass](../skphysicsbody/mass.md) of `1.0` and a [charge](../skphysicsbody/charge.md) of `1.0`

The default value is `0x00000000` (all bits cleared).
