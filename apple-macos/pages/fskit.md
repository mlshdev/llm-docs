> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit](https://developer.apple.com/documentation/fskit)

# FSKit (Swift)

**Framework:** FSKit  
**Kind:** Framework  
**Availability:** macOS 15.4+

Implement a file system that runs in user space.

<a id="Overview"></a>

## Overview

With FSKit, you can extend macOS by enabling access to new types of file systems. You do this by developing an FSKit module (`FSModule`), which you deliver as an app extension that runs in user space, and is compatible with Mac App Store distribution. FSKit connects your module to the system’s existing frameworks and tools, like [Disk Arbitration](diskarbitration.md), NetFS, and the `mount(8)` command.

<a id="FSKit-modules"></a>

### FSKit modules

An FSKit module consists of two main parts:

- A set of *module attributes* that you define in the module’s `Info.plist` file. These attributes provide metadata like Boolean keys that indicate feature support and dictionaries that describe command-line interface access.
- The code that implements the file system functionality. Your app extension conforms to one of two protocols, depending on its design flow, as described below.

The FSKit framework defines three key file storage concepts that `FSModule` supports:

- ****Volume****: A directory structure for files and folders.
- ****Resource****: A source of data, such as a block storage device or a network resource you identify with a URL.
- ****Container****: An abstract object that uses one or more resources to deliver one or more volumes, similar to an APFS container. Typically, a container uses only one resource, but some formats like Xsan (Apple’s cluster file system) use multiple disks to store contents for one volume.

<a id="Design-flows"></a>

### Design flows

FSKit provides two design flows, with different trade-offs of functionality and complexity:

- [FSFileSystem](fskit/fsfilesystem.md) is a conventional, full-featured file system that can employ multiple resources and deliver multiple volumes.
- [FSUnaryFileSystem](fskit/fsunaryfilesystem.md) is a simpler file system where containers use only one resource and provide only one volume. Most file systems shipping in macOS fit this pattern, including `HFS`, `msdosfs`, `ExFAT`, `ntfs`, and others.

> **Note**

> The current version of FSKit supports only `FSUnaryFileSystem`.

When you choose a design flow, write an app extension that conforms to either `FileSystemExtension` or [UnaryFileSystemExtension](fskit/unaryfilesystemextension.md), based on your chosen flow. These protocols declare a `fileSystem` delegate object that your extension creates and returns. This delegate object subclasses either `FSFileSystem` or `FSUnaryFileSystem` as appropriate, and conforms to either the `FSFileSystemOperations` or [FSUnaryFileSystemOperations](fskit/fsunaryfilesystemoperations.md) protocol. These protocols define a `loadResource` method, which FSKit uses to make a resource available to the module.

## Topics

### Essentials

- [Building a passthrough file system](fskit/building-a-passthrough-file-system.md): Expose an existing path as its own file system by using the FSKit framework.

### App extensions

- [UnaryFileSystemExtension](fskit/unaryfilesystemextension.md): A protocol for implementing a minimal file system as an app extension.

### File systems

- [FSUnaryFileSystem](fskit/fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileSystemBase](fskit/fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
- [FSFileName](fskit/fsfilename.md): The name of a file, expressed as a data buffer.

### Containers

- [FSContainerIdentifier](fskit/fscontaineridentifier.md): A type that identifies a container.
- [FSContainerStatus](fskit/fscontainerstatus.md): A type that represents a container’s status.

### Resources

- [FSResource](fskit/fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSBlockDeviceResource](fskit/fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSPathURLResource](fskit/fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fskit/fsgenericurlresource.md): A resource that represents an abstract URL.

### Volumes

- [FSVolume](fskit/fsvolume.md): A directory structure for files and folders.

### Items

- [FSItem](fskit/fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

### Maintenance and management

- [FSManageableResourceMaintenanceOperations](fskit/fsmanageableresourcemaintenanceoperations.md): Maintenance operations for a file system’s resources.

### Operations

- [FSOperationID](fskit/fsoperationid.md): A unique identifier for an operation.

### Tasks

- [FSTask](fskit/fstask.md): A class that enables a file system module to pass log messages and completion notifications to clients.
- [FSTaskOptions](fskit/fstaskoptions.md): A class that passes command options to a task, optionally providing security-scoped URLs.

### Errors and logging

- [fs_errorForCocoaError(\_:)](fskit/fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError(\_:)](fskit/fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError(\_:)](fskit/fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSError](fskit/fserror.md): An error encountered when performing an FSKit operation.
- [FSError.Code](fskit/fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskit/fskiterrordomain.md): An error domain for FSKit errors.
- [FSDataCacheError](fskit/fsdatacacheerror.md): An error encountered when performing an FSKit data caching operation.

### FSKit interactions

- [FSClient](fskit/fsclient.md): An interface for apps and daemons to interact with FSKit.

### Supporting types

- [FSBlockmapFlags](fskit/fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fskit/fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fskit/fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fskit/fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fskit/fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fskit/fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fskit/fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fskit/fsproberesult.md): An object that represents the results of a specific probe.

### Entitlements

- [com.apple.developer.fskit.fsmodule](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.fskit.fsmodule): An entitlement that indicates an extension provides an FSKit filesystem.

# FSKit (Objective-C)

**Framework:** FSKit  
**Kind:** Framework  
**Availability:** macOS 15.4+

Implement a file system that runs in user space.

<a id="Overview"></a>

## Overview

With FSKit, you can extend macOS by enabling access to new types of file systems. You do this by developing an FSKit module (`FSModule`), which you deliver as an app extension that runs in user space, and is compatible with Mac App Store distribution. FSKit connects your module to the system’s existing frameworks and tools, like [Disk Arbitration](diskarbitration.md), NetFS, and the `mount(8)` command.

<a id="FSKit-modules"></a>

### FSKit modules

An FSKit module consists of two main parts:

- A set of *module attributes* that you define in the module’s `Info.plist` file. These attributes provide metadata like Boolean keys that indicate feature support and dictionaries that describe command-line interface access.
- The code that implements the file system functionality. Your app extension conforms to one of two protocols, depending on its design flow, as described below.

The FSKit framework defines three key file storage concepts that `FSModule` supports:

- ****Volume****: A directory structure for files and folders.
- ****Resource****: A source of data, such as a block storage device or a network resource you identify with a URL.
- ****Container****: An abstract object that uses one or more resources to deliver one or more volumes, similar to an APFS container. Typically, a container uses only one resource, but some formats like Xsan (Apple’s cluster file system) use multiple disks to store contents for one volume.

<a id="Design-flows"></a>

### Design flows

FSKit provides two design flows, with different trade-offs of functionality and complexity:

- [FSFileSystem](fskit/fsfilesystem.md) is a conventional, full-featured file system that can employ multiple resources and deliver multiple volumes.
- [FSUnaryFileSystem](fskit/fsunaryfilesystem.md) is a simpler file system where containers use only one resource and provide only one volume. Most file systems shipping in macOS fit this pattern, including `HFS`, `msdosfs`, `ExFAT`, `ntfs`, and others.

> **Note**

> The current version of FSKit supports only `FSUnaryFileSystem`.

When you choose a design flow, write an app extension that conforms to either `FileSystemExtension` or [UnaryFileSystemExtension](fskit/unaryfilesystemextension.md), based on your chosen flow. These protocols declare a `fileSystem` delegate object that your extension creates and returns. This delegate object subclasses either `FSFileSystem` or `FSUnaryFileSystem` as appropriate, and conforms to either the `FSFileSystemOperations` or [FSUnaryFileSystemOperations](fskit/fsunaryfilesystemoperations.md) protocol. These protocols define a `loadResource` method, which FSKit uses to make a resource available to the module.

## Topics

### File systems

- [FSFileSystem](fskit/fsfilesystem.md): An abstract base class for implementing a full-featured file system.
- [FSUnaryFileSystem](fskit/fsunaryfilesystem.md): An abstract base class for implementing a minimal file system.
- [FSFileSystemBase](fskit/fsfilesystembase.md): A protocol containing functionality supplied by FSKit to file system implementations.
- [FSFileName](fskit/fsfilename.md): The name of a file, expressed as a data buffer.

### Containers

- [FSContainerIdentifier](fskit/fscontaineridentifier.md): A type that identifies a container.
- [FSContainerStatus](fskit/fscontainerstatus.md): A type that represents a container’s status.

### Resources

- [FSResource](fskit/fsresource.md): An abstract resource a file system uses to provide data for a volume.
- [FSBlockDeviceResource](fskit/fsblockdeviceresource.md): A resource that represents a block storage disk partition.
- [FSPathURLResource](fskit/fspathurlresource.md): A resource that represents a path in the system file space.
- [FSGenericURLResource](fskit/fsgenericurlresource.md): A resource that represents an abstract URL.

### Volumes

- [FSVolume](fskit/fsvolume.md): A directory structure for files and folders.

### Items

- [FSItem](fskit/fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

### Maintenance and management

- [FSManageableResourceMaintenanceOperations](fskit/fsmanageableresourcemaintenanceoperations.md): Maintenance operations for a file system’s resources.

### Operations

- [FSOperationID](fskit/fsoperationid.md): A unique identifier for an operation.

### Tasks

- [FSTask](fskit/fstask.md): A class that enables a file system module to pass log messages and completion notifications to clients.
- [FSTaskOptions](fskit/fstaskoptions.md): A class that passes command options to a task, optionally providing security-scoped URLs.

### Errors and logging

- [fs_errorForCocoaError](fskit/fs_errorforcocoaerror%28__%29.md): Creates an error object for the given Cocoa error code.
- [fs_errorForMachError](fskit/fs_errorformacherror%28__%29.md): Creates an error object for the given Mach error code.
- [fs_errorForPOSIXError](fskit/fs_errorforposixerror%28__%29.md): Creates an error object for the given POSIX error code.
- [FSErrorCode](fskit/fserror/code.md): A code that indicates a specific FSKit error.
- [FSKitErrorDomain](fskit/fskiterrordomain.md): An error domain for FSKit errors.

### FSKit interactions

- [FSClient](fskit/fsclient.md): An interface for apps and daemons to interact with FSKit.

### Utilities

- [FSKitVersionNumber](fskit/fskitversionnumber.md): Project version number for FSKit.
- [FSKitVersionString](fskit/fskitversionstring.md): Project version string for FSKit.

### Supporting types

- [FSBlockmapFlags](fskit/fsblockmapflags.md): Flags that describe the behavior of a blockmap operation.
- [FSCompleteIOFlags](fskit/fscompleteioflags.md): Flags that describe the behavior of an I/O completion operation.
- [FSEntityIdentifier](fskit/fsentityidentifier.md): A base type that identifies containers and volumes.
- [FSExtentPacker](fskit/fsextentpacker.md): A type that directs the kernel to map space on disk to a specific file managed by this file system.
- [FSExtentType](fskit/fsextenttype.md): An enumeration of types of extents.
- [FSMatchResult](fskit/fsmatchresult.md): A type that represents the recognition and usability of a probed resource.
- [FSMetadataRange](fskit/fsmetadatarange.md): A range that describes contiguous metadata segments on disk.
- [FSProbeResult](fskit/fsproberesult.md): An object that represents the results of a specific probe.

### Macros

- [FSKIT_API_AVAILABILITY_V1](fskit/fskit_api_availability_v1.md)
- [FSKIT_API_UNAVAILABLE_V1](fskit/fskit_api_unavailable_v1.md)
- [FS_ALWAYS_EXPORT](fskit/fs_always_export.md)
- [FS_EXPORT](fskit/fs_export.md)
- [FS_EXPORT_INTERNAL](fskit/fs_export_internal.md)
- [FS_EXTERN](fskit/fs_extern.md)
- [FS_SUPPORTED_VISIBILITY](fskit/fs_supported_visibility.md)
- [FSKIT_API_AVAILABILITY_V2](fskit/fskit_api_availability_v2.md)
- [FSKIT_API_AVAILABILITY_V2_4](fskit/fskit_api_availability_v2_4.md)
- [FSKIT_API_AVAILABILITY_V3](fskit/fskit_api_availability_v3.md)
- [FSKIT_API_INTRODUCED_V1_DEPRECATED_V3_WITH_REPLACEMENT](fskit/fskit_api_introduced_v1_deprecated_v3_with_replacement.md)
- [FSKIT_CALLED_ONCE](fskit/fskit_called_once.md)

### Entitlements

- [com.apple.developer.fskit.fsmodule](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.fskit.fsmodule): An entitlement that indicates an extension provides an FSKit filesystem.

### Protocols

- [FSVolumeCommonOperations](fskit/fsvolume/commonoperations.md): Methods common to `FSVolumeHandler` and `FSVolumeOperations`
