> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindex/beginbatch()](https://developer.apple.com/documentation/corespotlight/cssearchableindex/beginbatch())

# beginBatch() (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Begins a batch of updates to an index.

## Declaration

```swift
func beginBatch()
```

<a id="Discussion"></a>

## Discussion

Don’t call this method again before [endBatch(withClientState:completionHandler:)](endbatch%28withclientstate_completionhandler_%29.md) has returned. (You can call it again before the completion handler passed to [endBatch(withClientState:completionHandler:)](endbatch%28withclientstate_completionhandler_%29.md) has been called.)

## See Also

### Batching index updates

- [endBatch(withClientState:completionHandler:)](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatch(expectedClientState:newClientState:completionHandler:)](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientState(completionHandler:)](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.

# beginIndexBatch (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Begins a batch of updates to an index.

## Declaration

```objectivec
- (void) beginIndexBatch;
```

<a id="Discussion"></a>

## Discussion

Don’t call this method again before [endIndexBatchWithClientState:completionHandler:](endbatch%28withclientstate_completionhandler_%29.md) has returned. (You can call it again before the completion handler passed to [endIndexBatchWithClientState:completionHandler:](endbatch%28withclientstate_completionhandler_%29.md) has been called.)

## See Also

### Batching index updates

- [endIndexBatchWithClientState:completionHandler:](endbatch%28withclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [endIndexBatchWithExpectedClientState:newClientState:completionHandler:](endindexbatch%28expectedclientstate_newclientstate_completionhandler_%29.md): Ends a batch of index updates and stores the specified state information.
- [fetchLastClientStateWithCompletionHandler:](fetchlastclientstate%28completionhandler_%29.md): Fetches the app’s most recent client state information asynchronously.
