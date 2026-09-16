> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mutableref/init(_:)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initializes an instance of `MutableRef` with the given mutable value. This creates a mutable reference to that value preventing writes to the original value while this mutable reference is still active.

## Declaration

```swift
init(_ value: inout Value)
```
