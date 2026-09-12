> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400224-ucgetcharproperty](https://developer.apple.com/documentation/coreservices/1400224-ucgetcharproperty)

# UCGetCharProperty

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the value associated with a property type forthe specified `UniChar` characters.

## Declaration

```objectivec
OSStatus UCGetCharProperty(const UniChar *charPtr, UniCharCount textLength, UCCharPropertyType propType, UCCharPropertyValue *propValue);
```

## Parameters

- `charPtr`: A pointer to the Unicode text whose property value you want to obtain.
- `textLength`: The length of the text pointed to by `charPtr`.
- `propType`: The property type for the `UniChar` character whose value you want to obtain. See [UCCharPropertyType](uccharpropertytype.md) for a list of the constants you can supply.
- `propValue`: On return, the value associated with the property type specified by the `propType` parameter. See [UCCharPropertyValue](uccharpropertyvalue.md) for a list of the constants that can be returned.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324).
