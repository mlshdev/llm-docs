> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgpdfstringcopydate(_:)

# CGPDFStringCopyDate(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a string to a date.

## Declaration

```swift
func CGPDFStringCopyDate(_ string: CGPDFStringRef) -> CFDate?
```

## Parameters

- `string`: The string to convert to a date.

<a id="return-value"></a>

## Return Value

A CFDate object.

<a id="Discussion"></a>

## Discussion

The PDF specification defines a specific format for strings that represent dates. This function converts strings in that form to CFDate objects.

## See Also

### Converting PDF Strings

- [CGPDFStringCopyTextString(\_:)](cgpdfstringcopytextstring%28__%29.md): Returns a CFString object that represents a PDF string as a text string.

# CGPDFStringCopyDate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Converts a string to a date.

## Declaration

```objectivec
extern CFDateRefCGPDFStringCopyDate(CGPDFStringRef string);
```

## Parameters

- `string`: The string to convert to a date.

<a id="return-value"></a>

## Return Value

A CFDate object.

<a id="Discussion"></a>

## Discussion

The PDF specification defines a specific format for strings that represent dates. This function converts strings in that form to CFDate objects.

## See Also

### Converting PDF Strings

- [CGPDFStringCopyTextString](cgpdfstringcopytextstring%28__%29.md): Returns a CFString object that represents a PDF string as a text string.
