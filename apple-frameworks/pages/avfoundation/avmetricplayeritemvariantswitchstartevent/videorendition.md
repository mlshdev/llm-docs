> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmetricplayeritemvariantswitchstartevent/videorendition

# videoRendition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
var videoRendition: AVMetricMediaRendition { get }
```

<a id="discussion"></a>

## Discussion

Contains information corresponding to the currently selected video rendition.

## See Also

### Inspecting the event

- [fromVariant](fromvariant.md)
- [loadedTimeRanges](loadedtimeranges-2mbm7.md)
- [toVariant](tovariant.md)
- [audioRendition](audiorendition.md)
- [subtitleRendition](subtitlerendition.md)

# videoRendition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@property (readonly) AVMetricMediaRendition * videoRendition;
```

<a id="discussion"></a>

## Discussion

Contains information corresponding to the currently selected video rendition.

## See Also

### Inspecting the event

- [fromVariant](fromvariant.md)
- [toVariant](tovariant.md)
- [loadedTimeRanges](loadedtimeranges-3svh3.md)
- [audioRendition](audiorendition.md)
- [subtitleRendition](subtitlerendition.md)
