> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcustommediaselectionscheme/availablelanguages](https://developer.apple.com/documentation/avfoundation/avcustommediaselectionscheme/availablelanguages)

# availableLanguages (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides available language choices.

## Declaration

```swift
var availableLanguages: [String] { get }
```

<a id="discussion"></a>

## Discussion

Each string in the array is intended to be interpreted as a BCP 47 language tag.

## See Also

### Inspecting the scheme

- [selectors](selectors.md): Provides custom settings.
- [shouldOfferLanguageSelection](shouldofferlanguageselection.md): Indicates whether an alternative selection interface should provide a menu of language choices.
- [mediaPresentationSettings(for:complementaryToLanguage:settings:)](mediapresentationsettings%28for_complementarytolanguage_settings_%29.md): Provides an array of media presentation settings that can be effective at the same time as the specified language and settings for other selectors of the receiver.

# availableLanguages (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides available language choices.

## Declaration

```objectivec
@property (readonly) NSArray<NSString *> * availableLanguages;
```

<a id="discussion"></a>

## Discussion

Each string in the array is intended to be interpreted as a BCP 47 language tag.

## See Also

### Inspecting the scheme

- [selectors](selectors.md): Provides custom settings.
- [shouldOfferLanguageSelection](shouldofferlanguageselection.md): Indicates whether an alternative selection interface should provide a menu of language choices.
- [mediaPresentationSettingsForSelector:complementaryToLanguage:settings:](mediapresentationsettings%28for_complementarytolanguage_settings_%29.md): Provides an array of media presentation settings that can be effective at the same time as the specified language and settings for other selectors of the receiver.
