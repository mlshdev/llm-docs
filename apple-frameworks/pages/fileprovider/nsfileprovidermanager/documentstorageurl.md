> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/documentstorageurl](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/documentstorageurl)

# documentStorageURL (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

The root URL for all shared documents.

## Declaration

```swift
var documentStorageURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the URL `<container URL>/File Provider Storage`, where *container URL* is the value returned by the [containerURL(forSecurityApplicationGroupIdentifier:)](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method.

The container URL refers to an app group container directory used by the `NSFileProviderExtension` extension. You can specify this shared container using the `NSExtensionFileProviderDocumentGroup` key in the File Provider extension’s `info.plist` file.

> **Note**

>  While this property is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing File Provider data

- [default](default.md): A property that returns the shared file provider manager object.
- [providerIdentifier](provideridentifier.md): A purpose identifier for coordinated reads and writes.

# documentStorageURL (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

The root URL for all shared documents.

## Declaration

```objectivec
@property (nonatomic, readonly) NSURL * documentStorageURL;
```

<a id="Discussion"></a>

## Discussion

This property contains the URL `<container URL>/File Provider Storage`, where *container URL* is the value returned by the [containerURLForSecurityApplicationGroupIdentifier:](../../foundation/filemanager/containerurl%28forsecurityapplicationgroupidentifier_%29.md) method.

The container URL refers to an app group container directory used by the `NSFileProviderExtension` extension. You can specify this shared container using the `NSExtensionFileProviderDocumentGroup` key in the File Provider extension’s `info.plist` file.

> **Note**

>  While this property is available on macOS 11+, you don’t need to use it when creating a file provider extension that adopts the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Accessing File Provider data

- [defaultManager](default.md): A property that returns the shared file provider manager object.
- [providerIdentifier](provideridentifier.md): A purpose identifier for coordinated reads and writes.
