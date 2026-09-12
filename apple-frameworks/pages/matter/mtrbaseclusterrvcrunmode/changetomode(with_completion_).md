> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterrvcrunmode/changetomode(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterrvcrunmode/changetomode(with:completion:))

# changeToMode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func changeToMode(with params: MTRRVCRunModeClusterChangeToModeParams, completion: @escaping @Sendable (MTRRVCRunModeClusterChangeToModeResponseParams?, (any Error)?) -> Void)
```

```swift
func changeToMode(with params: MTRRVCRunModeClusterChangeToModeParams) async throws -> MTRRVCRunModeClusterChangeToModeResponseParams
```

# changeToModeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) changeToModeWithParams:(MTRRVCRunModeClusterChangeToModeParams *) params completion:(void (^)(MTRRVCRunModeClusterChangeToModeResponseParams *data, NSError *error)) completion;
```
