> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/highqualitydownsample](https://developer.apple.com/documentation/coreimage/cicontextoption/highqualitydownsample)

# highQualityDownsample (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value to control the quality of image downsampling operations performed by the Core Image context.

## Declaration

```swift
static let highQualityDownsample: CIContextOption
```

<a id="discussion"></a>

## Discussion

The higher quality behavior performs downsampling operations in multiple passes in order to reduce aliasing artifacts.

The lower quality behavior performs downsampling operations a single pass in order to improve performance.

If the value for this option is:

- True: The higher quality behavior will be used.
- False: The lower quality behavior will be used.
- Not specified: the default behavior is True on macOS and False on other platforms.

> **Note**

> - This option does affect how `/CIImage/imageByApplyingTransform:` operations are performed by the context.
> - This option does not affect how `/CIImage/imageByApplyingTransform:highQualityDownsample:` behaves.

## See Also

### Type Properties

- [allowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [memoryTarget](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [outputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextHighQualityDownsample (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value to control the quality of image downsampling operations performed by the Core Image context.

## Declaration

```objectivec
extern CIContextOption const kCIContextHighQualityDownsample;
```

<a id="discussion"></a>

## Discussion

The higher quality behavior performs downsampling operations in multiple passes in order to reduce aliasing artifacts.

The lower quality behavior performs downsampling operations a single pass in order to improve performance.

If the value for this option is:

- True: The higher quality behavior will be used.
- False: The lower quality behavior will be used.
- Not specified: the default behavior is True on macOS and False on other platforms.

> **Note**

> - This option does affect how `/CIImage/imageByApplyingTransform:` operations are performed by the context.
> - This option does not affect how `/CIImage/imageByApplyingTransform:highQualityDownsample:` behaves.

## See Also

### Type Properties

- [kCIContextAllowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextMemoryLimit](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextOutputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
