> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensitivecontentanalysis/scsensitivityanalysis/shouldinterruptvideo

# shouldInterruptVideo (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Intervention guidance that suggests the app interrupt the video stream.

## Declaration

```swift
var shouldInterruptVideo: Bool { get }
```

## See Also

### Receiving intervention guidance

- [shouldIndicateSensitivity](shouldindicatesensitivity.md): Intervention guidance that suggests the app indicate the presence of sensitive content.
- [shouldMuteAudio](shouldmuteaudio.md): Intervention guidance that suggests the app mute the audio of the current video stream.

# shouldInterruptVideo (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Intervention guidance that suggests the app interrupt the video stream.

## Declaration

```objectivec
@property (readonly) BOOL shouldInterruptVideo;
```

## See Also

### Receiving intervention guidance

- [shouldIndicateSensitivity](shouldindicatesensitivity.md): Intervention guidance that suggests the app indicate the presence of sensitive content.
- [shouldMuteAudio](shouldmuteaudio.md): Intervention guidance that suggests the app mute the audio of the current video stream.
