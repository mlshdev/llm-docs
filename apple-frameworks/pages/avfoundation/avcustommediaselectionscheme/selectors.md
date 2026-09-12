> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcustommediaselectionscheme/selectors](https://developer.apple.com/documentation/avfoundation/avcustommediaselectionscheme/selectors)

# selectors (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides custom settings.

## Declaration

```swift
var selectors: [AVMediaPresentationSelector] { get }
```

## See Also

### Inspecting the scheme

- [availableLanguages](availablelanguages.md): Provides available language choices.
- [shouldOfferLanguageSelection](shouldofferlanguageselection.md): Indicates whether an alternative selection interface should provide a menu of language choices.
- [mediaPresentationSettings(for:complementaryToLanguage:settings:)](mediapresentationsettings%28for_complementarytolanguage_settings_%29.md): Provides an array of media presentation settings that can be effective at the same time as the specified language and settings for other selectors of the receiver.

# selectors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Provides custom settings.

## Declaration

```objectivec
@property (readonly) NSArray<AVMediaPresentationSelector *> * selectors;
```

## See Also

### Inspecting the scheme

- [availableLanguages](availablelanguages.md): Provides available language choices.
- [shouldOfferLanguageSelection](shouldofferlanguageselection.md): Indicates whether an alternative selection interface should provide a menu of language choices.
- [mediaPresentationSettingsForSelector:complementaryToLanguage:settings:](mediapresentationsettings%28for_complementarytolanguage_settings_%29.md): Provides an array of media presentation settings that can be effective at the same time as the specified language and settings for other selectors of the receiver.
