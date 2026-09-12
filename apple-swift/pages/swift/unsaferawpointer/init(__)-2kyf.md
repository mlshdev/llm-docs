> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/init(_:)-2kyf](https://developer.apple.com/documentation/swift/unsaferawpointer/init(_:)-2kyf)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new raw pointer from an `AutoreleasingUnsafeMutablePointer` instance.

## Declaration

```swift
init?<T>(_ other: AutoreleasingUnsafeMutablePointer<T>?)
```

## Parameters

- `other`: The pointer to convert. If `other` is `nil`, the result is `nil`.
