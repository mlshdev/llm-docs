> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/ececolorspace](https://developer.apple.com/documentation/professional_video_applications/ececolorspace)

# eCEColorSpace (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** ProVideo Encoder Extensions 1.0+

The list of color spaces an encoder extension can support.

## Declaration

```swift
struct eCEColorSpace
```

## Topics

### Constants

- [eCEColorSpace601NTSC](ececolorspace601ntsc.md)
- [eCEColorSpace601PAL](ececolorspace601pal.md)
- [eCEColorSpace709](ececolorspace709.md)
- [eCEColorSpaceDeviceRGB](ececolorspacedevicergb.md)
- [eCEColorSpaceUnknown](ececolorspaceunknown.md)
- [eCEColorSpecDCIP3](ececolorspecdcip3.md)
- [eCEColorSpecITUR2020](ececolorspecitur2020.md)
- [eCEColorSpecP3D65](ececolorspecp3d65.md)
- [eCEColorSpecP3D65HLG](ececolorspecp3d65hlg.md)
- [eCEColorSpecP3D65PQ](ececolorspecp3d65pq.md)
- [eCEColorSpecP3DCIPQ](ececolorspecp3dcipq.md)
- [eCEColorSpecRGBHDRLinear](ececolorspecrgbhdrlinear.md)
- [eCEColorSpecRGBSDRLinear](ececolorspecrgbsdrlinear.md)
- [eCEColorSpecSRGB](ececolorspecsrgb.md)
- [eCEColorSpectITUR2020HLG](ececolorspectitur2020hlg.md)
- [eCEColorSpectITUR2020PQ](ececolorspectitur2020pq.md)

### Initializers

- [init(\_:)](https://developer.apple.com/documentation/professional_video_applications/ececolorspace/init%28_:%29)
- [init(rawValue:)](https://developer.apple.com/documentation/professional_video_applications/ececolorspace/init%28rawvalue:%29)

### Instance Properties

- [rawValue](https://developer.apple.com/documentation/professional_video_applications/ececolorspace/rawvalue)

### Default Implementations

- [Equatable Implementations](https://developer.apple.com/documentation/professional_video_applications/ececolorspace/equatable-implementations)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Supporting Color Spaces

- [supportedColorSpaces()](compressorextensioncolorspaces/supportedcolorspaces%28%29.md): Returns the supported color spaces in an extension.

# eCEColorSpace (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

The list of color spaces an encoder extension can support.

## Declaration

```objectivec
typedef enum eCEColorSpace;
```

## Topics

### Constants

- [eCEColorSpace601NTSC](ececolorspace601ntsc.md)
- [eCEColorSpace601PAL](ececolorspace601pal.md)
- [eCEColorSpace709](ececolorspace709.md)
- [eCEColorSpaceDeviceRGB](ececolorspacedevicergb.md)
- [eCEColorSpaceUnknown](ececolorspaceunknown.md)
- [eCEColorSpecDCIP3](ececolorspecdcip3.md)
- [eCEColorSpecITUR2020](ececolorspecitur2020.md)
- [eCEColorSpecP3D65](ececolorspecp3d65.md)
- [eCEColorSpecP3D65HLG](ececolorspecp3d65hlg.md)
- [eCEColorSpecP3D65PQ](ececolorspecp3d65pq.md)
- [eCEColorSpecP3DCIPQ](ececolorspecp3dcipq.md)
- [eCEColorSpecRGBHDRLinear](ececolorspecrgbhdrlinear.md)
- [eCEColorSpecRGBSDRLinear](ececolorspecrgbsdrlinear.md)
- [eCEColorSpecSRGB](ececolorspecsrgb.md)
- [eCEColorSpectITUR2020HLG](ececolorspectitur2020hlg.md)
- [eCEColorSpectITUR2020PQ](ececolorspectitur2020pq.md)

## See Also

### Supporting Color Spaces

- [supportedColorSpaces](compressorextensioncolorspaces/supportedcolorspaces%28%29.md): Returns the supported color spaces in an extension.
