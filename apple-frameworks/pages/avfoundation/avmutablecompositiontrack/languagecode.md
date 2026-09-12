> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecompositiontrack/languagecode](https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/languagecode)

# languageCode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The language associated with the track, as an ISO 639-2/T language code.

## Declaration

```swift
var languageCode: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring track properties

- [isEnabled](isenabled.md): A Boolean value that indicates whether the tracks is in an enabled state.
- [naturalTimeScale](naturaltimescale.md): The time scale in which you can perform time-based operations without extra numerical conversion.
- [extendedLanguageTag](extendedlanguagetag.md): The language tag associated with the track, as an RFC 4646 language tag.
- [preferredTransform](preferredtransform.md): The preferred transformation of the visual media data for display purposes.
- [preferredVolume](preferredvolume.md): The volume the track prefers for its audible media data.

# languageCode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The language associated with the track, as an ISO 639-2/T language code.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * languageCode;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring track properties

- [enabled](isenabled.md): A Boolean value that indicates whether the tracks is in an enabled state.
- [naturalTimeScale](naturaltimescale.md): The time scale in which you can perform time-based operations without extra numerical conversion.
- [extendedLanguageTag](extendedlanguagetag.md): The language tag associated with the track, as an RFC 4646 language tag.
- [preferredTransform](preferredtransform.md): The preferred transformation of the visual media data for display purposes.
- [preferredVolume](preferredvolume.md): The volume the track prefers for its audible media data.
