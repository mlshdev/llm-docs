> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct/default](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct/default)

# default (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The text styling information is the same level of information that AVFoundation uses within a player layer.

## Declaration

```swift
static let `default`: AVPlayerItemLegibleOutput.TextStylingResolution
```

<a id="Discussion"></a>

## Discussion

Specify this level of text styling resolution to receive attributed strings from an `AVPlayerItemLegibleOutput` that include the same level of styling information that AVFoundation would use itself to render text within an [AVPlayerLayer](../../avplayerlayer.md). The text styling will accommodate user-level Media Accessibility settings.

## See Also

### Text styling options

- [sourceAndRulesOnly](sourceandrulesonly.md): The level of resolution excludes styling provided by the user-level Media Accessibility settings.

# AVPlayerItemLegibleOutputTextStylingResolutionDefault (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The text styling information is the same level of information that AVFoundation uses within a player layer.

## Declaration

```objectivec
extern AVPlayerItemLegibleOutputTextStylingResolution const AVPlayerItemLegibleOutputTextStylingResolutionDefault;
```

<a id="Discussion"></a>

## Discussion

Specify this level of text styling resolution to receive attributed strings from an `AVPlayerItemLegibleOutput` that include the same level of styling information that AVFoundation would use itself to render text within an [AVPlayerLayer](../../avplayerlayer.md). The text styling will accommodate user-level Media Accessibility settings.

## See Also

### Text styling options

- [AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly](sourceandrulesonly.md): The level of resolution excludes styling provided by the user-level Media Accessibility settings.
