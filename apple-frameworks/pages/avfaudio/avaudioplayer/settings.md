> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/settings](https://developer.apple.com/documentation/avfaudio/avaudioplayer/settings)

# settings (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary that provides information about the player’s audio data.

## Declaration

```swift
var settings: [String : Any] { get }
```

## See Also

### Inspecting the audio data

- [url](url.md): The URL of the audio file.
- [data](data.md): The audio data associated with the player.
- [format](format.md): The format of the player’s audio data.

# settings (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A dictionary that provides information about the player’s audio data.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * settings;
```

## See Also

### Inspecting the audio data

- [url](url.md): The URL of the audio file.
- [data](data.md): The audio data associated with the player.
- [format](format.md): The format of the player’s audio data.
