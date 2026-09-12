> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/timestamp](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/timestamp)

# timestamp (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The date and time when the speech occurs.

## Declaration

```swift
var timestamp: Date { get }
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetrics.SessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.

# timestamp (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The date and time when the speech occurs.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * timestamp;
```

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetricsSessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
