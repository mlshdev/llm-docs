> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/foreach(_:)-2ib8a](https://developer.apple.com/documentation/xpc/xpcarray/foreach(_:)-2ib8a)

# forEach(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Calls the given closure with an index and element of the array in the same order as a for-in loop.

## Declaration

```swift
func forEach(_ body: (Int, xpc_object_t) throws -> Void) rethrows
```

## Parameters

- `body`: A closure that takes an index and an element of the sequence as parameters.

## See Also

### Iterating over an array’s elements

- [forEach(\_:)](foreach%28__%29-6obs3.md): Calls the given closure with each element in the array in the same order as a for-in loop.
