> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804864-cmupdateprofile](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804864-cmupdateprofile)

# CMUpdateProfile

**Interface language:** Objective-C

**Framework:** Application Services

Saves modifications to the specified profile.

## Declaration

```objectivec
CMError CMUpdateProfile (
   CMProfileRef prof
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile to update.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The `CMUpdateProfile` function makes permanent any changes or additions your application has made to the profile identified by the profile reference, if no other references to that profile exist.

The ColorSync Manager maintains a modified flag to track whether a profile has been modified. After updating a profile, the `CMUpdateProfile` function sets the value of the modified flag for that profile to `false`.

Each time an application calls the function [CMOpenProfile](1804853-cmopenprofile.md), the function creates a unique reference to the profile. An application can also duplicate a profile reference by passing a copy to another task. You cannot use the `CMUpdateProfile` function to update a profile if more than one reference to the profile exists—attempting to do so will result in an error return. You can call the function [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md) to determine the reference count for a profile reference.

You cannot use the `CMUpdateProfile` function to update a ColorSync 1.0 profile. 

After you fill in tags and their data elements for a new profile created by calling the function [CMNewProfile](1804911-cmnewprofile.md), you must call the `CMUpdateProfile` function to write the element data to the new profile.

If you modify an open profile, you must call `CMUpdateProfile` to save the changes to the profile file before you call the function [CMCloseProfile](1804861-cmcloseprofile.md). Otherwise, the changes are discarded.

To modify a profile header, you use the function [CMGetProfileHeader](1804879-cmgetprofileheader.md) and the function [CMSetProfileHeader](1804882-cmsetprofileheader.md).

To set profile elements outside the header, you use the function [CMSetProfileElement](1804977-cmsetprofileelement.md), the function [CMSetProfileElementSize](1804980-cmsetprofileelementsize.md), and the function [CMSetPartialProfileElement](1804989-cmsetpartialprofileelement.md).

## See Also

### Accessing Profiles

- [CMOpenProfile](1804853-cmopenprofile.md): Opens the specified profile and returns a reference to the profile.
- [CMValidateProfile](1804856-cmvalidateprofile.md): Indicates whether the specified profile contains the minimum set of elements required by the current color management module (CMM) for color matching or color checking.
- [CMCloseProfile](1804861-cmcloseprofile.md): Decrements the reference count for the specified profile reference and, if the reference count reaches 0, frees all private memory and other resources associated with the profile.
- [CMCopyProfile](1804870-cmcopyprofile.md): Duplicates the specified existing profile.
- [CMProfileModified](1804872-cmprofilemodified.md): Indicates whether the specified profile has been modified since it was created or last updated.
- [CMGetProfileMD5](1804876-cmgetprofilemd5.md): Gets the MD5 checksum from the profile header (message digest)
- [CMGetProfileHeader](1804879-cmgetprofileheader.md): Obtains the profile header for the specified profile.
- [CMSetProfileHeader](1804882-cmsetprofileheader.md): Sets the header for the specified profile.
- [CMGetProfileLocation](1804885-cmgetprofilelocation.md): Obtains the location of a profile based on the specified profile reference.
- [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md): Obtains either a profile location structure for a specified profile or the size of the location structure for the profile.
- [CMCloneProfileRef](1804891-cmcloneprofileref.md): Increments the reference count for the specified profile reference.
- [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md): Obtains the current reference count for the specified profile.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
