> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/start(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/start(completionhandler:))

# start(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Submits the request to create a snapshot and delivers the results to the specified block.

## Declaration

```swift
func start(completionHandler: @escaping @MainActor @Sendable (MKMapSnapshotter.Snapshot?, (any Error)?) -> Void)
```

```swift
func start() async throws -> MKMapSnapshotter.Snapshot
```

## Parameters

- `completionHandler`: The block to call with the resulting snapshot. This snapshotter executes this block on the app’s main thread and can’t be `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to begin generating a snapshot image based on the specified parameters. This method executes the request asynchronously.

The snapshotter delivers the final image to your app only when it’s running in the foreground. The snapshotter needs to render the final image while your app is in the foreground. If you start generating a snapshot while the app is in the background, or if your app moves to the background while a snapshot is in progress, this behavior delays the delivery of the snapshot until your app returns to the foreground.

In macOS, this method creates both standard and high-resolution representations of the map data and includes both in the returned image object. In iOS, you need to specify the image scale you want using the snapshot options, which defaults to the scale on the current device.

## See Also

### Generating a snapshot

- [start(with:completionHandler:)](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotter.CompletionHandler](completionhandler.md): A block that processes the results of a snapshot request.
- [cancel()](cancel%28%29.md): Cancels the request to create a snapshot.
- [isLoading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.

# startWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Submits the request to create a snapshot and delivers the results to the specified block.

## Declaration

```objectivec
- (void) startWithCompletionHandler:(MKMapSnapshotCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The block to call with the resulting snapshot. This snapshotter executes this block on the app’s main thread and can’t be `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to begin generating a snapshot image based on the specified parameters. This method executes the request asynchronously.

The snapshotter delivers the final image to your app only when it’s running in the foreground. The snapshotter needs to render the final image while your app is in the foreground. If you start generating a snapshot while the app is in the background, or if your app moves to the background while a snapshot is in progress, this behavior delays the delivery of the snapshot until your app returns to the foreground.

In macOS, this method creates both standard and high-resolution representations of the map data and includes both in the returned image object. In iOS, you need to specify the image scale you want using the snapshot options, which defaults to the scale on the current device.

## See Also

### Generating a snapshot

- [startWithQueue:completionHandler:](start%28with_completionhandler_%29.md): Submits the request to create a snapshot and executes the resulting block on the specified queue.
- [MKMapSnapshotCompletionHandler](completionhandler.md): A block that processes the results of a snapshot request.
- [cancel](cancel%28%29.md): Cancels the request to create a snapshot.
- [loading](isloading.md): A Boolean value that indicates whether the snapshotter is generating an image.
