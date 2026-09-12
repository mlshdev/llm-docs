> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571805-teccountdestinationtextencodings](https://developer.apple.com/documentation/coreservices/1571805-teccountdestinationtextencodings)

# TECCountDestinationTextEncodings

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Counts and returns the number of destination encodingsto which a specified source encoding can be converted in one step.

## Declaration

```objectivec
OSStatus TECCountDestinationTextEncodings(TextEncoding inputEncoding, ItemCount *numberOfEncodings);
```

## Parameters

- `inputEncoding`: The text encoding specification describing the source text.
- `numberOfEncodings`: On return, a pointer to the number of text encodings to which the source encoding can be converted in one step. You should use this to determine how large to make the array you pass to the [TECGetDestinationTextEncodings](1571808-tecgetdestinationtextencodings.md) function.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

This function counts every instance of an encoding. If differentconversion plug-ins support the same direct text encoding, the directtext encoding is counted more than once.

Since the `TECGetDestinationTextEncodings` functionignores duplicate text encoding specifications, `TECCountDestinationTextEncodings` mayreturn a number greater than the number of array elements neededfor the `destinationEncodings[]` parameter.

## See Also

### Identifying Possible Destination Encodings

- [TECGetDestinationTextEncodings](1571808-tecgetdestinationtextencodings.md): Returns the encoding specifications for all the destinationtext encodings to which the Text Encoding Converter can directlyconvert the specified source encoding.
