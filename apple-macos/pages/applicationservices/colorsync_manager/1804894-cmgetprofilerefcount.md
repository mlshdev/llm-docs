> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804894-cmgetprofilerefcount](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804894-cmgetprofilerefcount)

# CMGetProfileRefCount

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the current reference count for the specified profile.

## Declaration

```objectivec
CMError CMGetProfileRefCount (
   CMProfileRef prof,
   long *count
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile whose reference count is obtained.
- `count`: A pointer to a reference count. On return, the reference count for the specified profile reference.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The ColorSync Manager keeps an internal reference count for each profile reference returned from calls such as [CMOpenProfile](1804853-cmopenprofile.md) or [CMNewProfile](1804911-cmnewprofile.md). Calling the function [CMCloneProfileRef](1804891-cmcloneprofileref.md) increments the count; calling the function [CMCloseProfile](1804861-cmcloseprofile.md) decrements it. The profile remains open as long as the reference count is greater than 0, indicating at least one routine retains a reference to the profile. When the count reaches 0, the ColorSync Manager releases all memory, files, or resources allocated in association with that profile.

An application that manages profiles closely can call the `CMGetProfileRefCount` function to obtain the reference count for a profile reference, then perform special handling if necessary, based on the reference count.

To copy a profile with the function [CMCopyProfile](1804870-cmcopyprofile.md), you must obtain a reference to that profile by either opening the profile or creating it. To open a profile, use the function [CMOpenProfile](1804853-cmopenprofile.md). To create a new profile, use the function [CMNewProfile](1804911-cmnewprofile.md). As an alternative to using the `CMCopyProfile` function to duplicate an entire profile, you can use the same profile reference more than once. To do so, you call the function [CMCloneProfileRef](1804891-cmcloneprofileref.md) to increment the reference count for the reference each time you reuse it. Calling the `CMCloneProfileRef` function increments the count; calling the function [CMCloseProfile](1804861-cmcloseprofile.md) decrements it. The profile remains open as long as the reference count is greater than 0, indicating at least one routine retains a reference to the profile.

## See Also

### Accessing Profiles

- [CMOpenProfile](1804853-cmopenprofile.md): Opens the specified profile and returns a reference to the profile.
- [CMValidateProfile](1804856-cmvalidateprofile.md): Indicates whether the specified profile contains the minimum set of elements required by the current color management module (CMM) for color matching or color checking.
- [CMCloseProfile](1804861-cmcloseprofile.md): Decrements the reference count for the specified profile reference and, if the reference count reaches 0, frees all private memory and other resources associated with the profile.
- [CMUpdateProfile](1804864-cmupdateprofile.md): Saves modifications to the specified profile.
- [CMCopyProfile](1804870-cmcopyprofile.md): Duplicates the specified existing profile.
- [CMProfileModified](1804872-cmprofilemodified.md): Indicates whether the specified profile has been modified since it was created or last updated.
- [CMGetProfileMD5](1804876-cmgetprofilemd5.md): Gets the MD5 checksum from the profile header (message digest)
- [CMGetProfileHeader](1804879-cmgetprofileheader.md): Obtains the profile header for the specified profile.
- [CMSetProfileHeader](1804882-cmsetprofileheader.md): Sets the header for the specified profile.
- [CMGetProfileLocation](1804885-cmgetprofilelocation.md): Obtains the location of a profile based on the specified profile reference.
- [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md): Obtains either a profile location structure for a specified profile or the size of the location structure for the profile.
- [CMCloneProfileRef](1804891-cmcloneprofileref.md): Increments the reference count for the specified profile reference.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
