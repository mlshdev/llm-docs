> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804876-cmgetprofilemd5](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804876-cmgetprofilemd5)

# CMGetProfileMD5

**Interface language:** Objective-C

**Framework:** Application Services

Gets the MD5 checksum from the profile header (message digest)

## Declaration

```objectivec
CMError CMGetProfileMD5 (
   CMProfileRef prof,
   CMProfileMD5 digest
);
```

## Parameters

- `prof`:
- `digest`:

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

You can call this function to determine if two profiles are identical, or if a profile has changed over time. You can access this new MD5 checksum directly in the profile header, or use the function `CMGetProfileMD5`. This function has the advantage that it works with both ICC 4 profiles and earlier profiles.

## See Also

### Accessing Profiles

- [CMOpenProfile](1804853-cmopenprofile.md): Opens the specified profile and returns a reference to the profile.
- [CMValidateProfile](1804856-cmvalidateprofile.md): Indicates whether the specified profile contains the minimum set of elements required by the current color management module (CMM) for color matching or color checking.
- [CMCloseProfile](1804861-cmcloseprofile.md): Decrements the reference count for the specified profile reference and, if the reference count reaches 0, frees all private memory and other resources associated with the profile.
- [CMUpdateProfile](1804864-cmupdateprofile.md): Saves modifications to the specified profile.
- [CMCopyProfile](1804870-cmcopyprofile.md): Duplicates the specified existing profile.
- [CMProfileModified](1804872-cmprofilemodified.md): Indicates whether the specified profile has been modified since it was created or last updated.
- [CMGetProfileHeader](1804879-cmgetprofileheader.md): Obtains the profile header for the specified profile.
- [CMSetProfileHeader](1804882-cmsetprofileheader.md): Sets the header for the specified profile.
- [CMGetProfileLocation](1804885-cmgetprofilelocation.md): Obtains the location of a profile based on the specified profile reference.
- [NCMGetProfileLocation](1804889-ncmgetprofilelocation.md): Obtains either a profile location structure for a specified profile or the size of the location structure for the profile.
- [CMCloneProfileRef](1804891-cmcloneprofileref.md): Increments the reference count for the specified profile reference.
- [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md): Obtains the current reference count for the specified profile.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
