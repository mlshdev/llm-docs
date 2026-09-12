> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/streamdirection](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/streamdirection)

# SCVideoStreamAnalyzer.StreamDirection (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Options for the different types of analyzed video streams.

## Declaration

```swift
enum StreamDirection
```

<a id="overview"></a>

## Overview

Pass this enum into the [init(participantUUID:streamDirection:)](init%28participantuuid_streamdirection_%29.md) initializer when creating an [SCVideoStreamAnalyzer](../scvideostreamanalyzer.md) to analyze video streams.

## Topics

### Identifying a stream direction

- [SCVideoStreamAnalyzer.StreamDirection.incoming](streamdirection/incoming.md): An option that refers to a video stream from another device.
- [SCVideoStreamAnalyzer.StreamDirection.outgoing](streamdirection/outgoing.md): An option that refers to a video stream sent to another device.

### Initializing a stream direction

- [init(rawValue:)](streamdirection/init%28rawvalue_%29.md): Initializes a stream direction with the given raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a video stream analyzer

- [init(participantUUID:streamDirection:)](init%28participantuuid_streamdirection_%29.md): Creates a video stream analyzer for the given call participant and stream option.

# SCVideoStreamAnalyzerStreamDirection (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Options for the different types of analyzed video streams.

## Declaration

```objectivec
enum SCVideoStreamAnalyzerStreamDirection : NSInteger;
```

<a id="overview"></a>

## Overview

Pass this enum into the [initWithParticipantUUID:streamDirection:error:](init%28participantuuid_streamdirection_%29.md) initializer when creating an [SCVideoStreamAnalyzer](../scvideostreamanalyzer.md) to analyze video streams.

## Topics

### Identifying a stream direction

- [SCVideoStreamAnalyzerStreamDirectionIncoming](streamdirection/incoming.md): An option that refers to a video stream from another device.
- [SCVideoStreamAnalyzerStreamDirectionOutgoing](streamdirection/outgoing.md): An option that refers to a video stream sent to another device.

## See Also

### Creating a video stream analyzer

- [initWithParticipantUUID:streamDirection:error:](init%28participantuuid_streamdirection_%29.md): Creates a video stream analyzer for the given call participant and stream option.
