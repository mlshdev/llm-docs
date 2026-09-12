> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustersoftwarediagnostics/resetwatermarks(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustersoftwarediagnostics/resetwatermarks(with:completion:))

# resetWatermarks(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func resetWatermarks(with params: MTRSoftwareDiagnosticsClusterResetWatermarksParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resetWatermarks(with params: MTRSoftwareDiagnosticsClusterResetWatermarksParams?) async throws
```

# resetWatermarksWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) resetWatermarksWithParams:(MTRSoftwareDiagnosticsClusterResetWatermarksParams *) params completion:(MTRStatusCompletion) completion;
```
