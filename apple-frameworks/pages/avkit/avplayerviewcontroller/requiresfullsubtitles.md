> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/requiresfullsubtitles](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/requiresfullsubtitles)

# requiresFullSubtitles (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A Boolean value that indicates whether someone can disable the display of subtitles.

## Declaration

```swift
var requiresFullSubtitles: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property value is `true`, the subtitle menu doesn’t present the Off or Auto options, because subtitles are always displayed, if available.

The default value is `false`.

## See Also

### Managing subtitles

- [allowedSubtitleOptionLanguages](allowedsubtitleoptionlanguages.md): An array of language codes that restrict the set of subtitle languages available.
- [mediaCharacteristicsForSupportedCustomMediaSelectionSchemes](mediacharacteristicsforsupportedcustommediaselectionschemes.md)

# requiresFullSubtitles (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A Boolean value that indicates whether someone can disable the display of subtitles.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresFullSubtitles;
```

<a id="Discussion"></a>

## Discussion

When this property value is `true`, the subtitle menu doesn’t present the Off or Auto options, because subtitles are always displayed, if available.

The default value is `false`.

## See Also

### Managing subtitles

- [allowedSubtitleOptionLanguages](allowedsubtitleoptionlanguages.md): An array of language codes that restrict the set of subtitle languages available.
- [mediaCharacteristicsForSupportedCustomMediaSelectionSchemes](mediacharacteristicsforsupportedcustommediaselectionschemes.md)
