> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask](https://developer.apple.com/documentation/foundation/nsuserunixtask)

# NSUserUnixTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes unix applications.

## Declaration

```swift
class NSUserUnixTask
```

<a id="overview"></a>

## Overview

The [NSUserUnixTask](nsuserunixtask.md) class is intended to run unix applications, typically a shell script, from your application. It is intended to execute user-supplied scripts, and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [Process](process.md), [NSAppleScript](nsapplescript.md), or [AMWorkflow](https://developer.apple.com/documentation/automator/amworkflow) classes.  If the application is sandboxed, then the script must be in the [FileManager.SearchPathDirectory.applicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder.  A sandboxed application may read from, but not write to, this folder.

If you simply need to execute unix scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types.  If you need specific control over the input to, or output from, or the error stream of the script, use this class.

## Topics

### Executing the Unix Script

- [execute(withArguments:completionHandler:)](nsuserunixtask/execute%28witharguments_completionhandler_%29.md): Execute the unix script with the specified arguments.

### Standard Unix Streams

- [standardError](nsuserunixtask/standarderror.md): The standard error stream.
- [standardInput](nsuserunixtask/standardinput.md): The standard input stream.
- [standardOutput](nsuserunixtask/standardoutput.md): The standard output stream.

### Constants

- [NSUserUnixTask.CompletionHandler](nsuserunixtask/completionhandler.md): Implement this block to retrieve an error from the Unix scripted executed by [execute(withArguments:completionHandler:)](nsuserunixtask/execute%28witharguments_completionhandler_%29.md).

## Relationships

### Inherits From

- [NSUserScriptTask](nsuserscripttask.md)

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

- [Process](process.md): An object that represents a subprocess of the current process.
- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.

# NSUserUnixTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes unix applications.

## Declaration

```objectivec
@interface NSUserUnixTask : NSUserScriptTask
```

<a id="overview"></a>

## Overview

The [NSUserUnixTask](nsuserunixtask.md) class is intended to run unix applications, typically a shell script, from your application. It is intended to execute user-supplied scripts, and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [NSTask](process.md), [NSAppleScript](nsapplescript.md), or [AMWorkflow](https://developer.apple.com/documentation/automator/amworkflow) classes.  If the application is sandboxed, then the script must be in the [NSApplicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder.  A sandboxed application may read from, but not write to, this folder.

If you simply need to execute unix scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types.  If you need specific control over the input to, or output from, or the error stream of the script, use this class.

## Topics

### Executing the Unix Script

- [executeWithArguments:completionHandler:](nsuserunixtask/execute%28witharguments_completionhandler_%29.md): Execute the unix script with the specified arguments.

### Standard Unix Streams

- [standardError](nsuserunixtask/standarderror.md): The standard error stream.
- [standardInput](nsuserunixtask/standardinput.md): The standard input stream.
- [standardOutput](nsuserunixtask/standardoutput.md): The standard output stream.

### Constants

- [NSUserUnixTaskCompletionHandler](nsuserunixtask/completionhandler.md): Implement this block to retrieve an error from the Unix scripted executed by [executeWithArguments:completionHandler:](nsuserunixtask/execute%28witharguments_completionhandler_%29.md).

## Relationships

### Inherits From

- [NSUserScriptTask](nsuserscripttask.md)

## See Also

### Scripts and External Tasks

- [NSTask](process.md): An object that represents a subprocess of the current process.
- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
