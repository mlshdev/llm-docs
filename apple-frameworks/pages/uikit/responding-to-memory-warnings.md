> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/responding-to-memory-warnings](https://developer.apple.com/documentation/uikit/responding-to-memory-warnings)

# Responding to memory warnings (Swift)

**Framework:** UIKit  
**Kind:** Article

Free up memory when asked to do so by the system.

<a id="overview"></a>

## Overview

If the system runs low on free memory and is unable to reclaim memory by terminating suspended apps, UIKit sends a low-memory warning to running apps. UIKit delivers low-memory warnings in the following ways:

- It calls the [applicationDidReceiveMemoryWarning(\_:)](uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md) method of your app delegate.
- It calls the [didReceiveMemoryWarning()](uiviewcontroller/didreceivememorywarning%28%29.md) method of any active [UIViewController](uiviewcontroller.md) classes.
- It posts a [didReceiveMemoryWarningNotification](uiapplication/didreceivememorywarningnotification.md) object to any registered observers.
- It delivers a warning to dispatch queues of type [DISPATCH_SOURCE_TYPE_MEMORYPRESSURE](../dispatch/dispatch_source_type_memorypressure.md).

When your app receives a low-memory warning, free up as much memory as possible, as quickly as possible. Remove references to images, media files, or any large data files that already have an on-disk representation and can be reloaded later. Remove references to any temporary objects that you no longer need. If active tasks might consume significant amounts of memory, pause dispatch queues or restrict the number of simultaneous operations that your app performs.

> **Important**

>  Failure to reduce your app’s memory usage may result in your app’s termination. Therefore, consider writing any unsaved data to disk as part of your cleanup efforts.

To test your app’s response to a low-memory warning, use the Simulate Memory Warning command in iOS Simulator.

# Responding to memory warnings (Objective-C)

**Framework:** UIKit  
**Kind:** Article

Free up memory when asked to do so by the system.

<a id="overview"></a>

## Overview

If the system runs low on free memory and is unable to reclaim memory by terminating suspended apps, UIKit sends a low-memory warning to running apps. UIKit delivers low-memory warnings in the following ways:

- It calls the [applicationDidReceiveMemoryWarning:](uiapplicationdelegate/applicationdidreceivememorywarning%28__%29.md) method of your app delegate.
- It calls the [didReceiveMemoryWarning](uiviewcontroller/didreceivememorywarning%28%29.md) method of any active [UIViewController](uiviewcontroller.md) classes.
- It posts a [UIApplicationDidReceiveMemoryWarningNotification](uiapplication/didreceivememorywarningnotification.md) object to any registered observers.
- It delivers a warning to dispatch queues of type [DISPATCH_SOURCE_TYPE_MEMORYPRESSURE](../dispatch/dispatch_source_type_memorypressure.md).

When your app receives a low-memory warning, free up as much memory as possible, as quickly as possible. Remove references to images, media files, or any large data files that already have an on-disk representation and can be reloaded later. Remove references to any temporary objects that you no longer need. If active tasks might consume significant amounts of memory, pause dispatch queues or restrict the number of simultaneous operations that your app performs.

> **Important**

>  Failure to reduce your app’s memory usage may result in your app’s termination. Therefore, consider writing any unsaved data to disk as part of your cleanup efforts.

To test your app’s response to a low-memory warning, use the Simulate Memory Warning command in iOS Simulator.
