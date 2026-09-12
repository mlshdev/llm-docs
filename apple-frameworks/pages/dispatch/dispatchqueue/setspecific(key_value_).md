> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/setspecific(key:value:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/setspecific(key:value:))

# setSpecific(key:value:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the key/value data for the specified dispatch queue.

## Declaration

```swift
@preconcurrency func setSpecific<T>(key: DispatchSpecificKey<T>, value: T?) where T : Sendable
```

## Parameters

- `key`: The key that you use to identify the data.
- `value`: The data you want to associate with the queue.

## See Also

### Getting and Setting Contextual Data

- [getSpecific(key:)](getspecific%28key_%29-swift.method.md): Returns the value for the key associated with this dispatch queue.
- [getSpecific(key:)](getspecific%28key_%29-swift.type.method.md): Returns the value for the key associated with the current execution context.
- [DispatchSpecificKey](../dispatchspecifickey.md): A key associated with a specific contextual value on a dispatch queue.
