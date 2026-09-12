> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:filteredandsortedaccordingtopreferredlanguages:)](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:filteredandsortedaccordingtopreferredlanguages:))

# mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.

## Declaration

```swift
class func mediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption], filteredAndSortedAccordingToPreferredLanguages preferredLanguages: [String]) -> [AVMediaSelectionOption]
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered and sorted.
- `preferredLanguages`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains a canonicalized IETF BCP 47 language identifier. The strings should be sorted in order of preference, with the string corresponding to the most preferred language as the first element in the array. Typically, you retrieve these strings using the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of the [NSLocale](../../foundation/nslocale.md) class.

<a id="return-value"></a>

## Return Value

An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects that match one of the languages in the `preferredLanguages` parameter. The objects in this array are sorted based on the language each one matches, with objects matching the most preferred language first in the array.

## See Also

### Filtering selection options

- [playableMediaSelectionOptions(from:)](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptions(from:with:)](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptions(from:withMediaCharacteristics:)](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptions(from:withoutMediaCharacteristics:)](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

# mediaSelectionOptionsFromArray:filteredAndSortedAccordingToPreferredLanguages: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.

## Declaration

```objectivec
+ (NSArray<AVMediaSelectionOption *> *) mediaSelectionOptionsFromArray:(NSArray<AVMediaSelectionOption *> *) mediaSelectionOptions filteredAndSortedAccordingToPreferredLanguages:(NSArray<NSString *> *) preferredLanguages;
```

## Parameters

- `mediaSelectionOptions`: An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects to be filtered and sorted.
- `preferredLanguages`: An array of [NSString](../../foundation/nsstring.md) objects, each of which contains a canonicalized IETF BCP 47 language identifier. The strings should be sorted in order of preference, with the string corresponding to the most preferred language as the first element in the array. Typically, you retrieve these strings using the [preferredLanguages](../../foundation/nslocale/preferredlanguages.md) class method of the [NSLocale](../../foundation/nslocale.md) class.

<a id="return-value"></a>

## Return Value

An array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects that match one of the languages in the `preferredLanguages` parameter. The objects in this array are sorted based on the language each one matches, with objects matching the most preferred language first in the array.

## See Also

### Filtering selection options

- [playableMediaSelectionOptionsFromArray:](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptionsFromArray:withLocale:](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptionsFromArray:withMediaCharacteristics:](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptionsFromArray:withoutMediaCharacteristics:](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [customMediaSelectionScheme](custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
