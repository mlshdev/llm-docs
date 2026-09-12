> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/usesoftwarerenderer](https://developer.apple.com/documentation/coreimage/cicontextoption/usesoftwarerenderer)

# useSoftwareRenderer (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value to control if a Core Image context will use a software renderer.

## Declaration

```swift
static let useSoftwareRenderer: CIContextOption
```

<a id="discussion"></a>

## Discussion

> **Note**

> This option has no effect if the platform does not support OpenCL.

## See Also

### Type Properties

- [allowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [memoryTarget](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [outputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextUseSoftwareRenderer (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value to control if a Core Image context will use a software renderer.

## Declaration

```objectivec
extern CIContextOption const kCIContextUseSoftwareRenderer;
```

<a id="discussion"></a>

## Discussion

> **Note**

> This option has no effect if the platform does not support OpenCL.

## See Also

### Type Properties

- [kCIContextAllowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextMemoryLimit](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextOutputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
