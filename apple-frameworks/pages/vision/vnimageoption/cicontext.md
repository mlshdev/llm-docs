> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimageoption/cicontext](https://developer.apple.com/documentation/vision/vnimageoption/cicontext)

# ciContext (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An option key to specify the context to use in the handler’s Core Image operations.

## Declaration

```swift
static let ciContext: VNImageOption
```

<a id="Discussion"></a>

## Discussion

If this key isn’t specified, Vision will create its own [CIContext](../../coreimage/cicontext.md).

Specify a [CIContext](../../coreimage/cicontext.md) when you’ve used one in processing an input [CIImage](../../coreimage/ciimage.md) or executing a [CIFilter](../../coreimage/cifilter-swift.class.md) chain, so you can save the cost of creating a new context.

## See Also

### Options Dictionary Keys

- [properties](properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [cameraIntrinsics](cameraintrinsics.md): An option to specify the camera intrinstics.

# VNImageOptionCIContext (Objective-C)

**Framework:** Vision  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An option key to specify the context to use in the handler’s Core Image operations.

## Declaration

```objectivec
extern VNImageOption const VNImageOptionCIContext;
```

<a id="Discussion"></a>

## Discussion

If this key isn’t specified, Vision will create its own [CIContext](../../coreimage/cicontext.md).

Specify a [CIContext](../../coreimage/cicontext.md) when you’ve used one in processing an input [CIImage](../../coreimage/ciimage.md) or executing a [CIFilter](../../coreimage/cifilter-swift.class.md) chain, so you can save the cost of creating a new context.

## See Also

### Options Dictionary Keys

- [VNImageOptionProperties](properties.md): The dictionary from the image source that contains the metadata for algorithms like horizon detection.
- [VNImageOptionCameraIntrinsics](cameraintrinsics.md): An option to specify the camera intrinstics.
