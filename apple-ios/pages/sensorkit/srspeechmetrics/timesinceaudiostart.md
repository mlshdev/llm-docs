> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srspeechmetrics/timesinceaudiostart

# timeSinceAudioStart (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

The number of seconds since the start of the audio stream.

## Declaration

```swift
var timeSinceAudioStart: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

When an audio stream starts, such as a phone call, SensorKit collects samples periodically. Use this field to determine the order of the samples in the audio stream.

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetrics.SessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.

# timeSinceAudioStart (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

The number of seconds since the start of the audio stream.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval timeSinceAudioStart;
```

<a id="Discussion"></a>

## Discussion

When an audio stream starts, such as a phone call, SensorKit collects samples periodically. Use this field to determine the order of the samples in the audio stream.

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [SRSpeechMetricsSessionFlags](sessionflags-swift.struct.md): Possible details about processing an audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.
