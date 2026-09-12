> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571830-tecgetencodinglist](https://developer.apple.com/documentation/coreservices/1571830-tecgetencodinglist)

# TECGetEncodingList

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the list of destination encodings from a converterobject.

## Declaration

```objectivec
OSStatus TECGetEncodingList(TECObjectRef encodingConverter, ItemCount *numEncodings, Handle *encodingList);
```

## Parameters

- `encodingConverter`: A reference to the text encoding conversion object returned by the [TECCreateOneToManyConverter](1571794-teccreateonetomanyconverter.md) function.
- `numEncodings`: On return, a pointer to the number of encodings specified by the `encodingList` handle.
- `encodingList`: A handle to an array of text encoding specifications. On return, it contains an array of text encoding specifications to which the converter object can convert. The memory for the array is allocated automatically by the Text Encoding Converter.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

The `TECDisposeConverter` functionautomatically disposes of the pointer for you. This means you shouldnot reference the pointer after you have disposed of the converter object. 

Plug-ins that perform one-to-many conversions use the `TECGetEncodingList` functionto get the output encoding list from the converter object reference.

## See Also

### Converting to Multiple Encoding Runs

- [TECConvertTextToMultipleEncodings](1571849-tecconverttexttomultipleencoding.md): Converts text in the source encoding to runs of text inmultiple destination encodings. It uses the conversion path specifiedin the converter object you supply.
- [TECCreateOneToManyConverter](1571794-teccreateonetomanyconverter.md): Determines a conversion path for the source encoding anddestinations encodings you specify, creates a text encoding converterobject, and returns a reference to it.
- [TECFlushMultipleEncodings](1571842-tecflushmultipleencodings.md): Flushes out any encodings that may be stored in a converterobject’s temporary buffers and shifts encodings back to theirdefault state, if any.
