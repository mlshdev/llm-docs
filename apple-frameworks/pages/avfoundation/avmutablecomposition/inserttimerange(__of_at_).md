> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:))

# insertTimeRange(\_:of:at:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 1.0+ (deprecated in 11.0)

Inserts all the tracks within a given time range of a specified asset into the composition.

> Use [insertTimeRange(\_:of:at:isolation:)](inserttimerange%28__of_at_isolation_%29.md) instead.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at startTime: CMTime) throws
```

## Parameters

- `timeRange`: The time range of the asset to be inserted.
- `asset`: An asset that contains the tracks to be inserted.
- `startTime`: The time at which the inserted tracks should be presented by the receiver.

<a id="Discussion"></a>

## Discussion

This method may add new tracks to ensure that all tracks of the asset are represented in the inserted time range.

Existing content at the specified start time is pushed out by the duration of the time range.

Media data for the inserted time range is presented at its natural duration; you can scale it to a different duration using [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md).

## See Also

### Managing time ranges

- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange(\_:of:at:completionHandler:)](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.

# insertTimeRange:ofAsset:atTime:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 1.0+ (deprecated in 11.0)

Inserts all the tracks within a given time range of a specified asset into the composition.

> Use [insertTimeRange(\_:of:at:isolation:)](inserttimerange%28__of_at_isolation_%29.md) instead.

## Declaration

```objectivec
- (BOOL) insertTimeRange:(CMTimeRange) timeRange ofAsset:(AVAsset *) asset atTime:(CMTime) startTime error:(NSError **) outError;
```

## Parameters

- `timeRange`: The time range of the asset to be inserted.
- `asset`: An asset that contains the tracks to be inserted.
- `startTime`: The time at which the inserted tracks should be presented by the receiver.
- `outError`: If the insertion was not successful, on return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the insertion was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may add new tracks to ensure that all tracks of the asset are represented in the inserted time range.

Existing content at the specified start time is pushed out by the duration of the time range.

Media data for the inserted time range is presented at its natural duration; you can scale it to a different duration using [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md).

## See Also

### Managing time ranges

- [removeTimeRange:](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange:ofAsset:atTime:completionHandler:](inserttimerange%28__of_at_completionhandler_%29.md): Deprecated. Inserts all tracks of an asset for a time range into a composition.
