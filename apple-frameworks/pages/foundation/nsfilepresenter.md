> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter](https://developer.apple.com/documentation/foundation/nsfilepresenter)

# NSFilePresenter (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.

## Declaration

```swift
protocol NSFilePresenter : NSObjectProtocol
```

## Mentioned In

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="overview"></a>

## Overview

Objects that allow the user to view or edit the content of files or directories should adopt the [NSFilePresenter](nsfilepresenter.md) protocol. You use file presenters in conjunction with an [NSFileCoordinator](nsfilecoordinator.md) object to coordinate access to a file or directory among the objects of your application and between your application and other processes. When changes to an item occur, the system notifies objects that adopt this protocol and gives them a chance to respond appropriately.

Use the methods of this protocol to respond to actions about to be taken on the presented file or directory. When another object or process uses a file coordinator to begin reading or writing a file or directory, the file coordinator notifies all presented objects interested in the item first. It notifies the presenter objects by invoking one of the methods defined by this protocol on that object. The actual invocation of that method occurs on the operation queue in the [presentedItemOperationQueue](nsfilepresenter/presenteditemoperationqueue.md) property. Your file presenter must provide this queue. If your queue supports the concurrent execution of operations, the methods of your presenter object must be thread-safe and able to run in multiple queues simultaneously.

You can use file presenters to coordinate access to a file or directory among your application’s objects. If another process uses a file coordinator for the same file or directory, your presenter objects are similarly notified whenever the other process makes its changes. Your presenter objects are not notified about changes made directly using low-level read and write calls to the file. Only changes that go through a file coordinator result in notifications.

For information about how to use file presenters with a file coordinator object, see [NSFileCoordinator](nsfilecoordinator.md).

<a id="File-Presenters-and-iOS"></a>

### File Presenters and iOS

If your app enters the background with an active file presenter, any other processes that perform a coordinated read or write on the presented file can deadlock. To prevent this situation, call the coordinator’s [removeFilePresenter(\_:)](nsfilecoordinator/removefilepresenter%28__%29.md) type method to remove the file presenter in the [applicationDidEnterBackground(\_:)](../uikit/uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method or in response to a [didEnterBackgroundNotification](../uikit/uiapplication/didenterbackgroundnotification.md) notification. Call [addFilePresenter(\_:)](nsfilecoordinator/addfilepresenter%28__%29.md) to add the file presenter again in the [applicationWillEnterForeground(\_:)](../uikit/uiapplicationdelegate/applicationwillenterforeground%28__%29.md) method or in response to a [willEnterForegroundNotification](../uikit/uiapplication/willenterforegroundnotification.md) notification.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically removes itself when your app goes to the background. It automatically adds itself again when your app returns to the foreground.

## Topics

### Accessing File Presenter Attributes

- [presentedItemURL](nsfilepresenter/presenteditemurl.md): The URL of the presented file or directory.
- [presentedItemOperationQueue](nsfilepresenter/presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.
- [primaryPresentedItemURL](nsfilepresenter/primarypresenteditemurl.md): The URL of a secondary item’s primary presented file or directory.

### Relinquishing Managed Files

- [relinquishPresentedItem(toReader:)](nsfilepresenter/relinquishpresenteditem%28toreader_%29.md): Notifies your object that another object or process wants to read the presented file or directory.
- [relinquishPresentedItem(toWriter:)](nsfilepresenter/relinquishpresenteditem%28towriter_%29.md): Notifies your object that another object or process wants to write to the presented file or directory.

### Handling Changes to Files

- [savePresentedItemChanges(completionHandler:)](nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [accommodatePresentedItemDeletion(completionHandler:)](nsfilepresenter/accommodatepresenteditemdeletion%28completionhandler_%29.md): Tells your object that its presented item is about to be deleted.
- [presentedItemDidMove(to:)](nsfilepresenter/presenteditemdidmove%28to_%29.md): Tells your object that the presented item moved or was renamed.
- [presentedItemDidChange()](nsfilepresenter/presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.

### Responding to Version Changes

- [presentedItemDidGain(\_:)](nsfilepresenter/presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLose(\_:)](nsfilepresenter/presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflict(\_:)](nsfilepresenter/presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitem(at:didGain:)](nsfilepresenter/presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitem(at:didLose:)](nsfilepresenter/presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitem(at:didResolve:)](nsfilepresenter/presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletion(at:completionHandler:)](nsfilepresenter/accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppear(at:)](nsfilepresenter/presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitem(at:didMoveTo:)](nsfilepresenter/presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.
- [presentedSubitemDidChange(at:)](nsfilepresenter/presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.

### Ubiquity Change Notifications

- [observedPresentedItemUbiquityAttributes](nsfilepresenter/observedpresenteditemubiquityattributes.md): A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.
- [presentedItemDidChangeUbiquityAttributes(\_:)](nsfilepresenter/presenteditemdidchangeubiquityattributes%28__%29.md): Tells your object that the file or file package’s ubiquity attributes have changed.

### Instance Methods

- [accommodatePresentedItemEviction(completionHandler:)](nsfilepresenter/accommodatepresenteditemeviction%28completionhandler_%29.md): Given that something in the system is waiting to evict the presented file or directory, do whatever it takes to ensure that the eviction will succeed and that the receiver’s application will behave properly when the eviction has happened, and then invoke the completion handler. This must include calling +\[NSFileCoordinator removeFilePresenter:\]. You may instead prevent eviction by passing the completion handler a meaningful error.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Coordinated file access

- [NSFileAccessIntent](nsfileaccessintent.md): The details of a coordinated-read or coordinated-write operation.
- [NSFileCoordinator](nsfilecoordinator.md): An object that coordinates the reading and writing of files and directories among file presenters.

# NSFilePresenter (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface a file coordinator uses to inform an object presenting a file about changes to that file made elsewhere in the system.

## Declaration

```objectivec
@protocol NSFilePresenter <NSObject>
```

## Mentioned In

- [Improving performance and stability when accessing the file system](improving-performance-and-stability-when-accessing-the-file-system.md)

<a id="overview"></a>

## Overview

Objects that allow the user to view or edit the content of files or directories should adopt the [NSFilePresenter](nsfilepresenter.md) protocol. You use file presenters in conjunction with an [NSFileCoordinator](nsfilecoordinator.md) object to coordinate access to a file or directory among the objects of your application and between your application and other processes. When changes to an item occur, the system notifies objects that adopt this protocol and gives them a chance to respond appropriately.

Use the methods of this protocol to respond to actions about to be taken on the presented file or directory. When another object or process uses a file coordinator to begin reading or writing a file or directory, the file coordinator notifies all presented objects interested in the item first. It notifies the presenter objects by invoking one of the methods defined by this protocol on that object. The actual invocation of that method occurs on the operation queue in the [presentedItemOperationQueue](nsfilepresenter/presenteditemoperationqueue.md) property. Your file presenter must provide this queue. If your queue supports the concurrent execution of operations, the methods of your presenter object must be thread-safe and able to run in multiple queues simultaneously.

You can use file presenters to coordinate access to a file or directory among your application’s objects. If another process uses a file coordinator for the same file or directory, your presenter objects are similarly notified whenever the other process makes its changes. Your presenter objects are not notified about changes made directly using low-level read and write calls to the file. Only changes that go through a file coordinator result in notifications.

For information about how to use file presenters with a file coordinator object, see [NSFileCoordinator](nsfilecoordinator.md).

<a id="File-Presenters-and-iOS"></a>

### File Presenters and iOS

If your app enters the background with an active file presenter, any other processes that perform a coordinated read or write on the presented file can deadlock. To prevent this situation, call the coordinator’s [removeFilePresenter:](nsfilecoordinator/removefilepresenter%28__%29.md) type method to remove the file presenter in the [applicationDidEnterBackground:](../uikit/uiapplicationdelegate/applicationdidenterbackground%28__%29.md) method or in response to a [UIApplicationDidEnterBackgroundNotification](../uikit/uiapplication/didenterbackgroundnotification.md) notification. Call [addFilePresenter:](nsfilecoordinator/addfilepresenter%28__%29.md) to add the file presenter again in the [applicationWillEnterForeground:](../uikit/uiapplicationdelegate/applicationwillenterforeground%28__%29.md) method or in response to a [UIApplicationWillEnterForegroundNotification](../uikit/uiapplication/willenterforegroundnotification.md) notification.

> **Note**

>  The [UIDocument](../uikit/uidocument.md) class automatically removes itself when your app goes to the background. It automatically adds itself again when your app returns to the foreground.

## Topics

### Accessing File Presenter Attributes

- [presentedItemURL](nsfilepresenter/presenteditemurl.md): The URL of the presented file or directory.
- [presentedItemOperationQueue](nsfilepresenter/presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.
- [primaryPresentedItemURL](nsfilepresenter/primarypresenteditemurl.md): The URL of a secondary item’s primary presented file or directory.

### Relinquishing Managed Files

- [relinquishPresentedItemToReader:](nsfilepresenter/relinquishpresenteditem%28toreader_%29.md): Notifies your object that another object or process wants to read the presented file or directory.
- [relinquishPresentedItemToWriter:](nsfilepresenter/relinquishpresenteditem%28towriter_%29.md): Notifies your object that another object or process wants to write to the presented file or directory.

### Handling Changes to Files

- [savePresentedItemChangesWithCompletionHandler:](nsfilepresenter/savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [accommodatePresentedItemDeletionWithCompletionHandler:](nsfilepresenter/accommodatepresenteditemdeletion%28completionhandler_%29.md): Tells your object that its presented item is about to be deleted.
- [presentedItemDidMoveToURL:](nsfilepresenter/presenteditemdidmove%28to_%29.md): Tells your object that the presented item moved or was renamed.
- [presentedItemDidChange](nsfilepresenter/presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.

### Responding to Version Changes

- [presentedItemDidGainVersion:](nsfilepresenter/presenteditemdidgain%28__%29.md): Tells the delegate that a new version of the file or file package was added.
- [presentedItemDidLoseVersion:](nsfilepresenter/presenteditemdidlose%28__%29.md): Tells the delegate that a version of the file or file package was removed.
- [presentedItemDidResolveConflictVersion:](nsfilepresenter/presenteditemdidresolveconflict%28__%29.md): Tells the delegate that some other entity resolved a version conflict for the presenter’s file or file package.
- [presentedSubitemAtURL:didGainVersion:](nsfilepresenter/presentedsubitem%28at_didgain_%29.md): Tells the delegate that the item inside the presented directory gained a new version.
- [presentedSubitemAtURL:didLoseVersion:](nsfilepresenter/presentedsubitem%28at_didlose_%29.md): Tells the delegate that the item inside the presented directory lost an existing version.
- [presentedSubitemAtURL:didResolveConflictVersion:](nsfilepresenter/presentedsubitem%28at_didresolve_%29.md): Tells the delegate that the item inside the presented directory had a version conflict resolved by an outside entity.

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletionAtURL:completionHandler:](nsfilepresenter/accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppearAtURL:](nsfilepresenter/presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitemAtURL:didMoveToURL:](nsfilepresenter/presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.
- [presentedSubitemDidChangeAtURL:](nsfilepresenter/presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.

### Ubiquity Change Notifications

- [observedPresentedItemUbiquityAttributes](nsfilepresenter/observedpresenteditemubiquityattributes.md): A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.
- [presentedItemDidChangeUbiquityAttributes:](nsfilepresenter/presenteditemdidchangeubiquityattributes%28__%29.md): Tells your object that the file or file package’s ubiquity attributes have changed.

### Instance Methods

- [accommodatePresentedItemEvictionWithCompletionHandler:](nsfilepresenter/accommodatepresenteditemeviction%28completionhandler_%29.md): Given that something in the system is waiting to evict the presented file or directory, do whatever it takes to ensure that the eviction will succeed and that the receiver’s application will behave properly when the eviction has happened, and then invoke the completion handler. This must include calling +\[NSFileCoordinator removeFilePresenter:\]. You may instead prevent eviction by passing the completion handler a meaningful error.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Coordinated file access

- [NSFileAccessIntent](nsfileaccessintent.md): The details of a coordinated-read or coordinated-write operation.
- [NSFileCoordinator](nsfilecoordinator.md): An object that coordinates the reading and writing of files and directories among file presenters.
