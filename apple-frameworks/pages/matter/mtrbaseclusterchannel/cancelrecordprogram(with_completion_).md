> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterchannel/cancelrecordprogram(with:completion:)

# cancelRecordProgram(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelRecordProgram

## Declaration

```swift
func cancelRecordProgram(with params: MTRChannelClusterCancelRecordProgramParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func cancelRecordProgram(with params: MTRChannelClusterCancelRecordProgramParams) async throws
```

<a id="discussion"></a>

## Discussion

Cancel recording for a specific program or series.

# cancelRecordProgramWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelRecordProgram

## Declaration

```objectivec
- (void) cancelRecordProgramWithParams:(MTRChannelClusterCancelRecordProgramParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Cancel recording for a specific program or series.
