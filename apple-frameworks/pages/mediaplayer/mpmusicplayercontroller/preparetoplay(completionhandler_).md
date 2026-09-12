> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/preparetoplay(completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/preparetoplay(completionhandler:))

# prepareToPlay(completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Prepares a music player for playback.

## Declaration

```swift
func prepareToPlay(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func prepareToPlay() async throws
```

## Parameters

- `completionHandler`: A block that the system call after it buffers the first item in the queue and it’s ready to play.

  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

Call this function to ensure that the system buffers the first item in the queue and it’s ready to play. The system executes the code in the completion handler after it buffers the first item in the queue.

# prepareToPlayWithCompletionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Prepares a music player for playback.

## Declaration

```objectivec
- (void) prepareToPlayWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that the system call after it buffers the first item in the queue and it’s ready to play.

  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

Call this function to ensure that the system buffers the first item in the queue and it’s ready to play. The system executes the code in the completion handler after it buffers the first item in the queue.
