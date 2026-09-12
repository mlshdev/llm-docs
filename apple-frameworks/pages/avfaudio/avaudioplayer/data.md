> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/data](https://developer.apple.com/documentation/avfaudio/avaudioplayer/data)

# data (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio data associated with the player.

## Declaration

```swift
var data: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property is [nil](../../objectivec/nil-227m0.md) if you don’t create the player with a data buffer.

## See Also

### Inspecting the audio data

- [url](url.md): The URL of the audio file.
- [format](format.md): The format of the player’s audio data.
- [settings](settings.md): A dictionary that provides information about the player’s audio data.

# data (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The audio data associated with the player.

## Declaration

```objectivec
@property (readonly, nullable) NSData * data;
```

<a id="Discussion"></a>

## Discussion

This property is [nil](../../objectivec/nil-227m0.md) if you don’t create the player with a data buffer.

## See Also

### Inspecting the audio data

- [url](url.md): The URL of the audio file.
- [format](format.md): The format of the player’s audio data.
- [settings](settings.md): A dictionary that provides information about the player’s audio data.
