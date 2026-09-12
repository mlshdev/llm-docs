> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/sessionflags-swift.property](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/sessionflags-swift.property)

# sessionFlags (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Details about the audio processing.

## Declaration

```swift
var sessionFlags: SRSpeechMetrics.SessionFlags { get }
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [SRSpeechMetrics.SessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.

# sessionFlags (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Details about the audio processing.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) SRSpeechMetricsSessionFlags sessionFlags;
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [SRSpeechMetricsSessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.
