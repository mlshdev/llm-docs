> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/insertemptytimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/insertemptytimerange(_:))

# insertEmptyTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds or extends an empty time range within all tracks of the composition.

## Declaration

```swift
func insertEmptyTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The empty time range to insert.

<a id="Discussion"></a>

## Discussion

Inserting an empty time range pushes out existing content by the time range’s duration. Use this method to reserve a time range in the composition for a subsequently created track to present its media.

## See Also

### Managing time ranges

- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertTimeRange(\_:of:at:completionHandler:)](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

# insertEmptyTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds or extends an empty time range within all tracks of the composition.

## Declaration

```objectivec
- (void) insertEmptyTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The empty time range to insert.

<a id="Discussion"></a>

## Discussion

Inserting an empty time range pushes out existing content by the time range’s duration. Use this method to reserve a time range in the composition for a subsequently created track to present its media.

## See Also

### Managing time ranges

- [removeTimeRange:](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertTimeRange:ofAsset:atTime:completionHandler:](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange:ofAsset:atTime:error:](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.
