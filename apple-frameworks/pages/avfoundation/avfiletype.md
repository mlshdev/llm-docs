> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfiletype](https://developer.apple.com/documentation/avfoundation/avfiletype)

# AVFileType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The uniform type identifiers for various file formats.

## Declaration

```swift
struct AVFileType
```

## Mentioned In

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)

## Topics

### File types

- [AHAP](avfiletype/ahap.md): The UTI for the Apple Haptics Audio Pattern file format.
- [SCC](avfiletype/scc.md): The UTI for the Scenarist closed-caption file format.
- [ac3](avfiletype/ac3.md): The UTI for the AC3 audio file format.
- [aifc](avfiletype/aifc.md): The UTI for the AIFC audio file format.
- [aiff](avfiletype/aiff.md): The UTI for the AIFF audio file format.
- [amr](avfiletype/amr.md): The UTI for the adaptive multirate audio file format.
- [appleiTT](avfiletype/appleitt.md): The UTI for the Apple iTT caption file format.
- [au](avfiletype/au.md): The UTI for the Sun/NeXT audio file format.
- [avci](avfiletype/avci.md): The UTI for the high-efficiency image file format that contains H.264 compressed images.
- [caf](avfiletype/caf.md): The UTI for the Core Audio Format.
- [dcm](avfiletype/dcm.md): A UTI for the Digital Imaging and Communications in Medicine (DICOM) file format.
- [dng](avfiletype/dng.md): The UTI for the Adobe Digital Negative file format.
- [eac3](avfiletype/eac3.md): The UTI for the enhanced AC3 audio file format.
- [heic](avfiletype/heic.md): The UTI for the high-efficiency image file format that contains HEVC compressed images.
- [heif](avfiletype/heif.md): The UTI for the high-efficiency image file format that contains compressed images from any codec.
- [jpg](avfiletype/jpg.md): The UTI for the JPEG (JFIF) format.
- [m4a](avfiletype/m4a.md): The UTI for the Apple m4a audio file format.
- [m4v](avfiletype/m4v.md): The UTI for the iTunes video file format.
- [mobile3GPP2](avfiletype/mobile3gpp2.md): The UTI for the 3GPP2 file format.
- [mobile3GPP](avfiletype/mobile3gpp.md): The UTI for the 3GPP file format.
- [mov](avfiletype/mov.md): The UTI for the QuickTime movie file format.
- [mp3](avfiletype/mp3.md): The UTI for the MPEG Audio Layer III file format.
- [mp4](avfiletype/mp4.md): The UTI for the MPEG-4 file format.
- [qta](avfiletype/qta.md): A UTI for the QuickTime audio file format
- [tif](avfiletype/tif.md): The UTI for the tagged image file format.
- [wav](avfiletype/wav.md): The UTI for the WAVE audio file format.

### Initializers

- [init(\_:)](avfiletype/init%28__%29.md): Creates a file type with a string.
- [init(rawValue:)](avfiletype/init%28rawvalue_%29.md): Creates a file type from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### File types

- [AVFileTypeProfile](avfiletypeprofile.md): File type profiles for streaming formats.

# AVFileType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The uniform type identifiers for various file formats.

## Declaration

```objectivec
typedef NSString * AVFileType;
```

## Mentioned In

- [Exporting video to alternative formats](exporting-video-to-alternative-formats.md)

## Topics

### File types

- [AVFileTypeAHAP](avfiletype/ahap.md): The UTI for the Apple Haptics Audio Pattern file format.
- [AVFileTypeSCC](avfiletype/scc.md): The UTI for the Scenarist closed-caption file format.
- [AVFileTypeAC3](avfiletype/ac3.md): The UTI for the AC3 audio file format.
- [AVFileTypeAIFC](avfiletype/aifc.md): The UTI for the AIFC audio file format.
- [AVFileTypeAIFF](avfiletype/aiff.md): The UTI for the AIFF audio file format.
- [AVFileTypeAMR](avfiletype/amr.md): The UTI for the adaptive multirate audio file format.
- [AVFileTypeAppleiTT](avfiletype/appleitt.md): The UTI for the Apple iTT caption file format.
- [AVFileTypeSunAU](avfiletype/au.md): The UTI for the Sun/NeXT audio file format.
- [AVFileTypeAVCI](avfiletype/avci.md): The UTI for the high-efficiency image file format that contains H.264 compressed images.
- [AVFileTypeCoreAudioFormat](avfiletype/caf.md): The UTI for the Core Audio Format.
- [AVFileTypeDICOM](avfiletype/dcm.md): A UTI for the Digital Imaging and Communications in Medicine (DICOM) file format.
- [AVFileTypeDNG](avfiletype/dng.md): The UTI for the Adobe Digital Negative file format.
- [AVFileTypeEnhancedAC3](avfiletype/eac3.md): The UTI for the enhanced AC3 audio file format.
- [AVFileTypeHEIC](avfiletype/heic.md): The UTI for the high-efficiency image file format that contains HEVC compressed images.
- [AVFileTypeHEIF](avfiletype/heif.md): The UTI for the high-efficiency image file format that contains compressed images from any codec.
- [AVFileTypeJPEG](avfiletype/jpg.md): The UTI for the JPEG (JFIF) format.
- [AVFileTypeAppleM4A](avfiletype/m4a.md): The UTI for the Apple m4a audio file format.
- [AVFileTypeAppleM4V](avfiletype/m4v.md): The UTI for the iTunes video file format.
- [AVFileType3GPP2](avfiletype/mobile3gpp2.md): The UTI for the 3GPP2 file format.
- [AVFileType3GPP](avfiletype/mobile3gpp.md): The UTI for the 3GPP file format.
- [AVFileTypeQuickTimeMovie](avfiletype/mov.md): The UTI for the QuickTime movie file format.
- [AVFileTypeMPEGLayer3](avfiletype/mp3.md): The UTI for the MPEG Audio Layer III file format.
- [AVFileTypeMPEG4](avfiletype/mp4.md): The UTI for the MPEG-4 file format.
- [AVFileTypeQuickTimeAudio](avfiletype/qta.md): A UTI for the QuickTime audio file format
- [AVFileTypeTIFF](avfiletype/tif.md): The UTI for the tagged image file format.
- [AVFileTypeWAVE](avfiletype/wav.md): The UTI for the WAVE audio file format.

## See Also

### File types

- [AVFileTypeProfile](avfiletypeprofile.md): File type profiles for streaming formats.
