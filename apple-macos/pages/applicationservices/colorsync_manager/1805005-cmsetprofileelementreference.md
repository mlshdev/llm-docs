> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805005-cmsetprofileelementreference](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805005-cmsetprofileelementreference)

# CMSetProfileElementReference

**Interface language:** Objective-C

**Framework:** Application Services

Adds a tag to the specified profile to refer to data corresponding to a previously set element.

## Declaration

```objectivec
CMError CMSetProfileElementReference (
   CMProfileRef prof,
   OSType elementTag,
   OSType referenceTag
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile to add the tag to.
- `elementTag`: The original element’s signature tag corresponding to the element data to which the new tag will refer.
- `referenceTag`: The new tag signature to add to the profile to refer to the element data corresponding to `elementTag`.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

After the `CMSetProfileElementReference` function executes successfully, the specified profile will contain more than one tag corresponding to a single piece of data. All of these tags are of equal importance. Your application can set a reference to an element that was originally a reference itself without circularity. 

If you call the function [CMSetProfileElement](1804977-cmsetprofileelement.md) subsequently for one of the tags acting as a reference to another tag’s data, then the element data you provide is set for the tag and the tag is no longer considered a reference. Instead, the tag corresponds to its own element data and not that of another tag.

## See Also

### Accessing Profile Elements

- [CMCountProfileElements](1804963-cmcountprofileelements.md): Counts the number of elements in the specified profile.
- [CMProfileElementExists](1804967-cmprofileelementexists.md): Tests whether the specified profile contains a specific element based on the element’s tag signature.
- [CMGetProfileElement](1804973-cmgetprofileelement.md): Obtains element data from the specified profile based on the specified element tag signature.
- [CMSetProfileElement](1804977-cmsetprofileelement.md): Sets or replaces the element data for a specific tag in the specified profile.
- [CMSetProfileElementSize](1804980-cmsetprofileelementsize.md): Reserves the element data size for a specific tag in the specified profile before setting the element data.
- [CMGetPartialProfileElement](1804984-cmgetpartialprofileelement.md): Obtains a portion of the element data from the specified profile based on the specified element tag signature.
- [CMSetPartialProfileElement](1804989-cmsetpartialprofileelement.md): Sets part of the element data for a specific tag in the specified profile.
- [CMGetIndProfileElementInfo](1804996-cmgetindprofileelementinfo.md): Obtains the element tag and data size of an element by index from the specified profile.
- [CMGetIndProfileElement](1805002-cmgetindprofileelement.md): Obtains the element data corresponding to a particular index from the specified profile.
- [CMRemoveProfileElement](1805008-cmremoveprofileelement.md): Removes an element corresponding to a specific tag from the specified profile.
