> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/foreach(_:)-9hufx](https://developer.apple.com/documentation/xpc/xpcdictionary/foreach(_:)-9hufx)

# forEach(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calls the given closure with each element in the dictionary in the same order as a for-in loop.

## Declaration

```swift
func forEach(_ body: (XPCDictionary.KeyValuePair) throws -> Void) rethrows
```

## Parameters

- `body`: A closure that takes an element of the sequence as a parameter.

## See Also

### Iterating over keys and values

- [forEach(\_:)](foreach%28__%29-6riqn.md): Calls the given closure with each key and value in the dictionary in the same order as a for-in loop.
