> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringgetsystemencoding()](https://developer.apple.com/documentation/corefoundation/cfstringgetsystemencoding())

# CFStringGetSystemEncoding() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the default encoding used by the operating system when it creates strings.

## Declaration

```swift
func CFStringGetSystemEncoding() -> CFStringEncoding
```

<a id="return-value"></a>

## Return Value

The default string encoding.

<a id="Discussion"></a>

## Discussion

This function returns the default text encoding used by the OS when it creates strings. In macOS, this encoding is determined by the user’s preferred language setting. The preferred language is the first language listed in the International pane of the System Preferences.

In most situations you will not want to use this function, however, because your primary interest will be your application’s default text encoding. The application encoding is required when you create a CFStringRef from strings stored in Resource Manager resources, which typically use one of the Mac encodings such as MacRoman or MacJapanese.

To get your application’s default text encoding, call the `GetApplicationTextEncoding` Carbon function.

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
- [CFStringGetMaximumSizeForEncoding(\_:\_:)](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding(\_:)](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding(\_:)](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding(\_:)](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringIsEncodingAvailable(\_:)](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.

# CFStringGetSystemEncoding (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the default encoding used by the operating system when it creates strings.

## Declaration

```objectivec
extern CFStringEncoding CFStringGetSystemEncoding();
```

<a id="return-value"></a>

## Return Value

The default string encoding.

<a id="Discussion"></a>

## Discussion

This function returns the default text encoding used by the OS when it creates strings. In macOS, this encoding is determined by the user’s preferred language setting. The preferred language is the first language listed in the International pane of the System Preferences.

In most situations you will not want to use this function, however, because your primary interest will be your application’s default text encoding. The application encoding is required when you create a CFStringRef from strings stored in Resource Manager resources, which typically use one of the Mac encodings such as MacRoman or MacJapanese.

To get your application’s default text encoding, call the `GetApplicationTextEncoding` Carbon function.

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
- [CFStringGetMaximumSizeForEncoding](cfstringgetmaximumsizeforencoding%28____%29.md): Returns the maximum number of bytes a string of a specified length (in Unicode characters) will take up if encoded in a specified encoding.
- [CFStringGetMostCompatibleMacStringEncoding](cfstringgetmostcompatiblemacstringencoding%28__%29.md): Returns the most compatible Mac OS script value for the given input encoding.
- [CFStringGetNameOfEncoding](cfstringgetnameofencoding%28__%29.md): Returns the canonical name of a specified string encoding.
- [CFStringGetSmallestEncoding](cfstringgetsmallestencoding%28__%29.md): Returns the smallest encoding on the current system for the character contents of a string.
- [CFStringIsEncodingAvailable](cfstringisencodingavailable%28__%29.md): Determines whether a given Core Foundation string encoding is available on the current system.
