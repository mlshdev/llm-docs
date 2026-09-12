> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444309-setaliasusertypewithptr](https://developer.apple.com/documentation/coreservices/1444309-setaliasusertypewithptr)

# SetAliasUserTypeWithPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

Sets the user type for the alias record referenced by a pointer.

> Use [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](../corefoundation/cfurlsettemporaryresourcepropertyforkey%28______%29.md) to set your own temporary properties on the CFURL object. Then, to embed these properties in the bookmark data, pass the properties in the `resourcePropertiesToInclude` parameter of [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md). To prevent conflicts, it’s recommended that you create reverse DNS names for temporary property key strings.

## Declaration

```objectivec
void SetAliasUserTypeWithPtr(AliasPtr alias, OSType userType);
```

## Parameters

- `alias`: A pointer to the alias record for which to set the user type.
- `userType`: The user type associated with the alias.

<a id="discussion"></a>

## Discussion

This routine is thread safe.

## See Also

### Getting and Setting Alias User Types

- [GetAliasUserType](1444311-getaliasusertype.md): Deprecated. Gets the user type for an alias record referenced by a handle.
- [SetAliasUserType](1444428-setaliasusertype.md): Deprecated. Sets the user type for an alias record referenced by a handle.
- [GetAliasUserTypeFromPtr](1444345-getaliasusertypefromptr.md): Deprecated. Gets the user type for the alias record referenced by a pointer.
