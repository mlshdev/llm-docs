> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfcolorconversion](https://developer.apple.com/documentation/metalperformanceshaders/mpsfcolorconversion)

# MPSFColorConversion (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class MPSFColorConversion
```

## Topics

### Initializers

- [init(device:conversion:functionName:sourceRange:options:)](mpsfcolorconversion/init%28device_conversion_functionname_sourcerange_options_%29.md)
- [init(device:start:end:functionName:sourceRange:options:)](mpsfcolorconversion/init%28device_start_end_functionname_sourcerange_options_%29.md)
- [init(device:startColorSpace:endColorSpace:functionName:sourceRange:options:)](mpsfcolorconversion/init%28device_startcolorspace_endcolorspace_functionname_sourcerange_options_%29.md)

### Instance Properties

- [inputColorChannels](mpsfcolorconversion/inputcolorchannels.md)
- [options](mpsfcolorconversion/options.md)
- [outputColorChannels](mpsfcolorconversion/outputcolorchannels.md)

### Instance Methods

- [descriptorFor1DTexture1()](mpsfcolorconversion/descriptorfor1dtexture1%28%29.md)
- [descriptorFor3DTexture1()](mpsfcolorconversion/descriptorfor3dtexture1%28%29.md)
- [descriptorFor3DTexture2()](mpsfcolorconversion/descriptorfor3dtexture2%28%29.md)
- [effectiveRange(\_:)](mpsfcolorconversion/effectiverange%28__%29.md)
- [initialize1DTexture1(\_:)](mpsfcolorconversion/initialize1dtexture1%28__%29.md)
- [initialize3DTexture1(\_:)](mpsfcolorconversion/initialize3dtexture1%28__%29.md)
- [initialize3DTexture2(\_:)](mpsfcolorconversion/initialize3dtexture2%28__%29.md)

## Relationships

### Inherits From

- [MPSFunction](mpsfunction.md)

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

# MPSFColorConversion (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface MPSFColorConversion : MPSFunction
```

## Topics

### Instance Properties

- [inputColorChannels](mpsfcolorconversion/inputcolorchannels.md)
- [options](mpsfcolorconversion/options.md)
- [outputColorChannels](mpsfcolorconversion/outputcolorchannels.md)

### Instance Methods

- [descriptorFor1DTexture1](mpsfcolorconversion/descriptorfor1dtexture1%28%29.md)
- [descriptorFor3DTexture1](mpsfcolorconversion/descriptorfor3dtexture1%28%29.md)
- [descriptorFor3DTexture2](mpsfcolorconversion/descriptorfor3dtexture2%28%29.md)
- [effectiveRange:](mpsfcolorconversion/effectiverange%28__%29.md)
- [initWithDevice:conversion:functionName:sourceRange:options:error:](mpsfcolorconversion/init%28device_conversion_functionname_sourcerange_options_%29.md)
- [initWithDevice:startColorSpace:endColorSpace:functionName:sourceRange:options:error:](mpsfcolorconversion/init%28device_start_end_functionname_sourcerange_options_%29.md)
- [initialize1DTexture1:](mpsfcolorconversion/initialize1dtexture1%28__%29.md)
- [initialize3DTexture1:](mpsfcolorconversion/initialize3dtexture1%28__%29.md)
- [initialize3DTexture2:](mpsfcolorconversion/initialize3dtexture2%28__%29.md)

## Relationships

### Inherits From

- [MPSFunction](mpsfunction.md)
