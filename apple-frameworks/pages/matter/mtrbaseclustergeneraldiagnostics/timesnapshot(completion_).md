> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneraldiagnostics/timesnapshot(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneraldiagnostics/timesnapshot(completion:))

# timeSnapshot(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func timeSnapshot(completion: @escaping @Sendable (MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams?, (any Error)?) -> Void)
```

```swift
func timeSnapshot() async throws -> MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams
```

# timeSnapshotWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) timeSnapshotWithCompletion:(void (^)(MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams *data, NSError *error)) completion;
```
