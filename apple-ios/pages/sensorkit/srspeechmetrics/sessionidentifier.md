> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/sessionidentifier](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/sessionidentifier)

# sessionIdentifier (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An identifier for the audio session.

## Declaration

```swift
var sessionIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For example, this property is an identifier for a phone call or Siri utterance.

## See Also

### Getting session information

- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetrics.SessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.

# sessionIdentifier (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An identifier for the audio session.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * sessionIdentifier;
```

<a id="Discussion"></a>

## Discussion

For example, this property is an identifier for a phone call or Siri utterance.

## See Also

### Getting session information

- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetricsSessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.
