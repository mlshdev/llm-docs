> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratorskipdescendents(_:)](https://developer.apple.com/documentation/corefoundation/cfurlenumeratorskipdescendents(_:))

# CFURLEnumeratorSkipDescendents(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells a recursive enumerator not to descend into the directory at the URL that was returned by the most recent call to the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.

## Declaration

```swift
func CFURLEnumeratorSkipDescendents(_ enumerator: CFURLEnumerator!)
```

## Parameters

- `enumerator`: The enumerator.

<a id="Discussion"></a>

## Discussion

A call to this function is ignored in the following cases:

- The [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function has never been called with this enumerator.
- The last URL returned by the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function is not a directory.
- The enumerator is not a directory enumerator that was created with the [descendRecursively](cfurlenumeratoroptions/descendrecursively.md) option.

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

# CFURLEnumeratorSkipDescendents (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells a recursive enumerator not to descend into the directory at the URL that was returned by the most recent call to the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.

## Declaration

```objectivec
extern void CFURLEnumeratorSkipDescendents(CFURLEnumeratorRef enumerator);
```

## Parameters

- `enumerator`: The enumerator.

<a id="Discussion"></a>

## Discussion

A call to this function is ignored in the following cases:

- The [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function has never been called with this enumerator.
- The last URL returned by the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function is not a directory.
- The enumerator is not a directory enumerator that was created with the [kCFURLEnumeratorDescendRecursively](cfurlenumeratoroptions/descendrecursively.md) option.

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
