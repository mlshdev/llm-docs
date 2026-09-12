> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/documentstorageurl](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/documentstorageurl)

# documentStorageURL (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The root URL for all shared documents.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) method instead.

## Declaration

```swift
var documentStorageURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the URL `<container URL>/File Provider Storage`, where *container URL* is the value returned by the [containerURL(forSecurityApplicationGroupIdentifier:)](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method.

The container URL refers to an app group container directory used by the `NSFileProviderExtension` extension. You can specify this shared container using the `NSExtensionFileProviderDocumentGroup` key in the File Provider extension’s `info.plist` file.

## See Also

### Accessing the document storage

- [providerIdentifier](provideridentifier.md): Deprecated. A purpose identifier for coordinated reads and writes.

# documentStorageURL (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 11.0) · iPadOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

The root URL for all shared documents.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [documentStorageURL](../nsfileprovidermanager/documentstorageurl.md) method instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * documentStorageURL;
```

<a id="Discussion"></a>

## Discussion

This property contains the URL `<container URL>/File Provider Storage`, where *container URL* is the value returned by the [containerURLForSecurityApplicationGroupIdentifier:](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method.

The container URL refers to an app group container directory used by the `NSFileProviderExtension` extension. You can specify this shared container using the `NSExtensionFileProviderDocumentGroup` key in the File Provider extension’s `info.plist` file.

## See Also

### Accessing the document storage

- [providerIdentifier](provideridentifier.md): Deprecated. A purpose identifier for coordinated reads and writes.
