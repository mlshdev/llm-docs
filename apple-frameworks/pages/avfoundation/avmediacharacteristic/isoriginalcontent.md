> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/isoriginalcontent](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/isoriginalcontent)

# isOriginalContent (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A media characteristic that indicates that a track or media selection option contains original content.

## Declaration

```swift
static let isOriginalContent: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

This characteristic differentiates original content from supplementary or derivative content, such as a language translation.

## See Also

### Content

- [isMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [isAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [machineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.

# AVMediaCharacteristicIsOriginalContent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A media characteristic that indicates that a track or media selection option contains original content.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicIsOriginalContent;
```

<a id="Discussion"></a>

## Discussion

This characteristic differentiates original content from supplementary or derivative content, such as a language translation.

## See Also

### Content

- [AVMediaCharacteristicIsMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [AVMediaCharacteristicIsAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [AVMediaCharacteristicMachineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.
