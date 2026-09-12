> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/contentmodificationdatekey](https://developer.apple.com/documentation/foundation/urlresourcekey/contentmodificationdatekey)

# contentModificationDateKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which the resource was most recently modified.

## Declaration

```swift
static let contentModificationDateKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

This key corresponds to an [NSDate](../nsdate.md) value, or `nil` if the volume doesn’t support modification dates.

The corresponding resource is read-write.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Other resource keys

- [keysOfUnsetValuesKey](keysofunsetvalueskey.md): Key for the resource properties that have not been set after the [setResourceValues(\_:)](../nsurl/setresourcevalues%28__%29.md) method returns an error, returned as an array of `NSString` objects.
- [quarantinePropertiesKey](quarantinepropertieskey.md)
- [addedToDirectoryDateKey](addedtodirectorydatekey.md): The time at which the resource’s was created or renamed into or within its parent directory, returned as an `NSDate`. Inconsistent behavior may be observed when this attribute is requested on hard-linked items. This property is not supported by all volumes. (read-only)
- [attributeModificationDateKey](attributemodificationdatekey.md): The time at which the resource’s attributes were most recently modified, returned as an `NSDate` object if the volume supports attribute modification dates, or `nil` if attribute modification dates are unsupported (read-only).
- [contentAccessDateKey](contentaccessdatekey.md): The time at which the resource was most recently accessed.
- [creationDateKey](creationdatekey.md): The time at which the resource was created.
- [customIconKey](customiconkey.md): The icon stored with the resource, returned as an `NSImage` object, or `nil` if the resource has no custom icon.
- [documentIdentifierKey](documentidentifierkey.md): The document identifier returned as an `NSNumber` (read-only).
- [effectiveIconKey](effectiveiconkey.md): The resource’s normal icon, returned as an `NSImage` object (read-only).
- [generationIdentifierKey](generationidentifierkey.md): An opaque generation identifier, returned as an `id <NSCopying, NSCoding, NSObject>` (read-only)
- [hasHiddenExtensionKey](hashiddenextensionkey.md): Key for determining whether the resource’s extension is normally removed from its localized name, returned as a Boolean `NSNumber` object (read-write).
- [isExcludedFromBackupKey](isexcludedfrombackupkey.md): A key for indicating whether the system excludes the resource from all backups of app data.
- [isExecutableKey](isexecutablekey.md): Key for determining whether the current process (as determined by the EUID) can execute the resource (if it is a file) or search the resource (if it is a directory), returned as a Boolean `NSNumber` object (read-only).
- [isHiddenKey](ishiddenkey.md): Key for determining whether the resource is normally not displayed to users, returned as a Boolean `NSNumber` object (read-write).
- [isReadableKey](isreadablekey.md): Key for determining whether the current process (as determined by the EUID) can read the resource, returned as a Boolean `NSNumber` object (read-only).

# NSURLContentModificationDateKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which the resource was most recently modified.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLContentModificationDateKey;
```

<a id="Discussion"></a>

## Discussion

This key corresponds to an [NSDate](../nsdate.md) value, or `nil` if the volume doesn’t support modification dates.

The corresponding resource is read-write.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Other resource keys

- [NSURLKeysOfUnsetValuesKey](keysofunsetvalueskey.md): Key for the resource properties that have not been set after the [setResourceValues:error:](../nsurl/setresourcevalues%28__%29.md) method returns an error, returned as an array of `NSString` objects.
- [NSURLQuarantinePropertiesKey](quarantinepropertieskey.md)
- [NSURLAddedToDirectoryDateKey](addedtodirectorydatekey.md): The time at which the resource’s was created or renamed into or within its parent directory, returned as an `NSDate`. Inconsistent behavior may be observed when this attribute is requested on hard-linked items. This property is not supported by all volumes. (read-only)
- [NSURLAttributeModificationDateKey](attributemodificationdatekey.md): The time at which the resource’s attributes were most recently modified, returned as an `NSDate` object if the volume supports attribute modification dates, or `nil` if attribute modification dates are unsupported (read-only).
- [NSURLContentAccessDateKey](contentaccessdatekey.md): The time at which the resource was most recently accessed.
- [NSURLCreationDateKey](creationdatekey.md): The time at which the resource was created.
- [NSURLCustomIconKey](customiconkey.md): The icon stored with the resource, returned as an `NSImage` object, or `nil` if the resource has no custom icon.
- [NSURLDocumentIdentifierKey](documentidentifierkey.md): The document identifier returned as an `NSNumber` (read-only).
- [NSURLEffectiveIconKey](effectiveiconkey.md): The resource’s normal icon, returned as an `NSImage` object (read-only).
- [NSURLGenerationIdentifierKey](generationidentifierkey.md): An opaque generation identifier, returned as an `id <NSCopying, NSCoding, NSObject>` (read-only)
- [NSURLHasHiddenExtensionKey](hashiddenextensionkey.md): Key for determining whether the resource’s extension is normally removed from its localized name, returned as a Boolean `NSNumber` object (read-write).
- [NSURLIsExcludedFromBackupKey](isexcludedfrombackupkey.md): A key for indicating whether the system excludes the resource from all backups of app data.
- [NSURLIsExecutableKey](isexecutablekey.md): Key for determining whether the current process (as determined by the EUID) can execute the resource (if it is a file) or search the resource (if it is a directory), returned as a Boolean `NSNumber` object (read-only).
- [NSURLIsHiddenKey](ishiddenkey.md): Key for determining whether the resource is normally not displayed to users, returned as a Boolean `NSNumber` object (read-write).
- [NSURLIsReadableKey](isreadablekey.md): Key for determining whether the current process (as determined by the EUID) can read the resource, returned as a Boolean `NSNumber` object (read-only).
