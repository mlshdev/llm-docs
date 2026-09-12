> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571822-teccountdirecttextencodingconver](https://developer.apple.com/documentation/coreservices/1571822-teccountdirecttextencodingconver)

# TECCountDirectTextEncodingConversions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts and returns the number of direct conversions currentlyconfigured in the Text Encoding Converter.

## Declaration

```objectivec
OSStatus TECCountDirectTextEncodingConversions(ItemCount *numberOfEncodings);
```

## Parameters

- `numberOfEncodings`: On return, a pointer to the number of direct conversions. You should use this value to determine the array size for a parameter of the [TECGetDirectTextEncodingConversions](1571834-tecgetdirecttextencodingconversi.md) function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

The number of direct conversions includes every instance ofa conversion. If different conversion plug-ins support the samedirect conversion, the direct conversion is counted more than once.

Since the  [TECGetDirectTextEncodingConversions](1571834-tecgetdirecttextencodingconversi.md) function ignores duplicate direct conversions, `TECCountDirectTextEncodingConversions` mayreturn a number greater than the number of array elements neededfor the `directConversions` parameter.

## See Also

### Identifying Direct Encoding Conversions 

- [TECGetDirectTextEncodingConversions](1571834-tecgetdirecttextencodingconversi.md): Returns the types of direct conversions currently configuredin the Text Encoding Converter.
