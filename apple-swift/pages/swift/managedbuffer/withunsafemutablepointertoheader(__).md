> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/managedbuffer/withunsafemutablepointertoheader(_:)

# withUnsafeMutablePointerToHeader(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Call `body` with an `UnsafeMutablePointer` to the stored `Header`.

## Declaration

```swift
final func withUnsafeMutablePointerToHeader<E, R>(_ body: (UnsafeMutablePointer<Header>) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

<a id="discussion"></a>

## Discussion

> **Note**

> This pointer is valid only for the duration of the call to `body`. The caller is responsible for ensuring that the buffer is not being accessed elsewhere while performing this call.
