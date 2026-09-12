> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571839-tecdisposeconverter](https://developer.apple.com/documentation/coreservices/1571839-tecdisposeconverter)

# TECDisposeConverter

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Disposes of a converter object.

## Declaration

```objectivec
OSStatus TECDisposeConverter(TECObjectRef newEncodingConverter);
```

## Parameters

- `newEncodingConverter`: A reference to the text encoding converter object you want to remove. This can be the reference returned by the [TECCreateConverter](1571815-teccreateconverter.md), [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md), or [TECCreateOneToManyConverter](1571794-teccreateonetomanyconverter.md) functions.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

If you want to reuse the converter object for a differenttext stream with the same source and destination encoding, you shouldclear the converter object using the  [TECClearConverterContextInfo](1571844-tecclearconvertercontextinfo.md)  functionrather than disposing of it and then creating a new converter object.

## See Also

### Creating and Deleting Converter Objects

- [TECCreateConverter](1571815-teccreateconverter.md): Determines a conversion path for a source and destinationencoding, then creates a text encoding converter object and returnsa pointer to it.
- [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md): Creates a converter object for a specific conversion path—froma source encoding through intermediate encodings to a destinationencoding—and returns a pointer to it.
- [TECClearConverterContextInfo](1571844-tecclearconvertercontextinfo.md): Resets a converter object to its initial state so youcan reuse it.
