> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/scaletimerange(_:toduration:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/scaletimerange(_:toduration:))

# scaleTimeRange(\_:toDuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the duration of all tracks in a given time range.

## Declaration

```swift
func scaleTimeRange(_ timeRange: CMTimeRange, toDuration duration: CMTime)
```

## Parameters

- `timeRange`: The time range of the composition to scale.
- `duration`: The new time range duration.

<a id="Discussion"></a>

## Discussion

A composition presents each track segment affected by the scaling operation at a rate equal to `source.duration / target.duration` of its resulting time mapping.

## See Also

### Managing time ranges

- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange(\_:of:at:completionHandler:)](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

# scaleTimeRange:toDuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the duration of all tracks in a given time range.

## Declaration

```objectivec
- (void) scaleTimeRange:(CMTimeRange) timeRange toDuration:(CMTime) duration;
```

## Parameters

- `timeRange`: The time range of the composition to scale.
- `duration`: The new time range duration.

<a id="Discussion"></a>

## Discussion

A composition presents each track segment affected by the scaling operation at a rate equal to `source.duration / target.duration` of its resulting time mapping.

## See Also

### Managing time ranges

- [removeTimeRange:](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange:ofAsset:atTime:completionHandler:](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange:ofAsset:atTime:error:](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.
