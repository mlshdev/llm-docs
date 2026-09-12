> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic)

# AVMediaCharacteristic (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines media data characteristics.

## Declaration

```swift
struct AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

QuickTime Movie and MPEG-4 video files may contain tracks that provide tagged media characteristics to indicate a purpose, trait, or feature of the track’s media. For example, an audio track that mixes original program content with additional narrative descriptions of visual action may have the media characteristic `public.accessibility.describes-video` to distinguish it from other audio tracks stored in the same file that don’t contain additional narrative.

You inspect the tagged media characteristics of a track as shown below:

```objc
NSArray *userDataItems = [myAVAssetTrack metadataForFormat:AVMetadataFormatQuickTimeUserData];
NSArray *trackTaggedMediaCharacteristics = [AVMetadataItem metadataItemsFromArray: userDataItems
        withKey: AVMetadataQuickTimeUserDataKeyTaggedCharacteristic
        keySpace: AVMetadataKeySpaceQuickTimeUserData];
for (AVMetadataItem *metadataItem in trackTaggedMediaCharacteristics) {
     NSString *thisTrackMediaCharacteristic = [metadataItem stringValue];
}
```

You write tagged media characteristics to files of type [mov](avfiletype/mov.md) and [m4v](avfiletype/m4v.md) by using an instance of [AVAssetWriter](avassetwriter.md). You indicate tagged characteristics for a track by setting metadata on its associated asset writer input as shown below:

```objc
AVMutableMetadataItem *myTaggedMediaCharacteristic = [[AVMutableMetadataItem alloc] init];
[myTaggedMediaCharacteristic setKey:AVMetadataQuickTimeUserDataKeyTaggedCharacteristic];
[myTaggedMediaCharacteristic setKeySpace:AVMetadataKeySpaceQuickTimeUserData];
[myTaggedMediaCharacteristic setValue:aMeaningfulCharacteristicAsNSString];
[myMutableArrayOfMetadata addObject:myTaggedMediaCharacteristic];
[myAssetWriterInput setMetadata:myMutableArrayOfMetadata];
```

## Topics

### Visual

- [visual](avmediacharacteristic/visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](avmediacharacteristic/containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [containsHDRVideo](avmediacharacteristic/containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](avmediacharacteristic/framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](avmediacharacteristic/useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [containsStereoMultiviewVideo](avmediacharacteristic/containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](avmediacharacteristic/carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](avmediacharacteristic/indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [indicatesNonRectilinearProjection](avmediacharacteristic/indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

### Audible

- [audible](avmediacharacteristic/audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [dubbedTranslation](avmediacharacteristic/dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [voiceOverTranslation](avmediacharacteristic/voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [enhancesSpeechIntelligibility](avmediacharacteristic/enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [describesMusicAndSoundForAccessibility](avmediacharacteristic/describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.
- [tactileMinimal](avmediacharacteristic/tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.

### Legible

- [legible](avmediacharacteristic/legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [easyToRead](avmediacharacteristic/easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [describesVideoForAccessibility](avmediacharacteristic/describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [containsOnlyForcedSubtitles](avmediacharacteristic/containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [languageTranslation](avmediacharacteristic/languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [transcribesSpokenDialogForAccessibility](avmediacharacteristic/transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

### Content

- [isOriginalContent](avmediacharacteristic/isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [isMainProgramContent](avmediacharacteristic/ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [isAuxiliaryContent](avmediacharacteristic/isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [machineGenerated](avmediacharacteristic/machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.

### Initializers

- [init(\_:)](avmediacharacteristic/init%28__%29.md): Creates a media characteristic.
- [init(rawValue:)](avmediacharacteristic/init%28rawvalue_%29.md): Creates a media characteristic with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media types

- [AVMediaType](avmediatype.md): An identifier for various media types.

# AVMediaCharacteristic (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines media data characteristics.

## Declaration

```objectivec
typedef NSString * AVMediaCharacteristic;
```

<a id="Discussion"></a>

## Discussion

QuickTime Movie and MPEG-4 video files may contain tracks that provide tagged media characteristics to indicate a purpose, trait, or feature of the track’s media. For example, an audio track that mixes original program content with additional narrative descriptions of visual action may have the media characteristic `public.accessibility.describes-video` to distinguish it from other audio tracks stored in the same file that don’t contain additional narrative.

You inspect the tagged media characteristics of a track as shown below:

```objc
NSArray *userDataItems = [myAVAssetTrack metadataForFormat:AVMetadataFormatQuickTimeUserData];
NSArray *trackTaggedMediaCharacteristics = [AVMetadataItem metadataItemsFromArray: userDataItems
        withKey: AVMetadataQuickTimeUserDataKeyTaggedCharacteristic
        keySpace: AVMetadataKeySpaceQuickTimeUserData];
for (AVMetadataItem *metadataItem in trackTaggedMediaCharacteristics) {
     NSString *thisTrackMediaCharacteristic = [metadataItem stringValue];
}
```

You write tagged media characteristics to files of type [AVFileTypeQuickTimeMovie](avfiletype/mov.md) and [AVFileTypeAppleM4V](avfiletype/m4v.md) by using an instance of [AVAssetWriter](avassetwriter.md). You indicate tagged characteristics for a track by setting metadata on its associated asset writer input as shown below:

```objc
AVMutableMetadataItem *myTaggedMediaCharacteristic = [[AVMutableMetadataItem alloc] init];
[myTaggedMediaCharacteristic setKey:AVMetadataQuickTimeUserDataKeyTaggedCharacteristic];
[myTaggedMediaCharacteristic setKeySpace:AVMetadataKeySpaceQuickTimeUserData];
[myTaggedMediaCharacteristic setValue:aMeaningfulCharacteristicAsNSString];
[myMutableArrayOfMetadata addObject:myTaggedMediaCharacteristic];
[myAssetWriterInput setMetadata:myMutableArrayOfMetadata];
```

## Topics

### Visual

- [AVMediaCharacteristicVisual](avmediacharacteristic/visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](avmediacharacteristic/containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicContainsHDRVideo](avmediacharacteristic/containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](avmediacharacteristic/framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](avmediacharacteristic/useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](avmediacharacteristic/containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](avmediacharacteristic/carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](avmediacharacteristic/indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](avmediacharacteristic/indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

### Audible

- [AVMediaCharacteristicAudible](avmediacharacteristic/audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [AVMediaCharacteristicDubbedTranslation](avmediacharacteristic/dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [AVMediaCharacteristicVoiceOverTranslation](avmediacharacteristic/voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [AVMediaCharacteristicEnhancesSpeechIntelligibility](avmediacharacteristic/enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [AVMediaCharacteristicDescribesMusicAndSoundForAccessibility](avmediacharacteristic/describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.
- [AVMediaCharacteristicTactileMinimal](avmediacharacteristic/tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.

### Legible

- [AVMediaCharacteristicLegible](avmediacharacteristic/legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [AVMediaCharacteristicEasyToRead](avmediacharacteristic/easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [AVMediaCharacteristicDescribesVideoForAccessibility](avmediacharacteristic/describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [AVMediaCharacteristicContainsOnlyForcedSubtitles](avmediacharacteristic/containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [AVMediaCharacteristicLanguageTranslation](avmediacharacteristic/languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [AVMediaCharacteristicTranscribesSpokenDialogForAccessibility](avmediacharacteristic/transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

### Content

- [AVMediaCharacteristicIsOriginalContent](avmediacharacteristic/isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [AVMediaCharacteristicIsMainProgramContent](avmediacharacteristic/ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [AVMediaCharacteristicIsAuxiliaryContent](avmediacharacteristic/isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [AVMediaCharacteristicMachineGenerated](avmediacharacteristic/machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.

## See Also

### Media types

- [AVMediaType](avmediatype.md): An identifier for various media types.
