> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterwaterheatermanagement/boost(with:completion:)

# boost(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Boost

## Declaration

```swift
func boost(with params: MTRWaterHeaterManagementClusterBoostParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func boost(with params: MTRWaterHeaterManagementClusterBoostParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to request that the water heater is put into a Boost state.

# boostWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Boost

## Declaration

```objectivec
- (void) boostWithParams:(MTRWaterHeaterManagementClusterBoostParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to request that the water heater is put into a Boost state.
