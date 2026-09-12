> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawpointer/init(mutating:)-3ws4f](https://developer.apple.com/documentation/swift/unsafemutablerawpointer/init(mutating:)-3ws4f)

# init(mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new mutable raw pointer from the given immutable raw pointer.

## Declaration

```swift
init?(mutating other: UnsafeRawPointer?)
```

## Parameters

- `other`: The immutable raw pointer to convert. If `other` is `nil`, the result is `nil`.

<a id="discussion"></a>

## Discussion

Use this initializer to explicitly convert `other` to an `UnsafeMutableRawPointer` instance. This initializer creates a new pointer to the same address as `other` and performs no allocation or copying.
