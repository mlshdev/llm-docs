> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachableasimage/withunsafebytes(as:_:)](https://developer.apple.com/documentation/testing/attachableasimage/withunsafebytes(as:_:))

# withUnsafeBytes(as:\_:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.3+ · Xcode 26.4+

Encode a representation of this image in a given image format.

## Declaration

```swift
borrowing func withUnsafeBytes<R>(as imageFormat: AttachableImageFormat, _ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```

## Parameters

- `imageFormat`: The image format to use when encoding this image.
- `body`: A function to call. A temporary buffer containing a data representation of this instance is passed to it.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

> **Throws**

> Whatever is thrown by `body`, or any error that prevented the creation of the buffer.

The testing library uses this function when saving an image as an attachment. The implementation should use `imageFormat` to determine what encoder to use.
