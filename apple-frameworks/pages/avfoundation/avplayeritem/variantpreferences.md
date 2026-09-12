> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/variantpreferences](https://developer.apple.com/documentation/avfoundation/avplayeritem/variantpreferences)

# variantPreferences (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The preferences the player item uses when selecting variant playlists.

## Declaration

```swift
nonisolated var variantPreferences: AVVariantPreferences { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [AVVariantPreferenceNone](../avvariantpreferences/avvariantpreferencenone.md).

> **Note**

>  Changing variant preferences during playback might result in a variant switch.

## See Also

### Setting variant behavior

- [AVVariantPreferences](../avvariantpreferences.md): Defines the preferences the player item uses when selecting variant playlists.
- [startsOnFirstEligibleVariant](startsonfirsteligiblevariant.md): A Boolean value that indicates whether playback starts with the first eligible variant that appears in the stream’s main playlist.

# variantPreferences (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

The preferences the player item uses when selecting variant playlists.

## Declaration

```objectivec
@property AVVariantPreferences variantPreferences;
```

<a id="Discussion"></a>

## Discussion

The default value is [AVVariantPreferenceNone](../avvariantpreferences/avvariantpreferencenone.md).

> **Note**

>  Changing variant preferences during playback might result in a variant switch.

## See Also

### Setting variant behavior

- [AVVariantPreferences](../avvariantpreferences.md): Defines the preferences the player item uses when selecting variant playlists.
- [startsOnFirstEligibleVariant](startsonfirsteligiblevariant.md): A Boolean value that indicates whether playback starts with the first eligible variant that appears in the stream’s main playlist.
