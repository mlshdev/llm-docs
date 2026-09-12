> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcopydescription](https://developer.apple.com/documentation/coremedia/cmtagcopydescription)

# CMTagCopyDescription

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Copies the description of a tag to a new string.

## Declaration

```objectivec
extern CFStringRefCMTagCopyDescription(CFAllocatorRef allocator, CMTag tag);
```

## Parameters

- `allocator`: The allocator to use for creating a new string. Pass `kCFAllocatorDefault` to use the default global allocator.
- `tag`: The tag to copy the description from.

<a id="return-value"></a>

## Return Value

A reference to a newly allocated [CFStringRef](../corefoundation/cfstring.md), or `NULL` if the copy failed.

## See Also

### Inspecting Tags

- [CMTagIsValid](cmtagisvalid.md): Whether the provided tag is valid.
- [CMTagGetCategory](cmtaggetcategory.md): Retrieves the category of a tag.
- [CMTagGetValueDataType](cmtaggetvaluedatatype.md): Retrieves the data type of a tag.
- [CMTagHasCategory](cmtaghascategory.md): Checks if a tag contains a specific category.
- [CMTagHasFlagsValue](cmtaghasflagsvalue.md): Whether a given tag contains a value for a 64-bit flag field.
- [CMTagHasFloat64Value](cmtaghasfloat64value.md): Whether a given tag contains a value for a 64-bit floating point number.
- [CMTagHasOSTypeValue](cmtaghasostypevalue.md): Whether a given tag contains a value for use by the operating system.
- [CMTagHasSInt64Value](cmtaghassint64value.md): Whether a given tag contains a value for a signed 64-bit integer.
