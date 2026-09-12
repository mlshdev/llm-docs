> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804996-cmgetindprofileelementinfo](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804996-cmgetindprofileelementinfo)

# CMGetIndProfileElementInfo

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the element tag and data size of an element by index from the specified profile.

## Declaration

```objectivec
CMError CMGetIndProfileElementInfo (
   CMProfileRef prof,
   UInt32 index,
   OSType *tag,
   UInt32 *elementSize,
   Boolean *refs
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile containing the element.
- `index`: A one-based element index within the range returned by the `elementCount` parameter of the `CMCountProfileElements` function.
- `tag`: A pointer to an element signature. On return, the tag signature of the element corresponding to the index.
- `elementSize`: A pointer to an element size. On return, the size in bytes of the element data corresponding to the tag.
- `refs`: A pointer to a reference count flag. On return, set to `true` if more than one tag in the profile refers to element data associated with the tag corresponding to the index.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The index order of elements is determined internally by the ColorSync Manager and is not publicly defined.

Before calling the `CMGetIndProfileElementInfo` function, you should call the function [CMCountProfileElements](1804963-cmcountprofileelements.md), which returns the total number of elements in the profile in the `elementCount` parameter. The number you specify for the `index` parameter when calling `CMGetIndProfileElementInfo` should be in the range of 1 to `elementCount`; otherwise the function will return a result code of `cmIndexRangeErr`. 

You might want to call this function, for example, to print out the contents of a profile.

## See Also

### Accessing Profile Elements

- [CMCountProfileElements](1804963-cmcountprofileelements.md): Counts the number of elements in the specified profile.
- [CMProfileElementExists](1804967-cmprofileelementexists.md): Tests whether the specified profile contains a specific element based on the element’s tag signature.
- [CMGetProfileElement](1804973-cmgetprofileelement.md): Obtains element data from the specified profile based on the specified element tag signature.
- [CMSetProfileElement](1804977-cmsetprofileelement.md): Sets or replaces the element data for a specific tag in the specified profile.
- [CMSetProfileElementSize](1804980-cmsetprofileelementsize.md): Reserves the element data size for a specific tag in the specified profile before setting the element data.
- [CMGetPartialProfileElement](1804984-cmgetpartialprofileelement.md): Obtains a portion of the element data from the specified profile based on the specified element tag signature.
- [CMSetPartialProfileElement](1804989-cmsetpartialprofileelement.md): Sets part of the element data for a specific tag in the specified profile.
- [CMGetIndProfileElement](1805002-cmgetindprofileelement.md): Obtains the element data corresponding to a particular index from the specified profile.
- [CMSetProfileElementReference](1805005-cmsetprofileelementreference.md): Adds a tag to the specified profile to refer to data corresponding to a previously set element.
- [CMRemoveProfileElement](1805008-cmremoveprofileelement.md): Removes an element corresponding to a specific tag from the specified profile.
