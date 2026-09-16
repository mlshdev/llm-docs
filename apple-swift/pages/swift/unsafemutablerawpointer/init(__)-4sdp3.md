> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafemutablerawpointer/init(_:)-4sdp3

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new raw pointer from an `AutoreleasingUnsafeMutablePointer` instance.

## Declaration

```swift
init<T>(_ other: AutoreleasingUnsafeMutablePointer<T>)
```

## Parameters

- `other`: The pointer to convert.
