> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/settings](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/settings)

# settings (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The settings that describe the format of the recorded audio.

## Declaration

```swift
var settings: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

See [init(url:settings:)](init%28url_settings_%29-5whyq.md) for supported keys and values.

## See Also

### Inspecting the audio data

- [url](url.md): The URL to which the recorder writes its data.
- [format](format.md): The format of the recorded audio.

# settings (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

The settings that describe the format of the recorded audio.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * settings;
```

<a id="Discussion"></a>

## Discussion

See [initWithURL:settings:error:](init%28url_settings_%29-5whyq.md) for supported keys and values.

## See Also

### Inspecting the audio data

- [url](url.md): The URL to which the recorder writes its data.
- [format](format.md): The format of the recorded audio.
