> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/cancel()](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/cancel())

# cancel() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels the request to create a snapshot.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

If the snapshotter isn’t in the process of generating the snapshot, calling this method does nothing.

## See Also

### Generating a snapshot

- [start(completionHandler:)](start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [start(with:completionHandler:)](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotter.CompletionHandler](completionhandler.md): A block that processes the results of a snapshot request.
- [isLoading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.

# cancel (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels the request to create a snapshot.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

If the snapshotter isn’t in the process of generating the snapshot, calling this method does nothing.

## See Also

### Generating a snapshot

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Submits the request to create a snapshot and delivers the results to the specified block.
- [startWithQueue:completionHandler:](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotCompletionHandler](completionhandler.md): A block that processes the results of a snapshot request.
- [loading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.
