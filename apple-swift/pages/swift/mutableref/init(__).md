> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutableref/init(_:)](https://developer.apple.com/documentation/swift/mutableref/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initializes an instance of `MutableRef` with the given mutable value. This creates a mutable reference to that value preventing writes to the original value while this mutable reference is still active.

## Declaration

```swift
init(_ value: inout Value)
```
