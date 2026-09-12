> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/selectedspeed](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/selectedspeed)

# selectedSpeed (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The currently selected playback speed.

## Declaration

```swift
var selectedSpeed: AVPlaybackSpeed? { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the associated player’s [defaultRate](../../avfoundation/avplayer/defaultrate.md) property value. If you set the [defaultRate](../../avfoundation/avplayer/defaultrate.md) to a value that doesn’t match a speed contained in the [speeds](speeds.md) property, the system sets this value to `nil`.

## See Also

### Configuring playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectSpeed(\_:)](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

# selectedSpeed (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The currently selected playback speed.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVPlaybackSpeed * selectedSpeed;
```

<a id="Discussion"></a>

## Discussion

This value reflects the associated player’s [defaultRate](../../avfoundation/avplayer/defaultrate.md) property value. If you set the [defaultRate](../../avfoundation/avplayer/defaultrate.md) to a value that doesn’t match a speed contained in the [speeds](speeds.md) property, the system sets this value to `nil`.

## See Also

### Configuring playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectSpeed:](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.
