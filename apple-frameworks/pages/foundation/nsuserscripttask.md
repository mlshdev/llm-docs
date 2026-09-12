> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserscripttask](https://developer.apple.com/documentation/foundation/nsuserscripttask)

# NSUserScriptTask (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes scripts.

## Declaration

```swift
class NSUserScriptTask
```

<a id="overview"></a>

## Overview

The [NSUserScriptTask](nsuserscripttask.md) class is able to run all the scripts normally run by the one of its subclasses, however it ignores the results. It is intended to execute user-supplied scripts and will execute them outside of the application’s sandbox, if any.

If you need to execute scripts and get the input and output information use the [NSUserUnixTask](nsuserunixtask.md), [NSUserAppleScriptTask](nsuserapplescripttask.md), and [NSUserAutomatorTask](nsuserautomatortask.md) sub classes.

## Topics

### Specifying the Script

- [init(url:)](nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
- [scriptURL](nsuserscripttask/scripturl.md): The URL of the script file.

### Executing the User Script

- [execute(completionHandler:)](nsuserscripttask/execute%28completionhandler_%29.md): Executes the script with no input and ignoring any result.

### Constants

- [NSUserScriptTask.CompletionHandler](nsuserscripttask/completionhandler.md): Implement this block to retrieve the error of the script executed by [execute(completionHandler:)](nsuserscripttask/execute%28completionhandler_%29.md).

### Initializers

- [init(URL:)](nsuserscripttask/init%28url_%29-3l6en.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSUserAppleScriptTask](nsuserapplescripttask.md)
- [NSUserAutomatorTask](nsuserautomatortask.md)
- [NSUserUnixTask](nsuserunixtask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Scripts and External Tasks

- [Process](process.md): An object that represents a subprocess of the current process.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.

# NSUserScriptTask (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that executes scripts.

## Declaration

```objectivec
@interface NSUserScriptTask : NSObject
```

<a id="overview"></a>

## Overview

The [NSUserScriptTask](nsuserscripttask.md) class is able to run all the scripts normally run by the one of its subclasses, however it ignores the results. It is intended to execute user-supplied scripts and will execute them outside of the application’s sandbox, if any.

If you need to execute scripts and get the input and output information use the [NSUserUnixTask](nsuserunixtask.md), [NSUserAppleScriptTask](nsuserapplescripttask.md), and [NSUserAutomatorTask](nsuserautomatortask.md) sub classes.

## Topics

### Specifying the Script

- [initWithURL:error:](nsuserscripttask/init%28url_%29-2qgls.md): Return a user script task instance given a URL for a script file.
- [scriptURL](nsuserscripttask/scripturl.md): The URL of the script file.

### Executing the User Script

- [executeWithCompletionHandler:](nsuserscripttask/execute%28completionhandler_%29.md): Executes the script with no input and ignoring any result.

### Constants

- [NSUserScriptTaskCompletionHandler](nsuserscripttask/completionhandler.md): Implement this block to retrieve the error of the script executed by [executeWithCompletionHandler:](nsuserscripttask/execute%28completionhandler_%29.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSUserAppleScriptTask](nsuserapplescripttask.md)
- [NSUserAutomatorTask](nsuserautomatortask.md)
- [NSUserUnixTask](nsuserunixtask.md)

## See Also

### Scripts and External Tasks

- [NSTask](process.md): An object that represents a subprocess of the current process.
- [NSUserAppleScriptTask](nsuserapplescripttask.md): An object that executes AppleScript scripts.
- [NSUserAutomatorTask](nsuserautomatortask.md): An object that executes Automator workflows.
- [NSUserUnixTask](nsuserunixtask.md): An object that executes unix applications.
