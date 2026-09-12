> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/speeds](https://developer.apple.com/documentation/avkit/avplayerview/speeds)

# speeds (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A list of user-selectable playback speeds to show in the playback speed control.

## Declaration

```swift
var speeds: [AVPlaybackSpeed] { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property value equals [systemDefaultSpeeds](../avplaybackspeed/systemdefaultspeeds.md). Setting this property to an empty array hides the playback speed selection user interface.

To set the playback speed programmatically, call the [selectSpeed(\_:)](selectspeed%28__%29.md) method, or set the value of the [defaultRate](../../avfoundation/avplayer/defaultrate.md) property on the view controller’s associated [AVPlayer](../../avfoundation/avplayer.md) object.

## See Also

### Configuring the playback speed

- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [selectSpeed(\_:)](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

# speeds (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A list of user-selectable playback speeds to show in the playback speed control.

## Declaration

```objectivec
@property (copy) NSArray<AVPlaybackSpeed *> * speeds;
```

<a id="Discussion"></a>

## Discussion

By default, this property value equals [systemDefaultSpeeds](../avplaybackspeed/systemdefaultspeeds.md). Setting this property to an empty array hides the playback speed selection user interface.

To set the playback speed programmatically, call the [selectSpeed:](selectspeed%28__%29.md) method, or set the value of the [defaultRate](../../avfoundation/avplayer/defaultrate.md) property on the view controller’s associated [AVPlayer](../../avfoundation/avplayer.md) object.

## See Also

### Configuring the playback speed

- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [selectSpeed:](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.
