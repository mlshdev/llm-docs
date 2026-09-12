> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer](https://developer.apple.com/documentation/quartzcore/caemitterlayer)

# CAEmitterLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that emits, animates, and renders a particle system.

## Declaration

```swift
class CAEmitterLayer
```

<a id="overview"></a>

## Overview

The particles, defined by instances of [CAEmitterCell](caemittercell.md), are drawn above the layer’s background color and border.

The following code shows how to set up a simple point (the default [emitterShape](caemitterlayer/emittershape.md) is [point](caemitterlayeremittershape/point.md)) particle emitter. It uses an image named `RadialGradient.png` as the cell contents and, by setting the emitter cell’s [emissionRange](caemittercell/emissionrange.md) to `2` × [pi](https://developer.apple.com/documentation/swift/floatingpoint/pi), the particles are emitted in all directions.

```swift
let emitterLayer = CAEmitterLayer()
    
emitterLayer.emitterPosition = CGPoint(x: 320, y: 320)
    
let cell = CAEmitterCell()
cell.birthRate = 100
cell.lifetime = 10
cell.velocity = 100
cell.scale = 0.1
    
cell.emissionRange = CGFloat.pi * 2.0
cell.contents = UIImage(named: "RadialGradient.png")!.cgImage
    
emitterLayer.emitterCells = [cell]
    
view.layer.addSublayer(emitterLayer)
```

## Topics

### Specifying Particle Emitter Cells

- [emitterCells](caemitterlayer/emittercells.md): The array emitter cells attached to the layer.

### Emitter Geometry

- [renderMode](caemitterlayer/rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](caemitterlayer/emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](caemitterlayer/emittershape.md): Specifies the emitter shape.
- [emitterZPosition](caemitterlayer/emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](caemitterlayer/emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](caemitterlayer/emittersize.md): Determines the size of the particle emitter shape. Animatable.

### Emitter Cell Attribute Multipliers

- [scale](caemitterlayer/scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](caemitterlayer/seed.md): Specifies the seed used to initialize the random number generator.
- [spin](caemitterlayer/spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](caemitterlayer/velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](caemitterlayer/birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](caemitterlayer/emittermode.md): Specifies the emitter mode.
- [lifetime](caemitterlayer/lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](caemitterlayer/preservesdepth.md): Defines whether the layer flattens the particles into its plane.

### Constants

- [Emitter Shape](emitter-shape.md): The emission shape is a one, two or three dimensional shape that defines where the emitted particles originate. The shapes are defined by a subset of [emitterPosition](caemitterlayer/emitterposition.md), [emitterZPosition](caemitterlayer/emitterzposition.md), [emitterSize](caemitterlayer/emittersize.md) and [emitterDepth](caemitterlayer/emitterdepth.md) properties.
- [Emitter Modes](emitter-modes.md): These constants specify the possible emitter modes. They are used by the [emitterMode](caemitterlayer/emittermode.md) property.
- [Emitter Render Order](emitter-render-order.md): These constants specify the order that emitter cells are composited. They are used by the [renderMode](caemitterlayer/rendermode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Particle Systems

- [CAEmitterCell](caemittercell.md): The definition of a particle emitted by a particle layer.

# CAEmitterLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that emits, animates, and renders a particle system.

## Declaration

```objectivec
@interface CAEmitterLayer : CALayer
```

<a id="overview"></a>

## Overview

The particles, defined by instances of [CAEmitterCell](caemittercell.md), are drawn above the layer’s background color and border.

The following code shows how to set up a simple point (the default [emitterShape](caemitterlayer/emittershape.md) is [kCAEmitterLayerPoint](caemitterlayeremittershape/point.md)) particle emitter. It uses an image named `RadialGradient.png` as the cell contents and, by setting the emitter cell’s [emissionRange](caemittercell/emissionrange.md) to `2` × [pi](https://developer.apple.com/documentation/swift/floatingpoint/pi), the particles are emitted in all directions.

```swift
let emitterLayer = CAEmitterLayer()
    
emitterLayer.emitterPosition = CGPoint(x: 320, y: 320)
    
let cell = CAEmitterCell()
cell.birthRate = 100
cell.lifetime = 10
cell.velocity = 100
cell.scale = 0.1
    
cell.emissionRange = CGFloat.pi * 2.0
cell.contents = UIImage(named: "RadialGradient.png")!.cgImage
    
emitterLayer.emitterCells = [cell]
    
view.layer.addSublayer(emitterLayer)
```

## Topics

### Specifying Particle Emitter Cells

- [emitterCells](caemitterlayer/emittercells.md): The array emitter cells attached to the layer.

### Emitter Geometry

- [renderMode](caemitterlayer/rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](caemitterlayer/emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](caemitterlayer/emittershape.md): Specifies the emitter shape.
- [emitterZPosition](caemitterlayer/emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](caemitterlayer/emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](caemitterlayer/emittersize.md): Determines the size of the particle emitter shape. Animatable.

### Emitter Cell Attribute Multipliers

- [scale](caemitterlayer/scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](caemitterlayer/seed.md): Specifies the seed used to initialize the random number generator.
- [spin](caemitterlayer/spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](caemitterlayer/velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](caemitterlayer/birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](caemitterlayer/emittermode.md): Specifies the emitter mode.
- [lifetime](caemitterlayer/lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](caemitterlayer/preservesdepth.md): Defines whether the layer flattens the particles into its plane.

### Constants

- [Emitter Shape](emitter-shape.md): The emission shape is a one, two or three dimensional shape that defines where the emitted particles originate. The shapes are defined by a subset of [emitterPosition](caemitterlayer/emitterposition.md), [emitterZPosition](caemitterlayer/emitterzposition.md), [emitterSize](caemitterlayer/emittersize.md) and [emitterDepth](caemitterlayer/emitterdepth.md) properties.
- [Emitter Modes](emitter-modes.md): These constants specify the possible emitter modes. They are used by the [emitterMode](caemitterlayer/emittermode.md) property.
- [Emitter Render Order](emitter-render-order.md): These constants specify the order that emitter cells are composited. They are used by the [renderMode](caemitterlayer/rendermode.md) property.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Particle Systems

- [CAEmitterCell](caemittercell.md): The definition of a particle emitted by a particle layer.
