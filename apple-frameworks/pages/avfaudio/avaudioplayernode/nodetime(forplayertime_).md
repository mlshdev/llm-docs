> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernode/nodetime(forplayertime:)](https://developer.apple.com/documentation/avfaudio/avaudioplayernode/nodetime(forplayertime:))

# nodeTime(forPlayerTime:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts from player time to node time.

## Declaration

```swift
func nodeTime(forPlayerTime playerTime: AVAudioTime) -> AVAudioTime?
```

## Parameters

- `playerTime`: A time relative to the player’s start time.

<a id="return-value"></a>

## Return Value

A node time, or `nil` if the player isn’t playing.

<a id="Discussion"></a>

## Discussion

For more information about this method and its inverse [playerTime(forNodeTime:)](playertime%28fornodetime_%29.md), see [Player Timeline](../avaudioplayernode.md#Player-Timeline).

## See Also

### Converting Node and Player Times

- [playerTime(forNodeTime:)](playertime%28fornodetime_%29.md): Converts from node time to player time.

# nodeTimeForPlayerTime: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts from player time to node time.

## Declaration

```objectivec
- (AVAudioTime *) nodeTimeForPlayerTime:(AVAudioTime *) playerTime;
```

## Parameters

- `playerTime`: A time relative to the player’s start time.

<a id="return-value"></a>

## Return Value

A node time, or `nil` if the player isn’t playing.

<a id="Discussion"></a>

## Discussion

For more information about this method and its inverse [playerTimeForNodeTime:](playertime%28fornodetime_%29.md), see [Player Timeline](../avaudioplayernode.md#Player-Timeline).

## See Also

### Converting Node and Player Times

- [playerTimeForNodeTime:](playertime%28fornodetime_%29.md): Converts from node time to player time.
