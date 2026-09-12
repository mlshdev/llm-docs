> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/allowlowpower](https://developer.apple.com/documentation/coreimage/cicontextoption/allowlowpower)

# allowLowPower (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value to control the power level of Core Image context renders.

## Declaration

```swift
static let allowLowPower: CIContextOption
```

<a id="discussion"></a>

## Discussion

This option only affects certain macOS devices with more than one available GPU device.

If this value is True, then rendering with the context will use a use allow power GPU device if available and the high power device is not already in use.

Otherwise, the context will use the highest power/performance GPU device.

## See Also

### Type Properties

- [cacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [memoryTarget](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [outputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.

# kCIContextAllowLowPower (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value to control the power level of Core Image context renders.

## Declaration

```objectivec
extern CIContextOption const kCIContextAllowLowPower;
```

<a id="discussion"></a>

## Discussion

This option only affects certain macOS devices with more than one available GPU device.

If this value is True, then rendering with the context will use a use allow power GPU device if available and the high power device is not already in use.

Otherwise, the context will use the highest power/performance GPU device.

## See Also

### Type Properties

- [kCIContextCacheIntermediates](cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextMemoryLimit](memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextOutputPremultiplied](outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
