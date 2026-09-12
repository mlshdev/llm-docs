> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldepthstencilstate](https://developer.apple.com/documentation/metal/mtldepthstencilstate)

# MTLDepthStencilState (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A depth and stencil state instance that specifies the depth and stencil configuration and operations used in a render pass.

## Declaration

```swift
protocol MTLDepthStencilState : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

The [MTLDepthStencilState](mtldepthstencilstate.md) protocol defines the interface for a lightweight instance used to encode how a graphics rendering pass should perform depth and stencil operations. The [MTLRenderCommandEncoder](mtlrendercommandencoder.md) uses an [MTLDepthStencilState](mtldepthstencilstate.md) instance to set the depth and stencil state for a rendering pass.

The standard allocation and initialization techniques don’t apply when creating an [MTLDepthStencilState](mtldepthstencilstate.md) instance. Instead, you can apply the following steps:

1. Create an [MTLDepthStencilDescriptor](mtldepthstencildescriptor.md) instance that defines the operations you want the rendering pass to use.
2. Create an [MTLDepthStencilState](mtldepthstencilstate.md) instance by passing the descriptor to an [MTLDevice](mtldevice.md) instance’s [makeDepthStencilState(descriptor:)](mtldevice/makedepthstencilstate%28descriptor_%29.md) method.

Typically, you create [MTLDepthStencilState](mtldepthstencilstate.md) instances when your app is first initialized and then reuse them throughout the lifetime of your app.

## Topics

### Identifying properties

- [device](mtldepthstencilstate/device.md): The device from which this state object was created.
- [label](mtldepthstencilstate/label.md): A string that identifies this object.

### Instance Properties

- [gpuResourceID](mtldepthstencilstate/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Depth testing

- [Calculating primitive visibility using depth testing](calculating-primitive-visibility-using-depth-testing.md): Determine which pixels are visible in a scene by using a depth texture.
- [MTLDepthStencilDescriptor](mtldepthstencildescriptor.md): An instance that configures new [MTLDepthStencilState](mtldepthstencilstate.md) instances.
- [MTLStencilDescriptor](mtlstencildescriptor.md): An object that defines the front-facing or back-facing stencil operations of a depth and stencil state object.

# MTLDepthStencilState (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A depth and stencil state instance that specifies the depth and stencil configuration and operations used in a render pass.

## Declaration

```objectivec
@protocol MTLDepthStencilState <NSObject>
```

<a id="overview"></a>

## Overview

The [MTLDepthStencilState](mtldepthstencilstate.md) protocol defines the interface for a lightweight instance used to encode how a graphics rendering pass should perform depth and stencil operations. The [MTLRenderCommandEncoder](mtlrendercommandencoder.md) uses an [MTLDepthStencilState](mtldepthstencilstate.md) instance to set the depth and stencil state for a rendering pass.

The standard allocation and initialization techniques don’t apply when creating an [MTLDepthStencilState](mtldepthstencilstate.md) instance. Instead, you can apply the following steps:

1. Create an [MTLDepthStencilDescriptor](mtldepthstencildescriptor.md) instance that defines the operations you want the rendering pass to use.
2. Create an [MTLDepthStencilState](mtldepthstencilstate.md) instance by passing the descriptor to an [MTLDevice](mtldevice.md) instance’s [newDepthStencilStateWithDescriptor:](mtldevice/makedepthstencilstate%28descriptor_%29.md) method.

Typically, you create [MTLDepthStencilState](mtldepthstencilstate.md) instances when your app is first initialized and then reuse them throughout the lifetime of your app.

## Topics

### Identifying properties

- [device](mtldepthstencilstate/device.md): The device from which this state object was created.
- [label](mtldepthstencilstate/label.md): A string that identifies this object.

### Instance Properties

- [gpuResourceID](mtldepthstencilstate/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Depth testing

- [Calculating primitive visibility using depth testing](calculating-primitive-visibility-using-depth-testing.md): Determine which pixels are visible in a scene by using a depth texture.
- [MTLDepthStencilDescriptor](mtldepthstencildescriptor.md): An instance that configures new [MTLDepthStencilState](mtldepthstencilstate.md) instances.
- [MTLStencilDescriptor](mtlstencildescriptor.md): An object that defines the front-facing or back-facing stencil operations of a depth and stencil state object.
