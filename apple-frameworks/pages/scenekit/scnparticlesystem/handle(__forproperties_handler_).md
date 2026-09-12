> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/handle(_:forproperties:handler:)](https://developer.apple.com/documentation/scenekit/scnparticlesystem/handle(_:forproperties:handler:))

# handle(\_:forProperties:handler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.

## Declaration

```swift
func handle(_ event: SCNParticleEvent, forProperties properties: [SCNParticleSystem.ParticleProperty], handler block: @escaping SCNParticleEventBlock)
```

## Parameters

- `event`: The event at which to call the block. See [SCNParticleEvent](../scnparticleevent.md) for allowed values.
- `properties`: An array containing one or more of the constants listed in `Particle Property Keys`, each of which specifies a property of the appearance or behaviors of particles in the particle system.
- `block`: A [SCNParticleEventBlock](../scnparticleeventblock.md) block to be called every time SceneKit renders a frame. In this block you can modify the properties of particles in the system.

<a id="Discussion"></a>

## Discussion

By associating a block with one or more particle properties, you can run arbitrary code that modifies those properties when a significant event in the particle simulation occurs for one or more particles. For example, you can use the following code with a confetti effect to randomly switch between two distinct colors for each spawned particle:

```objc
[system handleEvent:SCNParticleEventBirth
      forProperties:@[SCNParticlePropertyColor]
          withBlock:^(void **data, size_t *dataStride, uint32_t *indices , NSInteger count) {
              for (NSInteger i = 0; i < count; ++i) {
                  float *color = (float *)((char *)data[0] + dataStride[0] * i);
                  if (rand() & 0x1) { // Switch the green and red color components.
                      color[0] = color[1];
                      color[1] = 0;
                  }
              }
          }];
```

## See Also

### Modifying Particles in Response to Particle System Events

- [SCNParticleEvent](../scnparticleevent.md): Significant events in the life spans of simulate particles, used by the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) method.
- [SCNParticleEventBlock](../scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handle(\_:forProperties:handler:)](handle%28__forproperties_handler_%29.md) method.

# handleEvent:forProperties:withBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds a block that modifies particle properties, to be executed at a specified event in the lifetimes of particles in the system.

## Declaration

```objectivec
- (void) handleEvent:(SCNParticleEvent) event forProperties:(NSArray<NSString *> *) properties withBlock:(SCNParticleEventBlock) block;
```

## Parameters

- `event`: The event at which to call the block. See [SCNParticleEvent](../scnparticleevent.md) for allowed values.
- `properties`: An array containing one or more of the constants listed in `Particle Property Keys`, each of which specifies a property of the appearance or behaviors of particles in the particle system.
- `block`: A [SCNParticleEventBlock](../scnparticleeventblock.md) block to be called every time SceneKit renders a frame. In this block you can modify the properties of particles in the system.

<a id="Discussion"></a>

## Discussion

By associating a block with one or more particle properties, you can run arbitrary code that modifies those properties when a significant event in the particle simulation occurs for one or more particles. For example, you can use the following code with a confetti effect to randomly switch between two distinct colors for each spawned particle:

```objc
[system handleEvent:SCNParticleEventBirth
      forProperties:@[SCNParticlePropertyColor]
          withBlock:^(void **data, size_t *dataStride, uint32_t *indices , NSInteger count) {
              for (NSInteger i = 0; i < count; ++i) {
                  float *color = (float *)((char *)data[0] + dataStride[0] * i);
                  if (rand() & 0x1) { // Switch the green and red color components.
                      color[0] = color[1];
                      color[1] = 0;
                  }
              }
          }];
```

## See Also

### Modifying Particles in Response to Particle System Events

- [SCNParticleEvent](../scnparticleevent.md): Significant events in the life spans of simulate particles, used by the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) method.
- [SCNParticleEventBlock](../scnparticleeventblock.md): The signature for blocks called by SceneKit in response to significant events during particle simulation, used by the [handleEvent:forProperties:withBlock:](handle%28__forproperties_handler_%29.md) method.
