> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayermediaselectioncriteria](https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria)

# AVPlayerMediaSelectionCriteria (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that specifies the preferred languages and media characteristics for a player.

## Declaration

```swift
class AVPlayerMediaSelectionCriteria
```

<a id="overview"></a>

## Overview

An instance of this object represents the languages and media characteristics of assets that contain media selection options that a player attempts to select automatically when preparing and playing items. It lists the languages and media characteristics in their preferred order.

## Topics

### Creating media selection criteria

- [init(preferredLanguages:preferredMediaCharacteristics:)](avplayermediaselectioncriteria/init%28preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the preferred languages and media characteristics.
- [init(principalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics:)](avplayermediaselectioncriteria/init%28principalmediacharacteristics_preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.

### Retrieving selection criteria settings

- [preferredLanguages](avplayermediaselectioncriteria/preferredlanguages.md): An array of language identifiers in preferred order.
- [preferredMediaCharacteristics](avplayermediaselectioncriteria/preferredmediacharacteristics.md): An array of media characteristics in preferred order.
- [principalMediaCharacteristics](avplayermediaselectioncriteria/principalmediacharacteristics.md): An array of media characteristics that are essential to select when choosing media with a particular characteristic.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media selection

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md): Extend your app’s appeal to users by adding subtitles and alternative audio tracks in their native language.
- [AVMediaSelection](avmediaselection.md): An object that represents a complete rendition of media selection options on an asset.
- [AVMediaSelectionGroup](avmediaselectiongroup.md): An object that represents a collection of mutually exclusive options for the presentation of media within an asset.
- [AVMediaSelectionOption](avmediaselectionoption.md): An object that represents a specific option for the presentation of media within a group of options.
- [AVMutableMediaSelection](avmutablemediaselection.md): A mutable object that represents a complete rendition of media selection options on an asset.
- [AVCustomMediaSelectionScheme](avcustommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
- [AVMediaPresentationSelector](avmediapresentationselector.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSelector represents a collection of mutually exclusive settings.
- [AVMediaPresentationSetting](avmediapresentationsetting.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSetting represents a selectable setting for controlling the presentation of the media.

# AVPlayerMediaSelectionCriteria (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object that specifies the preferred languages and media characteristics for a player.

## Declaration

```objectivec
@interface AVPlayerMediaSelectionCriteria : NSObject
```

<a id="overview"></a>

## Overview

An instance of this object represents the languages and media characteristics of assets that contain media selection options that a player attempts to select automatically when preparing and playing items. It lists the languages and media characteristics in their preferred order.

## Topics

### Creating media selection criteria

- [initWithPreferredLanguages:preferredMediaCharacteristics:](avplayermediaselectioncriteria/init%28preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the preferred languages and media characteristics.
- [initWithPrincipalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics:](avplayermediaselectioncriteria/init%28principalmediacharacteristics_preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.

### Retrieving selection criteria settings

- [preferredLanguages](avplayermediaselectioncriteria/preferredlanguages.md): An array of language identifiers in preferred order.
- [preferredMediaCharacteristics](avplayermediaselectioncriteria/preferredmediacharacteristics.md): An array of media characteristics in preferred order.
- [principalMediaCharacteristics](avplayermediaselectioncriteria/principalmediacharacteristics.md): An array of media characteristics that are essential to select when choosing media with a particular characteristic.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media selection

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md): Extend your app’s appeal to users by adding subtitles and alternative audio tracks in their native language.
- [AVMediaSelection](avmediaselection.md): An object that represents a complete rendition of media selection options on an asset.
- [AVMediaSelectionGroup](avmediaselectiongroup.md): An object that represents a collection of mutually exclusive options for the presentation of media within an asset.
- [AVMediaSelectionOption](avmediaselectionoption.md): An object that represents a specific option for the presentation of media within a group of options.
- [AVMutableMediaSelection](avmutablemediaselection.md): A mutable object that represents a complete rendition of media selection options on an asset.
- [AVCustomMediaSelectionScheme](avcustommediaselectionscheme.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.
- [AVMediaPresentationSelector](avmediapresentationselector.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSelector represents a collection of mutually exclusive settings.
- [AVMediaPresentationSetting](avmediapresentationsetting.md): For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVMediaPresentationSetting represents a selectable setting for controlling the presentation of the media.
