> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratorcreatefordirectoryurl(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlenumeratorcreatefordirectoryurl(_:_:_:_:))

# CFURLEnumeratorCreateForDirectoryURL(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a directory enumerator with provided enumerator behavior options and properties to be prefetched.

## Declaration

```swift
func CFURLEnumeratorCreateForDirectoryURL(_ alloc: CFAllocator!, _ directoryURL: CFURL!, _ option: CFURLEnumeratorOptions, _ propertyKeys: CFArray!) -> CFURLEnumerator!
```

## Parameters

- `alloc`: The memory allocator to use. If `NULL`, the default allocator is used.
- `directoryURL`: The URL of the directory to enumerate.
- `option`: A bit array of enumerator behavior options.
- `propertyKeys`: An array of file property keys to prefetch for each enumerated URL. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created directory enumerator.

<a id="Discussion"></a>

## Discussion

Directory enumerators do not descend into subdirectories of `directoryURL` by default. To create a recursive enumerator, include the [descendRecursively](cfurlenumeratoroptions/descendrecursively.md) option in `options`.

Specifying prefetch properties allows the enumerator to optimize device access by using bulk operations. However, you should not prefetch properties that are not needed, because doing so may degrade performance.

The created directory enumerator generates URLs with the same type as `directoryURL`. If `directoryURL` is a file reference URL, then enumerated URLs are file reference URLs. If `directoryURL` is a file path URL, then enumerated URLs are file path URLs.

In some areas of the file system hierarchy, file reference URLs cannot be generated. The enumerator always generates file path URLs for these areas.

This function ignores the [generateFileReferenceURLs](cfurlenumeratoroptions/generatefilereferenceurls.md) option.

## See Also

### Related Documentation

- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.

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

# CFURLEnumeratorCreateForDirectoryURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a directory enumerator with provided enumerator behavior options and properties to be prefetched.

## Declaration

```objectivec
extern CFURLEnumeratorRefCFURLEnumeratorCreateForDirectoryURL(CFAllocatorRef alloc, CFURLRef directoryURL, CFURLEnumeratorOptions option, CFArrayRef propertyKeys);
```

## Parameters

- `alloc`: The memory allocator to use. If `NULL`, the default allocator is used.
- `directoryURL`: The URL of the directory to enumerate.
- `option`: A bit array of enumerator behavior options.
- `propertyKeys`: An array of file property keys to prefetch for each enumerated URL. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The created directory enumerator.

<a id="Discussion"></a>

## Discussion

Directory enumerators do not descend into subdirectories of `directoryURL` by default. To create a recursive enumerator, include the [kCFURLEnumeratorDescendRecursively](cfurlenumeratoroptions/descendrecursively.md) option in `options`.

Specifying prefetch properties allows the enumerator to optimize device access by using bulk operations. However, you should not prefetch properties that are not needed, because doing so may degrade performance.

The created directory enumerator generates URLs with the same type as `directoryURL`. If `directoryURL` is a file reference URL, then enumerated URLs are file reference URLs. If `directoryURL` is a file path URL, then enumerated URLs are file path URLs.

In some areas of the file system hierarchy, file reference URLs cannot be generated. The enumerator always generates file path URLs for these areas.

This function ignores the [kCFURLEnumeratorGenerateFileReferenceURLs](cfurlenumeratoroptions/generatefilereferenceurls.md) option.

## See Also

### Related Documentation

- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.

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
