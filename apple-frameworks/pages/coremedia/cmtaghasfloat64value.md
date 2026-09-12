> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtaghasfloat64value](https://developer.apple.com/documentation/coremedia/cmtaghasfloat64value)

# CMTagHasFloat64Value

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Whether a given tag contains a value for a 64-bit floating point number.

## Declaration

```objectivec
extern Boolean CMTagHasFloat64Value(CMTag tag);
```

## Parameters

- `tag`: The tag to inspect.

<a id="return-value"></a>

## Return Value

Returns `YES` if the tag represents a floating point number.

<a id="Discussion"></a>

## Discussion

Prefer using this method over directly comparing a tag’s data type to [kCMTagDataType_Float64](cmtagdatatype/kcmtagdatatype_float64.md).

## See Also

### Inspecting Tags

- [CMTagCopyDescription](cmtagcopydescription.md): Copies the description of a tag to a new string.
- [CMTagIsValid](cmtagisvalid.md): Whether the provided tag is valid.
- [CMTagGetCategory](cmtaggetcategory.md): Retrieves the category of a tag.
- [CMTagGetValueDataType](cmtaggetvaluedatatype.md): Retrieves the data type of a tag.
- [CMTagHasCategory](cmtaghascategory.md): Checks if a tag contains a specific category.
- [CMTagHasFlagsValue](cmtaghasflagsvalue.md): Whether a given tag contains a value for a 64-bit flag field.
- [CMTagHasOSTypeValue](cmtaghasostypevalue.md): Whether a given tag contains a value for use by the operating system.
- [CMTagHasSInt64Value](cmtaghassint64value.md): Whether a given tag contains a value for a signed 64-bit integer.
