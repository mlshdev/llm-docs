> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffilesecuritycopyaccesscontrollist(_:_:)](https://developer.apple.com/documentation/corefoundation/cffilesecuritycopyaccesscontrollist(_:_:))

# CFFileSecurityCopyAccessControlList(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the access control list associated with a `CFFileSecurityRef` object.

## Declaration

```swift
func CFFileSecurityCopyAccessControlList(_ fileSec: CFFileSecurity!, _ accessControlList: UnsafeMutablePointer<acl_t?>!) -> Bool
```

## Parameters

- `fileSec`: The `CFFileSecurityRef` object.
- `accessControlList`: A pointer to an acl_t object. The resulting ACL can be freed by calling acl_free(3) macOS Manual Page.

<a id="return-value"></a>

## Return Value

Returns `true` if the ACL was successfully copied, or `false` if there is no ACL property associated with the `CFFileSecurityRef` object.

<a id="Discussion"></a>

## Discussion

You can manipulate the `acl_t` object using the acl calls defined in `<sys/acl.h>`. For more information, see the acl manual page.

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
- [CFFileSecurityCopyGroupUUID(\_:\_:)](cffilesecuritycopygroupuuid%28____%29.md): Copies the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyOwnerUUID(\_:\_:)](cffilesecuritycopyowneruuid%28____%29.md): Copies the owner UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCreate(\_:)](cffilesecuritycreate%28__%29.md): Creates a `CFFileSecurityRef` object.

# CFFileSecurityCopyAccessControlList (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the access control list associated with a `CFFileSecurityRef` object.

## Declaration

```objectivec
extern Boolean CFFileSecurityCopyAccessControlList(CFFileSecurityRef fileSec, acl_t*accessControlList);
```

## Parameters

- `fileSec`: The `CFFileSecurityRef` object.
- `accessControlList`: A pointer to an acl_t object. The resulting ACL can be freed by calling acl_free(3) macOS Manual Page.

<a id="return-value"></a>

## Return Value

Returns `true` if the ACL was successfully copied, or `false` if there is no ACL property associated with the `CFFileSecurityRef` object.

<a id="Discussion"></a>

## Discussion

You can manipulate the `acl_t` object using the acl calls defined in `<sys/acl.h>`. For more information, see the acl manual page.

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
- [CFFileSecurityCopyGroupUUID](cffilesecuritycopygroupuuid%28____%29.md): Copies the group UUID associated with a `CFFileSecurityRef` object.
- [CFFileSecurityCopyOwnerUUID](cffilesecuritycopyowneruuid%28____%29.md): Copies the owner UUID associated with a `CFFileSecurityRef` object.
