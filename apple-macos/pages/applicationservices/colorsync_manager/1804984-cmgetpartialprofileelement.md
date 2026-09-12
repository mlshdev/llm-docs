> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804984-cmgetpartialprofileelement](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804984-cmgetpartialprofileelement)

# CMGetPartialProfileElement

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a portion of the element data from the specified profile based on the specified element tag signature.

## Declaration

```objectivec
CMError CMGetPartialProfileElement (
   CMProfileRef prof,
   OSType tag,
   UInt32 offset,
   UInt32 *byteCount,
   void *elementData
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile containing the target element.
- `tag`: The tag signature for the element in question. For a complete list of the tag signatures a profile may contain, including a description of each tag, refer to the International Color Consortium Profile Format Specification. The signatures for profile tags are defined in the `CMICCProfile.h` header file.
- `offset`: Beginning from the first byte of the element data, the offset from which to begin copying the element data.
- `byteCount`: A pointer to a data byte count. On input, the number of bytes of element data to copy, beginning from the offset specified by the `offset` parameter. On return, the number of bytes actually copied.
- `elementData`: A pointer to memory for element data. On input, you pass a pointer to allocated memory. On return, this buffer holds the element data.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The `CMGetPartialProfileElement` function allows you to copy any portion of the element data beginning from any offset into the data. For the `CMGetPartialProfileElement` function to copy the element data and return it to you, your application must allocate a buffer in memory to hold the data.

You cannot use this function to obtain a portion of the `CM2Header` profile header. Instead, you must call the function [CMGetProfileHeader](1804879-cmgetprofileheader.md) to get the entire profile header and read its contents.

## See Also

### Accessing Profile Elements

- [CMCountProfileElements](1804963-cmcountprofileelements.md): Counts the number of elements in the specified profile.
- [CMProfileElementExists](1804967-cmprofileelementexists.md): Tests whether the specified profile contains a specific element based on the element’s tag signature.
- [CMGetProfileElement](1804973-cmgetprofileelement.md): Obtains element data from the specified profile based on the specified element tag signature.
- [CMSetProfileElement](1804977-cmsetprofileelement.md): Sets or replaces the element data for a specific tag in the specified profile.
- [CMSetProfileElementSize](1804980-cmsetprofileelementsize.md): Reserves the element data size for a specific tag in the specified profile before setting the element data.
- [CMSetPartialProfileElement](1804989-cmsetpartialprofileelement.md): Sets part of the element data for a specific tag in the specified profile.
- [CMGetIndProfileElementInfo](1804996-cmgetindprofileelementinfo.md): Obtains the element tag and data size of an element by index from the specified profile.
- [CMGetIndProfileElement](1805002-cmgetindprofileelement.md): Obtains the element data corresponding to a particular index from the specified profile.
- [CMSetProfileElementReference](1805005-cmsetprofileelementreference.md): Adds a tag to the specified profile to refer to data corresponding to a previously set element.
- [CMRemoveProfileElement](1805008-cmremoveprofileelement.md): Removes an element corresponding to a specific tag from the specified profile.
