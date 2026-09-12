> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804977-cmsetprofileelement](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804977-cmsetprofileelement)

# CMSetProfileElement

**Interface language:** Objective-C

**Framework:** Application Services

Sets or replaces the element data for a specific tag in the specified profile.

## Declaration

```objectivec
CMError CMSetProfileElement (
   CMProfileRef prof,
   OSType tag,
   UInt32 elementSize,
   const void *elementData
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile containing the tag for which the element data is set.
- `tag`: The tag signature for the element whose data is set. For a complete list of the tag signatures a profile may contain, including a description of each tag, refer to the International Color Consortium Profile Format Specification. The signatures for profile tags are defined in the `CMICCProfile.h` header file.
- `elementSize`: The size in bytes of the element data set.
- `elementData`: A pointer to the buffer containing the element data to transfer to the profile.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The `CMSetProfileElement` function replaces existing element data if an element with the specified tag is already present in the profile. Otherwise, it sets the element data for a new tag. Your application is responsible for allocating memory for the buffer to hold the data to transfer.

## See Also

### Accessing Profile Elements

- [CMCountProfileElements](1804963-cmcountprofileelements.md): Counts the number of elements in the specified profile.
- [CMProfileElementExists](1804967-cmprofileelementexists.md): Tests whether the specified profile contains a specific element based on the element’s tag signature.
- [CMGetProfileElement](1804973-cmgetprofileelement.md): Obtains element data from the specified profile based on the specified element tag signature.
- [CMSetProfileElementSize](1804980-cmsetprofileelementsize.md): Reserves the element data size for a specific tag in the specified profile before setting the element data.
- [CMGetPartialProfileElement](1804984-cmgetpartialprofileelement.md): Obtains a portion of the element data from the specified profile based on the specified element tag signature.
- [CMSetPartialProfileElement](1804989-cmsetpartialprofileelement.md): Sets part of the element data for a specific tag in the specified profile.
- [CMGetIndProfileElementInfo](1804996-cmgetindprofileelementinfo.md): Obtains the element tag and data size of an element by index from the specified profile.
- [CMGetIndProfileElement](1805002-cmgetindprofileelement.md): Obtains the element data corresponding to a particular index from the specified profile.
- [CMSetProfileElementReference](1805005-cmsetprofileelementreference.md): Adds a tag to the specified profile to refer to data corresponding to a previously set element.
- [CMRemoveProfileElement](1805008-cmremoveprofileelement.md): Removes an element corresponding to a specific tag from the specified profile.
