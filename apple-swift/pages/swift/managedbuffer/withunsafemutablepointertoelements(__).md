> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbuffer/withunsafemutablepointertoelements(_:)](https://developer.apple.com/documentation/swift/managedbuffer/withunsafemutablepointertoelements(_:))

# withUnsafeMutablePointerToElements(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Call `body` with an `UnsafeMutablePointer` to the `Element` storage.

## Declaration

```swift
final func withUnsafeMutablePointerToElements<E, R>(_ body: (UnsafeMutablePointer<Element>) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

<a id="discussion"></a>

## Discussion

> **Note**

> This pointer is valid only for the duration of the call to `body`. The caller is responsible for ensuring that the buffer is not being accessed elsewhere while performing this call.
