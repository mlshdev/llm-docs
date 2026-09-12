> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetmaximumsizeforencoding(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetmaximumsizeforencoding(_:_:))

# CFStringGetMaximumSizeForEncoding(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.

## Declaration

```swift
func CFStringGetMaximumSizeForEncoding(_ length: CFIndex, _ encoding: CFStringEncoding) -> CFIndex
```

## Parameters

- `length`: The number of Unicode characters to evaluate.
- `encoding`: The string encoding for the number of characters specified by `length`.

<a id="return-value"></a>

## Return Value

The maximum number of bytes that could be needed to represent `length` number of Unicode characters with the string encoding `encoding`, or [kCFNotFound](kcfnotfound.md) if the number exceeds `LONG_MAX`.

<a id="Discussion"></a>

## Discussion

The number of bytes that the encoding actually ends up requiring when converting any particular string could be less than the returned value, but never more.

## See Also

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName(\_:)](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding(\_:)](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage(\_:)](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding(\_:)](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding(\_:)](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding(\_:)](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetFastestEncoding(\_:)](cfstringgetfastestencoding%28__%29.md): Returns for a CFString object the character encoding that requires the least conversion time.
- [CFStringGetListOfAvailableEncodings()](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMostCompatibleMacStringEncoding(\_:)](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding(\_:)](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding(\_:)](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding()](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable(\_:)](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.

# CFStringGetMaximumSizeForEncoding (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.

## Declaration

```objectivec
extern CFIndex CFStringGetMaximumSizeForEncoding(CFIndex length, CFStringEncoding encoding);
```

## Parameters

- `length`: The number of Unicode characters to evaluate.
- `encoding`: The string encoding for the number of characters specified by `length`.

<a id="return-value"></a>

## Return Value

The maximum number of bytes that could be needed to represent `length` number of Unicode characters with the string encoding `encoding`, or [kCFNotFound](kcfnotfound.md) if the number exceeds `LONG_MAX`.

<a id="Discussion"></a>

## Discussion

The number of bytes that the encoding actually ends up requiring when converting any particular string could be less than the returned value, but never more.

## See Also

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetFastestEncoding](cfstringgetfastestencoding%28__%29.md): Returns for a CFString object the character encoding that requires the least conversion time.
- [CFStringGetListOfAvailableEncodings](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMostCompatibleMacStringEncoding](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.
