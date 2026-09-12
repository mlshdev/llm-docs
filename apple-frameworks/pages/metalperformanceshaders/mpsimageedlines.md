> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageedlines](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageedlines)

# MPSImageEDLines (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```swift
class MPSImageEDLines
```

## Topics

### Initializers

- [init(coder:device:)](mpsimageedlines/init%28coder_device_%29.md)
- [init(device:gaussianSigma:minLineLength:maxLines:detailRatio:gradientThreshold:lineErrorThreshold:mergeLocalityThreshold:)](mpsimageedlines/init%28device_gaussiansigma_minlinelength_maxlines_detailratio_gradientthreshold_lineerrorthreshold_mergelocalitythreshold_%29.md)

### Instance Properties

- [clipRectSource](mpsimageedlines/cliprectsource.md)
- [detailRatio](mpsimageedlines/detailratio.md)
- [gaussianSigma](mpsimageedlines/gaussiansigma.md)
- [gradientThreshold](mpsimageedlines/gradientthreshold.md)
- [lineErrorThreshold](mpsimageedlines/lineerrorthreshold.md)
- [maxLines](mpsimageedlines/maxlines.md)
- [mergeLocalityThreshold](mpsimageedlines/mergelocalitythreshold.md)
- [minLineLength](mpsimageedlines/minlinelength.md)

### Instance Methods

- [encode(to:sourceTexture:destinationTexture:endpointBuffer:endpointOffset:)](mpsimageedlines/encode%28to_sourcetexture_destinationtexture_endpointbuffer_endpointoffset_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

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

# MPSImageEDLines (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSImageEDLines : MPSKernel
```

## Topics

### Instance Properties

- [clipRectSource](mpsimageedlines/cliprectsource.md)
- [detailRatio](mpsimageedlines/detailratio.md)
- [gaussianSigma](mpsimageedlines/gaussiansigma.md)
- [gradientThreshold](mpsimageedlines/gradientthreshold.md)
- [lineErrorThreshold](mpsimageedlines/lineerrorthreshold.md)
- [maxLines](mpsimageedlines/maxlines.md)
- [mergeLocalityThreshold](mpsimageedlines/mergelocalitythreshold.md)
- [minLineLength](mpsimageedlines/minlinelength.md)

### Instance Methods

- [encodeToCommandBuffer:sourceTexture:destinationTexture:endpointBuffer:endpointOffset:](mpsimageedlines/encode%28to_sourcetexture_destinationtexture_endpointbuffer_endpointoffset_%29.md)
- [initWithCoder:device:](mpsimageedlines/init%28coder_device_%29.md)
- [initWithDevice:gaussianSigma:minLineLength:maxLines:detailRatio:gradientThreshold:lineErrorThreshold:mergeLocalityThreshold:](mpsimageedlines/init%28device_gaussiansigma_minlinelength_maxlines_detailratio_gradientthreshold_lineerrorthreshold_mergelocalitythreshold_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)
