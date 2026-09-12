> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/autoreleasingunsafemutablepointer/init(_:)-4mrz1](https://developer.apple.com/documentation/swift/autoreleasingunsafemutablepointer/init(_:)-4mrz1)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Explicit construction from an UnsafeMutablePointer.

## Declaration

```swift
init<U>(_ from: UnsafeMutablePointer<U>)
```

<a id="discussion"></a>

## Discussion

This is inherently unsafe; UnsafeMutablePointer assumes the referenced memory has +1 strong ownership semantics, whereas AutoreleasingUnsafeMutablePointer implies +0 semantics.

> **Warning**

> Accessing `pointee` as a type that is unrelated to the underlying memory’s bound type is undefined.

## See Also

### Converting Pointers

- [init(\_:)](init%28__%29-7rndr.md): Explicit construction from an UnsafeMutablePointer.
