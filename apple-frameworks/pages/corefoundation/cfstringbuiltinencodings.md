> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringbuiltinencodings](https://developer.apple.com/documentation/corefoundation/cfstringbuiltinencodings)

# CFStringBuiltInEncodings (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Encodings that are built-in on all platforms on which macOS runs.

## Declaration

```swift
enum CFStringBuiltInEncodings
```

## Topics

### Constants

- [CFStringBuiltInEncodings.macRoman](cfstringbuiltinencodings/macroman.md): An encoding constant that identifies the Mac Roman encoding.
- [CFStringBuiltInEncodings.windowsLatin1](cfstringbuiltinencodings/windowslatin1.md): An encoding constant that identifies the Windows Latin 1 encoding (ANSI codepage 1252).
- [CFStringBuiltInEncodings.isoLatin1](cfstringbuiltinencodings/isolatin1.md): An encoding constant that identifies the ISO Latin 1 encoding (ISO 8859-1)
- [CFStringBuiltInEncodings.nextStepLatin](cfstringbuiltinencodings/nextsteplatin.md): An encoding constant that identifies the NextStep/OpenStep encoding.
- [CFStringBuiltInEncodings.ASCII](cfstringbuiltinencodings/ascii.md): An encoding constant that identifies the ASCII encoding (decimal values 0 through 127).
- [CFStringBuiltInEncodings.unicode](cfstringbuiltinencodings/unicode.md): An encoding constant that identifies the Unicode encoding.
- [CFStringBuiltInEncodings.UTF8](cfstringbuiltinencodings/utf8.md): An encoding constant that identifies the UTF 8 encoding.
- [CFStringBuiltInEncodings.nonLossyASCII](cfstringbuiltinencodings/nonlossyascii.md): An encoding constant that identifies non-lossy ASCII encoding.
- [UTF16](cfstringbuiltinencodings/utf16.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16Format encoding (alias of kCFStringEncodingUnicode).
- [CFStringBuiltInEncodings.UTF16BE](cfstringbuiltinencodings/utf16be.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16BEFormat encoding. This constant specifies big-endian byte order.
- [CFStringBuiltInEncodings.UTF16LE](cfstringbuiltinencodings/utf16le.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16LEFormat encoding. This constant specifies little-endian byte order.
- [CFStringBuiltInEncodings.UTF32](cfstringbuiltinencodings/utf32.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32Format encoding.
- [CFStringBuiltInEncodings.UTF32BE](cfstringbuiltinencodings/utf32be.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32BEFormat encoding. This constant specifies big-endian byte order.
- [CFStringBuiltInEncodings.UTF32LE](cfstringbuiltinencodings/utf32le.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32LEFormat encoding. This constant specifies little-endian byte order.

### Initializers

- [init(rawValue:)](cfstringbuiltinencodings/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [String Comparison Flags](string-comparison-flags.md): Flags that specify how string comparisons are performed.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.

# CFStringBuiltInEncodings (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Encodings that are built-in on all platforms on which macOS runs.

## Declaration

```objectivec
enum CFStringBuiltInEncodings : CFStringEncoding;
```

## Topics

### Constants

- [kCFStringEncodingMacRoman](cfstringbuiltinencodings/macroman.md): An encoding constant that identifies the Mac Roman encoding.
- [kCFStringEncodingWindowsLatin1](cfstringbuiltinencodings/windowslatin1.md): An encoding constant that identifies the Windows Latin 1 encoding (ANSI codepage 1252).
- [kCFStringEncodingISOLatin1](cfstringbuiltinencodings/isolatin1.md): An encoding constant that identifies the ISO Latin 1 encoding (ISO 8859-1)
- [kCFStringEncodingNextStepLatin](cfstringbuiltinencodings/nextsteplatin.md): An encoding constant that identifies the NextStep/OpenStep encoding.
- [kCFStringEncodingASCII](cfstringbuiltinencodings/ascii.md): An encoding constant that identifies the ASCII encoding (decimal values 0 through 127).
- [kCFStringEncodingUnicode](cfstringbuiltinencodings/unicode.md): An encoding constant that identifies the Unicode encoding.
- [kCFStringEncodingUTF8](cfstringbuiltinencodings/utf8.md): An encoding constant that identifies the UTF 8 encoding.
- [kCFStringEncodingNonLossyASCII](cfstringbuiltinencodings/nonlossyascii.md): An encoding constant that identifies non-lossy ASCII encoding.
- [kCFStringEncodingUTF16](cfstringbuiltinencodings/utf16.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16Format encoding (alias of kCFStringEncodingUnicode).
- [kCFStringEncodingUTF16BE](cfstringbuiltinencodings/utf16be.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16BEFormat encoding. This constant specifies big-endian byte order.
- [kCFStringEncodingUTF16LE](cfstringbuiltinencodings/utf16le.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF16LEFormat encoding. This constant specifies little-endian byte order.
- [kCFStringEncodingUTF32](cfstringbuiltinencodings/utf32.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32Format encoding.
- [kCFStringEncodingUTF32BE](cfstringbuiltinencodings/utf32be.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32BEFormat encoding. This constant specifies big-endian byte order.
- [kCFStringEncodingUTF32LE](cfstringbuiltinencodings/utf32le.md): An encoding constant that identifies kTextEncodingUnicodeDefault + kUnicodeUTF32LEFormat encoding. This constant specifies little-endian byte order.

## See Also

### Constants

- [String Comparison Flags](string-comparison-flags.md): Flags that specify how string comparisons are performed.
- [Invalid String Encoding Flag](invalid-string-encoding-flag.md): Special value returned from functions to indicate a string encoding that is not supported or recognized by CFString.
- [External String Encodings](external-string-encodings.md): `CFStringEncoding` constants for encodings that may be supported by CFString.
