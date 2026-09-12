> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct/sourceandrulesonly](https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/textstylingresolution-swift.struct/sourceandrulesonly)

# sourceAndRulesOnly (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The level of resolution excludes styling provided by the user-level Media Accessibility settings.

## Declaration

```swift
static let sourceAndRulesOnly: AVPlayerItemLegibleOutput.TextStylingResolution
```

<a id="Discussion"></a>

## Discussion

You typically use this option to override the styling specified in source media. When overriding the styling, you are strongly encouraged to allow your custom styling in turn to be overridden by user preferences for text styling that are available as Media Accessibility settings. See `Media Accessibility Function` for more information.

## See Also

### Text styling options

- [default](default.md): The text styling information is the same level of information that AVFoundation uses within a player layer.

# AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The level of resolution excludes styling provided by the user-level Media Accessibility settings.

## Declaration

```objectivec
extern AVPlayerItemLegibleOutputTextStylingResolution const AVPlayerItemLegibleOutputTextStylingResolutionSourceAndRulesOnly;
```

<a id="Discussion"></a>

## Discussion

You typically use this option to override the styling specified in source media. When overriding the styling, you are strongly encouraged to allow your custom styling in turn to be overridden by user preferences for text styling that are available as Media Accessibility settings. See `Media Accessibility Function` for more information.

## See Also

### Text styling options

- [AVPlayerItemLegibleOutputTextStylingResolutionDefault](default.md): The text styling information is the same level of information that AVFoundation uses within a player layer.
