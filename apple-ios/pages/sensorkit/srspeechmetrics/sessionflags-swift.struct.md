> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srspeechmetrics/sessionflags-swift.struct](https://developer.apple.com/documentation/sensorkit/srspeechmetrics/sessionflags-swift.struct)

# SRSpeechMetrics.SessionFlags (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Possible details about processing an audio stream.

## Declaration

```swift
struct SessionFlags
```

<a id="overview"></a>

## Overview

Use these flags to determine whether audio processing went through the system voice processor.

## Topics

### Session flags

- [bypassVoiceProcessing](sessionflags-swift.struct/bypassvoiceprocessing.md): Audio processing bypasses the system voice processor.

### Creating session flags

- [init(rawValue:)](sessionflags-swift.struct/init%28rawvalue_%29.md): Creates and returns a new structure with the specified value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.

# SRSpeechMetricsSessionFlags (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Possible details about processing an audio stream.

## Declaration

```objectivec
enum SRSpeechMetricsSessionFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these flags to determine whether audio processing went through the system voice processor.

## Topics

### Session flags

- [SRSpeechMetricsSessionFlagsBypassVoiceProcessing](sessionflags-swift.struct/bypassvoiceprocessing.md): Audio processing bypasses the system voice processor.

### Enumeration Cases

- [SRSpeechMetricsSessionFlagsDefault](../srspeechmetricssessionflags/srspeechmetricssessionflagsdefault.md): Audio processing went through the system voice processor.

## See Also

### Getting session information

- [sessionIdentifier](sessionidentifier.md): An identifier for the audio session.
- [sessionFlags](sessionflags-swift.property.md): Details about the audio processing.
- [timeSinceAudioStart](timesinceaudiostart.md): The number of seconds since the start of the audio stream.
- [timestamp](timestamp.md): The date and time when the speech occurs.
