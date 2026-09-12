> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/withunsafebytes(_:)](https://developer.apple.com/documentation/testing/attachment/withunsafebytes(_:))

# withUnsafeBytes(\_:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Call a function and pass a buffer representing the value of this instance’s [attachableValue](attachablevalue-2tnj5.md) property to it.

## Declaration

```swift
borrowing func withUnsafeBytes<R>(_ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```

## Parameters

- `body`: A function to call. A temporary buffer containing a data representation of this instance is passed to it.

<a id="return-value"></a>

## Return Value

Whatever is returned by `body`.

<a id="discussion"></a>

## Discussion

> **Throws**

> Whatever is thrown by `body`, or any error that prevented the creation of the buffer.

The testing library uses this function when saving an attachment. This function calls the [withUnsafeBytes(for:\_:)](../attachable/withunsafebytes%28for___%29.md) function on this attachment’s [attachableValue](attachablevalue-2tnj5.md) property.
