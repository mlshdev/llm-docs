> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process](https://developer.apple.com/documentation/foundation/process)

# Process (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An object that represents a subprocess of the current process.

## Declaration

```swift
class Process
```

<a id="overview"></a>

## Overview

Using this class, your program can run another program as a subprocess and monitor that program’s execution. Unlike [Thread](thread.md), it doesn’t share memory space with the process that creates it.

A process operates within an environment defined by the current values for several items: the current directory, standard input, standard output, standard error, and the values of any environment variables, inheriting its environment from the process that launches it. If there are any environment variables that should be different for the subprocess (for example, if the current directory needs to change), change it in the instance after initialization, before your app launches it. Your app can’t change a process’s environment while it’s running.

You can only run the subprocess once per instance. Subsequent attempts raise an error.

> **Important**

>  In a sandboxed app, child processes you create with this class inherit the sandbox of the parent app. Instead, write helper apps as XPC Services because it allows you to specify different sandbox entitlements for helper apps. For more information, see [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i) and [XPC](../xpc.md).

## Topics

### Creating and initializing a process

- [run(\_:arguments:terminationHandler:)](process/run%28__arguments_terminationhandler_%29.md): Creates and runs a task with a specified executable and arguments.
- [init()](process/init%28%29.md): Returns an initialized process object with the environment of the current process.

### Returning information

- [processIdentifier](process/processidentifier.md): The receiver’s process identifier.

### Running and stopping

- [run()](process/run%28%29.md): Runs the process with the current environment.
- [interrupt()](process/interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume()](process/resume%28%29.md): Resumes execution of a suspended task.
- [suspend()](process/suspend%28%29.md): Suspends execution of the receiver task.
- [terminate()](process/terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit()](process/waituntilexit%28%29.md): Blocks the process until the receiver is finished.

### Querying the process state

- [isRunning](process/isrunning.md): A status that indicates whether the receiver is still running.
- [terminationStatus](process/terminationstatus.md): The exit status the receiver’s executable returns.
- [terminationReason](process/terminationreason-swift.property.md): The reason the system terminated the task.

### Configuring a process

- [arguments](process/arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](process/currentdirectoryurl.md): The current directory for the receiver.
- [environment](process/environment.md): The environment for the receiver.
- [executableURL](process/executableurl.md): The receiver’s executable.
- [qualityOfService](process/qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](process/standarderror.md): The standard error for the receiver.
- [standardInput](process/standardinput.md): The standard input for the receiver.
- [standardOutput](process/standardoutput.md): The standard output for the receiver.

### Working with termination handlers

- [terminationHandler](process/terminationhandler.md): A completion block the system invokes when the task completes.

### Working with constants

- [Process.TerminationReason](process/terminationreason-swift.enum.md): Constants that specify the termination reason values that the system returns.
- [QualityOfService](qualityofservice.md): Constants that indicate the nature and importance of work to the system.

### Working with notifications

- [didTerminateNotification](process/didterminatenotification.md): Posted when the task has stopped execution.

### Working with notification messages

- [Process.DidTerminateMessage](process/didterminatemessage.md): A message the system sends when a task stops operation.

### Deprecated

- [launchedProcess(launchPath:arguments:)](process/launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](process/currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](process/launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch()](process/launch%28%29.md): Deprecated. Launches the task represented by the receiver.

### Instance Properties

- [launchRequirement](process/launchrequirement.md)
- [launchRequirementData](process/launchrequirementdata.md): The launch requirement data for the receiver.

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

### Scripts and External Tasks

- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.

# NSTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An object that represents a subprocess of the current process.

## Declaration

```objectivec
@interface NSTask : NSObject
```

<a id="overview"></a>

## Overview

Using this class, your program can run another program as a subprocess and monitor that program’s execution. Unlike [NSThread](thread.md), it doesn’t share memory space with the process that creates it.

A process operates within an environment defined by the current values for several items: the current directory, standard input, standard output, standard error, and the values of any environment variables, inheriting its environment from the process that launches it. If there are any environment variables that should be different for the subprocess (for example, if the current directory needs to change), change it in the instance after initialization, before your app launches it. Your app can’t change a process’s environment while it’s running.

You can only run the subprocess once per instance. Subsequent attempts raise an error.

> **Important**

>  In a sandboxed app, child processes you create with this class inherit the sandbox of the parent app. Instead, write helper apps as XPC Services because it allows you to specify different sandbox entitlements for helper apps. For more information, see [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i) and [XPC](../xpc.md).

## Topics

### Creating and initializing a process

- [launchedTaskWithExecutableURL:arguments:error:terminationHandler:](process/run%28__arguments_terminationhandler_%29.md): Creates and runs a task with a specified executable and arguments.
- [init](process/init%28%29.md): Returns an initialized process object with the environment of the current process.

### Returning information

- [processIdentifier](process/processidentifier.md): The receiver’s process identifier.

### Running and stopping

- [launchAndReturnError:](process/run%28%29.md): Runs the process with the current environment.
- [interrupt](process/interrupt%28%29.md): Sends an interrupt signal to the receiver and all of its subtasks.
- [resume](process/resume%28%29.md): Resumes execution of a suspended task.
- [suspend](process/suspend%28%29.md): Suspends execution of the receiver task.
- [terminate](process/terminate%28%29.md): Sends a terminate signal to the receiver and all of its subtasks.
- [waitUntilExit](process/waituntilexit%28%29.md): Blocks the process until the receiver is finished.

### Querying the process state

- [running](process/isrunning.md): A status that indicates whether the receiver is still running.
- [terminationStatus](process/terminationstatus.md): The exit status the receiver’s executable returns.
- [terminationReason](process/terminationreason-swift.property.md): The reason the system terminated the task.

### Configuring a process

- [arguments](process/arguments.md): The command arguments that the system uses to launch the executable.
- [currentDirectoryURL](process/currentdirectoryurl.md): The current directory for the receiver.
- [environment](process/environment.md): The environment for the receiver.
- [executableURL](process/executableurl.md): The receiver’s executable.
- [qualityOfService](process/qualityofservice.md): The default quality of service level the system applies to operations the task executes.
- [standardError](process/standarderror.md): The standard error for the receiver.
- [standardInput](process/standardinput.md): The standard input for the receiver.
- [standardOutput](process/standardoutput.md): The standard output for the receiver.

### Working with termination handlers

- [terminationHandler](process/terminationhandler.md): A completion block the system invokes when the task completes.

### Working with constants

- [NSTaskTerminationReason](process/terminationreason-swift.enum.md): Constants that specify the termination reason values that the system returns.
- [NSQualityOfService](qualityofservice.md): Constants that indicate the nature and importance of work to the system.

### Working with notifications

- [NSTaskDidTerminateNotification](process/didterminatenotification.md): Posted when the task has stopped execution.

### Deprecated

- [launchedTaskWithLaunchPath:arguments:](process/launchedprocess%28launchpath_arguments_%29.md): Deprecated. Creates and launches a task with a specified executable and arguments.
- [currentDirectoryPath](process/currentdirectorypath.md): Deprecated. Sets the current directory for the receiver.
- [launchPath](process/launchpath.md): Deprecated. Sets the receiver’s executable.
- [launch](process/launch%28%29.md): Deprecated. Launches the task represented by the receiver.

### Instance Properties

- [launchRequirementData](process/launchrequirementdata.md): The launch requirement data for the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Scripts and External Tasks

- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.
