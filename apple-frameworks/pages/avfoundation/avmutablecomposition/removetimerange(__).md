> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/removetimerange(_:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/removetimerange(_:))

# removeTimeRange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specified time range from all tracks of the composition.

## Declaration

```swift
func removeTimeRange(_ timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The time range to remove.

<a id="Discussion"></a>

## Discussion

After removing, existing content after the time range moves forward in the composition timeline.

Removing a time range doesn’t remove any existing tracks from the composition, even if removing it results in an empty track. Instead, it removes or truncates track segments that intersect with the time range.

## See Also

### Managing time ranges

- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange(\_:of:at:completionHandler:)](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

# removeTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specified time range from all tracks of the composition.

## Declaration

```objectivec
- (void) removeTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The time range to remove.

<a id="Discussion"></a>

## Discussion

After removing, existing content after the time range moves forward in the composition timeline.

Removing a time range doesn’t remove any existing tracks from the composition, even if removing it results in an empty track. Instead, it removes or truncates track segments that intersect with the time range.

## See Also

### Managing time ranges

- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange:ofAsset:atTime:completionHandler:](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
- [insertTimeRange:ofAsset:atTime:error:](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.
