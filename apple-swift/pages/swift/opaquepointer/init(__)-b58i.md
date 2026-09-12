> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/opaquepointer/init(_:)-b58i](https://developer.apple.com/documentation/swift/opaquepointer/init(_:)-b58i)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Converts a typed `UnsafePointer` to an opaque C pointer.

## Declaration

```swift
init?<T>(_ from: UnsafePointer<T>?) where T : ~Copyable
```

<a id="discussion"></a>

## Discussion

The result is `nil` if `from` is `nil`.
