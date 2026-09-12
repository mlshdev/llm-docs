> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerapplicationcontroller/perform(queuetransaction:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerapplicationcontroller/perform(queuetransaction:completionhandler:))

# perform(queueTransaction:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Changes the contents of the media items in the queue.

## Declaration

```swift
func perform(queueTransaction: @escaping (MPMusicPlayerControllerMutableQueue) -> Void, completionHandler: @escaping @Sendable (MPMusicPlayerControllerQueue, (any Error)?) -> Void)
```

```swift
func perform(queueTransaction: @escaping (MPMusicPlayerControllerMutableQueue) -> Void) async throws -> MPMusicPlayerControllerQueue
```

## Parameters

- `queueTransaction`: A block that the system calls while it creates the queue.

  - **queue**: The queue to modify.
- `completionHandler`: A block that the system calls after the user accepts the new queue.

  - **queue**: The newly modified queue that the user accepted.
  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

Perform all of your queue modifications inside of the queue transition block. After the system modifies the queue inside of the queue transition block, it returns the new queue from the completion handler after the user accepts the new queue. Don’t access the completion handler’s queue outside of the completion handler.

If you modify the queue outside of the completion handler, register for the [MPMusicPlayerControllerQueueDidChangeNotification](../mpmusicplayercontrollerqueuedidchangenotification.md) notification and ensure your app responds accordingly.

## See Also

### Changing the queue contents

- [MPMusicPlayerControllerQueueDidChange](../../foundation/nsnotification/name-swift.struct/mpmusicplayercontrollerqueuedidchange.md): Indicates the music player’s queue changed.

# performQueueTransaction:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Changes the contents of the media items in the queue.

## Declaration

```objectivec
- (void) performQueueTransaction:(void (^)(MPMusicPlayerControllerMutableQueue *queue)) queueTransaction completionHandler:(void (^)(MPMusicPlayerControllerQueue *queue, NSError *error)) completionHandler;
```

## Parameters

- `queueTransaction`: A block that the system calls while it creates the queue.

  - **queue**: The queue to modify.
- `completionHandler`: A block that the system calls after the user accepts the new queue.

  - **queue**: The newly modified queue that the user accepted.
  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

Perform all of your queue modifications inside of the queue transition block. After the system modifies the queue inside of the queue transition block, it returns the new queue from the completion handler after the user accepts the new queue. Don’t access the completion handler’s queue outside of the completion handler.

If you modify the queue outside of the completion handler, register for the [MPMusicPlayerControllerQueueDidChangeNotification](../mpmusicplayercontrollerqueuedidchangenotification.md) notification and ensure your app responds accordingly.

## See Also

### Changing the queue contents

- [MPMusicPlayerControllerQueueDidChangeNotification](../mpmusicplayercontrollerqueuedidchangenotification.md): Indicates the music player’s queue changed.
