> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/memorytarget](https://developer.apple.com/documentation/coreimage/cicontextoption/memorytarget)

# memoryTarget (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A number value to control the maximum memory in megabytes that the context allocates for render tasks.

## Declaration

```swift
static let memoryTarget: CIContextOption
```

<a id="discussion"></a>

## Discussion

Larger values could increase memory  footprint while smaller values could reduce performance.

## See Also

### Type Properties

- [allowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [outputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextMemoryLimit (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A number value to control the maximum memory in megabytes that the context allocates for render tasks.

## Declaration

```objectivec
extern CIContextOption const kCIContextMemoryLimit;
```

<a id="discussion"></a>

## Discussion

Larger values could increase memory  footprint while smaller values could reduce performance.

## See Also

### Type Properties

- [kCIContextAllowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextOutputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
