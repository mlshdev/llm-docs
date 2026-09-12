> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armattegenerator](https://developer.apple.com/documentation/arkit/armattegenerator)

# ARMatteGenerator (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that creates matte textures you use to occlude your app’s virtual content with people, that ARKit recognizes in the camera feed.

## Declaration

```swift
class ARMatteGenerator
```

<a id="overview"></a>

## Overview

Use this class when you want full control over occluding your app’s virtual content, based on people ARKit recognizes in the camera feed.

> **Note**

>  Apps using one of the standard renderers  (`ARView` or [ARSCNView](arscnview.md)) don’t need this class to effect people occlusion. See [frameSemantics](arconfiguration/framesemantics-swift.property.md) for more information.

To assist your custom renderer with people occlusion, matte generator processes alpha and depth information in a frame’s [segmentationBuffer](arframe/segmentationbuffer.md) and [estimatedDepthData](arframe/estimateddepthdata.md) to provide you with matte and depth textures. You use these textures to layer people on top of your app’s virtual content.

## Topics

### Creating a Matte Generator

- [init(device:matteResolution:)](armattegenerator/init%28device_matteresolution_%29.md): Creates an AR matte generator.

### Creating an Alpha Matte Texture

- [generateMatte(from:commandBuffer:)](armattegenerator/generatematte%28from_commandbuffer_%29.md): Generates alpha matte at either full resolution or half the resolution of the captured image.

### Creating a Depth Texture

- [generateDilatedDepth(from:commandBuffer:)](armattegenerator/generatedilateddepth%28from_commandbuffer_%29.md): Generates dilated depth at the resolution of the segmentation stencil.

### Controlling Resolution

- [ARMatteGenerator.Resolution](armattegenerator/resolution.md): A resolution for a matte texture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Occlusion

- [Occluding virtual content with people](occluding-virtual-content-with-people.md): Cover your app’s virtual content with people that ARKit perceives in the camera feed.
- [Effecting People Occlusion in Custom Renderers](effecting-people-occlusion-in-custom-renderers.md): Occlude your app’s virtual content where ARKit recognizes people in the camera feed by using matte generator.
- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.

# ARMatteGenerator (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that creates matte textures you use to occlude your app’s virtual content with people, that ARKit recognizes in the camera feed.

## Declaration

```objectivec
@interface ARMatteGenerator : NSObject
```

<a id="overview"></a>

## Overview

Use this class when you want full control over occluding your app’s virtual content, based on people ARKit recognizes in the camera feed.

> **Note**

>  Apps using one of the standard renderers  (`ARView` or [ARSCNView](arscnview.md)) don’t need this class to effect people occlusion. See [frameSemantics](arconfiguration/framesemantics-swift.property.md) for more information.

To assist your custom renderer with people occlusion, matte generator processes alpha and depth information in a frame’s [segmentationBuffer](arframe/segmentationbuffer.md) and [estimatedDepthData](arframe/estimateddepthdata.md) to provide you with matte and depth textures. You use these textures to layer people on top of your app’s virtual content.

## Topics

### Creating a Matte Generator

- [initWithDevice:matteResolution:](armattegenerator/init%28device_matteresolution_%29.md): Creates an AR matte generator.

### Creating an Alpha Matte Texture

- [generateMatteFromFrame:commandBuffer:](armattegenerator/generatematte%28from_commandbuffer_%29.md): Generates alpha matte at either full resolution or half the resolution of the captured image.

### Creating a Depth Texture

- [generateDilatedDepthFromFrame:commandBuffer:](armattegenerator/generatedilateddepth%28from_commandbuffer_%29.md): Generates dilated depth at the resolution of the segmentation stencil.

### Controlling Resolution

- [ARMatteResolution](armattegenerator/resolution.md): A resolution for a matte texture.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Occlusion

- [Occluding virtual content with people](occluding-virtual-content-with-people.md): Cover your app’s virtual content with people that ARKit perceives in the camera feed.
- [Effecting People Occlusion in Custom Renderers](effecting-people-occlusion-in-custom-renderers.md): Occlude your app’s virtual content where ARKit recognizes people in the camera feed by using matte generator.
- [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md): Estimate the shape of the physical environment using a polygonal mesh.
