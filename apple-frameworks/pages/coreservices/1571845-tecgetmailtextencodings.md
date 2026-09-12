> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571845-tecgetmailtextencodings](https://developer.apple.com/documentation/coreservices/1571845-tecgetmailtextencodings)

# TECGetMailTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the currently supported mail encoding specificationsfor a region code.

## Declaration

```objectivec
OSStatus TECGetMailTextEncodings(RegionCode locale, TextEncoding availableEncodings[], ItemCount maxAvailableEncodings, ItemCount *actualAvailableEncodings);
```

## Parameters

- `locale`: A Mac OS region code. A region code designates a combination of language, writing system, and geographic region;the region may not correspond to a particular country (for example, Swiss French or Arabic).
- `availableEncodings`: An array of text encoding specifications. On return, the array contains specifications for the e-mail text encodings for a region code. You should use the function [TECCountMailTextEncodings](1571826-teccountmailtextencodings.md) function to determine what size array to allocate.
- `maxAvailableEncodings`: The number of text encoding specifications the `availableEncodings` array can contain.
- `actualAvailableEncodings`: On return, a pointer to the number of text encodings in the `availableEncodings` array.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function ignores duplicate text encoding specifications.If you used the  [TECCountMailTextEncodings](1571826-teccountmailtextencodings.md) function to determine the size of the `availableEncodings[]` arraythe number of available encodings may be fewer than the number ofarray elements, because `TECCountMailTextEncodings` includesduplicate text encoding specifications in its count.

## See Also

### Getting Information About Internet and Regional Text Encoding Names

- [TECCountMailTextEncodings](1571826-teccountmailtextencodings.md): Counts and returns the number of currently supported e-mailencodings for a specified region.
- [TECCountWebTextEncodings](1571837-teccountwebtextencodings.md): Counts and returns the number of currently supported textencodings for a region code.
- [TECGetTextEncodingFromInternetName](1571825-tecgettextencodingfrominternetna.md): Returns the Mac OS text encoding specification that correspondsto an Internet encoding name.
- [TECGetTextEncodingInternetName](1571851-tecgettextencodinginternetname.md): Returns the Internet encoding name that corresponds toa Mac OS text encoding.
- [TECGetWebTextEncodings](1571798-tecgetwebtextencodings.md): Returns the currently supported text encoding specificationsfor a region code.
