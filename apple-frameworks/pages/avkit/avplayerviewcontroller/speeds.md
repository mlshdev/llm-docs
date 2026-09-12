> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/speeds](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/speeds)

# speeds (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A list of user-selectable playback speeds to show in the playback speed control.

## Declaration

```swift
var speeds: [AVPlaybackSpeed] { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property value equals [systemDefaultSpeeds](../avplaybackspeed/systemdefaultspeeds.md). Setting this property to an empty array hides the playback speed selection user interface.

To set the playback speed programmatically, call the [selectSpeed(\_:)](selectspeed%28__%29.md) method, or set the value of the [defaultRate](../../avfoundation/avplayer/defaultrate.md) property on the view controller’s associated player object.

## See Also

### Configuring playback speed

- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [selectSpeed(\_:)](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

# speeds (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A list of user-selectable playback speeds to show in the playback speed control.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVPlaybackSpeed *> * speeds;
```

<a id="Discussion"></a>

## Discussion

By default, this property value equals [systemDefaultSpeeds](../avplaybackspeed/systemdefaultspeeds.md). Setting this property to an empty array hides the playback speed selection user interface.

To set the playback speed programmatically, call the [selectSpeed:](selectspeed%28__%29.md) method, or set the value of the [defaultRate](../../avfoundation/avplayer/defaultrate.md) property on the view controller’s associated player object.

## See Also

### Configuring playback speed

- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [selectSpeed:](selectspeed%28__%29.md): Selects a specified playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.
