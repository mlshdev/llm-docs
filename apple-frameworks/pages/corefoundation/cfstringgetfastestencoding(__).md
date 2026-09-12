> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetfastestencoding(_:)](https://developer.apple.com/documentation/corefoundation/cfstringgetfastestencoding(_:))

# CFStringGetFastestEncoding(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns for a CFString object the character encoding that requires the least conversion time.

## Declaration

```swift
func CFStringGetFastestEncoding(_ theString: CFString!) -> CFStringEncoding
```

## Parameters

- `theString`: The string for which to determine the fastest encoding.

<a id="return-value"></a>

## Return Value

The string encoding to which `theString` can be converted the fastest.

## See Also

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName(\_:)](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding(\_:)](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage(\_:)](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding(\_:)](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding(\_:)](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding(\_:)](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetListOfAvailableEncodings()](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMaximumSizeForEncoding(\_:\_:)](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding(\_:)](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding(\_:)](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding(\_:)](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding()](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable(\_:)](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.

# CFStringGetFastestEncoding (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns for a CFString object the character encoding that requires the least conversion time.

## Declaration

```objectivec
extern CFStringEncoding CFStringGetFastestEncoding(CFStringRef theString);
```

## Parameters

- `theString`: The string for which to determine the fastest encoding.

<a id="return-value"></a>

## Return Value

The string encoding to which `theString` can be converted the fastest.

## See Also

### Working With Encodings

- [CFStringConvertEncodingToIANACharSetName](cfstringconvertencodingtoianacharsetname%28__%29.md): Returns the name of the IANA registry “charset” that is the closest mapping to a specified string encoding.
- [CFStringConvertEncodingToNSStringEncoding](cfstringconvertencodingtonsstringencoding%28__%29.md): Returns the Cocoa encoding constant that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertEncodingToWindowsCodepage](cfstringconvertencodingtowindowscodepage%28__%29.md): Returns the Windows codepage identifier that maps most closely to a given Core Foundation encoding constant.
- [CFStringConvertIANACharSetNameToEncoding](cfstringconvertianacharsetnametoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given IANA registry “charset” name.
- [CFStringConvertNSStringEncodingToEncoding](cfstringconvertnsstringencodingtoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Cocoa encoding.
- [CFStringConvertWindowsCodepageToEncoding](cfstringconvertwindowscodepagetoencoding%28__%29.md): Returns the Core Foundation encoding constant that is the closest mapping to a given Windows codepage identifier.
- [CFStringGetListOfAvailableEncodings](cfstringgetlistofavailableencodings%28%29.md): Returns a pointer to a list of string encodings supported by the current system.
- [CFStringGetMaximumSizeForEncoding](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringGetSystemEncoding](cfstringgetsystemencoding%28%29.md): Returns the default encoding used by the operating system when it creates strings.
- [CFStringIsEncodingAvailable](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.
