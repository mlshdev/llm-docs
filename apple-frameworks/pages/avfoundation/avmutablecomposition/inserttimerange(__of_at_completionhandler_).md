> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:completionhandler:))

# insertTimeRange(\_:of:at:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Inserts all tracks of an asset for a time range into a composition.

> Use [insertTimeRange(\_:of:at:isolation:)](inserttimerange%28__of_at_isolation_%29.md) instead.

## Declaration

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at startTime: CMTime, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

## Parameters

- `timeRange`: The time range of the asset’s tracks to insert into the composition.
- `asset`: The source asset that contains the tracks to insert.
- `startTime`: A time in the composition to present the inserted tracks.
- `completionHandler`: A callback the system invokes when the insertion is complete. If an error occurs, the system passes the callback an error object that describes the failure.

<a id="Discussion"></a>

## Discussion

If necessary, a composition adds new tracks to ensure that it inserts all tracks in the source asset for the time range. Inserting a time range pushes out existing content at the specified start time by the time range’s duration.

The composition presents the media data for the inserted time range at its natural duration and rate. You can scale it to a different duration, which changes the presentation rate, by calling [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md).

## See Also

### Managing time ranges

- [removeTimeRange(\_:)](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange(\_:toDuration:)](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange(\_:)](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange(\_:of:at:)](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.

# insertTimeRange:ofAsset:atTime:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Inserts all tracks of an asset for a time range into a composition.

## Declaration

```objectivec
- (void) insertTimeRange:(CMTimeRange) timeRange ofAsset:(AVAsset *) asset atTime:(CMTime) startTime completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `timeRange`: The time range of the asset’s tracks to insert into the composition.
- `asset`: The source asset that contains the tracks to insert.
- `startTime`: A time in the composition to present the inserted tracks.
- `completionHandler`: A callback the system invokes when the insertion is complete. If an error occurs, the system passes the callback an error object that describes the failure.

<a id="Discussion"></a>

## Discussion

If necessary, a composition adds new tracks to ensure that it inserts all tracks in the source asset for the time range. Inserting a time range pushes out existing content at the specified start time by the time range’s duration.

The composition presents the media data for the inserted time range at its natural duration and rate. You can scale it to a different duration, which changes the presentation rate, by calling [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md).

## See Also

### Managing time ranges

- [removeTimeRange:](removetimerange%28__%29.md): Removes a specified time range from all tracks of the composition.
- [scaleTimeRange:toDuration:](scaletimerange%28__toduration_%29.md): Changes the duration of all tracks in a given time range.
- [insertEmptyTimeRange:](insertemptytimerange%28__%29.md): Adds or extends an empty time range within all tracks of the composition.
- [insertTimeRange:ofAsset:atTime:error:](inserttimerange%28__of_at_%29.md): Deprecated. Inserts all the tracks within a given time range of a specified asset into the composition.
