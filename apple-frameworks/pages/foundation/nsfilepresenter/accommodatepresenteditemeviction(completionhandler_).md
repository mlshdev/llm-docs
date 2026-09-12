> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/accommodatepresenteditemeviction(completionhandler:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/accommodatepresenteditemeviction(completionhandler:))

# accommodatePresentedItemEviction(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Given that something in the system is waiting to evict the presented file or directory, do whatever it takes to ensure that the eviction will succeed and that the receiver’s application will behave properly when the eviction has happened, and then invoke the completion handler. This must include calling +\[NSFileCoordinator removeFilePresenter:\]. You may instead prevent eviction by passing the completion handler a meaningful error.

## Declaration

```swift
optional func accommodatePresentedItemEviction(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func accommodatePresentedItemEviction() async throws
```

<a id="discussion"></a>

## Discussion

If this method is not implemented, eviction will fail.

# accommodatePresentedItemEvictionWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · visionOS 1.1+

Given that something in the system is waiting to evict the presented file or directory, do whatever it takes to ensure that the eviction will succeed and that the receiver’s application will behave properly when the eviction has happened, and then invoke the completion handler. This must include calling +\[NSFileCoordinator removeFilePresenter:\]. You may instead prevent eviction by passing the completion handler a meaningful error.

## Declaration

```objectivec
- (void) accommodatePresentedItemEvictionWithCompletionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

<a id="discussion"></a>

## Discussion

If this method is not implemented, eviction will fail.
