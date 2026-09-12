> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444311-getaliasusertype](https://developer.apple.com/documentation/coreservices/1444311-getaliasusertype)

# GetAliasUserType

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

Gets the user type for an alias record referenced by a handle.

> Use [CFURLSetTemporaryResourcePropertyForKey(\_:\_:\_:)](../corefoundation/cfurlsettemporaryresourcepropertyforkey%28______%29.md) to set your own temporary properties on the CFURL object. Then, to embed these properties in the bookmark data, pass the properties in the `resourcePropertiesToInclude` parameter of [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md). To prevent conflicts, it’s recommended that you create reverse DNS names for temporary property key strings.

## Declaration

```objectivec
OSType GetAliasUserType(AliasHandle alias);
```

## Parameters

- `alias`: A handle to the alias record from which to get the user type.

<a id="return_value"></a>

## Return Value

The user type associated with the alias.

<a id="discussion"></a>

## Discussion

This routine is thread safe.

## See Also

### Getting and Setting Alias User Types

- [SetAliasUserType](1444428-setaliasusertype.md): Deprecated. Sets the user type for an alias record referenced by a handle.
- [GetAliasUserTypeFromPtr](1444345-getaliasusertypefromptr.md): Deprecated. Gets the user type for the alias record referenced by a pointer.
- [SetAliasUserTypeWithPtr](1444309-setaliasusertypewithptr.md): Deprecated. Sets the user type for the alias record referenced by a pointer.
