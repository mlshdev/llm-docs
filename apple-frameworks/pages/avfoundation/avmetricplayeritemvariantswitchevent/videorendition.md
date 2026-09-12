> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemvariantswitchevent/videorendition](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemvariantswitchevent/videorendition)

# videoRendition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents the currently selected video rendition’s identifiers.

## Declaration

```swift
var videoRendition: AVMetricMediaRendition { get }
```

<a id="discussion"></a>

## Discussion

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## See Also

### Inspecting the event

- [didSucceed](didsucceed.md)
- [fromVariant](fromvariant.md)
- [loadedTimeRanges](loadedtimeranges-5lkmg.md)
- [toVariant](tovariant.md)
- [audioRendition](audiorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.

# videoRendition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents the currently selected video rendition’s identifiers.

## Declaration

```objectivec
@property (readonly) AVMetricMediaRendition * videoRendition;
```

<a id="discussion"></a>

## Discussion

Subclasses of this type that are used from Swift must fulfill the requirements of a Sendable type.

## See Also

### Inspecting the event

- [didSucceed](didsucceed.md)
- [fromVariant](fromvariant.md)
- [toVariant](tovariant.md)
- [loadedTimeRanges](loadedtimeranges-4rhjw.md)
- [audioRendition](audiorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.
