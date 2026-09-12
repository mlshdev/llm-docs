> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804872-cmprofilemodified](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804872-cmprofilemodified)

# CMProfileModified

**Interface language:** Objective-C

**Framework:** Application Services

Indicates whether the specified profile has been modified since it was created or last updated.

## Declaration

```objectivec
CMError CMProfileModified (
   CMProfileRef prof,
   Boolean *modified
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile to examine.
- `modified`: A pointer to a Boolean variable. On return, the value of `modified` is set to `true` if the profile has been modified, `false` if it has not.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

When a profile is first opened, its modified flag is set to `false`. On calls that add to, delete from, or set the profile header or tags, the modified flag is set to `true`. After calling the function [CMUpdateProfile](1804864-cmupdateprofile.md), the modified flag is reset to `false`.

## See Also

### Accessing Profiles

- [CMOpenProfile](1804853-cmopenprofile.md): Opens the specified profile and returns a reference to the profile.
- [CMValidateProfile](1804856-cmvalidateprofile.md): Indicates whether the specified profile contains the minimum set of elements required by the current color management module (CMM) for color matching or color checking.
- [CMCloseProfile](1804861-cmcloseprofile.md): Decrements the reference count for the specified profile reference and, if the reference count reaches 0, frees all private memory and other resources associated with the profile.
- [CMUpdateProfile](1804864-cmupdateprofile.md): Saves modifications to the specified profile.
- [CMCopyProfile](1804870-cmcopyprofile.md): Duplicates the specified existing profile.
- [CMGetProfileMD5](1804876-cmgetprofilemd5.md): Gets the MD5 checksum from the profile header (message digest)
- [CMGetProfileHeader](1804879-cmgetprofileheader.md): Obtains the profile header for the specified profile.
- [CMSetProfileHeader](1804882-cmsetprofileheader.md): Sets the header for the specified profile.
- [CMGetProfileLocation](1804885-cmgetprofilelocation.md): Obtains the location of a profile based on the specified profile reference.
- [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md): Obtains either a profile location structure for a specified profile or the size of the location structure for the profile.
- [CMCloneProfileRef](1804891-cmcloneprofileref.md): Increments the reference count for the specified profile reference.
- [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md): Obtains the current reference count for the specified profile.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
