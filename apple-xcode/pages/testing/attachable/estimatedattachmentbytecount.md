> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachable/estimatedattachmentbytecount](https://developer.apple.com/documentation/testing/attachable/estimatedattachmentbytecount)

# estimatedAttachmentByteCount

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

An estimate of the number of bytes of memory needed to store this value as an attachment.

## Declaration

```swift
var estimatedAttachmentByteCount: Int? { get }
```

<a id="discussion"></a>

## Discussion

The testing library uses this property to determine if an attachment should be held in memory or should be immediately saved. Larger attachments are more likely to be saved immediately, but the algorithm the testing library uses is an implementation detail and is subject to change.

The value of this property is approximately equal to the number of bytes that will actually be needed, or `nil` if the value cannot be computed efficiently. The default implementation of this property returns `nil`.

> **Complexity**

> O(1) unless `Self` conforms to `Collection`, in which case up to O(*n*) where *n* is the length of the collection.

## Default Implementations

### Attachable Implementations

- [estimatedAttachmentByteCount](estimatedattachmentbytecount-28nbn.md): Conforms when `Self` conforms to `StringProtocol`.
- [estimatedAttachmentByteCount](estimatedattachmentbytecount-6c2cj.md): Conforms when `Self` conforms to `Collection` and `Element` is `UInt8`.
- [estimatedAttachmentByteCount](estimatedattachmentbytecount-o90w.md)
