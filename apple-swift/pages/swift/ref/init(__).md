> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/ref/init(_:)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initializes an instance of `Ref` with the given borrowed value. This creates a constant reference to that value preventing writes on the original value while this reference is still active.

## Declaration

```swift
init(_ value: borrowing Value)
```
