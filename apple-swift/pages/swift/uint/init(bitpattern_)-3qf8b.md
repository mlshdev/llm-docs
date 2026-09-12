> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint/init(bitpattern:)-3qf8b](https://developer.apple.com/documentation/swift/uint/init(bitpattern:)-3qf8b)

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value with the bit pattern of the given pointer.

## Declaration

```swift
init<P>(bitPattern pointer: P?) where P : _Pointer
```

## Parameters

- `pointer`: The pointer to use as the source for the new integer.

<a id="discussion"></a>

## Discussion

The new value represents the address of the pointer passed as `pointer`. If `pointer` is `nil`, the result is `0`.
