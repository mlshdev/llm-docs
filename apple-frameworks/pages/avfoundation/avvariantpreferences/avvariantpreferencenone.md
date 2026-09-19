> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avvariantpreferences/avvariantpreferencenone

# AVVariantPreferenceNone

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Indicates that the player item uses the default behavior for determining variant playlist selection.

## Declaration

```objectivec
AVVariantPreferenceNone
```

<a id="Discussion"></a>

## Discussion

By default, a player item bases variant selection on the available bandwidth, compatibility of the indicated codec or codecs, dimensions of the visual output, and number of available audio output channels.

## See Also

### Preference settings

- [AVVariantPreferenceScalabilityToLosslessAudio](scalabilitytolosslessaudio.md): A preference that indicates the player item supports variant playlists that contain losslessly encoded audio when sufficient bandwidth is available.
