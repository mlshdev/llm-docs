> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerview/selectedspeed

# selectedSpeed (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The currently selected playback speed.

## Declaration

```swift
var selectedSpeed: AVPlaybackSpeed? { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the associated player’s [defaultRate](../../avfoundation/avplayer/defaultrate.md) property value. If you set the [defaultRate](../../avfoundation/avplayer/defaultrate.md) to a value that doesn’t match a speed contained in the [speeds](speeds.md) property, the system sets this value to `nil`.

## See Also

### Configuring the playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectSpeed(\_:)](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

# selectedSpeed (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The currently selected playback speed.

## Declaration

```objectivec
@property (readonly, nullable) AVPlaybackSpeed * selectedSpeed;
```

<a id="Discussion"></a>

## Discussion

This value reflects the associated player’s [defaultRate](../../avfoundation/avplayer/defaultrate.md) property value. If you set the [defaultRate](../../avfoundation/avplayer/defaultrate.md) to a value that doesn’t match a speed contained in the [speeds](speeds.md) property, the system sets this value to `nil`.

## See Also

### Configuring the playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectSpeed:](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.
