> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/core-foundation-functions](https://developer.apple.com/documentation/corefoundation/core-foundation-functions)

# Core Foundation Functions (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

## Topics

### Functions

- [CFAllocatorAllocateBytes(\_:\_:\_:)](cfallocatorallocatebytes%28______%29.md)
- [CFAllocatorAllocateTyped(\_:\_:\_:\_:)](cfallocatorallocatetyped%28________%29.md)
- [CFAllocatorReallocateBytes(\_:\_:\_:\_:)](cfallocatorreallocatebytes%28________%29.md)
- [CFAllocatorReallocateTyped(\_:\_:\_:\_:\_:)](cfallocatorreallocatetyped%28__________%29.md)
- [CFAttributedStringGetBidiLevelsAndResolvedDirections(\_:\_:\_:\_:\_:)](cfattributedstringgetbidilevelsandresolveddirections%28__________%29.md)
- [CFBundleCopyLocalizedStringForLocalizations(\_:\_:\_:\_:\_:)](cfbundlecopylocalizedstringforlocalizations%28__________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleIsArchitectureLoadable(\_:)](cfbundleisarchitectureloadable%28__%29.md)
- [CFBundleIsExecutableLoadable(\_:)](cfbundleisexecutableloadable%28__%29.md)
- [CFBundleIsExecutableLoadableForURL(\_:)](cfbundleisexecutableloadableforurl%28__%29.md)
- [CFCopyHomeDirectoryURL()](cfcopyhomedirectoryurl%28%29.md)
- [CFDateFormatterCreateISO8601Formatter(\_:\_:)](cfdateformattercreateiso8601formatter%28____%29.md)
- [CFFileSecurityClearProperties(\_:\_:)](cffilesecurityclearproperties%28____%29.md): Clears properties from a `CFFileSecurityRef` object.
- [CFFileSecurityCopyAccessControlList(\_:\_:)](cffilesecuritycopyaccesscontrollist%28____%29.md): Copies the access control list associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyGroupUUID(\_:\_:)](cffilesecuritycopygroupuuid%28____%29.md): Copies the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyOwnerUUID(\_:\_:)](cffilesecuritycopyowneruuid%28____%29.md): Copies the owner UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCreate(\_:)](cffilesecuritycreate%28__%29.md): Creates a `CFFileSecurityRef` object.
- [CFFileSecurityCreateCopy(\_:\_:)](cffilesecuritycreatecopy%28____%29.md): Creates a copy of a `CFFileSecurityRef` object.
- [CFFileSecurityGetGroup(\_:\_:)](cffilesecuritygetgroup%28____%29.md): Gets the group ID associated with a `CFFileSecurityRef` object
- [CFFileSecurityGetMode(\_:\_:)](cffilesecuritygetmode%28____%29.md): Gets the file mode associated with a `CFFileSecurityRef` object.
- [CFFileSecurityGetOwner(\_:\_:)](cffilesecuritygetowner%28____%29.md): Gets the owner ID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityGetTypeID()](cffilesecuritygettypeid%28%29.md): Returns the type identifier for the `CFFileSecurityRef` opaque type.
- [CFFileSecuritySetAccessControlList(\_:\_:)](cffilesecuritysetaccesscontrollist%28____%29.md): Sets the access control list associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetGroup(\_:\_:)](cffilesecuritysetgroup%28____%29.md): Sets the group ID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetGroupUUID(\_:\_:)](cffilesecuritysetgroupuuid%28____%29.md): Sets the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetMode(\_:\_:)](cffilesecuritysetmode%28____%29.md): Sets the file mode associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetOwner(\_:\_:)](cffilesecuritysetowner%28____%29.md): Sets the owner ID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetOwnerUUID(\_:\_:)](cffilesecuritysetowneruuid%28____%29.md): Sets the owner UUID associated with a `CFFileSecurityRef` object.
- [CFReadStreamCopyDispatchQueue(\_:)](cfreadstreamcopydispatchqueue%28__%29.md)
- [CFReadStreamSetDispatchQueue(\_:\_:)](cfreadstreamsetdispatchqueue%28____%29.md)
- [CFRunLoopTimerGetTolerance(\_:)](cfrunlooptimergettolerance%28__%29.md)
- [CFRunLoopTimerSetTolerance(\_:\_:)](cfrunlooptimersettolerance%28____%29.md)
- [CFURLEnumeratorCreateForDirectoryURL(\_:\_:\_:\_:)](cfurlenumeratorcreatefordirectoryurl%28________%29.md): Creates and returns a directory enumerator with provided enumerator behavior options and properties to be prefetched.
- [CFURLEnumeratorCreateForMountedVolumes(\_:\_:\_:)](cfurlenumeratorcreateformountedvolumes%28______%29.md): Creates and returns a volume enumerator with provided enumerator behavior options and properties to be prefetched.
- [CFURLEnumeratorGetDescendentLevel(\_:)](cfurlenumeratorgetdescendentlevel%28__%29.md): Returns the number of levels a recursive directory enumerator has descended.
- [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md): Advances an enumerator to the next URL.
- [CFURLEnumeratorGetSourceDidChange(\_:)](cfurlenumeratorgetsourcedidchange%28__%29.md): Deprecated. This function is unimplemented, so it performs no operation.
- [CFURLEnumeratorGetTypeID()](cfurlenumeratorgettypeid%28%29.md): Returns the opaque type identifier for the CFURLEnumerator opaque type.
- [CFURLEnumeratorSkipDescendents(\_:)](cfurlenumeratorskipdescendents%28__%29.md): Tells a recursive enumerator not to descend into the directory at the URL that was returned by the most recent call to the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CFURLIsFileReferenceURL(\_:)](cfurlisfilereferenceurl%28__%29.md)
- [CFWriteStreamCopyDispatchQueue(\_:)](cfwritestreamcopydispatchqueue%28__%29.md)
- [CFWriteStreamSetDispatchQueue(\_:\_:)](cfwritestreamsetdispatchqueue%28____%29.md)

## See Also

### Reference

- [CFStream](cfstream.md)
- [Core Foundation Structures](core-foundation-structures.md)
- [Core Foundation Enumerations](core-foundation-enumerations.md)
- [Core Foundation Constants](core-foundation-constants.md)
- [Core Foundation Data Types](core-foundation-data-types.md)
- [Core Foundation Macros](corefoundation-macros.md)

# Core Foundation Functions (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

## Topics

### Functions

- [CFAllocatorAllocateBytes](cfallocatorallocatebytes%28______%29.md)
- [CFAllocatorAllocateTyped](cfallocatorallocatetyped%28________%29.md)
- [CFAllocatorReallocateBytes](cfallocatorreallocatebytes%28________%29.md)
- [CFAllocatorReallocateTyped](cfallocatorreallocatetyped%28__________%29.md)
- [CFAttributedStringGetBidiLevelsAndResolvedDirections](cfattributedstringgetbidilevelsandresolveddirections%28__________%29.md)
- [CFAutorelease](cfautorelease.md)
- [CFBundleCopyLocalizedStringForLocalizations](cfbundlecopylocalizedstringforlocalizations%28__________%29.md): Returns a localized string from a bundle’s strings file.
- [CFBundleIsArchitectureLoadable](cfbundleisarchitectureloadable%28__%29.md)
- [CFBundleIsExecutableLoadable](cfbundleisexecutableloadable%28__%29.md)
- [CFBundleIsExecutableLoadableForURL](cfbundleisexecutableloadableforurl%28__%29.md)
- [CFCopyHomeDirectoryURL](cfcopyhomedirectoryurl%28%29.md)
- [CFDateFormatterCreateISO8601Formatter](cfdateformattercreateiso8601formatter%28____%29.md)
- [CFFileSecurityClearProperties](cffilesecurityclearproperties%28____%29.md): Clears properties from a `CFFileSecurityRef` object.
- [CFFileSecurityCopyAccessControlList](cffilesecuritycopyaccesscontrollist%28____%29.md): Copies the access control list associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyGroupUUID](cffilesecuritycopygroupuuid%28____%29.md): Copies the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyOwnerUUID](cffilesecuritycopyowneruuid%28____%29.md): Copies the owner UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCreate](cffilesecuritycreate%28__%29.md): Creates a `CFFileSecurityRef` object.
- [CFFileSecurityCreateCopy](cffilesecuritycreatecopy%28____%29.md): Creates a copy of a `CFFileSecurityRef` object.
- [CFFileSecurityGetGroup](cffilesecuritygetgroup%28____%29.md): Gets the group ID associated with a `CFFileSecurityRef` object
- [CFFileSecurityGetMode](cffilesecuritygetmode%28____%29.md): Gets the file mode associated with a `CFFileSecurityRef` object.
- [CFFileSecurityGetOwner](cffilesecuritygetowner%28____%29.md): Gets the owner ID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityGetTypeID](cffilesecuritygettypeid%28%29.md): Returns the type identifier for the `CFFileSecurityRef` opaque type.
- [CFFileSecuritySetAccessControlList](cffilesecuritysetaccesscontrollist%28____%29.md): Sets the access control list associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetGroup](cffilesecuritysetgroup%28____%29.md): Sets the group ID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetGroupUUID](cffilesecuritysetgroupuuid%28____%29.md): Sets the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetMode](cffilesecuritysetmode%28____%29.md): Sets the file mode associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetOwner](cffilesecuritysetowner%28____%29.md): Sets the owner ID associated with a `CFFileSecurityRef` object.
- [CFFileSecuritySetOwnerUUID](cffilesecuritysetowneruuid%28____%29.md): Sets the owner UUID associated with a `CFFileSecurityRef` object.
- [CFReadStreamCopyDispatchQueue](cfreadstreamcopydispatchqueue%28__%29.md)
- [CFReadStreamSetDispatchQueue](cfreadstreamsetdispatchqueue%28____%29.md)
- [CFRunLoopTimerGetTolerance](cfrunlooptimergettolerance%28__%29.md)
- [CFRunLoopTimerSetTolerance](cfrunlooptimersettolerance%28____%29.md)
- [CFStringCreateStringWithValidatedFormat](cfstringcreatestringwithvalidatedformat.md)
- [CFStringCreateStringWithValidatedFormatAndArguments](cfstringcreatestringwithvalidatedformatandarguments.md)
- [CFURLEnumeratorCreateForDirectoryURL](cfurlenumeratorcreatefordirectoryurl%28________%29.md): Creates and returns a directory enumerator with provided enumerator behavior options and properties to be prefetched.
- [CFURLEnumeratorCreateForMountedVolumes](cfurlenumeratorcreateformountedvolumes%28______%29.md): Creates and returns a volume enumerator with provided enumerator behavior options and properties to be prefetched.
- [CFURLEnumeratorGetDescendentLevel](cfurlenumeratorgetdescendentlevel%28__%29.md): Returns the number of levels a recursive directory enumerator has descended.
- [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md): Advances an enumerator to the next URL.
- [CFURLEnumeratorGetSourceDidChange](cfurlenumeratorgetsourcedidchange%28__%29.md): Deprecated. This function is unimplemented, so it performs no operation.
- [CFURLEnumeratorGetTypeID](cfurlenumeratorgettypeid%28%29.md): Returns the opaque type identifier for the CFURLEnumerator opaque type.
- [CFURLEnumeratorSkipDescendents](cfurlenumeratorskipdescendents%28__%29.md): Tells a recursive enumerator not to descend into the directory at the URL that was returned by the most recent call to the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CFURLIsFileReferenceURL](cfurlisfilereferenceurl%28__%29.md)
- [CFWriteStreamCopyDispatchQueue](cfwritestreamcopydispatchqueue%28__%29.md)
- [CFWriteStreamSetDispatchQueue](cfwritestreamsetdispatchqueue%28____%29.md)

## See Also

### Reference

- [CFStream](cfstream.md)
- [Core Foundation Structures](core-foundation-structures.md)
- [Core Foundation Enumerations](core-foundation-enumerations.md)
- [Core Foundation Constants](core-foundation-constants.md)
- [Core Foundation Data Types](core-foundation-data-types.md)
- [Core Foundation Macros](corefoundation-macros.md)
