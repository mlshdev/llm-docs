> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup)

# AVMediaSelectionGroup (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that represents a collection of mutually exclusive options for the presentation of media within an asset.

## Declaration

```swift
class AVMediaSelectionGroup
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

## Topics

### Accessing media selection options

- [options](avmediaselectiongroup/options.md): A collection of mutually exclusive media selection options
- [mediaSelectionOption(withPropertyList:)](avmediaselectiongroup/mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.
- [defaultOption](avmediaselectiongroup/defaultoption.md): The default option in the group.

### Configuring empty selection behavior

- [allowsEmptySelection](avmediaselectiongroup/allowsemptyselection.md): A Boolean value that indicates whether it’s possible to present none of the options in the group when an associated player item is played.

### Filtering selection options

- [playableMediaSelectionOptions(from:)](avmediaselectiongroup/playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptions(from:with:)](avmediaselectiongroup/mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptions(from:withMediaCharacteristics:)](avmediaselectiongroup/mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptions(from:withoutMediaCharacteristics:)](avmediaselectiongroup/mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:)](avmediaselectiongroup/mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](avmediaselectiongroup/custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

### Creating a Now Playing language option group

- [makeNowPlayingInfoLanguageOptionGroup()](avmediaselectiongroup/makenowplayinginfolanguageoptiongroup%28%29.md): Creates a language option group from the media selection group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetWriterInputGroup](avassetwriterinputgroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media selection

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md): Extend your app’s appeal to users by adding subtitles and alternative audio tracks in their native language.
- [AVMediaSelection](avmediaselection.md): An object that represents a complete rendition of media selection options on an asset.
- [AVMediaSelectionOption](avmediaselectionoption.md): An object that represents a specific option for the presentation of media within a group of options.
- [AVMutableMediaSelection](avmutablemediaselection.md): A mutable object that represents a complete rendition of media selection options on an asset.
- [AVPlayerMediaSelectionCriteria](avplayermediaselectioncriteria.md): An object that specifies the preferred languages and media characteristics for a player.
- [AVCustomMediaSelectionScheme](avcustommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
- [AVMediaPresentationSelector](avmediapresentationselector.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSelector represents a collection of mutually exclusive settings.
- [AVMediaPresentationSetting](avmediapresentationsetting.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSetting represents a selectable setting for controlling the presentation of the media.

# AVMediaSelectionGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that represents a collection of mutually exclusive options for the presentation of media within an asset.

## Declaration

```objectivec
@interface AVMediaSelectionGroup : NSObject
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

## Topics

### Accessing media selection options

- [options](avmediaselectiongroup/options.md): A collection of mutually exclusive media selection options
- [mediaSelectionOptionWithPropertyList:](avmediaselectiongroup/mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.
- [defaultOption](avmediaselectiongroup/defaultoption.md): The default option in the group.

### Configuring empty selection behavior

- [allowsEmptySelection](avmediaselectiongroup/allowsemptyselection.md): A Boolean value that indicates whether it’s possible to present none of the options in the group when an associated player item is played.

### Filtering selection options

- [playableMediaSelectionOptionsFromArray:](avmediaselectiongroup/playablemediaselectionoptions%28from_%29.md): Returns an array containing the media selection options from a given array that are playable.
- [mediaSelectionOptionsFromArray:withLocale:](avmediaselectiongroup/mediaselectionoptions%28from_with_%29.md): Returns an array containing the media selection options from a given array that match the specified locale.
- [mediaSelectionOptionsFromArray:withMediaCharacteristics:](avmediaselectiongroup/mediaselectionoptions%28from_withmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that match given media characteristics.
- [mediaSelectionOptionsFromArray:withoutMediaCharacteristics:](avmediaselectiongroup/mediaselectionoptions%28from_withoutmediacharacteristics_%29.md): Returns an array containing the media selection options from a given array that do not match given media characteristics.
- [mediaSelectionOptionsFromArray:filteredAndSortedAccordingToPreferredLanguages:](avmediaselectiongroup/mediaselectionoptions%28from_filteredandsortedaccordingtopreferredlanguages_%29.md): Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.
- [customMediaSelectionScheme](avmediaselectiongroup/custommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.

### Creating a Now Playing language option group

- [makeNowPlayingInfoLanguageOptionGroup](avmediaselectiongroup/makenowplayinginfolanguageoptiongroup%28%29.md): Creates a language option group from the media selection group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAssetWriterInputGroup](avassetwriterinputgroup.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Media selection

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md): Extend your app’s appeal to users by adding subtitles and alternative audio tracks in their native language.
- [AVMediaSelection](avmediaselection.md): An object that represents a complete rendition of media selection options on an asset.
- [AVMediaSelectionOption](avmediaselectionoption.md): An object that represents a specific option for the presentation of media within a group of options.
- [AVMutableMediaSelection](avmutablemediaselection.md): A mutable object that represents a complete rendition of media selection options on an asset.
- [AVPlayerMediaSelectionCriteria](avplayermediaselectioncriteria.md): An object that specifies the preferred languages and media characteristics for a player.
- [AVCustomMediaSelectionScheme](avcustommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
- [AVMediaPresentationSelector](avmediapresentationselector.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSelector represents a collection of mutually exclusive settings.
- [AVMediaPresentationSetting](avmediapresentationsetting.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSetting represents a selectable setting for controlling the presentation of the media.
