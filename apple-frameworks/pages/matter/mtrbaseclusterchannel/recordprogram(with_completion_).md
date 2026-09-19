> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterchannel/recordprogram(with:completion:)

# recordProgram(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RecordProgram

## Declaration

```swift
func recordProgram(with params: MTRChannelClusterRecordProgramParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func recordProgram(with params: MTRChannelClusterRecordProgramParams) async throws
```

<a id="discussion"></a>

## Discussion

Record a specific program or series when it goes live. This functionality enables DVR recording features.

# recordProgramWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RecordProgram

## Declaration

```objectivec
- (void) recordProgramWithParams:(MTRChannelClusterRecordProgramParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Record a specific program or series when it goes live. This functionality enables DVR recording features.
