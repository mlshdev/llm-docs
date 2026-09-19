> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfstringcopytextstring(_:)

# CGPDFStringCopyTextString(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a CFString object that represents a PDF string as a text string.

## Declaration

```swift
func CGPDFStringCopyTextString(_ string: CGPDFStringRef) -> CFString?
```

## Parameters

- `string`: A PDF string. If this value is `NULL`, it will cause an error.

<a id="return-value"></a>

## Return Value

Returns a CFString object that represents the specified PDF string as a text string. You are responsible for releasing this object.

## See Also

### Converting PDF Strings

- [CGPDFStringCopyDate(\_:)](cgpdfstringcopydate%28__%29.md): Converts a string to a date.

# CGPDFStringCopyTextString (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a CFString object that represents a PDF string as a text string.

## Declaration

```objectivec
extern CFStringRefCGPDFStringCopyTextString(CGPDFStringRef string);
```

## Parameters

- `string`: A PDF string. If this value is `NULL`, it will cause an error.

<a id="return-value"></a>

## Return Value

Returns a CFString object that represents the specified PDF string as a text string. You are responsible for releasing this object.

## See Also

### Converting PDF Strings

- [CGPDFStringCopyDate](cgpdfstringcopydate%28__%29.md): Converts a string to a date.
