> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetricplayeritemvariantswitchevent/audiorendition](https://developer.apple.com/documentation/avfoundation/avmetricplayeritemvariantswitchevent/audiorendition)

# audioRendition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents the currently selected video rendition’s identifiers.

## Declaration

```swift
var audioRendition: AVMetricMediaRendition { get }
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
- [videoRendition](videorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.

# audioRendition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents the currently selected video rendition’s identifiers.

## Declaration

```objectivec
@property (readonly) AVMetricMediaRendition * audioRendition;
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
- [videoRendition](videorendition.md): Represents the currently selected video rendition’s identifiers.
- [subtitleRendition](subtitlerendition.md): Represents the currently selected audio rendition’s identifiers.
