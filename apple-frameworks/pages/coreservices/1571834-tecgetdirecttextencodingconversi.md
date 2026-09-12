> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571834-tecgetdirecttextencodingconversi](https://developer.apple.com/documentation/coreservices/1571834-tecgetdirecttextencodingconversi)

# TECGetDirectTextEncodingConversions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the types of direct conversions currently configuredin the Text Encoding Converter.

## Declaration

```objectivec
OSStatus TECGetDirectTextEncodingConversions(TECConversionInfo availableConversions[], ItemCount maxAvailableConversions, ItemCount *actualAvailableConversions);
```

## Parameters

- `availableConversions`: An array composed of text encoding conversion information structures, each of which specifies a set of source and destination encodings for a type of conversion. See [TECConversionInfo](tecconversioninfo.md) for more information. You should use the [TECGetDirectTextEncodingConversions](1571834-tecgetdirecttextencodingconversi.md) function to determine how large to make the array.
- `maxAvailableConversions`: The maximum number of text encoding conversion information structures that the `directConversions` array can contain.
- `actualAvailableConversions`: On return, a pointer to the number of text encoding conversion information structures returned in the `directConversions` array.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function ignores duplicate text encoding conversion informationstructures. If you used the  [TECCountDirectTextEncodingConversions](1571822-teccountdirecttextencodingconver.md) function to determine the size of the `directConversions[]` array,the number of text encoding conversion information structures maybe fewer than the number of array elements, because `TECCountDirectTextEncodingConversions` countsduplicate text encoding conversion information structures.

## See Also

### Identifying Direct Encoding Conversions 

- [TECCountDirectTextEncodingConversions](1571822-teccountdirecttextencodingconver.md): Counts and returns the number of direct conversions currentlyconfigured in the Text Encoding Converter.
