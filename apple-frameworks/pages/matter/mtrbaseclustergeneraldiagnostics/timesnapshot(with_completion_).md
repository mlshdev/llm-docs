> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneraldiagnostics/timesnapshot(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneraldiagnostics/timesnapshot(with:completion:))

# timeSnapshot(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command TimeSnapshot

## Declaration

```swift
func timeSnapshot(with params: MTRGeneralDiagnosticsClusterTimeSnapshotParams?, completion: @escaping @Sendable (MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams?, (any Error)?) -> Void)
```

```swift
func timeSnapshot(with params: MTRGeneralDiagnosticsClusterTimeSnapshotParams?) async throws -> MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams
```

<a id="discussion"></a>

## Discussion

This command MAY be used by a client to obtain a correlated view of both System Time, and, if currently synchronized and supported, “wall clock time” of the server.

# timeSnapshotWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command TimeSnapshot

## Declaration

```objectivec
- (void) timeSnapshotWithParams:(MTRGeneralDiagnosticsClusterTimeSnapshotParams *) params completion:(void (^)(MTRGeneralDiagnosticsClusterTimeSnapshotResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command MAY be used by a client to obtain a correlated view of both System Time, and, if currently synchronized and supported, “wall clock time” of the server.
