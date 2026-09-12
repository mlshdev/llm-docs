> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosequencer/init()](https://developer.apple.com/documentation/avfaudio/avaudiosequencer/init())

# init() (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates an audio sequencer object.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

Use this initializer to create a sequencer with tracks that only send events to external MIDI endpoints.

## See Also

### Creating an Audio Sequencer

- [init(audioEngine:)](init%28audioengine_%29.md): Creates an audio sequencer that the framework attaches to an audio engine instance.

# init (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Creates an audio sequencer object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

Use this initializer to create a sequencer with tracks that only send events to external MIDI endpoints.

## See Also

### Creating an Audio Sequencer

- [initWithAudioEngine:](init%28audioengine_%29.md): Creates an audio sequencer that the framework attaches to an audio engine instance.
