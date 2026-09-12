> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/withunsafemutablepointertoelements(_:)](https://developer.apple.com/documentation/swift/managedbufferpointer/withunsafemutablepointertoelements(_:))

# withUnsafeMutablePointerToElements(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Call `body` with an `UnsafeMutablePointer` to the `Element` storage.

## Declaration

```swift
func withUnsafeMutablePointerToElements<E, R>(_ body: (UnsafeMutablePointer<Element>) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

<a id="discussion"></a>

## Discussion

> **Note**

> This pointer is valid only for the duration of the call to `body`. The caller is responsible for ensuring that the buffer is not being accessed anyone else while performing this call.

## See Also

### Accessing Buffer Contents

- [withUnsafeMutablePointerToHeader(\_:)](withunsafemutablepointertoheader%28__%29.md): Call `body` with an `UnsafeMutablePointer` to the stored `Header`.
- [withUnsafeMutablePointers(\_:)](withunsafemutablepointers%28__%29.md): Call `body` with `UnsafeMutablePointer`s to the stored `Header` and raw `Element` storage.
