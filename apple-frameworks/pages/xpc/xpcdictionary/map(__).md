> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/map(_:)](https://developer.apple.com/documentation/xpc/xpcdictionary/map(_:))

# map(\_:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns an array containing the results of mapping the given closure over the sequence’s elements.

## Declaration

```swift
func map<ReturnType>(_ transform: (XPCDictionary.KeyValuePair) throws -> ReturnType) rethrows -> [ReturnType]
```

## Parameters

- `transform`: A mapping closure. `transform` accepts an element of this sequence as its parameter and returns a transformed value of the same or of a different type.

<a id="return-value"></a>

## Return Value

An array containing the transformed elements of this sequence.
