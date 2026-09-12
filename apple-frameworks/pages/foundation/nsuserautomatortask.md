> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserautomatortask](https://developer.apple.com/documentation/foundation/nsuserautomatortask)

# NSUserAutomatorTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes Automator workflows.

## Declaration

```swift
class NSUserAutomatorTask
```

<a id="overview"></a>

## Overview

The [NSUserAutomatorTask](nsuserautomatortask.md) class is intended to run Automator workflows from your application. It is intended to execute user-supplied workflows, and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [Process](process.md) or [AMWorkflow](https://developer.apple.com/documentation/automator/amworkflow) classes.  If the application is sandboxed, then the script must be in the [FileManager.SearchPathDirectory.applicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder.  A sandboxed application may read from, but not write to, this folder.

If you simply need to execute scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types.  If you need specific control over the input to or output from the workflow, use this class.

## Topics

### Executing Automator Tasks

- [execute(withInput:completionHandler:)](nsuserautomatortask/execute%28withinput_completionhandler_%29.md): Execute the Automator workflow by providing it as securely coded input.
- [variables](nsuserautomatortask/variables.md): The variables required by the Automator workflow.

### Constants

- [NSUserAutomatorTask.CompletionHandler](nsuserautomatortask/completionhandler.md): Implement this block to retrieve the output of the Automator workflow executed by [execute(withInput:completionHandler:)](nsuserautomatortask/execute%28withinput_completionhandler_%29.md).

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
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.

# NSUserAutomatorTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes Automator workflows.

## Declaration

```objectivec
@interface NSUserAutomatorTask : NSUserScriptTask
```

<a id="overview"></a>

## Overview

The [NSUserAutomatorTask](nsuserautomatortask.md) class is intended to run Automator workflows from your application. It is intended to execute user-supplied workflows, and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [NSTask](process.md) or [AMWorkflow](https://developer.apple.com/documentation/automator/amworkflow) classes.  If the application is sandboxed, then the script must be in the [NSApplicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder.  A sandboxed application may read from, but not write to, this folder.

If you simply need to execute scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types.  If you need specific control over the input to or output from the workflow, use this class.

## Topics

### Executing Automator Tasks

- [executeWithInput:completionHandler:](nsuserautomatortask/execute%28withinput_completionhandler_%29.md): Execute the Automator workflow by providing it as securely coded input.
- [variables](nsuserautomatortask/variables.md): The variables required by the Automator workflow.

### Constants

- [NSUserAutomatorTaskCompletionHandler](nsuserautomatortask/completionhandler.md): Implement this block to retrieve the output of the Automator workflow executed by [executeWithInput:completionHandler:](nsuserautomatortask/execute%28withinput_completionhandler_%29.md).

## Relationships

### Inherits From

- [NSUserScriptTask](nsuserscripttask.md)

## See Also

### Scripts and External Tasks

- [NSTask](process.md): An object that represents a subprocess of the current process.
- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.
