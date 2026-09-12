> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/careplicatorlayer](https://developer.apple.com/documentation/quartzcore/careplicatorlayer)

# CAReplicatorLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.

## Declaration

```swift
class CAReplicatorLayer
```

<a id="overview"></a>

## Overview

You can use a [CAReplicatorLayer](careplicatorlayer.md) object to build complex layouts based on a single source layer that is replicated with transformation rules that can affect the position, rotation color, and time.

The following shows a simple example: a red square is added to a replicator layer with an instance count of `5`. The position of each replicated instance is offset along the `x` axis so that it appears to the right of the previous instance. The blue and green color channels are offset so that their values reach `0` at the final instance.

```swift
let replicatorLayer = CAReplicatorLayer()
     
let redSquare = CALayer()
redSquare.backgroundColor = NSColor.white.cgColor
redSquare.frame = CGRect(x: 0, y: 0, width: 100, height: 100)
     
let instanceCount = 5
     
replicatorLayer.instanceCount = instanceCount
replicatorLayer.instanceTransform = CATransform3DMakeTranslation(110, 0, 0)
     
let offsetStep = -1 / Float(instanceCount)
replicatorLayer.instanceBlueOffset = offsetStep
replicatorLayer.instanceGreenOffset = offsetStep
    
replicatorLayer.addSublayer(redSquare)
```

The result of the code above is a row of five squares, with colors graduating from white to red.

![Replicator layer example](https://developer.apple.com/images/com.apple.quartzcore/media-2776906@2x.png)

Replicator layers can be nested. The following code adds `replicatorLayer` to a second replicator layer that offsets the position of each instance vertically and subtracts from the red channel.

```swift
let outerReplicatorLayer = CAReplicatorLayer()

outerReplicatorLayer.addSublayer(replicatorLayer)

outerReplicatorLayer.instanceCount = instanceCount
outerReplicatorLayer.instanceTransform = CATransform3DMakeTranslation(0, 110, 0)
outerReplicatorLayer.instanceRedOffset = offsetStep
```

The result of adding this code is to create a grid with the value of the red channel being reduced in the vertical direction.

![Nested replicator layer example](https://developer.apple.com/images/com.apple.quartzcore/media-2776908@2x.png)

> **Note**

>  The [CAReplicatorLayer](careplicatorlayer.md) implementation of [hitTest(\_:)](calayer/hittest%28__%29.md) currently tests only the first instance of z replicator layer’s sublayers. This may change in the future.

## Topics

### Setting Instance Display Properties

- [instanceCount](careplicatorlayer/instancecount.md): The number of copies to create, including the source layers.
- [instanceDelay](careplicatorlayer/instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.
- [instanceTransform](careplicatorlayer/instancetransform.md): The transform matrix applied to the previous instance to produce the current instance. Animatable.

### Modifying Instance Layer Geometry

- [preservesDepth](careplicatorlayer/preservesdepth.md): Defines whether this layer flattens its sublayers into its plane.

### Accessing Instance Color Values

- [instanceColor](careplicatorlayer/instancecolor.md): Defines the color used to multiply the source object. Animatable.
- [instanceRedOffset](careplicatorlayer/instanceredoffset.md): Defines the offset added to the red component of the color for each replicated instance. Animatable.
- [instanceGreenOffset](careplicatorlayer/instancegreenoffset.md): Defines the offset added to the green component of the color for each replicated instance. Animatable.
- [instanceBlueOffset](careplicatorlayer/instanceblueoffset.md): Defines the offset added to the blue component of the color for each replicated instance. Animatable.
- [instanceAlphaOffset](careplicatorlayer/instancealphaoffset.md): Defines the offset added to the alpha component of the color for each replicated instance. Animatable.

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

### Advanced Layer Options

- [CAScrollLayer](cascrolllayer.md): A layer that displays scrollable content larger than its own bounds.
- [CATiledLayer](catiledlayer.md): A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.

# CAReplicatorLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.

## Declaration

```objectivec
@interface CAReplicatorLayer : CALayer
```

<a id="overview"></a>

## Overview

You can use a [CAReplicatorLayer](careplicatorlayer.md) object to build complex layouts based on a single source layer that is replicated with transformation rules that can affect the position, rotation color, and time.

The following shows a simple example: a red square is added to a replicator layer with an instance count of `5`. The position of each replicated instance is offset along the `x` axis so that it appears to the right of the previous instance. The blue and green color channels are offset so that their values reach `0` at the final instance.

```swift
let replicatorLayer = CAReplicatorLayer()
     
let redSquare = CALayer()
redSquare.backgroundColor = NSColor.white.cgColor
redSquare.frame = CGRect(x: 0, y: 0, width: 100, height: 100)
     
let instanceCount = 5
     
replicatorLayer.instanceCount = instanceCount
replicatorLayer.instanceTransform = CATransform3DMakeTranslation(110, 0, 0)
     
let offsetStep = -1 / Float(instanceCount)
replicatorLayer.instanceBlueOffset = offsetStep
replicatorLayer.instanceGreenOffset = offsetStep
    
replicatorLayer.addSublayer(redSquare)
```

The result of the code above is a row of five squares, with colors graduating from white to red.

![Replicator layer example](https://developer.apple.com/images/com.apple.quartzcore/media-2776906@2x.png)

Replicator layers can be nested. The following code adds `replicatorLayer` to a second replicator layer that offsets the position of each instance vertically and subtracts from the red channel.

```swift
let outerReplicatorLayer = CAReplicatorLayer()

outerReplicatorLayer.addSublayer(replicatorLayer)

outerReplicatorLayer.instanceCount = instanceCount
outerReplicatorLayer.instanceTransform = CATransform3DMakeTranslation(0, 110, 0)
outerReplicatorLayer.instanceRedOffset = offsetStep
```

The result of adding this code is to create a grid with the value of the red channel being reduced in the vertical direction.

![Nested replicator layer example](https://developer.apple.com/images/com.apple.quartzcore/media-2776908@2x.png)

> **Note**

>  The [CAReplicatorLayer](careplicatorlayer.md) implementation of [hitTest:](calayer/hittest%28__%29.md) currently tests only the first instance of z replicator layer’s sublayers. This may change in the future.

## Topics

### Setting Instance Display Properties

- [instanceCount](careplicatorlayer/instancecount.md): The number of copies to create, including the source layers.
- [instanceDelay](careplicatorlayer/instancedelay.md): Specifies the delay, in seconds, between replicated copies. Animatable.
- [instanceTransform](careplicatorlayer/instancetransform.md): The transform matrix applied to the previous instance to produce the current instance. Animatable.

### Modifying Instance Layer Geometry

- [preservesDepth](careplicatorlayer/preservesdepth.md): Defines whether this layer flattens its sublayers into its plane.

### Accessing Instance Color Values

- [instanceColor](careplicatorlayer/instancecolor.md): Defines the color used to multiply the source object. Animatable.
- [instanceRedOffset](careplicatorlayer/instanceredoffset.md): Defines the offset added to the red component of the color for each replicated instance. Animatable.
- [instanceGreenOffset](careplicatorlayer/instancegreenoffset.md): Defines the offset added to the green component of the color for each replicated instance. Animatable.
- [instanceBlueOffset](careplicatorlayer/instanceblueoffset.md): Defines the offset added to the blue component of the color for each replicated instance. Animatable.
- [instanceAlphaOffset](careplicatorlayer/instancealphaoffset.md): Defines the offset added to the alpha component of the color for each replicated instance. Animatable.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Advanced Layer Options

- [CAScrollLayer](cascrolllayer.md): A layer that displays scrollable content larger than its own bounds.
- [CATiledLayer](catiledlayer.md): A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.
