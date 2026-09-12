> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/completionhandler](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/completionhandler)

# MKMapSnapshotter.CompletionHandler (Swift)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block that processes the results of a snapshot request.

## Declaration

```swift
typealias CompletionHandler = (MKMapSnapshotter.Snapshot?, (any Error)?) -> Void
```

## Parameters

- `snapshot`: The image data that the snapshotter generates, or `nil` if an error occurs.
- `error`: The error that occurs, or `nil` if the framework generates the snapshot successfully.

## See Also

### Generating a snapshot

- [start(completionHandler:)](start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [start(with:completionHandler:)](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [cancel()](cancel%28%29.md): Cancels the request to create a snapshot.
- [isLoading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.

# MKMapSnapshotCompletionHandler (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block that processes the results of a snapshot request.

## Declaration

```objectivec
typedef void (^)(MKMapSnapshot *, NSError *) MKMapSnapshotCompletionHandler;
```

## Parameters

- `snapshot`: The image data that the snapshotter generates, or `nil` if an error occurs.
- `error`: The error that occurs, or `nil` if the framework generates the snapshot successfully.

## See Also

### Generating a snapshot

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [startWithQueue:completionHandler:](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [cancel](cancel%28%29.md): Cancels the request to create a snapshot.
- [loading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.
