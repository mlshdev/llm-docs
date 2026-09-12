> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/opaquepointer/init(bitpattern:)-7f8tm](https://developer.apple.com/documentation/swift/opaquepointer/init(bitpattern:)-7f8tm)

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new `OpaquePointer` from the given address, specified as a bit pattern.

## Declaration

```swift
init?(bitPattern: UInt)
```

## Parameters

- `bitPattern`: A bit pattern to use for the address of the new pointer. If `bitPattern` is zero, the result is `nil`.
