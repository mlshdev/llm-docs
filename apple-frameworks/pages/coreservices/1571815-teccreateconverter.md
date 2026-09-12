> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571815-teccreateconverter](https://developer.apple.com/documentation/coreservices/1571815-teccreateconverter)

# TECCreateConverter

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Determines a conversion path for a source and destinationencoding, then creates a text encoding converter object and returnsa pointer to it.

## Declaration

```objectivec
OSStatus TECCreateConverter(TECObjectRef *newEncodingConverter, TextEncoding inputEncoding, TextEncoding outputEncoding);
```

## Parameters

- `newEncodingConverter`: A pointer to a converter object. On return, this reference points to a newly created text converter object.
- `inputEncoding`: The text encoding specification for the source text encoding.
- `outputEncoding`: The text encoding specification for the destination text encoding.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

You use this converter object reference with conversion functionssuch as  [TECConvertText](1571824-tecconverttext.md)  toconvert text. This converter object describes the source, destination,and intermediate encodings; state information; and references torequired plug-ins.

If the function does not find a direct conversion path, itcreates an indirect conversion path. You can use the function  [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md) to specify an explicit conversion path. 

You must use the  [TECDisposeConverter](1571839-tecdisposeconverter.md) function to remove a converter object.

## See Also

### Creating and Deleting Converter Objects

- [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md): Creates a converter object for a specific conversion path—froma source encoding through intermediate encodings to a destinationencoding—and returns a pointer to it.
- [TECClearConverterContextInfo](1571844-tecclearconvertercontextinfo.md): Resets a converter object to its initial state so youcan reuse it.
- [TECDisposeConverter](1571839-tecdisposeconverter.md): Disposes of a converter object.
