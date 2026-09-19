> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertimesynchronization/setutctimewith(_:completion:)

# setUTCTimeWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetUTCTime

## Declaration

```swift
func setUTCTimeWith(_ params: MTRTimeSynchronizationClusterSetUTCTimeParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setUTCTimeWith(_ params: MTRTimeSynchronizationClusterSetUTCTimeParams) async throws
```

<a id="discussion"></a>

## Discussion

This command is used to set the UTC time of the node.

# setUTCTimeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetUTCTime

## Declaration

```objectivec
- (void) setUTCTimeWithParams:(MTRTimeSynchronizationClusterSetUTCTimeParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to set the UTC time of the node.
