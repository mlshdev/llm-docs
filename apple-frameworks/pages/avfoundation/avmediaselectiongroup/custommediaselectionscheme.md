> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/custommediaselectionscheme](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/custommediaselectionscheme)

# customMediaSelectionScheme (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

## Declaration

```swift
var customMediaSelectionScheme: AVCustomMediaSelectionScheme? { get }
```

## See Also

### Filtering selection options

- [playableMediaSelectionOptions(from:)](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptions(from:with:)](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptions(from:withMediaCharacteristics:)](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptions(from:withoutMediaCharacteristics:)](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:)](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.

# customMediaSelectionScheme (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCustomMediaSelectionScheme * customMediaSelectionScheme;
```

## See Also

### Filtering selection options

- [playableMediaSelectionOptionsFromArray:](playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptionsFromArray:withLocale:](mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptionsFromArray:withMediaCharacteristics:](mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptionsFromArray:withoutMediaCharacteristics:](mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptionsFromArray:filteredAndSortedAccordingToPreferredLanguages:](mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
