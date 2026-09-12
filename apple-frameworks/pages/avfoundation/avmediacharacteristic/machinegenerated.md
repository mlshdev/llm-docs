> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/machinegenerated](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/machinegenerated)

# machineGenerated (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A media characteristic that indicates that a track was generated in an automated fashion by a machine.

## Declaration

```swift
static let machineGenerated: AVMediaCharacteristic
```

<a id="discussion"></a>

## Discussion

This media characteristic can be used to distinguish machine generated content from human authored content. The value of this characteristic is @“public.machine-generated”.

Note for content authors: for QuickTime movie and .m4v files and for HTTP Live Streaming, a media option is considered to have the characteristic AVMediaCharacteristicIsOriginalContent only if it’s explicitly tagged with the characteristic. See the discussion of the tagging of tracks with media characteristics below.

Also see -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\].

## See Also

### Content

- [isOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [isMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [isAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.

# AVMediaCharacteristicMachineGenerated (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A media characteristic that indicates that a track was generated in an automated fashion by a machine.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicMachineGenerated;
```

<a id="discussion"></a>

## Discussion

This media characteristic can be used to distinguish machine generated content from human authored content. The value of this characteristic is @“public.machine-generated”.

Note for content authors: for QuickTime movie and .m4v files and for HTTP Live Streaming, a media option is considered to have the characteristic AVMediaCharacteristicIsOriginalContent only if it’s explicitly tagged with the characteristic. See the discussion of the tagging of tracks with media characteristics below.

Also see -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\].

## See Also

### Content

- [AVMediaCharacteristicIsOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [AVMediaCharacteristicIsMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [AVMediaCharacteristicIsAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
