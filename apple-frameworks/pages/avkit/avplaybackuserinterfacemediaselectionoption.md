> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectionoption](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectionoption)

# AVPlaybackUserInterfaceMediaSelectionOption (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a media selection option for audio tracks or subtitle tracks.

## Declaration

```swift
class AVPlaybackUserInterfaceMediaSelectionOption
```

<a id="overview"></a>

## Overview

This class represents individual media options (such as audio tracks or subtitle tracks) that can be selected by the user in media playback interfaces. Each option provides display information and metadata for user selection.

## Topics

### Initializers

- [init(coder:)](avplaybackuserinterfacemediaselectionoption/init%28coder_%29.md)
- [init(displayName:identifier:language:mediaCharacteristics:)](avplaybackuserinterfacemediaselectionoption/init%28displayname_identifier_language_mediacharacteristics_%29.md): Creates a new media selection option.

### Instance Properties

- [displayName](avplaybackuserinterfacemediaselectionoption/displayname.md): Human-readable name for this media option displayed in user interfaces (e.g., “English”, “Spanish (Latin America)”, “Director’s Commentary”).
- [identifier](avplaybackuserinterfacemediaselectionoption/identifier.md): Unique system identifier for this media option, used for programmatic selection and persistence across sessions.
- [language](avplaybackuserinterfacemediaselectionoption/language.md): The language of this media selection option.
- [mediaCharacteristics](avplaybackuserinterfacemediaselectionoption/mediacharacteristics.md): The media characteristics describing accessibility features and content properties of this option. Common values include `AVMediaCharacteristicContainsOnlyForcedSubtitles`, `AVMediaCharacteristicTranscribesSpokenDialogForAccessibility`, and `AVMediaCharacteristicDescribesMusicAndSoundForAccessibility`. May be empty if no characteristics apply.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-8ee5z.md): Provides audio and subtitle selection capabilities for media content.

# AVPlaybackUserInterfaceMediaSelectionOption (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a media selection option for audio tracks or subtitle tracks.

## Declaration

```objectivec
@interface AVPlaybackUserInterfaceMediaSelectionOption : NSObject
```

<a id="overview"></a>

## Overview

This class represents individual media options (such as audio tracks or subtitle tracks) that can be selected by the user in media playback interfaces. Each option provides display information and metadata for user selection.

## Topics

### Instance Properties

- [displayName](avplaybackuserinterfacemediaselectionoption/displayname.md): Human-readable name for this media option displayed in user interfaces (e.g., “English”, “Spanish (Latin America)”, “Director’s Commentary”).
- [extendedLanguageTag](avplaybackuserinterfacemediaselectionoption/extendedlanguagetag.md): IETF BCP 47 language identifier (e.g., “en-US”, “es-419”, “zh-Hans-CN”) indicating the primary language and locale of this option. This standardized tag provides detailed language information including region, script, and variants. May be empty for language-neutral content such as music-only audio tracks, sound effects, or visual-only subtitles without spoken content.
- [identifier](avplaybackuserinterfacemediaselectionoption/identifier.md): Unique system identifier for this media option, used for programmatic selection and persistence across sessions.
- [mediaCharacteristics](avplaybackuserinterfacemediaselectionoption/mediacharacteristics.md): The media characteristics describing accessibility features and content properties of this option. Common values include `AVMediaCharacteristicContainsOnlyForcedSubtitles`, `AVMediaCharacteristicTranscribesSpokenDialogForAccessibility`, and `AVMediaCharacteristicDescribesMusicAndSoundForAccessibility`. May be empty if no characteristics apply.

### Instance Methods

- [initWithDisplayName:identifier:extendedLanguageTag:mediaCharacteristics:](avplaybackuserinterfacemediaselectionoption/initwithdisplayname_identifier_extendedlanguagetag_mediacharacteristics_.md): Initializes a new media selection option with the specified attributes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionControllable](avplaybackuserinterfacemediaselectioncontrollable-2fftn.md): Provides audio and subtitle selection capabilities for media content.
