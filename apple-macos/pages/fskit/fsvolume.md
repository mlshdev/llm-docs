> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume](https://developer.apple.com/documentation/fskit/fsvolume)

# FSVolume (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A directory structure for files and folders.

## Declaration

```swift
class FSVolume
```

<a id="overview"></a>

## Overview

A file system, depending on its type, provides one or more volumes to clients. The [FSUnaryFileSystem](fsunaryfilesystem.md) by definition provides only one volume, while an [FSFileSystem](fsfilesystem.md) supports multiple volumes.

You implement a volume for your file system type by subclassing this class, and also conforming to the [FSVolume.Handler](fsvolume/handler.md) and [FSVolume.PathConfOperations](fsvolume/pathconfoperations.md) protocols. This protocol defines the minimum set of operations supported by a volume, such as mounting, activating, creating and removing items, and more.

Your volume can provide additional functionality by conforming to other volume handler protocols. These protocols add support for operations like open and close, read and write, extended attribute (Xattr) manipulation, and more.

## Topics

### Creating a volume

- [init(volumeID:volumeName:)](fsvolume/init%28volumeid_volumename_%29.md): Creates a volume with the given identifier and name.
- [FSVolume.Identifier](fsvolume/identifier.md): A type that identifies a volume.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

### Accessing volume properties

- [volumeID](fsvolume/volumeid.md): An identifier that uniquely identifies the volume.
- [name](fsvolume/name.md): The name of the volume.

### Implementing required handlers

- [FSVolume.Handler](fsvolume/handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolumeHandlerResult](fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.
- [FSVolume.PathConfOperations](fsvolume/pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.

### Implementing optional handlers

- [FSVolume.OpenCloseHandler](fsvolume/openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteHandler](fsvolume/readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckHandler](fsvolume/accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameHandler](fsvolume/renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateHandler](fsvolume/preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrHandler](fsvolume/xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivationHandler](fsvolume/itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolume.KernelOffloadedIOHandler](fsvolume/kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolume.DataCacheHandler](fsvolume/datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolume.SeekRegionHandler](fsvolume/seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

### Managing caching behavior

- [setCacheState(for:cacheMode:coherencyType:action:)](fsvolume/setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSVolume.DataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSVolume.KernelCacheCoherencyType](fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSVolume.KernelCacheCoherencyAction](fsvolume/kernelcachecoherencyaction.md): A type that defines actions for cache state changes.

### Deprecated

Migrate your code to the handler-style protocols instead of these operation protocols.

- [FSVolume.Operations](fsvolume/operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolume.OpenCloseOperations](fsvolume/opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolume.ReadWriteOperations](fsvolume/readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolume.AccessCheckOperations](fsvolume/accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolume.RenameOperations](fsvolume/renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolume.PreallocateOperations](fsvolume/preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolume.XattrOperations](fsvolume/xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolume.ItemDeactivation](fsvolume/itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

### Protocols

- [FSVolume.CommonOperations](fsvolume/commonoperations.md): Methods common to `FSVolumeHandler` and `FSVolumeOperations`

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# FSVolume (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A directory structure for files and folders.

## Declaration

```objectivec
@interface FSVolume : NSObject
```

<a id="overview"></a>

## Overview

A file system, depending on its type, provides one or more volumes to clients. The [FSUnaryFileSystem](fsunaryfilesystem.md) by definition provides only one volume, while an [FSFileSystem](fsfilesystem.md) supports multiple volumes.

You implement a volume for your file system type by subclassing this class, and also conforming to the [FSVolumeHandler](fsvolume/handler.md) and [FSVolumePathConfOperations](fsvolume/pathconfoperations.md) protocols. This protocol defines the minimum set of operations supported by a volume, such as mounting, activating, creating and removing items, and more.

Your volume can provide additional functionality by conforming to other volume handler protocols. These protocols add support for operations like open and close, read and write, extended attribute (Xattr) manipulation, and more.

## Topics

### Creating a volume

- [initWithVolumeID:volumeName:](fsvolume/init%28volumeid_volumename_%29.md): Creates a volume with the given identifier and name.
- [FSVolumeIdentifier](fsvolume/identifier.md): A type that identifies a volume.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

### Accessing volume properties

- [volumeID](fsvolume/volumeid.md): An identifier that uniquely identifies the volume.
- [name](fsvolume/name.md): The name of the volume.

### Implementing required handlers

- [FSVolumeHandler](fsvolume/handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolumeHandlerResult](fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.
- [FSVolumePathConfOperations](fsvolume/pathconfoperations.md): Properties implemented by volumes that support providing the values of system limits or options.

### Implementing optional handlers

- [FSVolumeOpenCloseHandler](fsvolume/openclosehandler.md): Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteHandler](fsvolume/readwritehandler.md): Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckHandler](fsvolume/accesscheckhandler.md): Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameHandler](fsvolume/renamehandler.md): Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateHandler](fsvolume/preallocatehandler.md): Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrHandler](fsvolume/xattrhandler.md): Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivationHandler](fsvolume/itemdeactivationhandler.md): Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOHandler](fsvolume/kerneloffloadediohandler.md): Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.
- [FSVolumeDataCacheHandler](fsvolume/datacachehandler.md): Methods and properties implemented by volumes that coordinate kernel-level data caching.
- [FSVolumeSeekRegionHandler](fsvolume/seekregionhandler.md): Methods and properties implemented by volumes that support seek operations

### Managing caching behavior

- [setCacheStateForItem:cacheMode:coherencyType:coherencyAction:](fsvolume/setcachestate%28for_cachemode_coherencytype_action_%29.md): Sends a synchronous cache state update request from the module to the kernel.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSKernelCacheCoherencyType](fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSKernelCacheCoherencyAction](fsvolume/kernelcachecoherencyaction.md): A type that defines actions for cache state changes.

### Deprecated

Migrate your code to the handler-style protocols instead of these operation protocols.

- [FSVolumeOperations](fsvolume/operations.md): Deprecated. Methods that all volumes implement to provide required capabilities.
- [FSVolumeOpenCloseOperations](fsvolume/opencloseoperations.md): Deprecated. Methods and properties implemented by volumes that want to receive open and close calls for each item.
- [FSVolumeReadWriteOperations](fsvolume/readwriteoperations.md): Deprecated. Methods implemented for read and write operations that deliver data to and from the extension.
- [FSVolumeAccessCheckOperations](fsvolume/accesscheckoperations.md): Deprecated. Methods and properties implemented by volumes that want to enforce access check operations.
- [FSVolumeRenameOperations](fsvolume/renameoperations.md): Deprecated. Methods and properties implemented by volumes that support renaming the volume.
- [FSVolumePreallocateOperations](fsvolume/preallocateoperations.md): Deprecated. Methods and properties implemented by volumes that want to offer preallocation functions.
- [FSVolumeXattrOperations](fsvolume/xattroperations.md): Deprecated. Methods and properties implemented by volumes that natively or partially support extended attributes.
- [FSVolumeItemDeactivation](fsvolume/itemdeactivation.md): Deprecated. Methods and properties implemented by volumes that support deactivating items.
- [FSVolumeKernelOffloadedIOOperations](fsvolumekerneloffloadediooperations.md): Deprecated. Methods and properties implemented by volumes that use kernel-offloaded I/O to achieve higher file transfer performance.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
