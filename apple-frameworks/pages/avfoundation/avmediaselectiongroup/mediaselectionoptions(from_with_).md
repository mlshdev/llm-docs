> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:with:)](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:with:))

# mediaSelectionOptions(from:with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the media selection options from a given array that match the specified locale.

## Declaration

```swift
class func mediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption], with locale: Locale) -> [AVMediaSelectionOption]
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered.
- `locale`: The locale that must be matched for a media selection option to be copied to the output array.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from `array` that match the `locale`.

## See Also

### Filtering selection options

- [playableMediaSelectionOptions(from:)](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptions(from:withMediaCharacteristics:)](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptions(from:withoutMediaCharacteristics:)](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:)](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

# mediaSelectionOptionsFromArray:withLocale: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the media selection options from a given array that match the specified locale.

## Declaration

```objectivec
+ (NSArray<AVMediaSelectionOption *> *) mediaSelectionOptionsFromArray:(NSArray<AVMediaSelectionOption *> *) mediaSelectionOptions withLocale:(NSLocale *) locale;
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered.
- `locale`: The locale that must be matched for a media selection option to be copied to the output array.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from `array` that match the `locale`.

## See Also

### Filtering selection options

- [playableMediaSelectionOptionsFromArray:](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptionsFromArray:withMediaCharacteristics:](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptionsFromArray:withoutMediaCharacteristics:](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptionsFromArray:filteredAndSortedAccordingToPreferredLanguages:](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
