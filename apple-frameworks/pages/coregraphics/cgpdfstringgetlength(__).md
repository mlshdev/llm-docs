> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfstringgetlength(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfstringgetlength(_:))

# CGPDFStringGetLength(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of bytes in a PDF string.

## Declaration

```swift
func CGPDFStringGetLength(_ string: CGPDFStringRef) -> Int
```

## Parameters

- `string`: A PDF string.

<a id="return-value"></a>

## Return Value

Returns the number of bytes referenced by the string, or `0` if the string is `NULL`.

## See Also

### Getting PDF String Data

- [CGPDFStringGetBytePtr(\_:)](cgpdfstringgetbyteptr%28__%29.md): Returns a pointer to the bytes of a PDF string.

# CGPDFStringGetLength (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the number of bytes in a PDF string.

## Declaration

```objectivec
extern size_t CGPDFStringGetLength(CGPDFStringRef string);
```

## Parameters

- `string`: A PDF string.

<a id="return-value"></a>

## Return Value

Returns the number of bytes referenced by the string, or `0` if the string is `NULL`.

## See Also

### Getting PDF String Data

- [CGPDFStringGetBytePtr](cgpdfstringgetbyteptr%28__%29.md): Returns a pointer to the bytes of a PDF string.
