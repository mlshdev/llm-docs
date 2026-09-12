> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571819-tecgetavailabletextencodings](https://developer.apple.com/documentation/coreservices/1571819-tecgetavailabletextencodings)

# TECGetAvailableTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the text encoding specifications currently configuredin the Text Encoding Converter.

## Declaration

```objectivec
OSStatus TECGetAvailableTextEncodings(TextEncoding availableEncodings[], ItemCount maxAvailableEncodings, ItemCount *actualAvailableEncodings);
```

## Parameters

- `availableEncodings`: On return, an array of text encoding specifications. You should use the [TECCountAvailableTextEncodings](1571853-teccountavailabletextencodings.md) function to determine what size array to allocate.
- `maxAvailableEncodings`: The number of text encoding specifications the `availableEncodings` array can contain.
- `actualAvailableEncodings`: On return, a pointer to the number of text encodings returned in the `availableEncodings` array.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function ignores duplicate text encoding specifications.If you used the  [TECCountAvailableTextEncodings](1571853-teccountavailabletextencodings.md) function to determine the size of the `availableEncodings ` \[\]array, the number of encodings may be fewer than the number of arrayelements, because `TECCountAvailableTextEncodings` includesduplicate text encodings in its count.

## See Also

### Obtaining Information About Available Text Encodings

- [TECCountAvailableTextEncodings](1571853-teccountavailabletextencodings.md): Counts and returns the number of text encodings currentlyconfigured in the Text Encoding Converter.
- [TECCountSubTextEncodings](1571820-teccountsubtextencodings.md): Counts and returns the number of subencodings a text encodingsupports.
- [TECGetSubTextEncodings](1571796-tecgetsubtextencodings.md): Returns the text encoding specifications for the subencodingsthe encoding scheme supports.
- [NearestMacTextEncodings](1399736-nearestmactextencodings.md): Obtains the best and alternate Mac text encoding.
