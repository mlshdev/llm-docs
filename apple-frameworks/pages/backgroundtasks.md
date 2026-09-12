> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks](https://developer.apple.com/documentation/backgroundtasks)

# Background Tasks (Swift)

**Framework:** Background Tasks  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Support background processing in your app by wrapping your app’s most critical work in framework-provided tasks.

<a id="overview"></a>

## Overview

Use this framework to keep your app content up to date and run tasks requiring minutes to complete even if your app is in the background. Longer tasks can leverage external power, network connectivity, and the GPU on supported devices.

To launch your app in the background and perform necessary work, register launch handlers for framework-provided tasks and schedule the tasks as needed.

Your app can also use a framework-provided task to execute critical jobs in the foreground and complete them in the background if a person backgrounds your app before the job completes.

## Topics

### Essentials

- [Background Tasks updates](https://developer.apple.com/documentation/updates/backgroundtasks): Learn about important changes in Background Tasks.
- [BGTaskScheduler](backgroundtasks/bgtaskscheduler.md): A class for scheduling tasks that add background support to your app’s most critical work.
- [BGTask](backgroundtasks/bgtask.md): An abstract class for the framework’s tasks.

### Background tasks

- [Using background tasks to update your app](uikit/using-background-tasks-to-update-your-app.md): Configure your app to perform tasks in the background to make efficient use of processing time and power.
- [Refreshing and Maintaining Your App Using Background Tasks](backgroundtasks/refreshing-and-maintaining-your-app-using-background-tasks.md): Use scheduled background tasks for refreshing your app content and for performing maintenance.
- [Choosing Background Strategies for Your App](backgroundtasks/choosing-background-strategies-for-your-app.md): Select the best method of scheduling background runtime for your app.
- [BGProcessingTask](backgroundtasks/bgprocessingtask.md): A time-consuming processing task that runs while the app is in the background.
- [BGAppRefreshTask](backgroundtasks/bgapprefreshtask.md): An object representing a short task typically used to refresh content that’s run while the app is in the background.
- [BGHealthResearchTask](backgroundtasks/bghealthresearchtask.md): A time-consuming, necessary processing task that runs while the app is in the background to prepare data essential to a health research study.

### Foreground tasks with background support

- [Performing long-running tasks on iOS and iPadOS](backgroundtasks/performing-long-running-tasks-on-ios-and-ipados.md): Use a continuous background task to do work that can complete as needed.
- [BGContinuedProcessingTask](backgroundtasks/bgcontinuedprocessingtask.md): A task that starts in the foreground and can continue running in the background as needed.
- [Background GPU Access](bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md): The entitlement the system requires for a continuous background task to use the GPU.

### Task requests

- [BGProcessingTaskRequest](backgroundtasks/bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](backgroundtasks/bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](backgroundtasks/bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](backgroundtasks/bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](backgroundtasks/bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

### Development and testing

- [Starting and Terminating Tasks During Development](backgroundtasks/starting-and-terminating-tasks-during-development.md): Use the debugger during development to start tasks and to terminate them before completion.

# Background Tasks (Objective-C)

**Framework:** Background Tasks  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Support background processing in your app by wrapping your app’s most critical work in framework-provided tasks.

<a id="overview"></a>

## Overview

Use this framework to keep your app content up to date and run tasks requiring minutes to complete even if your app is in the background. Longer tasks can leverage external power, network connectivity, and the GPU on supported devices.

To launch your app in the background and perform necessary work, register launch handlers for framework-provided tasks and schedule the tasks as needed.

Your app can also use a framework-provided task to execute critical jobs in the foreground and complete them in the background if a person backgrounds your app before the job completes.

## Topics

### Essentials

- [Background Tasks updates](https://developer.apple.com/documentation/updates/backgroundtasks): Learn about important changes in Background Tasks.
- [BGTaskScheduler](backgroundtasks/bgtaskscheduler.md): A class for scheduling tasks that add background support to your app’s most critical work.
- [BGTask](backgroundtasks/bgtask.md): An abstract class for the framework’s tasks.

### Background tasks

- [Using background tasks to update your app](uikit/using-background-tasks-to-update-your-app.md): Configure your app to perform tasks in the background to make efficient use of processing time and power.
- [Refreshing and Maintaining Your App Using Background Tasks](backgroundtasks/refreshing-and-maintaining-your-app-using-background-tasks.md): Use scheduled background tasks for refreshing your app content and for performing maintenance.
- [Choosing Background Strategies for Your App](backgroundtasks/choosing-background-strategies-for-your-app.md): Select the best method of scheduling background runtime for your app.
- [BGProcessingTask](backgroundtasks/bgprocessingtask.md): A time-consuming processing task that runs while the app is in the background.
- [BGAppRefreshTask](backgroundtasks/bgapprefreshtask.md): An object representing a short task typically used to refresh content that’s run while the app is in the background.
- [BGHealthResearchTask](backgroundtasks/bghealthresearchtask.md): A time-consuming, necessary processing task that runs while the app is in the background to prepare data essential to a health research study.

### Foreground tasks with background support

- [Performing long-running tasks on iOS and iPadOS](backgroundtasks/performing-long-running-tasks-on-ios-and-ipados.md): Use a continuous background task to do work that can complete as needed.
- [BGContinuedProcessingTask](backgroundtasks/bgcontinuedprocessingtask.md): A task that starts in the foreground and can continue running in the background as needed.
- [Background GPU Access](bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md): The entitlement the system requires for a continuous background task to use the GPU.

### Task requests

- [BGProcessingTaskRequest](backgroundtasks/bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](backgroundtasks/bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](backgroundtasks/bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](backgroundtasks/bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](backgroundtasks/bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

### Development and testing

- [Starting and Terminating Tasks During Development](backgroundtasks/starting-and-terminating-tasks-during-development.md): Use the debugger during development to start tasks and to terminate them before completion.

### Macros

- [BG_EXTERN](backgroundtasks/bg_extern.md)
