> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagebuffer_getsize(_:)](https://developer.apple.com/documentation/accelerate/vimagebuffer_getsize(_:))

# vImageBuffer_GetSize(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the size, in pixels, of a vImage buffer.

## Declaration

```swift
func vImageBuffer_GetSize(_ buf: UnsafePointer<vImage_Buffer>) -> CGSize
```

## Parameters

- `buf`: The vImage buffer to query.

<a id="return-value"></a>

## Return Value

The size of the buffer.

<a id="Discussion"></a>

## Discussion

The vImage library defines a buffer’s width and height as [vImagePixelCount](vimagepixelcount.md) values that may be larger than [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/floatingpoint/greatestfinitemagnitude). This function rounds down the buffer’s dimensions to the nearest representable [CGFloat](../corefoundation/cgfloat-swift.struct.md) values that are less than, or equal to, the size of the buffer.

# vImageBuffer_GetSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the size, in pixels, of a vImage buffer.

## Declaration

```objectivec
CGSize vImageBuffer_GetSize(const vImage_Buffer *buf);
```

## Parameters

- `buf`: The vImage buffer to query.

<a id="return-value"></a>

## Return Value

The size of the buffer.

<a id="Discussion"></a>

## Discussion

The vImage library defines a buffer’s width and height as [vImagePixelCount](vimagepixelcount.md) values that may be larger than [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/floatingpoint/greatestfinitemagnitude). This function rounds down the buffer’s dimensions to the nearest representable [CGFloat](../corefoundation/cgfloat-swift.struct.md) values that are less than, or equal to, the size of the buffer.
