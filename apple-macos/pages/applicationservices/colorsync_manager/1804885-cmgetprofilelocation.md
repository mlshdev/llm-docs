> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804885-cmgetprofilelocation](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804885-cmgetprofilelocation)

# CMGetProfileLocation

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the location of a profile based on the specified profile reference.

## Declaration

```objectivec
CMError CMGetProfileLocation (
   CMProfileRef prof,
   CMProfileLocation *location
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md). Before calling `CMGetProfileLocation`, you set the reference to specify the profile you wish to obtain the location for.
- `theProfile`: A pointer to a profile location structure of type [CMProfileLocation](../cmprofilelocation.md). On return, specifies the location of the profile. Commonly, a profile is disk-file based, but it may instead be temporary, handle-based, pointer-based, or accessed through a procedure supplied by your application.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

When your application calls the `CMValidateProfile` function, the ColorSync Manager dispatches the function to the CMM specified by the `CMMType` header field of the profile whose reference you specify. The preferred CMM can support this function or not.

To open a profile and obtain a reference to it, use the function [CMOpenProfile](1804853-cmopenprofile.md). 

<a id="1819314"></a>

### Version-Notes

This function is not recommended for use in ColorSync 2.5.

Starting with ColorSync version 2.5, you should use the function [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md) instead of `CMGetProfileLocation`.

As of version 2.5, if you call `CMGetProfileLocation`, it will just call `NCMGetProfileLocation` in turn, passing the profile specified by `prof`, the profile location specified by `theProfile`, and a location size value of `cmOriginalProfileLocationSize`.

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
- [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md): Obtains either a profile location structure for a specified profile or the size of the location structure for the profile.
- [CMCloneProfileRef](1804891-cmcloneprofileref.md): Increments the reference count for the specified profile reference.
- [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md): Obtains the current reference count for the specified profile.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
