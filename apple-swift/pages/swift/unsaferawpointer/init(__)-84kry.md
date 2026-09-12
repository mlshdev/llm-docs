> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/init(_:)-84kry](https://developer.apple.com/documentation/swift/unsaferawpointer/init(_:)-84kry)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new raw pointer from the given typed pointer.

## Declaration

```swift
init<T>(_ other: UnsafePointer<T>) where T : ~Copyable
```

## Parameters

- `other`: The typed pointer to convert.

<a id="discussion"></a>

## Discussion

Use this initializer to explicitly convert `other` to an `UnsafeRawPointer` instance. This initializer creates a new pointer to the same address as `other` and performs no allocation or copying.
