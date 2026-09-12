> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maaudiblemediacopypreferredcharacteristics()](https://developer.apple.com/documentation/mediaaccessibility/maaudiblemediacopypreferredcharacteristics())

# MAAudibleMediaCopyPreferredCharacteristics() (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for audible media characteristics.

## Declaration

```swift
func MAAudibleMediaCopyPreferredCharacteristics() -> Unmanaged<CFArray>
```

## See Also

### Audible media selection settings

- [kMAAudibleMediaSettingsChangedNotification](kmaaudiblemediasettingschangednotification.md): A notification that occurs when any user-defined audible media settings change.
- [MAMediaCharacteristicDescribesVideoForAccessibility](mamediacharacteristicdescribesvideoforaccessibility.md): A media characteristic that indicates that a track or media selection option includes audible content that describes a video for accessibility.
- [MAMediaCharacteristicDescribesMusicAndSoundForAccessibility](mamediacharacteristicdescribesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that describes music and sound other than spoken dialog.
- [MAMediaCharacteristicTranscribesSpokenDialogForAccessibility](mamediacharacteristictranscribesspokendialogforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that transcribes spoken dialog and identifies the speakers.

# MAAudibleMediaCopyPreferredCharacteristics (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 17.0+ · visionOS 1.0+

Returns the preference for audible media characteristics.

## Declaration

```objectivec
extern CFArrayRefMAAudibleMediaCopyPreferredCharacteristics();
```

## See Also

### Audible media selection settings

- [kMAAudibleMediaSettingsChangedNotification](kmaaudiblemediasettingschangednotification.md): A notification that occurs when any user-defined audible media settings change.
- [MAMediaCharacteristicDescribesVideoForAccessibility](mamediacharacteristicdescribesvideoforaccessibility.md): A media characteristic that indicates that a track or media selection option includes audible content that describes a video for accessibility.
- [MAMediaCharacteristicDescribesMusicAndSoundForAccessibility](mamediacharacteristicdescribesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that describes music and sound other than spoken dialog.
- [MAMediaCharacteristicTranscribesSpokenDialogForAccessibility](mamediacharacteristictranscribesspokendialogforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that transcribes spoken dialog and identifies the speakers.
