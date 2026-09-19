> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklookaroundsnapshotter/getsnapshotwithcompletionhandler(_:)

# getSnapshotWithCompletionHandler(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Requests a new snapshot and calls the completion handler you provide.

## Declaration

```swift
func getSnapshotWithCompletionHandler(_ completionHandler: @escaping @MainActor @Sendable (MKLookAroundSnapshotter.Snapshot?, (any Error)?) -> Void)
```

```swift
var snapshot: MKLookAroundSnapshotter.Snapshot { get async throws }
```

## Parameters

- `completionHandler`: A completion handler the framework calls to indicate the success or failure of the snapshot request.

## See Also

### Starting and stopping a snapshot

- [cancel()](cancel%28%29.md): Cancels an in-progress snapshot request.

# getSnapshotWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Requests a new snapshot and calls the completion handler you provide.

## Declaration

```objectivec
- (void) getSnapshotWithCompletionHandler:(void (^)(MKLookAroundSnapshot *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the framework calls to indicate the success or failure of the snapshot request.

## See Also

### Starting and stopping a snapshot

- [cancel](cancel%28%29.md): Cancels an in-progress snapshot request.
