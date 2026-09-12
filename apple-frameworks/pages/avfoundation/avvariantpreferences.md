> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvariantpreferences](https://developer.apple.com/documentation/avfoundation/avvariantpreferences)

# AVVariantPreferences (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Defines the preferences the player item uses when selecting variant playlists.

## Declaration

```swift
struct AVVariantPreferences
```

## Topics

### Preference settings

- [scalabilityToLosslessAudio](avvariantpreferences/scalabilitytolosslessaudio.md): A preference that indicates the player item supports variant playlists that contain losslessly encoded audio when sufficient bandwidth is available.

### Initializers

- [init(rawValue:)](avvariantpreferences/init%28rawvalue_%29.md): Creates a variant preferences structure with an integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting variant behavior

- [variantPreferences](avplayeritem/variantpreferences.md): The preferences the player item uses when selecting variant playlists.
- [startsOnFirstEligibleVariant](avplayeritem/startsonfirsteligiblevariant.md): A Boolean value that indicates whether playback starts with the first eligible variant that appears in the stream’s main playlist.

# AVVariantPreferences (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Defines the preferences the player item uses when selecting variant playlists.

## Declaration

```objectivec
enum AVVariantPreferences : NSUInteger;
```

## Topics

### Preference settings

- [AVVariantPreferenceNone](avvariantpreferences/avvariantpreferencenone.md): Indicates that the player item uses the default behavior for determining variant playlist selection.
- [AVVariantPreferenceScalabilityToLosslessAudio](avvariantpreferences/scalabilitytolosslessaudio.md): A preference that indicates the player item supports variant playlists that contain losslessly encoded audio when sufficient bandwidth is available.

## See Also

### Setting variant behavior

- [variantPreferences](avplayeritem/variantpreferences.md): The preferences the player item uses when selecting variant playlists.
- [startsOnFirstEligibleVariant](avplayeritem/startsonfirsteligiblevariant.md): A Boolean value that indicates whether playback starts with the first eligible variant that appears in the stream’s main playlist.
