> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassificationresult/timerange](https://developer.apple.com/documentation/soundanalysis/snclassificationresult/timerange)

# timeRange (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The time span that corresponds to the result’s classifications.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

The time range’s [CMTime](../../coremedia/cmtime.md) values are the number of audio frames at the analyzer’s sample rate. Use these time indices to determine where, in time, the result corresponds to the original audio.

A result’s time range typically refers to audio older than its most recent audio because the request gathers the data into blocks before sending them to the model.

## See Also

### Inspecting the Result

- [classifications](classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classification(forIdentifier:)](classification%28foridentifier_%29.md): Returns the classification for an identifier.

# timeRange (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The time span that corresponds to the result’s classifications.

## Declaration

```objectivec
@property (readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

The time range’s [CMTime](../../coremedia/cmtime.md) values are the number of audio frames at the analyzer’s sample rate. Use these time indices to determine where, in time, the result corresponds to the original audio.

A result’s time range typically refers to audio older than its most recent audio because the request gathers the data into blocks before sending them to the model.

## See Also

### Inspecting the Result

- [classifications](classifications.md): A sorted array of the request’s top classification candidates.
- [SNClassification](../snclassification.md): A type that pairs a sound classifier’s prediction with its confidence in that prediction.
- [classificationForIdentifier:](classification%28foridentifier_%29.md): Returns the classification for an identifier.
