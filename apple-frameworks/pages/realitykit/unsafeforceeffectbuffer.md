> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unsafeforceeffectbuffer](https://developer.apple.com/documentation/realitykit/unsafeforceeffectbuffer)

# UnsafeForceEffectBuffer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Provides access to physics body parameters from the effect’s update function or event handler.

## Declaration

```swift
struct UnsafeForceEffectBuffer<T>
```

<a id="overview"></a>

## Overview

This struct is a transient buffer view of underlying data, and is only available in effect’s update function or update closure.

## Topics

### Structures

- [UnsafeForceEffectBuffer.Iterator](unsafeforceeffectbuffer/iterator.md): Iterates over all elements of the `UnsafeForceEffectBuffer`.

### Instance Properties

- [count](unsafeforceeffectbuffer/count.md): Returns the number of elements in the buffer.

### Instance Methods

- [makeIterator()](unsafeforceeffectbuffer/makeiterator%28%29.md): Returns an iterator for the sequence.

### Subscripts

- [subscript(\_:)](unsafeforceeffectbuffer/subscript%28__%29.md): Returns an element by index.

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Updating effects

- [update(parameters:)](forceeffectprotocol/update%28parameters_%29.md): Defines how the custom force effect computes forces at each physics simulation step.
- [register(\_:)](forceeffectprotocol/register%28__%29-1zt9t.md): Registers the custom effect.
- [PhysicsBodyParameterTypes](physicsbodyparametertypes.md): Defines which rigid body inputs are required by a force effect’s update handler.
- [ForceEffectParameters](forceeffectparameters.md): The force effect input data to the effect’s update handler or closure.
- [ForceEffectEvent](forceeffectevent.md): A struct that defines the arguments to the custom force effect update closure.
