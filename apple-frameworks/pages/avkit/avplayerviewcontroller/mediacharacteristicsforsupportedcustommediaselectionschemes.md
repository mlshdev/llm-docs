> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/mediacharacteristicsforsupportedcustommediaselectionschemes](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/mediacharacteristicsforsupportedcustommediaselectionschemes)

# mediaCharacteristicsForSupportedCustomMediaSelectionSchemes (Swift)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

## Declaration

```swift
class var mediaCharacteristicsForSupportedCustomMediaSelectionSchemes: [AVMediaCharacteristic] { get }
```

<a id="discussion"></a>

## Discussion

Returns available AVKit supported media group types.

## See Also

### Managing subtitles

- [allowedSubtitleOptionLanguages](allowedsubtitleoptionlanguages.md): An array of language codes that restrict the set of subtitle languages available.
- [requiresFullSubtitles](requiresfullsubtitles.md): A Boolean value that indicates whether someone can disable the display of subtitles.

# mediaCharacteristicsForSupportedCustomMediaSelectionSchemes (Objective-C)

**Framework:** AVKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

## Declaration

```objectivec
@property (class, readonly) NSArray<NSString *> * mediaCharacteristicsForSupportedCustomMediaSelectionSchemes;
```

<a id="discussion"></a>

## Discussion

Returns available AVKit supported media group types.

## See Also

### Managing subtitles

- [allowedSubtitleOptionLanguages](allowedsubtitleoptionlanguages.md): An array of language codes that restrict the set of subtitle languages available.
- [requiresFullSubtitles](requiresfullsubtitles.md): A Boolean value that indicates whether someone can disable the display of subtitles.
