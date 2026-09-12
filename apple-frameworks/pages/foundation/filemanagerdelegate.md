> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanagerdelegate](https://developer.apple.com/documentation/foundation/filemanagerdelegate)

# FileManagerDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface a file manager’s delegate uses to intervene during operations or if an error occurs.

## Declaration

```swift
protocol FileManagerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [FileManagerDelegate](filemanagerdelegate.md) protocol defines optional methods for managing operations involving the copying, moving, linking, or removal of files and directories. When you use an [FileManager](filemanager.md) object to initiate a copy, move, link, or remove operation, the file manager asks its delegate whether the operation should begin at all and whether it should proceed when an error occurs.

The methods of this protocol accept either [NSURL](nsurl.md) or [NSString](nsstring.md) objects. The file manager always prefers methods that take an [NSURL](nsurl.md) object over those that take an [NSString](nsstring.md) object.

You should associate your delegate with a unique instance of the [FileManager](filemanager.md) class, as opposed to the shared instance.

## Topics

### Moving  an Item

- [fileManager(\_:shouldMoveItemAt:to:)](filemanagerdelegate/filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager(\_:shouldMoveItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:movingItemAt:to:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:movingItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

### Copying  an Item

- [fileManager(\_:shouldCopyItemAt:to:)](filemanagerdelegate/filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager(\_:shouldCopyItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager(\_:shouldProceedAfterError:copyingItemAt:to:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:copyingItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

### Removing an Item

- [fileManager(\_:shouldRemoveItemAt:)](filemanagerdelegate/filemanager%28__shouldremoveitemat_%29.md): Asks the delegate whether the item at the specified URL should be deleted.
- [fileManager(\_:shouldRemoveItemAtPath:)](filemanagerdelegate/filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager(\_:shouldProceedAfterError:removingItemAt:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:removingItemAtPath:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitematpath_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.

### Linking an Item

- [fileManager(\_:shouldLinkItemAt:to:)](filemanagerdelegate/filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager(\_:shouldLinkItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager(\_:shouldProceedAfterError:linkingItemAt:to:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager(\_:shouldProceedAfterError:linkingItemAtPath:toPath:)](filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File system operations

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md): Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.
- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [FileManager](filemanager.md): A convenient interface to the contents of the file system, and the primary means of interacting with it.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.

# NSFileManagerDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface a file manager’s delegate uses to intervene during operations or if an error occurs.

## Declaration

```objectivec
@protocol NSFileManagerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [NSFileManagerDelegate](filemanagerdelegate.md) protocol defines optional methods for managing operations involving the copying, moving, linking, or removal of files and directories. When you use an [NSFileManager](filemanager.md) object to initiate a copy, move, link, or remove operation, the file manager asks its delegate whether the operation should begin at all and whether it should proceed when an error occurs.

The methods of this protocol accept either [NSURL](nsurl.md) or [NSString](nsstring.md) objects. The file manager always prefers methods that take an [NSURL](nsurl.md) object over those that take an [NSString](nsstring.md) object.

You should associate your delegate with a unique instance of the [NSFileManager](filemanager.md) class, as opposed to the shared instance.

## Topics

### Moving  an Item

- [fileManager:shouldMoveItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldmoveitemat_to_%29.md): Asks the delegate if the file manager should move the specified item to the new URL.
- [fileManager:shouldMoveItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldmoveitematpath_topath_%29.md): Asks the delegate if the file manager should move the specified item to the new path.
- [fileManager:shouldProceedAfterError:movingItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified URL.
- [fileManager:shouldProceedAfterError:movingItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_movingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while moving the item at the specified path.

### Copying  an Item

- [fileManager:shouldCopyItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldcopyitemat_to_%29.md): Asks the delegate if the file manager should copy the specified item to the new URL.
- [fileManager:shouldCopyItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldcopyitematpath_topath_%29.md): Asks the delegate if the file manager should copy the specified item to the new path.
- [fileManager:shouldProceedAfterError:copyingItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitemat_to_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified URL.
- [fileManager:shouldProceedAfterError:copyingItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_copyingitematpath_topath_%29.md): Asks the delegate if the move operation should continue after an error occurs while copying the item at the specified path.

### Removing an Item

- [fileManager:shouldRemoveItemAtURL:](filemanagerdelegate/filemanager%28__shouldremoveitemat_%29.md): Asks the delegate whether the item at the specified URL should be deleted.
- [fileManager:shouldRemoveItemAtPath:](filemanagerdelegate/filemanager%28__shouldremoveitematpath_%29.md): Asks the delegate whether the item at the specified path should be deleted.
- [fileManager:shouldProceedAfterError:removingItemAtURL:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitemat_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified URL.
- [fileManager:shouldProceedAfterError:removingItemAtPath:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_removingitematpath_%29.md): Asks the delegate if the operation should continue after an error occurs while removing the item at the specified path.

### Linking an Item

- [fileManager:shouldLinkItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldlinkitemat_to_%29.md): Asks the delegate if a hard link should be created between the items at the two URLs.
- [fileManager:shouldLinkItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldlinkitematpath_topath_%29.md): Asks the delegate if a hard link should be created between the items at the two paths.
- [fileManager:shouldProceedAfterError:linkingItemAtURL:toURL:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitemat_to_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified URL.
- [fileManager:shouldProceedAfterError:linkingItemAtPath:toPath:](filemanagerdelegate/filemanager%28__shouldproceedaftererror_linkingitematpath_topath_%29.md): Asks the delegate if the operation should continue after an error occurs while linking to the item at the specified path.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File system operations

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md): Prevent data loss and app crashes by interacting with the file system in a coordinated, asynchronous manner and by avoiding unnecessary disk I/O.
- [Using the file system effectively](using-the-file-system-effectively.md): Gain access to benefits like automatic backup or purging by using purpose-built directories provided by the system.
- [NSFileManager](filemanager.md): A convenient interface to the contents of the file system, and the primary means of interacting with it.
- [About Apple File System](about-apple-file-system.md): Use high-level APIs to get the most out of Apple File System.
