> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/getspecific(key:)-swift.method](https://developer.apple.com/documentation/dispatch/dispatchqueue/getspecific(key:)-swift.method)

# getSpecific(key:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value for the key associated with this dispatch queue.

## Declaration

```swift
@preconcurrency func getSpecific<T>(key: DispatchSpecificKey<T>) -> T? where T : Sendable
```

## Parameters

- `key`: The key associated with the dispatch queue.

## See Also

### Getting and Setting Contextual Data

- [setSpecific(key:value:)](setspecific%28key_value_%29.md): Sets the key/value data for the specified dispatch queue.
- [getSpecific(key:)](getspecific%28key_%29-swift.type.method.md): Returns the value for the key associated with the current execution context.
- [DispatchSpecificKey](../dispatchspecifickey.md): A key associated with a specific contextual value on a dispatch queue.
