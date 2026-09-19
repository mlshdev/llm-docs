> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption/mediacharacteristics

# mediaCharacteristics (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The media characteristics describing accessibility features and content properties of this option. Common values include `AVMediaCharacteristicContainsOnlyForcedSubtitles`, `AVMediaCharacteristicTranscribesSpokenDialogForAccessibility`, and `AVMediaCharacteristicDescribesMusicAndSoundForAccessibility`. May be empty if no characteristics apply.

## Declaration

```swift
var mediaCharacteristics: [AVMediaCharacteristic] { get }
```

# mediaCharacteristics (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The media characteristics describing accessibility features and content properties of this option. Common values include `AVMediaCharacteristicContainsOnlyForcedSubtitles`, `AVMediaCharacteristicTranscribesSpokenDialogForAccessibility`, and `AVMediaCharacteristicDescribesMusicAndSoundForAccessibility`. May be empty if no characteristics apply.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * mediaCharacteristics;
```
