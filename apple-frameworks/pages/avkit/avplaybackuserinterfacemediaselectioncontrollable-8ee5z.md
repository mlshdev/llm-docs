> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacemediaselectioncontrollable-8ee5z)

# AVPlaybackUserInterfaceMediaSelectionControllable

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides audio and subtitle selection capabilities for media content.

## Declaration

```swift
@MainActor protocol AVPlaybackUserInterfaceMediaSelectionControllable : AnyObject, Observable
```

## Topics

### Instance Properties

- [audioDescriptionOptions](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiodescriptionoptions.md): Array of available audio description track options.
- [audioOptions](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/audiooptions.md): Array of available audio track options.
- [currentAudioDescriptionOption](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/currentaudiodescriptionoption.md): The currently selected audio description track.
- [currentAudioOption](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/currentaudiooption.md): The currently selected audio track.
- [currentLegibleOption](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/currentlegibleoption.md): The currently selected subtitle or caption track.
- [legibleOptions](avplaybackuserinterfacemediaselectioncontrollable-8ee5z/legibleoptions.md): Array of available subtitle and caption track options.

## Relationships

### Inherits From

- [Observable](https://developer.apple.com/documentation/observation/observable)

### Inherited By

- [AVPlaybackUserInterfaceControllable](avplaybackuserinterfacecontrollable-92fri.md)

## See Also

### Media selection

- [AVPlaybackUserInterfaceMediaSelectionOption](avplaybackuserinterfacemediaselectionoption.md): Represents a media selection option for audio tracks or subtitle tracks.
