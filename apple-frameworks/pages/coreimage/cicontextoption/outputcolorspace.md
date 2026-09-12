> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/outputcolorspace](https://developer.apple.com/documentation/coreimage/cicontextoption/outputcolorspace)

# outputColorSpace (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image context option key to specify the default destination color space for rendering.

## Declaration

```swift
static let outputColorSpace: CIContextOption
```

<a id="discussion"></a>

## Discussion

This option only affects how Core Image renders using the following methods:

- `/CIContext/createCGImage:fromRect:`
- `/CIContext/drawImage:atPoint:fromRect:`
- `/CIContext/drawImage:inRect:fromRect:`

With all other render methods, the destination color space is either specified as a parameter or can be determined from the object being rendered to.

The value of this option can be either:

- A `CGColorSpace` instance with an RGB or monochrome color model that supports output.
- An `NSNull` instance to indicate that the context should not match from the working space to the destination.

If this option is not specified, then the default output space is sRGB.

## See Also

### Type Properties

- [allowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [memoryTarget](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextOutputColorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image context option key to specify the default destination color space for rendering.

## Declaration

```objectivec
extern CIContextOption const kCIContextOutputColorSpace;
```

<a id="discussion"></a>

## Discussion

This option only affects how Core Image renders using the following methods:

- `/CIContext/createCGImage:fromRect:`
- `/CIContext/drawImage:atPoint:fromRect:`
- `/CIContext/drawImage:inRect:fromRect:`

With all other render methods, the destination color space is either specified as a parameter or can be determined from the object being rendered to.

The value of this option can be either:

- A `CGColorSpace` instance with an RGB or monochrome color model that supports output.
- An `NSNull` instance to indicate that the context should not match from the working space to the destination.

If this option is not specified, then the default output space is sRGB.

## See Also

### Type Properties

- [kCIContextAllowLowPower](allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextMemoryLimit](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
