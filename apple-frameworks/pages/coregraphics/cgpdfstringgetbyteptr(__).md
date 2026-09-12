> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstringgetbyteptr(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfstringgetbyteptr(_:))

# CGPDFStringGetBytePtr(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a pointer to the bytes of a PDF string.

## Declaration

```swift
func CGPDFStringGetBytePtr(_ string: CGPDFStringRef) -> UnsafePointer<UInt8>?
```

## Parameters

- `string`: A PDF string.

<a id="return-value"></a>

## Return Value

Returns a pointer to the bytes of the specified string. If the string is `NULL`, the function returns `NULL`.

## See Also

### Getting PDF String Data

- [CGPDFStringGetLength(\_:)](cgpdfstringgetlength%28__%29.md): Returns the number of bytes in a PDF string.

# CGPDFStringGetBytePtr (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a pointer to the bytes of a PDF string.

## Declaration

```objectivec
extern const unsigned char *CGPDFStringGetBytePtr(CGPDFStringRef string);
```

## Parameters

- `string`: A PDF string.

<a id="return-value"></a>

## Return Value

Returns a pointer to the bytes of the specified string. If the string is `NULL`, the function returns `NULL`.

## See Also

### Getting PDF String Data

- [CGPDFStringGetLength](cgpdfstringgetlength%28__%29.md): Returns the number of bytes in a PDF string.
