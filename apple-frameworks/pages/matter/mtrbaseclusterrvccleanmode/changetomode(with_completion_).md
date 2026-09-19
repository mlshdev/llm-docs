> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterrvccleanmode/changetomode(with:completion:)

# changeToMode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func changeToMode(with params: MTRRVCCleanModeClusterChangeToModeParams, completion: @escaping @Sendable (MTRRVCCleanModeClusterChangeToModeResponseParams?, (any Error)?) -> Void)
```

```swift
func changeToMode(with params: MTRRVCCleanModeClusterChangeToModeParams) async throws -> MTRRVCCleanModeClusterChangeToModeResponseParams
```

# changeToModeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) changeToModeWithParams:(MTRRVCCleanModeClusterChangeToModeParams *) params completion:(void (^)(MTRRVCCleanModeClusterChangeToModeResponseParams *data, NSError *error)) completion;
```
