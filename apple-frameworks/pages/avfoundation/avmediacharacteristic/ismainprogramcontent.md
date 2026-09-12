> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/ismainprogramcontent](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/ismainprogramcontent)

# isMainProgramContent (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.

## Declaration

```swift
static let isMainProgramContent: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

Example: an option that presents the main program audio for the presentation, regardless of locale, would typically have this characteristic.

The value of this characteristic is `public.main-program-content`.

The system infers the presence of this characteristic for a media option; it considers any option that doesn’t have the characteristic [isAuxiliaryContent](isauxiliarycontent.md) to be main content.

## See Also

### Content

- [isOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [isAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [machineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.

# AVMediaCharacteristicIsMainProgramContent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicIsMainProgramContent;
```

<a id="Discussion"></a>

## Discussion

Example: an option that presents the main program audio for the presentation, regardless of locale, would typically have this characteristic.

The value of this characteristic is `public.main-program-content`.

The system infers the presence of this characteristic for a media option; it considers any option that doesn’t have the characteristic [AVMediaCharacteristicIsAuxiliaryContent](isauxiliarycontent.md) to be main content.

## See Also

### Content

- [AVMediaCharacteristicIsOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [AVMediaCharacteristicIsAuxiliaryContent](isauxiliarycontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.
- [AVMediaCharacteristicMachineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.
