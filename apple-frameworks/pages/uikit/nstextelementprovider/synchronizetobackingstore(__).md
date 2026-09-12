> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextelementprovider/synchronizetobackingstore(_:)](https://developer.apple.com/documentation/uikit/nstextelementprovider/synchronizetobackingstore(_:))

# synchronizeToBackingStore(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Synchronizes changes to the backing store.

## Declaration

```swift
func synchronizeToBackingStore(_ completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func synchronizeToBackingStore() async throws
```

## Parameters

- `completionHandler`: A completion handler to run upon successful completion, or to process an error upon failure.

<a id="Discussion"></a>

## Discussion

If `completionHandler` is `nil`, performs the operation synchronously. The `completionHandler` gets passed `error` if the synchronization fails. It should block (or fails if synchronous) when there’s an active transaction.

# synchronizeToBackingStore: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Synchronizes changes to the backing store.

## Declaration

```objectivec
- (void) synchronizeToBackingStore:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler to run upon successful completion, or to process an error upon failure.

<a id="Discussion"></a>

## Discussion

If `completionHandler` is `nil`, performs the operation synchronously. The `completionHandler` gets passed `error` if the synchronization fails. It should block (or fails if synchronous) when there’s an active transaction.
