> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringencoding](https://developer.apple.com/documentation/corefoundation/cfstringencoding)

# CFStringEncoding (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An integer type for constants used to specify supported string encodings in various CFString functions.

## Declaration

```swift
typealias CFStringEncoding = UInt32
```

<a id="Discussion"></a>

## Discussion

This type is used to define the constants for the built-in encodings (see [CFStringBuiltInEncodings](cfstringbuiltinencodings.md) for a list) and for platform-dependent encodings (see [External String Encodings](external-string-encodings.md)). If CFString does not recognize or support the string encoding of a particular string, CFString functions will identify the string’s encoding as [kCFStringEncodingInvalidId](kcfstringencodinginvalidid.md).

## See Also

### Data Types

- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

# CFStringEncoding (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An integer type for constants used to specify supported string encodings in various CFString functions.

## Declaration

```objectivec
typedef UInt32 CFStringEncoding;
```

<a id="Discussion"></a>

## Discussion

This type is used to define the constants for the built-in encodings (see [CFStringBuiltInEncodings](cfstringbuiltinencodings.md) for a list) and for platform-dependent encodings (see [External String Encodings](external-string-encodings.md)). If CFString does not recognize or support the string encoding of a particular string, CFString functions will identify the string’s encoding as [kCFStringEncodingInvalidId](kcfstringencodinginvalidid.md).

## See Also

### Data Types

- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .
- [CFStringInlineBuffer](cfstringinlinebuffer.md): Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.
