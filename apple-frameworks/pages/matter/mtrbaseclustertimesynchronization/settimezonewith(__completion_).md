> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertimesynchronization/settimezonewith(_:completion:)

# setTimeZoneWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTimeZone

## Declaration

```swift
func setTimeZoneWith(_ params: MTRTimeSynchronizationClusterSetTimeZoneParams, completion: @escaping @Sendable (MTRTimeSynchronizationClusterSetTimeZoneResponseParams?, (any Error)?) -> Void)
```

```swift
func setTimeZoneWith(_ params: MTRTimeSynchronizationClusterSetTimeZoneParams) async throws -> MTRTimeSynchronizationClusterSetTimeZoneResponseParams
```

<a id="discussion"></a>

## Discussion

This command is used to set the time zone of the node.

# setTimeZoneWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTimeZone

## Declaration

```objectivec
- (void) setTimeZoneWithParams:(MTRTimeSynchronizationClusterSetTimeZoneParams *) params completion:(void (^)(MTRTimeSynchronizationClusterSetTimeZoneResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to set the time zone of the node.
