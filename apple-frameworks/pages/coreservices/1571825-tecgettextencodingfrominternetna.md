> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571825-tecgettextencodingfrominternetna](https://developer.apple.com/documentation/coreservices/1571825-tecgettextencodingfrominternetna)

# TECGetTextEncodingFromInternetName

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the Mac OS text encoding specification that correspondsto an Internet encoding name.

## Declaration

```objectivec
OSStatus TECGetTextEncodingFromInternetName(TextEncoding *textEncoding, ConstStr255Param encodingName);
```

## Parameters

- `textEncoding`: On return, a pointer to a structure that contains a Mac OS text encoding specification.
- `encodingName`: An Internet encoding name, in 7-bit US ASCII.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

Internet encoding names are stored as strings, while the TextEncoding Converter uses numeric values.

## See Also

### Getting Information About Internet and Regional Text Encoding Names

- [TECCountMailTextEncodings](1571826-teccountmailtextencodings.md): Counts and returns the number of currently supported e-mailencodings for a specified region.
- [TECCountWebTextEncodings](1571837-teccountwebtextencodings.md): Counts and returns the number of currently supported textencodings for a region code.
- [TECGetMailTextEncodings](1571845-tecgetmailtextencodings.md): Returns the currently supported mail encoding specificationsfor a region code.
- [TECGetTextEncodingInternetName](1571851-tecgettextencodinginternetname.md): Returns the Internet encoding name that corresponds toa Mac OS text encoding.
- [TECGetWebTextEncodings](1571798-tecgetwebtextencodings.md): Returns the currently supported text encoding specificationsfor a region code.
