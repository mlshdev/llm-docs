> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444279-fsresolvealiaswithmountflags](https://developer.apple.com/documentation/coreservices/1444279-fsresolvealiaswithmountflags)

# FSResolveAliasWithMountFlags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns an `FSRef` to the target of an alias.

> Use [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebyresolvingbookmarkdata%28______________%29.md) instead.

## Declaration

```objectivec
OSErr FSResolveAliasWithMountFlags(const FSRef *fromFile, AliasHandle inAlias, FSRef *target, Boolean *wasChanged, unsigned long mountFlags);
```

## Parameters

- `fromFile`: A pointer to the starting point for a relative search. If you pass `NULL` in this parameter, `FSResolveAliasWithMountFlags` performs an absolute search. If you pass a pointer to a valid `FSRef` in the `fromFile` parameter, `FSResolveAliasWithMountFlags` performs a relative search for the target, followed by an absolute search only if the relative search fails. If you want to perform an absolute search followed by a relative search, you should use the function [FSMatchAliasBulk](1444389-fsmatchaliasbulk.md).
- `inAlias`: A handle to the alias record to be resolved and, if necessary, updated.
- `target`: A pointer to an `FSRef` structure. On successful return, this `FSRef` refers to the target of the alias record. This parameter must point to a valid `FSRef` structure.
- `wasChanged`: A pointer to a Boolean value indicating, on return, whether the alias record to be resolved was updated because it contained some outdated information about the target. If it updates the alias record, `FSResolveAliasWithMountFlags` sets the `wasChanged` parameter to `true`. Otherwise, it sets it to `false`. (`FSResolveAliasWithMountFlags` never updates a minimal alias, so it never sets `wasChanged` to `true` when resolving a minimal alias.
- `mountFlags`: Options controlling how the alias is resolved. See [Volume Mount Options](1444436-volume_mount_options.md) for a description of the values you can use here. Set this parameter to `kResolveAliasFileNoUI` to prevent any user interaction while the alias is being resolved.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

The function `FSResolveAliasWithMountFlags` is identical to [FSResolveAlias](1444297-fsresolvealias.md) with the exception that it provides the `mountFlags` parameter, allowing callers additional control over how the alias is resolved.

## See Also

### Resolving and Reading Alias Records

- [FSCopyAliasInfo](1444271-fscopyaliasinfo.md): Deprecated. Returns information from an alias handle.
- [FSMatchAliasBulk](1444389-fsmatchaliasbulk.md): Deprecated. Identifies a list of possible matches for an alias.
- [FSResolveAlias](1444297-fsresolvealias.md): Deprecated. Returns an `FSRef` to the single most likely target of an alias record.
