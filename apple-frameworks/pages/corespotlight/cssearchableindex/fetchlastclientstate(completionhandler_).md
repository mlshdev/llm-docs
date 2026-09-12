> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/fetchlastclientstate(completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/fetchlastclientstate(completionhandler:))

# fetchLastClientState(completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Fetches the app’s most recent client state information asynchronously.

## Declaration

```swift
func fetchLastClientState(completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func fetchLastClientState() async throws -> Data
```

## Parameters

- `completionHandler`: The block to call when the request has been *journaled* by the index, which means that the index makes a note that it has to perform this operation. Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func fetchLastClientState() async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Batching index updates

- [beginBatch()](beginbatch%28%29.md): Begins a batch of updates to an index.
- [endBatch(withClientState:completionHandler:)](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatch(expectedClientState:newClientState:completionHandler:)](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.

# fetchLastClientStateWithCompletionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Fetches the app’s most recent client state information asynchronously.

## Declaration

```objectivec
- (void) fetchLastClientStateWithCompletionHandler:(void (^)(NSData *clientState, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block to call when the request has been *journaled* by the index, which means that the index makes a note that it has to perform this operation. Note that the request may not have completed.

  The block receives the following parameter:

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is `nil`.

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func fetchLastClientState() async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Batching index updates

- [beginIndexBatch](beginbatch%28%29.md): Begins a batch of updates to an index.
- [endIndexBatchWithClientState:completionHandler:](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatchWithExpectedClientState:newClientState:completionHandler:](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
