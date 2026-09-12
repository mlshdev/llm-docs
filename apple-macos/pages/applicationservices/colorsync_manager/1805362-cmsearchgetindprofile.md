> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805362-cmsearchgetindprofile](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805362-cmsearchgetindprofile)

# CMSearchGetIndProfile

**Interface language:** Objective-C

**Framework:** Application Services

Opens the profile corresponding to a specific index into a specific search result list and obtains a reference to that profile.

## Declaration

```objectivec
CMError CMSearchGetIndProfile (
   CMProfileSearchRef search,
   UInt32 index,
   CMProfileRef *prof
);
```

## Parameters

- `search`: A reference to the profile search result list containing the profile whose reference you want to obtain. For a description of the `CMProfileSearchRef` private data type, see `CMProfileSearchRef`. See the QuickDraw Reference for a description of the PixMap data type.
- `index`: The position of the profile in the search result list. This value is specified as a one-based index into the set of profiles of the search result. The index must be less than or equal to the value returned as the `count` parameter of the `CMNewProfileSearch` function or the `CMUpdateProfileSearch` function; otherwise `CMSearchGetIndProfile` returns a result code of `cmIndexRangeErr`.
- `prof`: A pointer to a profile reference of type [CMProfileRef](../cmprofileref.md). On return, the reference refers to the profile associated with the specified index. See the QuickDraw Reference for a description of the PixMap data type.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

Before your application can call the `CMSearchGetIndProfile` function, it must call the function [CMNewProfileSearch](1805344-cmnewprofilesearch.md) to perform a profile search and produce a search result list. The search result list is a private data structure maintained by the ColorSync Manager. After your application has finished using the profile reference, it must close the reference by calling the function  [CMCloseProfile](1804861-cmcloseprofile.md).  

<a id="1819487"></a>

### Version-Notes

This function is not recommended for use in ColorSync 2.5.

Starting with version 2.5, you should use the function [CMIterateColorSyncFolder](1804904-cmiteratecolorsyncfolder.md) for profile searching.

## See Also

### Not Recommended

- [CMNewProfileSearch](1805344-cmnewprofilesearch.md): Searches the ColorSync Profiles folder and returns a list of 2.x profiles that match the search specification.
- [CMUpdateProfileSearch](1805356-cmupdateprofilesearch.md): Searches the ColorSync Profiles folder and updates an existing search result obtained originally from the `CMNewProfileSearch` function.
- [CMDisposeProfileSearch](1805358-cmdisposeprofilesearch.md): Frees the private memory allocated for a profile search after your application has completed the search.
- [CMSearchGetIndProfileFileSpec](1805365-cmsearchgetindprofilefilespec.md): Obtains the file specification for the profile at a specific index into a search result.
- [CMCreateProfileIdentifier](1805369-cmcreateprofileidentifier.md): Creates a profile identifier for a specified profile.
- [CMProfileIdentifierFolderSearch](1805374-cmprofileidentifierfoldersearch.md): Searches the ColorSync Profiles folder and returns a list of profile references, one for each profile that matches the specified profile identifier.
- [CMProfileIdentifierListSearch](1805376-cmprofileidentifierlistsearch.md): Searches a list of profile references and returns a list of all references that match a specified profile identifier.
