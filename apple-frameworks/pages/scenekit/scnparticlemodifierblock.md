> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlemodifierblock](https://developer.apple.com/documentation/scenekit/scnparticlemodifierblock)

# SCNParticleModifierBlock (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

## Declaration

```swift
typealias SCNParticleModifierBlock = (UnsafeMutablePointer<UnsafeMutableRawPointer>, UnsafeMutablePointer<Int>, Int, Int, Float) -> Void
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **data**: An array of floating-point values containing stripes of property data for the system’s particles. The width and format of each data stripe depend on the properties you specify when calling the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- **dataStride**: An array identifying the offset, in bytes, of each property’s value in the data stripe for each particle. The order of offsets in this array corresponds to the order of the `properties` array you specify when calling the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- **start**: The index of the first particle’s data stripe in the `data` array.
- **end**: The index of the last particle’s data stripe in the `data` array.
- **deltaTime**: The elapsed time, in seconds, since the last frame of simulation.

Use this block to change properties of individual particles on each frame of simulation.

> **Important**

>  Running your own code to update particle properties every frame can have a severe impact on rendering performance. If the behavior over time that you want for your particle system can be described more declaratively, use the [propertyControllers](scnparticlesystem/propertycontrollers.md) property and [SCNParticlePropertyController](scnparticlepropertycontroller.md) class instead. If you need to change particle properties only at certain times (rather than continuously), add a handler block for an event using the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

The following example illustrates setting up a modifier block that alters particle’s position and velocity:

```objc
[system addModifierForProperties:@[SCNParticlePropertyPosition,
                                   SCNParticlePropertyVelocity]
                         atStage:SCNParticleModifierStagePostDynamics
                       withBlock:^(void **data, size_t *dataStride, NSInteger start, NSInteger end, float deltaTime) {
                           // For each particle to be processed,
                           // calculate pointers in the data to each property's value:
                           for (NSInteger i = start; i < end; ++i) {
                               // SCNParticlePropertyPosition (float3)
                               float *pos = (float *)((char *)data[0] + dataStride[0] * i);
                               // pos[0..2] are the xyz components of the particle's position.
 
                               // SCNParticlePropertyVelocity (float3)
                               float *vel = (float *)((char *)data[1] + dataStride[1] * i);
                               // vel[0..2] are the xyz components of the particle's position.
 
                               // Now, compute a new position and velocity (not shown).
                           }
                       }];
```

## See Also

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiers(at:)](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers()](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleSystem.ParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handle(\_:forProperties:handler:)](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifier(forProperties:at:modifier:)](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

# SCNParticleModifierBlock (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for blocks called by SceneKit to modify particle properties on each frame of simulation, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.

## Declaration

```objectivec
typedef void (^)(void **, unsigned long *, long, long, float) SCNParticleModifierBlock;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- **data**: An array of floating-point values containing stripes of property data for the system’s particles. The width and format of each data stripe depend on the properties you specify when calling the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- **dataStride**: An array identifying the offset, in bytes, of each property’s value in the data stripe for each particle. The order of offsets in this array corresponds to the order of the `properties` array you specify when calling the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
- **start**: The index of the first particle’s data stripe in the `data` array.
- **end**: The index of the last particle’s data stripe in the `data` array.
- **deltaTime**: The elapsed time, in seconds, since the last frame of simulation.

Use this block to change properties of individual particles on each frame of simulation.

> **Important**

>  Running your own code to update particle properties every frame can have a severe impact on rendering performance. If the behavior over time that you want for your particle system can be described more declaratively, use the [propertyControllers](scnparticlesystem/propertycontrollers.md) property and [SCNParticlePropertyController](scnparticlepropertycontroller.md) class instead. If you need to change particle properties only at certain times (rather than continuously), add a handler block for an event using the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) method.

The following example illustrates setting up a modifier block that alters particle’s position and velocity:

```objc
[system addModifierForProperties:@[SCNParticlePropertyPosition,
                                   SCNParticlePropertyVelocity]
                         atStage:SCNParticleModifierStagePostDynamics
                       withBlock:^(void **data, size_t *dataStride, NSInteger start, NSInteger end, float deltaTime) {
                           // For each particle to be processed,
                           // calculate pointers in the data to each property's value:
                           for (NSInteger i = start; i < end; ++i) {
                               // SCNParticlePropertyPosition (float3)
                               float *pos = (float *)((char *)data[0] + dataStride[0] * i);
                               // pos[0..2] are the xyz components of the particle's position.
 
                               // SCNParticlePropertyVelocity (float3)
                               float *vel = (float *)((char *)data[1] + dataStride[1] * i);
                               // vel[0..2] are the xyz components of the particle's position.
 
                               // Now, compute a new position and velocity (not shown).
                           }
                       }];
```

## See Also

### Modifying Particles Over Time

- [propertyControllers](scnparticlesystem/propertycontrollers.md): A dictionary that optionally associates particle properties with objects that animate a property’s value for each particle.
- [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md): Adds a block that modifies particle properties, to be executed each time SceneKit renders a frame.
- [removeModifiersOfStage:](scnparticlesystem/removemodifiers%28at_%29.md): Removes particle modifier blocks for the specified stage of the particle simulation.
- [removeAllModifiers](scnparticlesystem/removeallmodifiers%28%29.md): Removes all particle modifier blocks associated with the particle system.
- [SCNParticleProperty](scnparticlesystem/particleproperty.md): Keys identifying properties of individual particles, used by the [propertyControllers](scnparticlesystem/propertycontrollers.md) dictionary and the [handleEvent:forProperties:withBlock:](scnparticlesystem/handle%28__forproperties_handler_%29.md) and [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) methods.
- [SCNParticleModifierStage](scnparticlemodifierstage.md): Stages of SceneKit’s particle simulation process into which you can insert modifier blocks, used by the [addModifierForProperties:atStage:withBlock:](scnparticlesystem/addmodifier%28forproperties_at_modifier_%29.md) method.
