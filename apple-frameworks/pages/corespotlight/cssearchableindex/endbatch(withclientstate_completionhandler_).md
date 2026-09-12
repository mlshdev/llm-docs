> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/endbatch(withclientstate:completionhandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindex/endbatch(withclientstate:completionhandler:))

# endBatch(withClientState:completionHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Ends a batch of index updates and stores the specified state information.

## Declaration

```swift
func endBatch(withClientState clientState: Data, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func endBatch(withClientState clientState: Data) async throws
```

## Parameters

- `clientState`: Up to 250 bytes of information that can help you recover from a crash and resume indexing.
- `completionHandler`: The block that’s called after the client state has been stored.

  The block receives the following parameter:

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
- [endIndexBatch(expectedClientState:newClientState:completionHandler:)](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientState(completionHandler:)](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.

# endIndexBatchWithClientState:completionHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Ends a batch of index updates and stores the specified state information.

## Declaration

```objectivec
- (void) endIndexBatchWithClientState:(NSData *) clientState completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `clientState`: Up to 250 bytes of information that can help you recover from a crash and resume indexing.
- `completionHandler`: The block that’s called after the client state has been stored.

  The block receives the following parameter:

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
- [endIndexBatchWithExpectedClientState:newClientState:completionHandler:](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientStateWithCompletionHandler:](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.
