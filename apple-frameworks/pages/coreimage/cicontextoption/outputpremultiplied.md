> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/outputpremultiplied](https://developer.apple.com/documentation/coreimage/cicontextoption/outputpremultiplied)

# outputPremultiplied (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.

## Declaration

```swift
static let outputPremultiplied: CIContextOption
```

<a id="discussion"></a>

## Discussion

This option only affects how a context is rendered when using methods where the destination’s alpha mode cannot be determined such as:

- `/CIContext/render:toBitmap:rowBytes:bounds:format:colorSpace:`
- `/CIContext/render:toCVPixelBuffer:`
- `/CIContext/render:toIOSurface:bounds:colorSpace:`
- `/CIContext/render:toMTLTexture:commandBuffer:bounds:colorSpace:`
- `/CIContext/createCGImage:fromRect:`

If the value for this option is:

- True: The output will produce alpha-premultiplied pixels.
- False: The output will produce un-premultiplied pixels.
- Not specified: the default behavior True.

This option does not affect how a context is rendered to a [CIRenderDestination](../cirenderdestination.md) because that API allows you to set or override the alpha behavior using `/CIRenderDestination/alphaMode`.

## See Also

### Type Properties

- [allowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [memoryTarget](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextOutputPremultiplied (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.

## Declaration

```objectivec
extern CIContextOption const kCIContextOutputPremultiplied;
```

<a id="discussion"></a>

## Discussion

This option only affects how a context is rendered when using methods where the destination’s alpha mode cannot be determined such as:

- `/CIContext/render:toBitmap:rowBytes:bounds:format:colorSpace:`
- `/CIContext/render:toCVPixelBuffer:`
- `/CIContext/render:toIOSurface:bounds:colorSpace:`
- `/CIContext/render:toMTLTexture:commandBuffer:bounds:colorSpace:`
- `/CIContext/createCGImage:fromRect:`

If the value for this option is:

- True: The output will produce alpha-premultiplied pixels.
- False: The output will produce un-premultiplied pixels.
- Not specified: the default behavior True.

This option does not affect how a context is rendered to a [CIRenderDestination](../cirenderdestination.md) because that API allows you to set or override the alpha behavior using `/CIRenderDestination/alphaMode`.

## See Also

### Type Properties

- [kCIContextAllowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextMemoryLimit](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
