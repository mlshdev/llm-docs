> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/naturaltimescale](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/naturaltimescale)

# naturalTimeScale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time scale in which you can perform time-based operations without extra numerical conversion.

## Declaration

```swift
var naturalTimeScale: CMTimeScale { get set }
```

<a id="Discussion"></a>

## Discussion

If not set, the value is the natural time scale of the first non-empty edit, or 600 if there are no non-empty edits.

Set the value to `0` to revert to the default behavior.

## See Also

### Configuring track properties

- [isEnabled](isenabled.md): A Boolean value that indicates whether the tracks is in an enabled state.
- [languageCode](languagecode.md): The language associated with the track, as an ISO 639-2/T language code.
- [extendedLanguageTag](extendedlanguagetag.md): The language tag associated with the track, as an RFC 4646 language tag.
- [preferredTransform](preferredtransform.md): The preferred transformation of the visual media data for display purposes.
- [preferredVolume](preferredvolume.md): The volume the track prefers for its audible media data.

# naturalTimeScale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time scale in which you can perform time-based operations without extra numerical conversion.

## Declaration

```objectivec
@property (nonatomic) CMTimeScale naturalTimeScale;
```

<a id="Discussion"></a>

## Discussion

If not set, the value is the natural time scale of the first non-empty edit, or 600 if there are no non-empty edits.

Set the value to `0` to revert to the default behavior.

## See Also

### Configuring track properties

- [enabled](isenabled.md): A Boolean value that indicates whether the tracks is in an enabled state.
- [languageCode](languagecode.md): The language associated with the track, as an ISO 639-2/T language code.
- [extendedLanguageTag](extendedlanguagetag.md): The language tag associated with the track, as an RFC 4646 language tag.
- [preferredTransform](preferredtransform.md): The preferred transformation of the visual media data for display purposes.
- [preferredVolume](preferredvolume.md): The volume the track prefers for its audible media data.
