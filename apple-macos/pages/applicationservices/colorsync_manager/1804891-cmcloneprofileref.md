> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1804891-cmcloneprofileref](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1804891-cmcloneprofileref)

# CMCloneProfileRef

**Interface language:** Objective-C

**Framework:** Application Services

Increments the reference count for the specified profile reference.

## Declaration

```objectivec
CMError CMCloneProfileRef (
   CMProfileRef prof
);
```

## Parameters

- `prof`: A profile reference of type [CMProfileRef](../cmprofileref.md) to the profile whose reference count is incremented.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The ColorSync Manager keeps an internal reference count for each profile reference returned from a call to the `CMOpenProfile`, `CMNewProfile`, or `CMCopyProfile` functions. Calling the `CMCloneProfileRef` function increments the count; calling the function [CMCloseProfile](1804861-cmcloseprofile.md) decrements it. The profile remains open as long as the reference count is greater than 0, indicating that at least one routine retains a reference to the profile. When the count reaches 0, the ColorSync Manager releases all private memory, files, or resources allocated in association with that profile.

When your application creates a copy of an entire profile with `CMCopyProfile`, the copy has its own reference count. The `CMCloseProfile` routine should be called for the copied profile, just as for the original. When the reference count reaches 0, private resources associated with the copied profile are freed.

When your application merely duplicates a profile reference, as it may do to pass a profile reference to a synchronous or an asynchronous task, it should call `CMCloneProfileRef` to increment the reference count. Both the called task and the caller should call `CMCloseProfile` when finished with the profile reference.

In your application, you must make sure that `CMCloseProfile` is called once for each time a profile reference is created or cloned. Otherwise, the memory and resources associated with the profile reference may not be properly freed, or an application may attempt to use a profile reference that is no longer valid.

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
- [CMGetProfileRefCount](1804894-cmgetprofilerefcount.md): Obtains the current reference count for the specified profile.
- [CMFlattenProfile](1804897-cmflattenprofile.md): Transfers a profile stored in an independent disk file to an external profile format that can be embedded in a graphics document.
- [NCMUnflattenProfile](1804901-ncmunflattenprofile.md): Unflattens a previously flattened profile.
