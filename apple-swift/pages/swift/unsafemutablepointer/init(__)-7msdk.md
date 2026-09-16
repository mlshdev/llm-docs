> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafemutablepointer/init(_:)-7msdk

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a mutable typed pointer referencing the same memory as the given mutable pointer.

## Declaration

```swift
init(_ other: UnsafeMutablePointer<Pointee>)
```

## Parameters

- `other`: The pointer to convert.
