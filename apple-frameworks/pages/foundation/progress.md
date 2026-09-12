> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress](https://developer.apple.com/documentation/foundation/progress)

# Progress (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that conveys ongoing progress to the user for a specified task.

## Declaration

```swift
class Progress
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)

<a id="overview"></a>

## Overview

The [Progress](progress.md) class provides a self-contained mechanism for progress reporting. It makes it easy for code that performs work to report the progress of that work, and for user interface code to observe that progress for presentation to the user. Specifically, you can use a progress object to show the user a progress bar and explanatory text that update as you do work. It also allows the user to cancel or pause work.

<a id="Reporting-Progress"></a>

### Reporting Progress

Using the methods of this class, your code can report the progress it’s currently making toward completing a task, including progress in related subtasks. You can create instances of this class using the [init(parent:userInfo:)](progress/init%28parent_userinfo_%29.md) instance method or the [init(totalUnitCount:)](progress/init%28totalunitcount_%29.md) class method.

Progress objects have many properties that you can use to observe and report current progress. For instance, the [totalUnitCount](progress/totalunitcount.md) property represents the total number of units of work, and the [completedUnitCount](progress/completedunitcount.md) and [fractionCompleted](progress/fractioncompleted.md) properties represent how much of that work is complete. The [fractionCompleted](progress/fractioncompleted.md) property is useful for updating progress indicators or textual descriptors. To check whether progress is complete, test the [isFinished](progress/isfinished.md) property.

The following code shows a sample method that reports the progress of performing an operation on a piece of data. When creating the progress object, you set the value of its [totalUnitCount](progress/totalunitcount.md) property to a suitable batch size for the operation, and the [completedUnitCount](progress/completedunitcount.md) count is `0`. Each time the loop executes and processes a batch of data, you increment the progress object’s [completedUnitCount](progress/completedunitcount.md) property appropriately.

```objc
- (void)startTaskWithData:(NSData *)data {
    NSUInteger batchSize = ... use a suitable batch size
    NSProgress *progress = [NSProgress progressWithTotalUnitCount:batchSize];
 
    for (NSUInteger index = 0; index < batchSize; index++) {
        // Check for cancellation.
        if ([progress isCancelled]) {
             // Tidy up as necessary.
             break;
        }
 
        // Do something with this batch of data.
 
        // Report progress (add 1 because the work is complete for the current index).
        [progress setCompletedUnitCount:(index + 1)];
    }
}
```

Each of the properties of a progress object, including [totalUnitCount](progress/totalunitcount.md), [completedUnitCount](progress/completedunitcount.md), and [fractionCompleted](progress/fractioncompleted.md), support key-value observing (KVO). This makes it extremely easy for a view or window controller object to observe the properties, and update UI elements, such as progress indicators, when the values change. It also means that there is a nonzero cost to updating the values of those properties, so avoid using a unit count that is too granular. If you’re iterating over a large dataset, for example, and each operation takes only a trivial amount of time, divide the work into batches so you can update the unit count once per batch rather than once per iteration.

<a id="Reporting-Progress-for-Multiple-Operations"></a>

### Reporting Progress for Multiple Operations

Sometimes, your code may need to report the *overall* progress of an operation that consists of several suboperations. To accomplish this, your code can report the progress of each suboperation by building up a tree of progress objects.

The [Progress](progress.md) reporting mechanism supports a loosely coupled relationship between progress objects. Suboperations don’t need to know anything about the containing progress item — you can create new progress objects as suboperations of another progress instance. When you assign a progress instance, the system allocates a portion of the containing progress instance’s pending unit count. When the suboperation’s progress object completes, the containing progress object’s [completedUnitCount](progress/completedunitcount.md) property automatically increases by a predefined amount.

> **Note**

>  The [completedUnitCount](progress/completedunitcount.md) property for a containing progress object only updates when the suboperation is `100%` complete. The [fractionCompleted](progress/fractioncompleted.md) property for a containing progress object updates continuously as work progresses for all suboperations.

You add suboperation progress objects to your tree implicitly or explicitly.

<a id="Adding-a-Progress-Operation-Implicitly"></a>

#### Adding a Progress Operation Implicitly

Add a suboperation implicitly by setting a pending unit count for the containing progress object and creating a new [Progress](progress.md) instance. When you create the new progress instance, the system sets it as a suboperation of the containing progress object, and assigns the pending unit count.

As an example, consider that you’re tracking the progress of code downloading and copying files on disk. You can use a single progress object to track the entire task, but it’s easier to manage each subtask using a separate progress object. You start by creating an overall progress object with a suitable total unit count, call [becomeCurrent(withPendingUnitCount:)](progress/becomecurrent%28withpendingunitcount_%29.md), then create your suboperation progress objects before finally calling [resignCurrent()](progress/resigncurrent%28%29.md).

The system divides the pending unit count that you specify in the first method equally among the suboperation progress objects you create between these two method calls. Each suboperation progress object maintains its own internal unit count. When the suboperation object’s [completedUnitCount](progress/completedunitcount.md) equals or exceeds its [totalUnitCount](progress/totalunitcount.md), the system increases the containing progress object’s [completedUnitCount](progress/completedunitcount.md) by the assigned portion of the original pending unit count.

In the following example, the overall progress object has 100 units. The two suboperation objects, therefore, get 50 pending units each, and keep track internally of 10 units of work each. When each suboperation completes its 10 units, the system increases the overall progress object’s completed unit count by 50.

```objc
- (void)startLongOperation {
    self.overallProgress = [NSProgress progressWithTotalUnitCount:100];
 
    [self.overallProgress becomeCurrentWithPendingUnitCount:50];
    [self work1];
    [self.overallProgress resignCurrent];
 
    [self.overallProgress becomeCurrentWithPendingUnitCount:50];
    [self work2];
    [self.overallProgress resignCurrent];
}
 
- (void)work1 {
    NSProgress *firstTaskProgress = [NSProgress progressWithTotalUnitCount:10];
    // Perform first task.
}
 
- (void)work2 {
    NSProgress *secondTaskProgress = [NSProgress progressWithTotalUnitCount:10];
    // Perform second task.
}
```

If you don’t create any suboperation progress objects between the calls to [becomeCurrent(withPendingUnitCount:)](progress/becomecurrent%28withpendingunitcount_%29.md) and [resignCurrent()](progress/resigncurrent%28%29.md), the containing progress object automatically updates its [completedUnitCount](progress/completedunitcount.md) by adding the pending units.

<a id="Adding-a-Progress-Operation-Explicitly"></a>

#### Adding a Progress Operation Explicitly

To add a progress operation explicitly, call `addChild(_:withPendingUnitCount:)` on the containing progress object. The value for the pending unit count is the amount of the containing progress object’s [totalUnitCount](progress/totalunitcount.md) that the suboperation consumes, which conforms to the [ProgressReporting](progressreporting.md) protocol.

In the following example, the overall progress object has 10 units. The suboperation progress for the download gets eight units and tracks the download of a photo. The progress for the filter takes a lot less time and gets the remaining two units. When the download completes, the system updates the containing progress object’s completed unit count by eight. When the filter completes, the system updates it by the remaining two units.

```objc
- (void)startLongOperation {
    self.overallProgress = [NSProgress progressWithTotalUnitCount:10];
 
    [self.overallProgress addChild:download.progress withPendingUnitCount:8];
    // Do the download.
 
    [self.overallProgress addChild:filter.progress withPendingUnitCount:2];
    // Perform the filter.
}
```

## Topics

### Creating Progress Objects

- [init(parent:userInfo:)](progress/init%28parent_userinfo_%29.md): Creates a new progress instance.
- [discreteProgress(totalUnitCount:)](progress/discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [init(totalUnitCount:)](progress/init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [init(totalUnitCount:parent:pendingUnitCount:)](progress/init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

### Accessing the Current Progress Object

- [current()](progress/current%28%29.md): Returns the progress instance, if any.
- [becomeCurrent(withPendingUnitCount:)](progress/becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrent(withPendingUnitCount:using:)](progress/performascurrent%28withpendingunitcount_using_%29.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent()](progress/resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.

### Reporting Progress

- [totalUnitCount](progress/totalunitcount.md): The total number of tracked units of work for the current progress.
- [completedUnitCount](progress/completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](progress/localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](progress/localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [isCancellable](progress/iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [isCancelled](progress/iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [cancellationHandler](progress/cancellationhandler.md): The block to invoke when canceling progress.
- [isPausable](progress/ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [isPaused](progress/ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](progress/pausinghandler.md): The block to invoke when pausing progress.

### Observing Progress

- [isIndeterminate](progress/isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [fractionCompleted](progress/fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.
- [isFinished](progress/isfinished.md): A Boolean value that indicates the progress object is complete.

### Controlling Progress

- [cancel()](progress/cancel%28%29.md): Cancels progress tracking.
- [pause()](progress/pause%28%29.md): Pauses progress tracking.
- [resume()](progress/resume%28%29.md): Resumes progress tracking.
- [resumingHandler](progress/resuminghandler.md): The block to invoke when progress resumes.

### Inspecting Progress Information

- [kind](progress/kind.md): An object that represents the kind of progress for the progress object.
- [estimatedTimeRemaining](progress/estimatedtimeremaining.md): A value that indicates the estimated amount of time remaining to complete the progress.
- [throughput](progress/throughput.md): A value that represents the speed of data processing, in bytes per second.
- [setUserInfoObject(\_:forKey:)](progress/setuserinfoobject%28__forkey_%29.md): Sets a value in the user info dictionary.
- [userInfo](progress/userinfo.md): A dictionary of arbitrary values for the receiver.
- [ProgressKind](progresskind.md): An object that represents the kind of progress.
- [ProgressUserInfoKey](progressuserinfokey.md): Keys for the user info dictionary that affect the autogenerated localized additional description string.

### Inspecting File Operation Progress Information

- [fileOperationKind](progress/fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileURL](progress/fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](progress/filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](progress/filecompletedcount.md): The number of completed files for a file progress object.
- [Progress.FileOperationKind](progress/fileoperationkind-swift.struct.md): The kind of file operation.

### Reporting Progress to Other Processes

- [publish()](progress/publish%28%29.md): Publishes the progress object for other processes to observe it.
- [unpublish()](progress/unpublish%28%29.md): Removes a progress object from publication, making it unobservable by other processes.

### Observing and Controlling File Progress by Other Processes

- [addSubscriber(forFileURL:withPublishingHandler:)](progress/addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber(\_:)](progress/removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [isOld](progress/isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [Progress.PublishingHandler](progress/publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [Progress.UnpublishingHandler](progress/unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

### Instance Methods

- [addChild(\_:withPendingUnitCount:)](progress/addchild%28__withpendingunitcount_%29-4hi92.md): Adds a ProgressReporter as a child to a Progress, which constitutes a portion of Progress’s totalUnitCount.
- [addChild(\_:withPendingUnitCount:)](progress/addchild%28__withpendingunitcount_%29-9yrs3.md): Adds a process object as a suboperation of a progress tree.
- [subprogress(assigningCount:)](progress/subprogress%28assigningcount_%29.md): Returns a Subprogress which can be passed to any method that reports progress It can be then used to create a child `ProgressManager` reporting to this `Progress`

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Progress

- [ProgressReporting](progressreporting.md): An interface for objects that report progress using a single progress instance.

# NSProgress (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that conveys ongoing progress to the user for a specified task.

## Declaration

```objectivec
@interface NSProgress : NSObject
```

## Mentioned In

- [Downloading files from websites](downloading-files-from-websites.md)

<a id="overview"></a>

## Overview

The [NSProgress](progress.md) class provides a self-contained mechanism for progress reporting. It makes it easy for code that performs work to report the progress of that work, and for user interface code to observe that progress for presentation to the user. Specifically, you can use a progress object to show the user a progress bar and explanatory text that update as you do work. It also allows the user to cancel or pause work.

<a id="Reporting-Progress"></a>

### Reporting Progress

Using the methods of this class, your code can report the progress it’s currently making toward completing a task, including progress in related subtasks. You can create instances of this class using the [initWithParent:userInfo:](progress/init%28parent_userinfo_%29.md) instance method or the [progressWithTotalUnitCount:](progress/init%28totalunitcount_%29.md) class method.

Progress objects have many properties that you can use to observe and report current progress. For instance, the [totalUnitCount](progress/totalunitcount.md) property represents the total number of units of work, and the [completedUnitCount](progress/completedunitcount.md) and [fractionCompleted](progress/fractioncompleted.md) properties represent how much of that work is complete. The [fractionCompleted](progress/fractioncompleted.md) property is useful for updating progress indicators or textual descriptors. To check whether progress is complete, test the [finished](progress/isfinished.md) property.

The following code shows a sample method that reports the progress of performing an operation on a piece of data. When creating the progress object, you set the value of its [totalUnitCount](progress/totalunitcount.md) property to a suitable batch size for the operation, and the [completedUnitCount](progress/completedunitcount.md) count is `0`. Each time the loop executes and processes a batch of data, you increment the progress object’s [completedUnitCount](progress/completedunitcount.md) property appropriately.

```objc
- (void)startTaskWithData:(NSData *)data {
    NSUInteger batchSize = ... use a suitable batch size
    NSProgress *progress = [NSProgress progressWithTotalUnitCount:batchSize];
 
    for (NSUInteger index = 0; index < batchSize; index++) {
        // Check for cancellation.
        if ([progress isCancelled]) {
             // Tidy up as necessary.
             break;
        }
 
        // Do something with this batch of data.
 
        // Report progress (add 1 because the work is complete for the current index).
        [progress setCompletedUnitCount:(index + 1)];
    }
}
```

Each of the properties of a progress object, including [totalUnitCount](progress/totalunitcount.md), [completedUnitCount](progress/completedunitcount.md), and [fractionCompleted](progress/fractioncompleted.md), support key-value observing (KVO). This makes it extremely easy for a view or window controller object to observe the properties, and update UI elements, such as progress indicators, when the values change. It also means that there is a nonzero cost to updating the values of those properties, so avoid using a unit count that is too granular. If you’re iterating over a large dataset, for example, and each operation takes only a trivial amount of time, divide the work into batches so you can update the unit count once per batch rather than once per iteration.

<a id="Reporting-Progress-for-Multiple-Operations"></a>

### Reporting Progress for Multiple Operations

Sometimes, your code may need to report the *overall* progress of an operation that consists of several suboperations. To accomplish this, your code can report the progress of each suboperation by building up a tree of progress objects.

The [NSProgress](progress.md) reporting mechanism supports a loosely coupled relationship between progress objects. Suboperations don’t need to know anything about the containing progress item — you can create new progress objects as suboperations of another progress instance. When you assign a progress instance, the system allocates a portion of the containing progress instance’s pending unit count. When the suboperation’s progress object completes, the containing progress object’s [completedUnitCount](progress/completedunitcount.md) property automatically increases by a predefined amount.

> **Note**

>  The [completedUnitCount](progress/completedunitcount.md) property for a containing progress object only updates when the suboperation is `100%` complete. The [fractionCompleted](progress/fractioncompleted.md) property for a containing progress object updates continuously as work progresses for all suboperations.

You add suboperation progress objects to your tree implicitly or explicitly.

<a id="Adding-a-Progress-Operation-Implicitly"></a>

#### Adding a Progress Operation Implicitly

Add a suboperation implicitly by setting a pending unit count for the containing progress object and creating a new [NSProgress](progress.md) instance. When you create the new progress instance, the system sets it as a suboperation of the containing progress object, and assigns the pending unit count.

As an example, consider that you’re tracking the progress of code downloading and copying files on disk. You can use a single progress object to track the entire task, but it’s easier to manage each subtask using a separate progress object. You start by creating an overall progress object with a suitable total unit count, call [becomeCurrentWithPendingUnitCount:](progress/becomecurrent%28withpendingunitcount_%29.md), then create your suboperation progress objects before finally calling [resignCurrent](progress/resigncurrent%28%29.md).

The system divides the pending unit count that you specify in the first method equally among the suboperation progress objects you create between these two method calls. Each suboperation progress object maintains its own internal unit count. When the suboperation object’s [completedUnitCount](progress/completedunitcount.md) equals or exceeds its [totalUnitCount](progress/totalunitcount.md), the system increases the containing progress object’s [completedUnitCount](progress/completedunitcount.md) by the assigned portion of the original pending unit count.

In the following example, the overall progress object has 100 units. The two suboperation objects, therefore, get 50 pending units each, and keep track internally of 10 units of work each. When each suboperation completes its 10 units, the system increases the overall progress object’s completed unit count by 50.

```objc
- (void)startLongOperation {
    self.overallProgress = [NSProgress progressWithTotalUnitCount:100];
 
    [self.overallProgress becomeCurrentWithPendingUnitCount:50];
    [self work1];
    [self.overallProgress resignCurrent];
 
    [self.overallProgress becomeCurrentWithPendingUnitCount:50];
    [self work2];
    [self.overallProgress resignCurrent];
}
 
- (void)work1 {
    NSProgress *firstTaskProgress = [NSProgress progressWithTotalUnitCount:10];
    // Perform first task.
}
 
- (void)work2 {
    NSProgress *secondTaskProgress = [NSProgress progressWithTotalUnitCount:10];
    // Perform second task.
}
```

If you don’t create any suboperation progress objects between the calls to [becomeCurrentWithPendingUnitCount:](progress/becomecurrent%28withpendingunitcount_%29.md) and [resignCurrent](progress/resigncurrent%28%29.md), the containing progress object automatically updates its [completedUnitCount](progress/completedunitcount.md) by adding the pending units.

<a id="Adding-a-Progress-Operation-Explicitly"></a>

#### Adding a Progress Operation Explicitly

To add a progress operation explicitly, call `addChild(_:withPendingUnitCount:)` on the containing progress object. The value for the pending unit count is the amount of the containing progress object’s [totalUnitCount](progress/totalunitcount.md) that the suboperation consumes, which conforms to the [NSProgressReporting](progressreporting.md) protocol.

In the following example, the overall progress object has 10 units. The suboperation progress for the download gets eight units and tracks the download of a photo. The progress for the filter takes a lot less time and gets the remaining two units. When the download completes, the system updates the containing progress object’s completed unit count by eight. When the filter completes, the system updates it by the remaining two units.

```objc
- (void)startLongOperation {
    self.overallProgress = [NSProgress progressWithTotalUnitCount:10];
 
    [self.overallProgress addChild:download.progress withPendingUnitCount:8];
    // Do the download.
 
    [self.overallProgress addChild:filter.progress withPendingUnitCount:2];
    // Perform the filter.
}
```

## Topics

### Creating Progress Objects

- [initWithParent:userInfo:](progress/init%28parent_userinfo_%29.md): Creates a new progress instance.
- [discreteProgressWithTotalUnitCount:](progress/discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [progressWithTotalUnitCount:](progress/init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [progressWithTotalUnitCount:parent:pendingUnitCount:](progress/init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

### Accessing the Current Progress Object

- [currentProgress](progress/current%28%29.md): Returns the progress instance, if any.
- [becomeCurrentWithPendingUnitCount:](progress/becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrentWithPendingUnitCount:usingBlock:](nsprogress/performascurrentwithpendingunitcount_usingblock_.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent](progress/resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.

### Reporting Progress

- [totalUnitCount](progress/totalunitcount.md): The total number of tracked units of work for the current progress.
- [completedUnitCount](progress/completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](progress/localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](progress/localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [cancellable](progress/iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [cancelled](progress/iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [cancellationHandler](progress/cancellationhandler.md): The block to invoke when canceling progress.
- [pausable](progress/ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [paused](progress/ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](progress/pausinghandler.md): The block to invoke when pausing progress.

### Observing Progress

- [indeterminate](progress/isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [fractionCompleted](progress/fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.
- [finished](progress/isfinished.md): A Boolean value that indicates the progress object is complete.

### Controlling Progress

- [cancel](progress/cancel%28%29.md): Cancels progress tracking.
- [pause](progress/pause%28%29.md): Pauses progress tracking.
- [resume](progress/resume%28%29.md): Resumes progress tracking.
- [resumingHandler](progress/resuminghandler.md): The block to invoke when progress resumes.

### Inspecting Progress Information

- [kind](progress/kind.md): An object that represents the kind of progress for the progress object.
- [estimatedTimeRemaining](nsprogress/estimatedtimeremaining.md): A value that indicates the estimated amount of time remaining to complete the progress.
- [throughput](nsprogress/throughput.md): A value that represents the speed of data processing, in bytes per second.
- [setUserInfoObject:forKey:](progress/setuserinfoobject%28__forkey_%29.md): Sets a value in the user info dictionary.
- [userInfo](progress/userinfo.md): A dictionary of arbitrary values for the receiver.
- [NSProgressKind](progresskind.md): An object that represents the kind of progress.
- [NSProgressUserInfoKey](progressuserinfokey.md): Keys for the user info dictionary that affect the autogenerated localized additional description string.

### Inspecting File Operation Progress Information

- [fileOperationKind](progress/fileoperationkind-swift.property.md): The kind of file operation for the progress object.
- [fileURL](progress/fileurl.md): A URL that represents the file for the current progress object.
- [fileTotalCount](nsprogress/filetotalcount.md): The total number of files for a file progress object.
- [fileCompletedCount](nsprogress/filecompletedcount.md): The number of completed files for a file progress object.
- [NSProgressFileOperationKind](progress/fileoperationkind-swift.struct.md): The kind of file operation.

### Reporting Progress to Other Processes

- [publish](progress/publish%28%29.md): Publishes the progress object for other processes to observe it.
- [unpublish](progress/unpublish%28%29.md): Removes a progress object from publication, making it unobservable by other processes.

### Observing and Controlling File Progress by Other Processes

- [addSubscriberForFileURL:withPublishingHandler:](progress/addsubscriber%28forfileurl_withpublishinghandler_%29.md): Registers a file URL to hear about the progress of a file operation.
- [removeSubscriber:](progress/removesubscriber%28__%29.md): Removes a proxy progress object that the add subscriber method returns.
- [old](progress/isold.md): A Boolean value that indicates when the observed progress object invokes the publish method before you subscribe to it.
- [NSProgressPublishingHandler](progress/publishinghandler.md): A block that the system calls when an observed progress object matches the subscription.
- [NSProgressUnpublishingHandler](progress/unpublishinghandler.md): A block that the system calls when an observed progress object terminates the subscription.

### Instance Methods

- [addChild:withPendingUnitCount:](progress/addchild%28__withpendingunitcount_%29-9yrs3.md): Adds a process object as a suboperation of a progress tree.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Progress

- [NSProgressReporting](progressreporting.md): An interface for objects that report progress using a single progress instance.
