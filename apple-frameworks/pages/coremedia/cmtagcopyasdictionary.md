> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagcopyasdictionary](https://developer.apple.com/documentation/coremedia/cmtagcopyasdictionary)

# CMTagCopyAsDictionary

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Copies an existing tag to a new dictionary object.

## Declaration

```objectivec
extern CFDictionaryRefCMTagCopyAsDictionary(CMTag tag, CFAllocatorRef allocator);
```

## Parameters

- `tag`: The tag to create a new dictionary from.
- `allocator`: The allocator to use for creating a new dictionary. Pass `kCFAllocatorDefault` to use the default global allocator.

<a id="return-value"></a>

## Return Value

A reference to a new [CFDictionaryRef](../corefoundation/cfdictionary.md), or `NULL` if no dictionary could be created.

<a id="Discussion"></a>

## Discussion

The created dictionary contains values for the keys [kCMTagCategoryKey](kcmtagcategorykey.md), [kCMTagDataTypeKey](kcmtagdatatypekey.md), and [kCMTagValueKey](kcmtagvaluekey.md).

## See Also

### Retrieving Tag Values

- [CMTagGetFlagsValue](cmtaggetflagsvalue.md): Retrieves a tag’s value as a 64-bit field flag.
- [CMTagGetFloat64Value](cmtaggetfloat64value.md): Retrieves a tag’s value as a 64-bit floating point number.
- [CMTagGetOSTypeValue](cmtaggetostypevalue.md): Retrieves a tag’s value for use by the operating system.
- [CMTagGetSInt64Value](cmtaggetsint64value.md): Retrieves a tag’s value as a signed 64-bit integer.
- [CMTagGetValue](cmtaggetvalue.md): Retrieves a tag’s value as an uninterpreted 64-bit wide unsigned integer.
