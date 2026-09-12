> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/url](https://developer.apple.com/documentation/avfaudio/avaudioplayer/url)

# url (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The URL of the audio file.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property is [nil](../../objectivec/nil-227m0.md) if you don’t create the player with a URL.

## See Also

### Inspecting the audio data

- [data](data.md): The audio data associated with the player.
- [format](format.md): The format of the player’s audio data.
- [settings](settings.md): A dictionary that provides information about the player’s audio data.

# url (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The URL of the audio file.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

This property is [nil](../../objectivec/nil-227m0.md) if you don’t create the player with a URL.

## See Also

### Inspecting the audio data

- [data](data.md): The audio data associated with the player.
- [format](format.md): The format of the player’s audio data.
- [settings](settings.md): A dictionary that provides information about the player’s audio data.
