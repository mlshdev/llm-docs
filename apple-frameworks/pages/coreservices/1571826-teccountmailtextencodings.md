> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571826-teccountmailtextencodings](https://developer.apple.com/documentation/coreservices/1571826-teccountmailtextencodings)

# TECCountMailTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts and returns the number of currently supported e-mailencodings for a specified region.

## Declaration

```objectivec
OSStatus TECCountMailTextEncodings(RegionCode locale, ItemCount *numberEncodings);
```

## Parameters

- `locale`: A Mac OS region code. A region code designates a combination of language, writing system, and geographic region;the region may not correspond to a particular country (for example, Swiss French or Arabic).
- `numberEncodings`: On return, a pointer to the number of currently supported e-mail encodings for the region code. You use this number to determine what size array to allocate for a parameter of the [TECGetMailTextEncodings](1571845-tecgetmailtextencodings.md) function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function counts every instance of an encoding. If differentconversion plug-ins support the same direct text encoding, the directtext encoding is counted more than once. Since the `TECGetMailTextEncodings` functionignores duplicate text encoding specifications, `TECCountMailTextEncodings` mayreturn a number greater than the number of array elements needed.

## See Also

### Getting Information About Internet and Regional Text Encoding Names

- [TECCountWebTextEncodings](1571837-teccountwebtextencodings.md): Counts and returns the number of currently supported textencodings for a region code.
- [TECGetMailTextEncodings](1571845-tecgetmailtextencodings.md): Returns the currently supported mail encoding specificationsfor a region code.
- [TECGetTextEncodingFromInternetName](1571825-tecgettextencodingfrominternetna.md): Returns the Mac OS text encoding specification that correspondsto an Internet encoding name.
- [TECGetTextEncodingInternetName](1571851-tecgettextencodinginternetname.md): Returns the Internet encoding name that corresponds toa Mac OS text encoding.
- [TECGetWebTextEncodings](1571798-tecgetwebtextencodings.md): Returns the currently supported text encoding specificationsfor a region code.
