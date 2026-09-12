> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmanageableresourcemaintenanceoperations](https://developer.apple.com/documentation/fskit/fsmanageableresourcemaintenanceoperations)

# FSManageableResourceMaintenanceOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Maintenance operations for a file system’s resources.

## Declaration

```swift
protocol FSManageableResourceMaintenanceOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol includes operations to check and format a resource for an [FSUnaryFileSystem](fsunaryfilesystem.md). Conform to this protocol if you implement a [FSUnaryFileSystem](fsunaryfilesystem.md) that uses an [FSBlockDeviceResource](fsblockdeviceresource.md).

## Topics

### Checking the file system

- [startCheck(task:options:)](fsmanageableresourcemaintenanceoperations/startcheck%28task_options_%29.md): Starts checking the file system with the given options.

### Formatting the file system

- [startFormat(task:options:)](fsmanageableresourcemaintenanceoperations/startformat%28task_options_%29.md): Starts formatting the file system with the given options.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# FSManageableResourceMaintenanceOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Maintenance operations for a file system’s resources.

## Declaration

```objectivec
@protocol FSManageableResourceMaintenanceOperations <NSObject>
```

<a id="overview"></a>

## Overview

This protocol includes operations to check and format a resource for an [FSUnaryFileSystem](fsunaryfilesystem.md). Conform to this protocol if you implement a [FSUnaryFileSystem](fsunaryfilesystem.md) that uses an [FSBlockDeviceResource](fsblockdeviceresource.md).

## Topics

### Checking the file system

- [startCheckWithTask:options:error:](fsmanageableresourcemaintenanceoperations/startcheck%28task_options_%29.md): Starts checking the file system with the given options.

### Formatting the file system

- [startFormatWithTask:options:error:](fsmanageableresourcemaintenanceoperations/startformat%28task_options_%29.md): Starts formatting the file system with the given options.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
