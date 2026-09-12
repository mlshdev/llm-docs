> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoframe/image](https://developer.apple.com/documentation/photos/phlivephotoframe/image)

# image (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The image content of the frame to be processed.

## Declaration

```swift
var image: CIImage { get }
```

<a id="Discussion"></a>

## Discussion

Core Image provides several ways to perform your adjustments to this image:

- Create a single [CIFilter](../../coreimage/cifilter-swift.class.md) object, or a chain of filters. Set this image as the [kCIInputImageKey](../../coreimage/kciinputimagekey.md) parameter of the first filter in the chain, and use the last filter’s [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) property to access the result. Each [CIFilter](../../coreimage/cifilter-swift.class.md) object can be a built-in filter or a custom filter subclass that you create.
- Use the [applyingFilter(\_:parameters:)](../../coreimage/ciimage/applyingfilter%28__parameters_%29.md) method to conveniently apply one of the many built-in Core Image filters.
- Access pixel buffers directly and apply custom image processing using a custom [CIImageProcessorKernel](../../coreimage/ciimageprocessorkernel.md) subclass.

In all cases, you obtain another [CIImage](../../coreimage/ciimage.md) object representing the result of your adjustments. Return that image from your [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) block. (See the [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) description for example code.)

# image (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The image content of the frame to be processed.

## Declaration

```objectivec
@property (readonly) CIImage * image;
```

<a id="Discussion"></a>

## Discussion

Core Image provides several ways to perform your adjustments to this image:

- Create a single [CIFilter](../../coreimage/cifilter-swift.class.md) object, or a chain of filters. Set this image as the [kCIInputImageKey](../../coreimage/kciinputimagekey.md) parameter of the first filter in the chain, and use the last filter’s [outputImage](../../coreimage/cifilter-swift.class/outputimage.md) property to access the result. Each [CIFilter](../../coreimage/cifilter-swift.class.md) object can be a built-in filter or a custom filter subclass that you create.
- Use the [imageByApplyingFilter:withInputParameters:](../../coreimage/ciimage/applyingfilter%28__parameters_%29.md) method to conveniently apply one of the many built-in Core Image filters.
- Access pixel buffers directly and apply custom image processing using a custom [CIImageProcessorKernel](../../coreimage/ciimageprocessorkernel.md) subclass.

In all cases, you obtain another [CIImage](../../coreimage/ciimage.md) object representing the result of your adjustments. Return that image from your [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) block. (See the [frameProcessor](../phlivephotoeditingcontext/frameprocessor.md) description for example code.)
