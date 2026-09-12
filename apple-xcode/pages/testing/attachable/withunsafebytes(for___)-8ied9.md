> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachable/withunsafebytes(for:_:)-8ied9](https://developer.apple.com/documentation/testing/attachable/withunsafebytes(for:_:)-8ied9)

# withUnsafeBytes(for:\_:)

**Framework:** Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Encode this object using [NSKeyedArchiver](https://developer.apple.com/documentation/foundation/nskeyedarchiver) into a buffer, then call a function and pass that buffer to it.

## Declaration

```swift
func withUnsafeBytes<R>(for attachment: borrowing Attachment<Self>, _ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```

## Parameters

- `attachment`: The attachment that is requesting a buffer (that is, the attachment containing this instance.)
- `body`: A function to call. A temporary buffer containing a data representation of this instance is passed to it.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

> **Throws**

> Whatever is thrown by `body`, or any error that prevented the creation of the buffer.

The testing library uses this function when writing an attachment to a test report or to a file on disk. The encoding used depends on the path extension specified by the value of `attachment`’s [preferredName](../attachment/preferredname.md) property:

| Extension | Encoding Used | Encoder Used |
| --- | --- | --- |
| `".xml"` | XML property list | [NSKeyedArchiver](https://developer.apple.com/documentation/foundation/nskeyedarchiver) |
| None, `".plist"` | Binary property list | [`NSKeyedArchiver`](https://developer.apple.com/documentation/foundation/nskeyedarchiver) |

OpenStep-style property lists are not supported. If a value conforms to *both* [Encodable](https://developer.apple.com/documentation/swift/encodable) *and* [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding), the default implementation of this function uses the value’s conformance to `Encodable`.
