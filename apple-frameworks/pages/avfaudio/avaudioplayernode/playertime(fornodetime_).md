> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/playertime(fornodetime:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/playertime(fornodetime:))

# playerTime(forNodeTime:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts from node time to player time.

## Declaration

```swift
func playerTime(forNodeTime nodeTime: AVAudioTime) -> AVAudioTime?
```

## Parameters

- `nodeTime`: The node time.

<a id="return-value"></a>

## Return Value

A time relative to the player’s start time, or `nil` if the player isn’t playing.

<a id="Discussion"></a>

## Discussion

For more information about this method and its inverse [nodeTime(forPlayerTime:)](nodetime%28forplayertime_%29.md), see [Player Timeline](../avaudioplayernode.md#Player-Timeline).

## See Also

### Converting Node and Player Times

- [nodeTime(forPlayerTime:)](nodetime%28forplayertime_%29.md): Converts from player time to node time.

# playerTimeForNodeTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts from node time to player time.

## Declaration

```objectivec
- (AVAudioTime *) playerTimeForNodeTime:(AVAudioTime *) nodeTime;
```

## Parameters

- `nodeTime`: The node time.

<a id="return-value"></a>

## Return Value

A time relative to the player’s start time, or `nil` if the player isn’t playing.

<a id="Discussion"></a>

## Discussion

For more information about this method and its inverse [nodeTimeForPlayerTime:](nodetime%28forplayertime_%29.md), see [Player Timeline](../avaudioplayernode.md#Player-Timeline).

## See Also

### Converting Node and Player Times

- [nodeTimeForPlayerTime:](nodetime%28forplayertime_%29.md): Converts from player time to node time.
