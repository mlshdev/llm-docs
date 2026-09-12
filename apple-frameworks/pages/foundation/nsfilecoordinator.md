> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator)

# NSFileCoordinator (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that coordinates the reading and writing of files and directories among file presenters.

## Declaration

```swift
class NSFileCoordinator
```

## Mentioned In

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="overview"></a>

## Overview

The [NSFileCoordinator](nsfilecoordinator.md) class coordinates the reading and writing of files and directories among multiple processes and objects in the same process. You use instances of this class as is to read from, write to, modify the attributes of, change the location of, or delete a file or directory, but before your code to perform those actions executes, the file coordinator lets registered file presenter objects perform any tasks that they might require to ensure their own integrity. For example, if you want to change the location of a file, other objects interested in that file need to know where you intend to move it so that they can update their references.

Objects that adopt the [NSFilePresenter](nsfilepresenter.md) protocol must register themselves with the [NSFileCoordinator](nsfilecoordinator.md) class to be notified of any pending changes. They do this by calling the [addFilePresenter(\_:)](nsfilecoordinator/addfilepresenter%28__%29.md) class method. A file presenter must balance calls to [addFilePresenter(\_:)](nsfilecoordinator/addfilepresenter%28__%29.md) with a call to [removeFilePresenter(\_:)](nsfilecoordinator/removefilepresenter%28__%29.md) before being released, even in a garbage-collected application. The file presenter class maintains a list of active file presenter objects in the current application and uses that list, plus the file coordinator classes in other processes, to deliver notifications to all of the objects interested in a particular item.

Instances of [NSFileCoordinator](nsfilecoordinator.md) are meant to be used on a per-file-operation basis, where a file operation is something like opening and reading the contents of a file or moving a batch of files and directories to a new location. There is no benefit to keeping a file coordinator object past the length of the planned operation. In fact, because file coordinators retain file presenter objects, keeping one around could prevent the file presenter objects from being released in a timely manner.

For information about implementing a file presenter object to receive file-related notifications, see [NSFilePresenter](nsfilepresenter.md).

<a id="File-Presenters-and-iOS"></a>

### File Presenters and iOS

If your app or extension enters the background with an active file presenter, it may be terminated by the system in order to prevent deadlock on that file. To prevent this situation, call [removeFilePresenter(\_:)](nsfilecoordinator/removefilepresenter%28__%29.md) to remove the file presenter in the [applicationDidEnterBackground(\_:)](../uikit/uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method or in response to a [didEnterBackgroundNotification](../uikit/uiapplication/didenterbackgroundnotification.md) notification. Call [addFilePresenter(\_:)](nsfilecoordinator/addfilepresenter%28__%29.md) to add the file presenter again in the [applicationWillEnterForeground(\_:)](../uikit/uiapplicationdelegate/applicationwillenterforeground%28__%29.md) method or in response to a [willEnterForegroundNotification](../uikit/uiapplication/willenterforegroundnotification.md) notification.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically removes itself when your app goes to the background. It automatically adds itself again when your app returns to the foreground.

<a id="File-Coordinators-and-iOS"></a>

### File Coordinators and iOS

A coordinated read or write will automatically begin a background task when granted, similar to one created with the [beginBackgroundTask(expirationHandler:)](../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) method. This helps ensure that your app or extension has sufficient time to finish the read or write operation if it’s suspended, without creating a deadlock on access to that file by other processes. If a process is suspended while waiting for a coordinated read or write to be granted, the request is canceled, and an `NSError` object with the code [NSUserCancelledError](nsusercancellederror-swift.var.md) is produced. If the background task expires, the process is terminated.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically requests additional background time and safely performs coordinated reads and writes when loading and saving the document.

<a id="Threading-Considerations"></a>

### Threading Considerations

Each file coordinator object you create should be used on a single thread only. If you need to coordinate file operations across multiple objects in different threads, each object should create its own file coordinator.

## Topics

### Initializing a File Coordinator

- [init(filePresenter:)](nsfilecoordinator/init%28filepresenter_%29.md): Initializes and returns a file coordinator object using the specified file presenter.

### Managing File Presenters

- [addFilePresenter(\_:)](nsfilecoordinator/addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [removeFilePresenter(\_:)](nsfilecoordinator/removefilepresenter%28__%29.md): Unregisters the specified file presenter object.
- [filePresenters](nsfilecoordinator/filepresenters.md): Returns an array containing the currently registered file presenter objects.
- [purposeIdentifier](nsfilecoordinator/purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.

### Coordinating File Operations Asynchronously

- [coordinate(with:queue:byAccessor:)](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.

### Coordinating File Operations Synchronously

- [coordinate(readingItemAt:options:error:byAccessor:)](nsfilecoordinator/coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinate(writingItemAt:options:error:byAccessor:)](nsfilecoordinator/coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinate(readingItemAt:options:writingItemAt:options:error:byAccessor:)](nsfilecoordinator/coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinate(writingItemAt:options:writingItemAt:options:error:byAccessor:)](nsfilecoordinator/coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepare(forReadingItemsAt:options:writingItemsAt:options:error:byAccessor:)](nsfilecoordinator/prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [item(at:willMoveTo:)](nsfilecoordinator/item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [item(at:didMoveTo:)](nsfilecoordinator/item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel()](nsfilecoordinator/cancel%28%29.md): Cancels any active file coordination calls.

### Constants

- [NSFileCoordinator.ReadingOptions](nsfilecoordinator/readingoptions.md): Options to use when reading the contents or attributes of a file or directory.
- [NSFileCoordinator.WritingOptions](nsfilecoordinator/writingoptions.md): Options to use when changing the contents or attributes of a file or directory.

### Ubiquity Change Notifications

- [item(at:didChangeUbiquityAttributes:)](nsfilecoordinator/item%28at_didchangeubiquityattributes_%29.md): Tells observing file providers that the item’s ubiquity attributes have changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Coordinated file access

- [NSFilePresenter](nsfilepresenter.md): The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
- [NSFileAccessIntent](nsfileaccessintent.md): The details of a coordinated-read or coordinated-write operation.

# NSFileCoordinator (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that coordinates the reading and writing of files and directories among file presenters.

## Declaration

```objectivec
@interface NSFileCoordinator : NSObject
```

## Mentioned In

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="overview"></a>

## Overview

The [NSFileCoordinator](nsfilecoordinator.md) class coordinates the reading and writing of files and directories among multiple processes and objects in the same process. You use instances of this class as is to read from, write to, modify the attributes of, change the location of, or delete a file or directory, but before your code to perform those actions executes, the file coordinator lets registered file presenter objects perform any tasks that they might require to ensure their own integrity. For example, if you want to change the location of a file, other objects interested in that file need to know where you intend to move it so that they can update their references.

Objects that adopt the [NSFilePresenter](nsfilepresenter.md) protocol must register themselves with the [NSFileCoordinator](nsfilecoordinator.md) class to be notified of any pending changes. They do this by calling the [addFilePresenter:](nsfilecoordinator/addfilepresenter%28__%29.md) class method. A file presenter must balance calls to [addFilePresenter:](nsfilecoordinator/addfilepresenter%28__%29.md) with a call to [removeFilePresenter:](nsfilecoordinator/removefilepresenter%28__%29.md) before being released, even in a garbage-collected application. The file presenter class maintains a list of active file presenter objects in the current application and uses that list, plus the file coordinator classes in other processes, to deliver notifications to all of the objects interested in a particular item.

Instances of [NSFileCoordinator](nsfilecoordinator.md) are meant to be used on a per-file-operation basis, where a file operation is something like opening and reading the contents of a file or moving a batch of files and directories to a new location. There is no benefit to keeping a file coordinator object past the length of the planned operation. In fact, because file coordinators retain file presenter objects, keeping one around could prevent the file presenter objects from being released in a timely manner.

For information about implementing a file presenter object to receive file-related notifications, see [NSFilePresenter](nsfilepresenter.md).

<a id="File-Presenters-and-iOS"></a>

### File Presenters and iOS

If your app or extension enters the background with an active file presenter, it may be terminated by the system in order to prevent deadlock on that file. To prevent this situation, call [removeFilePresenter:](nsfilecoordinator/removefilepresenter%28__%29.md) to remove the file presenter in the [applicationDidEnterBackground:](../uikit/uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method or in response to a [UIApplicationDidEnterBackgroundNotification](../uikit/uiapplication/didenterbackgroundnotification.md) notification. Call [addFilePresenter:](nsfilecoordinator/addfilepresenter%28__%29.md) to add the file presenter again in the [applicationWillEnterForeground:](../uikit/uiapplicationdelegate/applicationwillenterforeground%28__%29.md) method or in response to a [UIApplicationWillEnterForegroundNotification](../uikit/uiapplication/willenterforegroundnotification.md) notification.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically removes itself when your app goes to the background. It automatically adds itself again when your app returns to the foreground.

<a id="File-Coordinators-and-iOS"></a>

### File Coordinators and iOS

A coordinated read or write will automatically begin a background task when granted, similar to one created with the [beginBackgroundTaskWithExpirationHandler:](../uikit/uiapplication/beginbackgroundtask%28expirationhandler_%29.md) method. This helps ensure that your app or extension has sufficient time to finish the read or write operation if it’s suspended, without creating a deadlock on access to that file by other processes. If a process is suspended while waiting for a coordinated read or write to be granted, the request is canceled, and an `NSError` object with the code [NSUserCancelledError](nsusercancellederror-swift.var.md) is produced. If the background task expires, the process is terminated.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically requests additional background time and safely performs coordinated reads and writes when loading and saving the document.

<a id="Threading-Considerations"></a>

### Threading Considerations

Each file coordinator object you create should be used on a single thread only. If you need to coordinate file operations across multiple objects in different threads, each object should create its own file coordinator.

## Topics

### Initializing a File Coordinator

- [initWithFilePresenter:](nsfilecoordinator/init%28filepresenter_%29.md): Initializes and returns a file coordinator object using the specified file presenter.

### Managing File Presenters

- [addFilePresenter:](nsfilecoordinator/addfilepresenter%28__%29.md): Registers the specified file presenter object so that it can receive notifications.
- [removeFilePresenter:](nsfilecoordinator/removefilepresenter%28__%29.md): Unregisters the specified file presenter object.
- [filePresenters](nsfilecoordinator/filepresenters.md): Returns an array containing the currently registered file presenter objects.
- [purposeIdentifier](nsfilecoordinator/purposeidentifier.md): A string that uniquely identifies the file access that was performed by this file coordinator.

### Coordinating File Operations Asynchronously

- [coordinateAccessWithIntents:queue:byAccessor:](nsfilecoordinator/coordinate%28with_queue_byaccessor_%29.md): Performs a number of coordinated-read or -write operations asynchronously.

### Coordinating File Operations Synchronously

- [coordinateReadingItemAtURL:options:error:byAccessor:](nsfilecoordinator/coordinate%28readingitemat_options_error_byaccessor_%29.md): Initiates a read operation on a single file or directory using the specified options.
- [coordinateWritingItemAtURL:options:error:byAccessor:](nsfilecoordinator/coordinate%28writingitemat_options_error_byaccessor_%29.md): Initiates a write operation on a single file or directory using the specified options.
- [coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](nsfilecoordinator/coordinate%28readingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a read operation that contains a follow-up write operation.
- [coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:](nsfilecoordinator/coordinate%28writingitemat_options_writingitemat_options_error_byaccessor_%29.md): Initiates a write operation that involves a secondary write operation.
- [prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:](nsfilecoordinator/prepare%28forreadingitemsat_options_writingitemsat_options_error_byaccessor_%29.md): Prepare to read or write from multiple files in a single batch operation.
- [itemAtURL:willMoveToURL:](nsfilecoordinator/item%28at_willmoveto_%29.md): Announces that your app is moving a file to a new URL.
- [itemAtURL:didMoveToURL:](nsfilecoordinator/item%28at_didmoveto_%29.md): Notifies relevant file presenters that the location of a file or directory changed.
- [cancel](nsfilecoordinator/cancel%28%29.md): Cancels any active file coordination calls.

### Constants

- [NSFileCoordinatorReadingOptions](nsfilecoordinator/readingoptions.md): Options to use when reading the contents or attributes of a file or directory.
- [NSFileCoordinatorWritingOptions](nsfilecoordinator/writingoptions.md): Options to use when changing the contents or attributes of a file or directory.

### Ubiquity Change Notifications

- [itemAtURL:didChangeUbiquityAttributes:](nsfilecoordinator/item%28at_didchangeubiquityattributes_%29.md): Tells observing file providers that the item’s ubiquity attributes have changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Coordinated file access

- [NSFilePresenter](nsfilepresenter.md): The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.
- [NSFileAccessIntent](nsfileaccessintent.md): The details of a coordinated-read or coordinated-write operation.
