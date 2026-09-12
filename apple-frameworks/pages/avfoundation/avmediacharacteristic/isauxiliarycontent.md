> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/isauxiliarycontent](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/isauxiliarycontent)

# isAuxiliaryContent (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.

## Declaration

```swift
static let isAuxiliaryContent: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

An example of auxiliary content is audio commentary about the presentation.

The value of this characteristic is `public.auxiliary-content`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way, or if it belongs to an alternate track group that excludes its associated track from autoselection.

## See Also

### Content

- [isOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [isMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [machineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.

# AVMediaCharacteristicIsAuxiliaryContent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option includes content its author indicates is auxiliary to the asset’s presentation.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicIsAuxiliaryContent;
```

<a id="Discussion"></a>

## Discussion

An example of auxiliary content is audio commentary about the presentation.

The value of this characteristic is `public.auxiliary-content`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way, or if it belongs to an alternate track group that excludes its associated track from autoselection.

## See Also

### Content

- [AVMediaCharacteristicIsOriginalContent](isoriginalcontent.md): A media characteristic that indicates that a track or media selection option contains original content.
- [AVMediaCharacteristicIsMainProgramContent](ismainprogramcontent.md): A media characteristic that indicates a track or media selection option includes content its author indicates is essential to the asset’s presentation.
- [AVMediaCharacteristicMachineGenerated](machinegenerated.md): A media characteristic that indicates that a track was generated in an automated fashion by a machine.
