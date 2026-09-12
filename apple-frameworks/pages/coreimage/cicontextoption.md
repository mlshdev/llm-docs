> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontextoption](https://developer.apple.com/documentation/coreimage/cicontextoption)

# CIContextOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An enum string type that your code can use to select different options when creating a Core Image context.

## Declaration

```swift
struct CIContextOption
```

<a id="overview"></a>

## Overview

These option keys can be passed to `CIContext` creation APIs such as:

- `/CIContext/contextWithOptions:`
- `/CIContext/contextWithMTLDevice:options:`

## Topics

### Type Properties

- [allowLowPower](cicontextoption/allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [cacheIntermediates](cicontextoption/cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [highQualityDownsample](cicontextoption/highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [memoryTarget](cicontextoption/memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [name](cicontextoption/name.md): A Boolean value to specify a client-provided name for a context.
- [outputColorSpace](cicontextoption/outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [outputPremultiplied](cicontextoption/outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [priorityRequestLow](cicontextoption/priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [useSoftwareRenderer](cicontextoption/usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [workingColorSpace](cicontextoption/workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [workingFormat](cicontextoption/workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
- [cvMetalTextureCache](cicontextoption/cvmetaltexturecache.md): A Core Video Metal texture cache object to improve the performance of Core Image context renders that use Core Video pixel buffers.

### Initializers

- [init(rawValue:)](cicontextoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CIContextOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An enum string type that your code can use to select different options when creating a Core Image context.

## Declaration

```objectivec
typedef NSString * CIContextOption;
```

<a id="overview"></a>

## Overview

These option keys can be passed to `CIContext` creation APIs such as:

- `/CIContext/contextWithOptions:`
- `/CIContext/contextWithMTLDevice:options:`

## Topics

### Type Properties

- [kCIContextAllowLowPower](cicontextoption/allowlowpower.md): A Boolean value to control the power level of Core Image context renders.
- [kCIContextCacheIntermediates](cicontextoption/cacheintermediates.md): A Boolean value to control how a Core Image context caches the contents of any intermediate image buffers it uses during rendering.
- [kCIContextHighQualityDownsample](cicontextoption/highqualitydownsample.md): A Boolean value to control the quality of image downsampling operations performed by the Core Image context.
- [kCIContextMemoryLimit](cicontextoption/memorytarget.md): A number value to control the maximum memory in megabytes that the context allocates for render tasks.
- [kCIContextName](cicontextoption/name.md): A Boolean value to specify a client-provided name for a context.
- [kCIContextOutputColorSpace](cicontextoption/outputcolorspace.md): A Core Image context option key to specify the default destination color space for rendering.
- [kCIContextOutputPremultiplied](cicontextoption/outputpremultiplied.md): A Boolean value to control how a Core Image context render produces alpha-premultiplied pixels.
- [kCIContextPriorityRequestLow](cicontextoption/priorityrequestlow.md): A Boolean value to control the priority Core Image context renders.
- [kCIContextUseSoftwareRenderer](cicontextoption/usesoftwarerenderer.md): A Boolean value to control if a Core Image context will use a software renderer.
- [kCIContextWorkingColorSpace](cicontextoption/workingcolorspace.md): A Core Image context option key to specify the working color space for rendering.
- [kCIContextWorkingFormat](cicontextoption/workingformat.md): A Core Image context option key to specify the pixel format to for intermediate results when rendering.
