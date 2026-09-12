> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/endindexbatch(expectedclientstate:newclientstate:completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/endindexbatch(expectedclientstate:newclientstate:completionhandler:))

# endIndexBatch(expectedClientState:newClientState:completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Ends a batch of index updates and stores the specified state information.

## Declaration

```swift
func endIndexBatch(expectedClientState: Data?, newClientState: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endIndexBatch(expectedClientState: Data?, newClientState: Data) async throws
```

## Parameters

- `expectedClientState`: The client state data from the previous batch.
- `newClientState`: Up to 250 bytes of app-specific data that can help you recover from a crash and resume indexing.
- `completionHandler`: The block to call with the results. The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func endBatch(withClientState clientState: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Batching index updates

- [beginBatch()](beginbatch%28%29.md): Begins a batch of updates to an index.
- [endBatch(withClientState:completionHandler:)](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientState(completionHandler:)](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.

# endIndexBatchWithExpectedClientState:newClientState:completionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Ends a batch of index updates and stores the specified state information.

## Declaration

```objectivec
- (void) endIndexBatchWithExpectedClientState:(NSData *) expectedClientState newClientState:(NSData *) newClientState completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `expectedClientState`: The client state data from the previous batch.
- `newClientState`: Up to 250 bytes of app-specific data that can help you recover from a crash and resume indexing.
- `completionHandler`: The block to call with the results. The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func endBatch(withClientState clientState: Data) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Batching index updates

- [beginIndexBatch](beginbatch%28%29.md): Begins a batch of updates to an index.
- [endIndexBatchWithClientState:completionHandler:](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientStateWithCompletionHandler:](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.
