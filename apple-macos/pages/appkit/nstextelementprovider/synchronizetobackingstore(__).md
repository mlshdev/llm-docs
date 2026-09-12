> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider/synchronizetobackingstore(_:)](https://developer.apple.com/documentation/appkit/nstextelementprovider/synchronizetobackingstore(_:))

# synchronizeToBackingStore(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

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
