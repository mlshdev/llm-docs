> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805369-cmcreateprofileidentifier](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805369-cmcreateprofileidentifier)

# CMCreateProfileIdentifier

**Interface language:** Objective-C

**Framework:** Application Services

Creates a profile identifier for a specified profile.

## Declaration

```objectivec
CMError CMCreateProfileIdentifier (
   CMProfileRef prof,
   CMProfileIdentifierPtr ident,
   UInt32 *size
);
```

## Parameters

- `prof`:
- `ident`:
- `size`:

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Not Recommended

- [CMNewProfileSearch](1805344-cmnewprofilesearch.md): Searches the ColorSync Profiles folder and returns a list of 2.x profiles that match the search specification.
- [CMUpdateProfileSearch](1805356-cmupdateprofilesearch.md): Searches the ColorSync Profiles folder and updates an existing search result obtained originally from the `CMNewProfileSearch` function.
- [CMDisposeProfileSearch](1805358-cmdisposeprofilesearch.md): Frees the private memory allocated for a profile search after your application has completed the search.
- [CMSearchGetIndProfile](1805362-cmsearchgetindprofile.md): Opens the profile corresponding to a specific index into a specific search result list and obtains a reference to that profile.
- [CMSearchGetIndProfileFileSpec](1805365-cmsearchgetindprofilefilespec.md): Obtains the file specification for the profile at a specific index into a search result.
- [CMProfileIdentifierFolderSearch](1805374-cmprofileidentifierfoldersearch.md): Searches the ColorSync Profiles folder and returns a list of profile references, one for each profile that matches the specified profile identifier.
- [CMProfileIdentifierListSearch](1805376-cmprofileidentifierlistsearch.md): Searches a list of profile references and returns a list of all references that match a specified profile identifier.
