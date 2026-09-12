> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/playablemediaselectionoptions(from:)](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/playablemediaselectionoptions(from:))

# playableMediaSelectionOptions(from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the media selection options from a given array that are playable.

## Declaration

```swift
class func playableMediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption]) -> [AVMediaSelectionOption]
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered by playability.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from `array` that are playable.

## See Also

### Filtering selection options

- [mediaSelectionOptions(from:with:)](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptions(from:withMediaCharacteristics:)](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptions(from:withoutMediaCharacteristics:)](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:)](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

# playableMediaSelectionOptionsFromArray: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array containing the media selection options from a given array that are playable.

## Declaration

```objectivec
+ (NSArray<AVMediaSelectionOption *> *) playableMediaSelectionOptionsFromArray:(NSArray<AVMediaSelectionOption *> *) mediaSelectionOptions;
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered by playability.

<a id="return-value"></a>

## Return Value

An array containing the media selection options from `array` that are playable.

## See Also

### Filtering selection options

- [mediaSelectionOptionsFromArray:withLocale:](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptionsFromArray:withMediaCharacteristics:](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptionsFromArray:withoutMediaCharacteristics:](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptionsFromArray:filteredAndSortedAccordingToPreferredLanguages:](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
