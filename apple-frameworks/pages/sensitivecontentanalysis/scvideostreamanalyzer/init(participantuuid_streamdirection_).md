> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sensitivecontentanalysis/scvideostreamanalyzer/init(participantuuid:streamdirection:)](https://developer.apple.com/documentation/sensitivecontentanalysis/scvideostreamanalyzer/init(participantuuid:streamdirection:))

# init(participantUUID:streamDirection:) (Swift)

**Framework:** Sensitive Content Analysis  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a video stream analyzer for the given call participant and stream option.

## Declaration

```swift
init(participantUUID: String, streamDirection: SCVideoStreamAnalyzer.StreamDirection) throws
```

## Parameters

- `participantUUID`: A unique identifier that you provide to distinguish among multiple individuals on a conference call. Set this argument to the same value per person on the call, if your app supports multiple streams per person.
- `streamDirection`: An option that indicates whether the stream comes from the device’s camera or from a remote individual signed in to the call.

<a id="discussion"></a>

## Discussion

> **Important**

>  This class works only when the Communication Safety parental control in Screen Time is enabled, or when the Sensitive Content Warnings setting is on. This method throws an error if both settings are off, or if the device doesn’t support analysis for the specified stream direction.

## See Also

### Creating a video stream analyzer

- [SCVideoStreamAnalyzer.StreamDirection](streamdirection.md): Options for the different types of analyzed video streams.

# initWithParticipantUUID:streamDirection:error: (Objective-C)

**Framework:** Sensitive Content Analysis  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a video stream analyzer for the given call participant and stream option.

## Declaration

```objectivec
- (instancetype) initWithParticipantUUID:(NSString *) participantUUID streamDirection:(SCVideoStreamAnalyzerStreamDirection) streamDirection error:(NSError **) error;
```

## Parameters

- `participantUUID`: A unique identifier that you provide to distinguish among multiple individuals on a conference call. Set this argument to the same value per person on the call, if your app supports multiple streams per person.
- `streamDirection`: An option that indicates whether the stream comes from the device’s camera or from a remote individual signed in to the call.
- `error`: An error that occurs while intializing a video stream analyzer.

<a id="discussion"></a>

## Discussion

> **Important**

>  This class works only when the Communication Safety parental control in Screen Time is enabled, or when the Sensitive Content Warnings setting is on. This method throws an error if both settings are off, or if the device doesn’t support analysis for the specified stream direction.

## See Also

### Creating a video stream analyzer

- [SCVideoStreamAnalyzerStreamDirection](streamdirection.md): Options for the different types of analyzed video streams.
