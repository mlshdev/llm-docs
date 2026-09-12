> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444380-getaliassizefromptr](https://developer.apple.com/documentation/coreservices/1444380-getaliassizefromptr)

# GetAliasSizeFromPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

Gets the size of an alias record referenced by a pointer.

> Use [CFDataGetLength(\_:)](../corefoundation/cfdatagetlength%28__%29.md), passing in the bookmark data.

## Declaration

```objectivec
Size GetAliasSizeFromPtr(const AliasRecord *alias);
```

## Parameters

- `alias`: A pointer to the alias record from which to get the information.

<a id="return_value"></a>

## Return Value

The size of the alias record.

<a id="discussion"></a>

## Discussion

This routine is thread safe.

## See Also

### Getting Alias Size

- [GetAliasSize](1444419-getaliassize.md): Deprecated. Gets the size of an alias record referenced by a handle.
