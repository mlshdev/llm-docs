> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/allowedsubtitleoptionlanguages](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/allowedsubtitleoptionlanguages)

# allowedSubtitleOptionLanguages (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

An array of language codes that restrict the set of subtitle languages available.

## Declaration

```swift
var allowedSubtitleOptionLanguages: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property value is `nil` (the default), the player view controller UI presents all available subtitle options. The Auto subtitle option is only available when this property value is `nil` and [requiresFullSubtitles](requiresfullsubtitles.md) is `false`.

To allow only a restricted subset of subtitles, set this property value to an array of BCP 47 language codes. Restricting the set of subtitle languages makes the Auto option unavailable.

## See Also

### Managing subtitles

- [requiresFullSubtitles](requiresfullsubtitles.md): A Boolean value that indicates whether someone can disable the display of subtitles.
- [mediaCharacteristicsForSupportedCustomMediaSelectionSchemes](mediacharacteristicsforsupportedcustommediaselectionschemes.md)

# allowedSubtitleOptionLanguages (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

An array of language codes that restrict the set of subtitle languages available.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * allowedSubtitleOptionLanguages;
```

<a id="Discussion"></a>

## Discussion

When this property value is `nil` (the default), the player view controller UI presents all available subtitle options. The Auto subtitle option is only available when this property value is `nil` and [requiresFullSubtitles](requiresfullsubtitles.md) is `false`.

To allow only a restricted subset of subtitles, set this property value to an array of BCP 47 language codes. Restricting the set of subtitle languages makes the Auto option unavailable.

## See Also

### Managing subtitles

- [requiresFullSubtitles](requiresfullsubtitles.md): A Boolean value that indicates whether someone can disable the display of subtitles.
- [mediaCharacteristicsForSupportedCustomMediaSelectionSchemes](mediacharacteristicsforsupportedcustommediaselectionschemes.md)
