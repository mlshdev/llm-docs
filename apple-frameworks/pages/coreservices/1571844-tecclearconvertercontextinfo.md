> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1571844-tecclearconvertercontextinfo](https://developer.apple.com/documentation/coreservices/1571844-tecclearconvertercontextinfo)

# TECClearConverterContextInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Resets a converter object to its initial state so youcan reuse it.

## Declaration

```objectivec
OSStatus TECClearConverterContextInfo(TECObjectRef encodingConverter);
```

## Parameters

- `encodingConverter`: A reference to the text encoding converter object you want to reset. It can be a reference returned by the [TECCreateConverter](1571815-teccreateconverter.md), [TECCreateOneToManyConverter](1571794-teccreateonetomanyconverter.md), or [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md) functions.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).

<a id="discussion"></a>

## Discussion

It is more efficient to reuse an existing converter objectthan to create a new one that contains the same conversion information.This function clears the text string, but does not alter the sourceand destination encodings. 

If you are converting multiple segments of a text string,you should not clear the converter object until you have convertedall the text segments.

## See Also

### Creating and Deleting Converter Objects

- [TECCreateConverter](1571815-teccreateconverter.md): Determines a conversion path for a source and destinationencoding, then creates a text encoding converter object and returnsa pointer to it.
- [TECCreateConverterFromPath](1571829-teccreateconverterfrompath.md): Creates a converter object for a specific conversion path—froma source encoding through intermediate encodings to a destinationencoding—and returns a pointer to it.
- [TECDisposeConverter](1571839-tecdisposeconverter.md): Disposes of a converter object.
