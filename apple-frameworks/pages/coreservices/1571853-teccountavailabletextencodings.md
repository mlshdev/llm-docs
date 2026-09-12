> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571853-teccountavailabletextencodings](https://developer.apple.com/documentation/coreservices/1571853-teccountavailabletextencodings)

# TECCountAvailableTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts and returns the number of text encodings currentlyconfigured in the Text Encoding Converter.

## Declaration

```objectivec
OSStatus TECCountAvailableTextEncodings(ItemCount *numberEncodings);
```

## Parameters

- `numberEncodings`: On return, a pointer to the number of currently supported text encodings. You use this value to determine the array size for a parameter of the [TECGetAvailableTextEncodings](1571819-tecgetavailabletextencodings.md) function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

The number of text encodings includes every instance of atext encoding. If different conversion plug-ins support the sametext encoding, the text encoding will be counted more than once.For example, the Japanese Encodings plug-in supports Mac OS Japanese, andso does the Unicode Encodings plug-in. Since the `TECGetAvailableTextEncodings` functionignores duplicate text encoding specifications, `TECCountAvailableTextEncodings` mayreturn a number greater than the number of array elements neededfor the `availableEncodings ` \[\]parameter.

## See Also

### Obtaining Information About Available Text Encodings

- [TECCountSubTextEncodings](1571820-teccountsubtextencodings.md): Counts and returns the number of subencodings a text encodingsupports.
- [TECGetAvailableTextEncodings](1571819-tecgetavailabletextencodings.md): Returns the text encoding specifications currently configuredin the Text Encoding Converter.
- [TECGetSubTextEncodings](1571796-tecgetsubtextencodings.md): Returns the text encoding specifications for the subencodingsthe encoding scheme supports.
- [NearestMacTextEncodings](1399736-nearestmactextencodings.md): Obtains the best and alternate Mac text encoding.
