> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444419-getaliassize](https://developer.apple.com/documentation/coreservices/1444419-getaliassize)

# GetAliasSize

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

Gets the size of an alias record referenced by a handle.

> Use [CFDataGetLength(\_:)](../corefoundation/cfdatagetlength%28__%29.md), passing in the bookmark data.

## Declaration

```objectivec
Size GetAliasSize(AliasHandle alias);
```

## Parameters

- `alias`: A handle to the alias record from which to get the information.

<a id="return_value"></a>

## Return Value

The size of the alias record.

<a id="discussion"></a>

## Discussion

The returned size is smaller than the size returned by the function `GetHandleSize` if any custom data is added. This routine is thread safe.

## See Also

### Getting Alias Size

- [GetAliasSizeFromPtr](1444380-getaliassizefromptr.md): Deprecated. Gets the size of an alias record referenced by a pointer.
