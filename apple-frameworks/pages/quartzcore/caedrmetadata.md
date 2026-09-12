> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caedrmetadata](https://developer.apple.com/documentation/quartzcore/caedrmetadata)

# CAEDRMetadata (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Metadata describing how extended dynamic range (EDR) values should be tone mapped.

## Declaration

```swift
class CAEDRMetadata
```

<a id="overview"></a>

## Overview

If you need specific tone-mapping behavior, set the [edrMetadata](cametallayer/edrmetadata.md) property of a [CAMetalLayer](cametallayer.md) to point to an instance of this class.

## Topics

### Retrieving Hybrid-Log Gamma Metadata

- [hlg](caedrmetadata/hlg.md): Extended dynamic range (EDR) metadata for the Hybrid Log-Gamma (HLG) transfer function.

### Retrieving HDR10 Metadata

- [hdr10(displayInfo:contentInfo:opticalOutputScale:)](caedrmetadata/hdr10%28displayinfo_contentinfo_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on mastering display color information and content light levels.
- [hdr10(minLuminance:maxLuminance:opticalOutputScale:)](caedrmetadata/hdr10%28minluminance_maxluminance_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on the luminance characteristics of a mastering display.

### Type Properties

- [isAvailable](caedrmetadata/isavailable.md)

### Type Methods

- [hlg(ambientViewingEnvironment:)](caedrmetadata/hlg%28ambientviewingenvironment_%29.md)

### Initializers

- [init(coder:)](caedrmetadata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.

# CAEDRMetadata (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Metadata describing how extended dynamic range (EDR) values should be tone mapped.

## Declaration

```objectivec
@interface CAEDRMetadata : NSObject
```

<a id="overview"></a>

## Overview

If you need specific tone-mapping behavior, set the [EDRMetadata](cametallayer/edrmetadata.md) property of a [CAMetalLayer](cametallayer.md) to point to an instance of this class.

## Topics

### Retrieving Hybrid-Log Gamma Metadata

- [HLGMetadata](caedrmetadata/hlg.md): Extended dynamic range (EDR) metadata for the Hybrid Log-Gamma (HLG) transfer function.

### Retrieving HDR10 Metadata

- [HDR10MetadataWithDisplayInfo:contentInfo:opticalOutputScale:](caedrmetadata/hdr10%28displayinfo_contentinfo_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on mastering display color information and content light levels.
- [HDR10MetadataWithMinLuminance:maxLuminance:opticalOutputScale:](caedrmetadata/hdr10%28minluminance_maxluminance_opticaloutputscale_%29.md): Creates EDR metadata for HDR10 content based on the luminance characteristics of a mastering display.

### Type Properties

- [available](caedrmetadata/isavailable.md)

### Type Methods

- [HLGMetadataWithAmbientViewingEnvironment:](caedrmetadata/hlg%28ambientviewingenvironment_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
- [CARenderer](carenderer.md): A layer that allows an application to render a layer tree into a Core OpenGL context.
