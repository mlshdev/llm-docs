> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571837-teccountwebtextencodings](https://developer.apple.com/documentation/coreservices/1571837-teccountwebtextencodings)

# TECCountWebTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts and returns the number of currently supported textencodings for a region code.

## Declaration

```objectivec
OSStatus TECCountWebTextEncodings(RegionCode locale, ItemCount *numberEncodings);
```

## Parameters

- `locale`: A Mac OS region code indicating the locale for which you want to count encodings. A region code designates a combination of language, writing system, and geographic region;the region may not correspond to a particular country (for example, Swiss French or Arabic).
- `numberEncodings`: On return, a pointer to the number of currently supported text encodings for a region code. You should use this number to determine how large to make the array you pass to the [TECGetWebTextEncodings](1571798-tecgetwebtextencodings.md) function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function counts every instance of the same encoding.That is, if different conversion plug-ins support the same textencoding for a conversion process, the text encoding is countedmore than once. Since the `TECGetWebTextEncodings` functionignores duplicate text encoding specifications, `TECCountWebTextEncodings` mayreturn a number greater than the number of array elements neededfor the `availableEncodings[]` parameter.

## See Also

### Getting Information About Internet and Regional Text Encoding Names

- [TECCountMailTextEncodings](1571826-teccountmailtextencodings.md): Counts and returns the number of currently supported e-mailencodings for a specified region.
- [TECGetMailTextEncodings](1571845-tecgetmailtextencodings.md): Returns the currently supported mail encoding specificationsfor a region code.
- [TECGetTextEncodingFromInternetName](1571825-tecgettextencodingfrominternetna.md): Returns the Mac OS text encoding specification that correspondsto an Internet encoding name.
- [TECGetTextEncodingInternetName](1571851-tecgettextencodinginternetname.md): Returns the Internet encoding name that corresponds toa Mac OS text encoding.
- [TECGetWebTextEncodings](1571798-tecgetwebtextencodings.md): Returns the currently supported text encoding specificationsfor a region code.
