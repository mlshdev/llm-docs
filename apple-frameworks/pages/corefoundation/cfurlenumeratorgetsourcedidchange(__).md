> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratorgetsourcedidchange(_:)](https://developer.apple.com/documentation/corefoundation/cfurlenumeratorgetsourcedidchange(_:))

# CFURLEnumeratorGetSourceDidChange(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 5.0) · iPadOS 4.0+ (deprecated in 5.0) · Mac Catalyst 4.0+ (deprecated in 5.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This function is unimplemented, so it performs no operation.

> Use File System Events API instead

## Declaration

```swift
func CFURLEnumeratorGetSourceDidChange(_ enumerator: CFURLEnumerator!) -> Bool
```

## Parameters

- `enumerator`: The enumerator.

<a id="return-value"></a>

## Return Value

Returns `false`.

<a id="discussion"></a>

## Discussion

Use the File System Events API to detect changes to the file system. See [File System Events Programming Guide](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/FSEvents_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005289) for more information.

## See Also

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

# CFURLEnumeratorGetSourceDidChange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 5.0) · iPadOS 4.0+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.7) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

This function is unimplemented, so it performs no operation.

> Use File System Events API instead

## Declaration

```objectivec
extern Boolean CFURLEnumeratorGetSourceDidChange(CFURLEnumeratorRef enumerator);
```

## Parameters

- `enumerator`: The enumerator.

<a id="return-value"></a>

## Return Value

Returns `false`.

<a id="discussion"></a>

## Discussion

Use the File System Events API to detect changes to the file system. See [File System Events Programming Guide](https://developer.apple.com/library/archive/documentation/Darwin/Conceptual/FSEvents_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005289) for more information.

## See Also

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
