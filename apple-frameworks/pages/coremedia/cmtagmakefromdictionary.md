> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtagmakefromdictionary](https://developer.apple.com/documentation/coremedia/cmtagmakefromdictionary)

# CMTagMakeFromDictionary

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create a new tag from a dictionary object.

## Declaration

```objectivec
extern CMTag CMTagMakeFromDictionary(CFDictionaryRef dict);
```

## Parameters

- `dict`: The dictionary containing information used to populate the new tag.

<a id="return-value"></a>

## Return Value

A new tag defined by the dictionary values, or [kCMTagInvalid](kcmtaginvalid.md) if no tag could be created.

<a id="Discussion"></a>

## Discussion

To create a new tag, the dictionary should have values for the [kCMTagCategoryKey](kcmtagcategorykey.md), [kCMTagDataTypeKey](kcmtagdatatypekey.md), and [kCMTagValueKey](kcmtagvaluekey.md) keys.

## See Also

### Creating Tags

- [CMTagMakeWithFlagsValue](cmtagmakewithflagsvalue.md): Creates a new tag with a given category and a value interpreted as a 64-bit flag field.
- [CMTagMakeWithFloat64Value](cmtagmakewithfloat64value.md): Creates a new tag with a given category and a 64-bit floating point value.
- [CMTagMakeWithOSTypeValue](cmtagmakewithostypevalue.md): Creates a new tag with a given category and a 64-bit value for use by the framework.
- [CMTagMakeWithSInt64Value](cmtagmakewithsint64value.md): Creates a new tag with a given category and a 64-bit signed integer.
