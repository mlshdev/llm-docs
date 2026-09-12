> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/labelnumberkey](https://developer.apple.com/documentation/foundation/urlresourcekey/labelnumberkey)

# labelNumberKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The resource’s label number, returned as an `NSNumber` object (read-write).

## Declaration

```swift
static let labelNumberKey: URLResourceKey
```

## See Also

### Other resource keys

- [keysOfUnsetValuesKey](keysofunsetvalueskey.md): Key for the resource properties that have not been set after the [setResourceValues(\_:)](../nsurl/setresourcevalues%28__%29.md) method returns an error, returned as an array of `NSString` objects.
- [quarantinePropertiesKey](quarantinepropertieskey.md)
- [addedToDirectoryDateKey](addedtodirectorydatekey.md): The time at which the resource’s was created or renamed into or within its parent directory, returned as an `NSDate`. Inconsistent behavior may be observed when this attribute is requested on hard-linked items. This property is not supported by all volumes. (read-only)
- [attributeModificationDateKey](attributemodificationdatekey.md): The time at which the resource’s attributes were most recently modified, returned as an `NSDate` object if the volume supports attribute modification dates, or `nil` if attribute modification dates are unsupported (read-only).
- [contentAccessDateKey](contentaccessdatekey.md): The time at which the resource was most recently accessed.
- [contentModificationDateKey](contentmodificationdatekey.md): The time at which the resource was most recently modified.
- [creationDateKey](creationdatekey.md): The time at which the resource was created.
- [customIconKey](customiconkey.md): The icon stored with the resource, returned as an `NSImage` object, or `nil` if the resource has no custom icon.
- [documentIdentifierKey](documentidentifierkey.md): The document identifier returned as an `NSNumber` (read-only).
- [effectiveIconKey](effectiveiconkey.md): The resource’s normal icon, returned as an `NSImage` object (read-only).
- [generationIdentifierKey](generationidentifierkey.md): An opaque generation identifier, returned as an `id <NSCopying, NSCoding, NSObject>` (read-only)
- [hasHiddenExtensionKey](hashiddenextensionkey.md): Key for determining whether the resource’s extension is normally removed from its localized name, returned as a Boolean `NSNumber` object (read-write).
- [isExcludedFromBackupKey](isexcludedfrombackupkey.md): A key for indicating whether the system excludes the resource from all backups of app data.
- [isExecutableKey](isexecutablekey.md): Key for determining whether the current process (as determined by the EUID) can execute the resource (if it is a file) or search the resource (if it is a directory), returned as a Boolean `NSNumber` object (read-only).
- [isHiddenKey](ishiddenkey.md): Key for determining whether the resource is normally not displayed to users, returned as a Boolean `NSNumber` object (read-write).

# NSURLLabelNumberKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The resource’s label number, returned as an `NSNumber` object (read-write).

## Declaration

```objectivec
extern NSURLResourceKey const NSURLLabelNumberKey;
```

## See Also

### Other resource keys

- [NSURLKeysOfUnsetValuesKey](keysofunsetvalueskey.md): Key for the resource properties that have not been set after the [setResourceValues:error:](../nsurl/setresourcevalues%28__%29.md) method returns an error, returned as an array of `NSString` objects.
- [NSURLQuarantinePropertiesKey](quarantinepropertieskey.md)
- [NSURLAddedToDirectoryDateKey](addedtodirectorydatekey.md): The time at which the resource’s was created or renamed into or within its parent directory, returned as an `NSDate`. Inconsistent behavior may be observed when this attribute is requested on hard-linked items. This property is not supported by all volumes. (read-only)
- [NSURLAttributeModificationDateKey](attributemodificationdatekey.md): The time at which the resource’s attributes were most recently modified, returned as an `NSDate` object if the volume supports attribute modification dates, or `nil` if attribute modification dates are unsupported (read-only).
- [NSURLContentAccessDateKey](contentaccessdatekey.md): The time at which the resource was most recently accessed.
- [NSURLContentModificationDateKey](contentmodificationdatekey.md): The time at which the resource was most recently modified.
- [NSURLCreationDateKey](creationdatekey.md): The time at which the resource was created.
- [NSURLCustomIconKey](customiconkey.md): The icon stored with the resource, returned as an `NSImage` object, or `nil` if the resource has no custom icon.
- [NSURLDocumentIdentifierKey](documentidentifierkey.md): The document identifier returned as an `NSNumber` (read-only).
- [NSURLEffectiveIconKey](effectiveiconkey.md): The resource’s normal icon, returned as an `NSImage` object (read-only).
- [NSURLGenerationIdentifierKey](generationidentifierkey.md): An opaque generation identifier, returned as an `id <NSCopying, NSCoding, NSObject>` (read-only)
- [NSURLHasHiddenExtensionKey](hashiddenextensionkey.md): Key for determining whether the resource’s extension is normally removed from its localized name, returned as a Boolean `NSNumber` object (read-write).
- [NSURLIsExcludedFromBackupKey](isexcludedfrombackupkey.md): A key for indicating whether the system excludes the resource from all backups of app data.
- [NSURLIsExecutableKey](isexecutablekey.md): Key for determining whether the current process (as determined by the EUID) can execute the resource (if it is a file) or search the resource (if it is a directory), returned as a Boolean `NSNumber` object (read-only).
- [NSURLIsHiddenKey](ishiddenkey.md): Key for determining whether the resource is normally not displayed to users, returned as a Boolean `NSNumber` object (read-write).
