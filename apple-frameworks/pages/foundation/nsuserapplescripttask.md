> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserapplescripttask](https://developer.apple.com/documentation/foundation/nsuserapplescripttask)

# NSUserAppleScriptTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes AppleScript scripts.

## Declaration

```swift
class NSUserAppleScriptTask
```

<a id="overview"></a>

## Overview

The [NSUserAppleScriptTask](nsuserapplescripttask.md) class is intended to run AppleScript scripts from your application. It is intended to execute user-supplied scripts and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [Process](process.md) classes. If the application is sandboxed, then the script must be in the [FileManager.SearchPathDirectory.applicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder. A sandboxed application may read from, but not write to, this folder.

If you simply need to execute scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types. If you need specific control over the input to or output from the script, use this class.

## Topics

### Executing an AppleScript Script

- [execute(withAppleEvent:completionHandler:)](nsuserapplescripttask/execute%28withappleevent_completionhandler_%29.md): Execute the AppleScript script by sending it the specified Apple event.

### Constants

- [NSUserAppleScriptTask.CompletionHandler](nsuserapplescripttask/completionhandler.md): Implement this block to retrieve the result of the AppleScript executed by [execute(withAppleEvent:completionHandler:)](nsuserapplescripttask/execute%28withappleevent_completionhandler_%29.md).

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
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.

# NSUserAppleScriptTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes AppleScript scripts.

## Declaration

```objectivec
@interface NSUserAppleScriptTask : NSUserScriptTask
```

<a id="overview"></a>

## Overview

The [NSUserAppleScriptTask](nsuserapplescripttask.md) class is intended to run AppleScript scripts from your application. It is intended to execute user-supplied scripts and will execute them outside of the application’s sandbox, if any.

The class is not intended to execute scripts built into an application; for that, use one of the [NSTask](process.md) classes. If the application is sandboxed, then the script must be in the [NSApplicationScriptsDirectory](filemanager/searchpathdirectory/applicationscriptsdirectory.md) folder. A sandboxed application may read from, but not write to, this folder.

If you simply need to execute scripts without regard to input or output, use [NSUserScriptTask](nsuserscripttask.md), which can execute any of the specific types. If you need specific control over the input to or output from the script, use this class.

## Topics

### Executing an AppleScript Script

- [executeWithAppleEvent:completionHandler:](nsuserapplescripttask/execute%28withappleevent_completionhandler_%29.md): Execute the AppleScript script by sending it the specified Apple event.

### Constants

- [NSUserAppleScriptTaskCompletionHandler](nsuserapplescripttask/completionhandler.md): Implement this block to retrieve the result of the AppleScript executed by [executeWithAppleEvent:completionHandler:](nsuserapplescripttask/execute%28withappleevent_completionhandler_%29.md).

## Relationships

### Inherits From

- [NSUserScriptTask](nsuserscripttask.md)

## See Also

### Scripts and External Tasks

- [NSTask](process.md): An object that represents a subprocess of the current process.
- [NSUserScriptTask](nsuserscripttask.md): An object that executes scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.
