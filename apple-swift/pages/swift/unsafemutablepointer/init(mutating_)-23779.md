> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/init(mutating:)-23779](https://developer.apple.com/documentation/swift/unsafemutablepointer/init(mutating:)-23779)

# init(mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable typed pointer referencing the same memory as the given immutable pointer.

## Declaration

```swift
init?(mutating other: UnsafePointer<Pointee>?)
```

## Parameters

- `other`: The immutable pointer to convert. If `other` is `nil`, the result is `nil`.
