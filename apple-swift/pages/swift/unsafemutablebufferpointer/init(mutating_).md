> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/init(mutating:)

# init(mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable typed buffer pointer referencing the same memory as the given immutable buffer pointer.

## Declaration

```swift
init(mutating other: UnsafeBufferPointer<Element>)
```

## Parameters

- `other`: The immutable buffer pointer to convert.
