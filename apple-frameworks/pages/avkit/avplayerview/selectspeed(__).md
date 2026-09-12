> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/selectspeed(_:)](https://developer.apple.com/documentation/avkit/avplayerview/selectspeed(_:))

# selectSpeed(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Selects a specified playback speed.

## Declaration

```swift
func selectSpeed(_ speed: AVPlaybackSpeed)
```

## Parameters

- `speed`: The playback speed to select.

<a id="Discussion"></a>

## Discussion

If you call this method with a speed that isn’t contained in the [speeds](speeds.md) property, the system ignores the call.

## See Also

### Configuring the playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.

# selectSpeed: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Selects a specified playback speed.

## Declaration

```objectivec
- (void) selectSpeed:(AVPlaybackSpeed *) speed;
```

## Parameters

- `speed`: The playback speed to select.

<a id="Discussion"></a>

## Discussion

If you call this method with a speed that isn’t contained in the [speeds](speeds.md) property, the system ignores the call.

## See Also

### Configuring the playback speed

- [speeds](speeds.md): A list of user-selectable playback speeds to show in the playback speed control.
- [selectedSpeed](selectedspeed.md): The currently selected playback speed.
- [AVPlaybackSpeed](../avplaybackspeed.md): An object that represents a user-selectable playback speed in a playback user interface.
