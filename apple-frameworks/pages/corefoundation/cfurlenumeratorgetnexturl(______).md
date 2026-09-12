> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlenumeratorgetnexturl(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlenumeratorgetnexturl(_:_:_:))

# CFURLEnumeratorGetNextURL(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances an enumerator to the next URL.

## Declaration

```swift
func CFURLEnumeratorGetNextURL(_ enumerator: CFURLEnumerator!, _ url: UnsafeMutablePointer<Unmanaged<CFURL>?>!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> CFURLEnumeratorResult
```

## Parameters

- `enumerator`: The enumerator.
- `url`: Contains the next URL if this function returns [CFURLEnumeratorResult.success](cfurlenumeratorresult/success.md).
- `error`: Contains error information if this function returns [CFURLEnumeratorResult.error](cfurlenumeratorresult/error.md). Error information is retained and must be released. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The result of advancing the enumerator.

<a id="Discussion"></a>

## Discussion

If this function returns [CFURLEnumeratorResult.end](cfurlenumeratorresult/end.md), the enumeration has finished.

A return value of [CFURLEnumeratorResult.error](cfurlenumeratorresult/error.md) does not imply that the enumeration has finished.

If this function returns [CFURLEnumeratorResult.error](cfurlenumeratorresult/error.md), the user info dictionary of `error` is populated with the following entries (when possible):

- The [kCFErrorUnderlyingErrorKey](kcferrorunderlyingerrorkey.md) entry is populated with the underlying error if the underlying error is not in the [kCFErrorDomainCocoa](kcferrordomaincocoa.md) domain.
- The [NSURLErrorKey](../foundation/nsurlerrorkey.md) entry is populated with the URL that caused the error, as a [CFURL](cfurl.md) object.
- The [NSFilePathErrorKey](../foundation/nsfilepatherrorkey.md) entry is populated with the file path that caused the error, as a [CFString](cfstring.md) object.

## See Also

### Related Documentation

- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.

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

# CFURLEnumeratorGetNextURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances an enumerator to the next URL.

## Declaration

```objectivec
extern CFURLEnumeratorResult CFURLEnumeratorGetNextURL(CFURLEnumeratorRef enumerator, CFURLRef*url, CFErrorRef*error);
```

## Parameters

- `enumerator`: The enumerator.
- `url`: Contains the next URL if this function returns [kCFURLEnumeratorSuccess](cfurlenumeratorresult/success.md).
- `error`: Contains error information if this function returns [kCFURLEnumeratorError](cfurlenumeratorresult/error.md). Error information is retained and must be released. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The result of advancing the enumerator.

<a id="Discussion"></a>

## Discussion

If this function returns [kCFURLEnumeratorEnd](cfurlenumeratorresult/end.md), the enumeration has finished.

A return value of [kCFURLEnumeratorError](cfurlenumeratorresult/error.md) does not imply that the enumeration has finished.

If this function returns [kCFURLEnumeratorError](cfurlenumeratorresult/error.md), the user info dictionary of `error` is populated with the following entries (when possible):

- The [kCFErrorUnderlyingErrorKey](kcferrorunderlyingerrorkey.md) entry is populated with the underlying error if the underlying error is not in the [kCFErrorDomainCocoa](kcferrordomaincocoa.md) domain.
- The [NSURLErrorKey](../foundation/nsurlerrorkey.md) entry is populated with the URL that caused the error, as a [CFURLRef](cfurl.md) object.
- The [NSFilePathErrorKey](../foundation/nsfilepatherrorkey.md) entry is populated with the file path that caused the error, as a [CFStringRef](cfstring.md) object.

## See Also

### Related Documentation

- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.

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
