> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachable/withunsafebytes(for:_:)](https://developer.apple.com/documentation/testing/attachable/withunsafebytes(for:_:))

# withUnsafeBytes(for:\_:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Call a function and pass a buffer representing this instance to it.

## Declaration

```swift
borrowing func withUnsafeBytes<R>(for attachment: borrowing Attachment<Self>, _ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```

## Parameters

- `attachment`: The attachment that is requesting a buffer (that is, the attachment containing this instance.)
- `body`: A function to call. A temporary buffer containing a data representation of this instance is passed to it.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

## Mentioned In

- [Migrating a test from XCTest](../migratingfromxctest.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> Whatever is thrown by `body`, or any error that prevented the creation of the buffer.

The testing library uses this function when saving an attachment. The format of the buffer is implementation-defined, but should be “idiomatic” for this type: for example, if this type represents an image, it would be appropriate for the buffer to contain an image in PNG format, JPEG format, etc., but it would not be idiomatic for the buffer to contain a textual description of the image.

## Default Implementations

### Attachable Implementations

- [withUnsafeBytes(for:\_:)](withunsafebytes%28for___%29-4m3s9.md): Conforms when `Self` conforms to `Encodable`. Encode this value into a buffer using either [PropertyListEncoder](https://developer.apple.com/documentation/foundation/propertylistencoder) or [JSONEncoder](https://developer.apple.com/documentation/foundation/jsonencoder), then call a function and pass that buffer to it.
- [withUnsafeBytes(for:\_:)](withunsafebytes%28for___%29-8ied9.md): Conforms when `Self` conforms to `NSSecureCoding`. Encode this object using [NSKeyedArchiver](https://developer.apple.com/documentation/foundation/nskeyedarchiver) into a buffer, then call a function and pass that buffer to it.
