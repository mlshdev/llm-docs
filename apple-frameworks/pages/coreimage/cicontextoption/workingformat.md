> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption/workingformat](https://developer.apple.com/documentation/coreimage/cicontextoption/workingformat)

# workingFormat (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Core Image context option key to specify the pixel format to for intermediate results when rendering.

## Declaration

```swift
static let workingFormat: CIContextOption
```

<a id="discussion"></a>

## Discussion

The value for this key is an `NSNumber` instance containing a [CIFormat](../ciformat.md) value.

The supported values for the working pixel format are:

| [CIFormat](../ciformat.md) | Notes |
| --- | --- |
| [RGBA8](../ciformat/rgba8.md) | Uses 4 bytes per pixel. Only supporrts SDR and has less precision. |
| [RGBAh](../ciformat/rgbah.md) | Uses 8 bytes per pixel. Supports HDR. |
| [RGBAf](../ciformat/rgbaf.md) | Uses 16 bytes per pixel. Only available on macOS |

If this option is not specified, then the default is [RGBAh](../ciformat/rgbah.md).

(The default is [RGBA8](../ciformat/rgba8.md) if your if app is linked against iOS 12 SDK or earlier.)

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
- [useSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.

# kCIContextWorkingFormat (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Core Image context option key to specify the pixel format to for intermediate results when rendering.

## Declaration

```objectivec
extern CIContextOption const kCIContextWorkingFormat;
```

<a id="discussion"></a>

## Discussion

The value for this key is an `NSNumber` instance containing a [CIFormat](../ciformat.md) value.

The supported values for the working pixel format are:

| [CIFormat](../ciformat.md) | Notes |
| --- | --- |
| [kCIFormatRGBA8](../ciformat/rgba8.md) | Uses 4 bytes per pixel. Only supporrts SDR and has less precision. |
| [kCIFormatRGBAh](../ciformat/rgbah.md) | Uses 8 bytes per pixel. Supports HDR. |
| [kCIFormatRGBAf](../ciformat/rgbaf.md) | Uses 16 bytes per pixel. Only available on macOS |

If this option is not specified, then the default is [kCIFormatRGBAh](../ciformat/rgbah.md).

(The default is [kCIFormatRGBA8](../ciformat/rgba8.md) if your if app is linked against iOS 12 SDK or earlier.)

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
- [kCIContextUseSoftwareRenderer](usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
