> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fstask](https://developer.apple.com/documentation/fskit/fstask)

# FSTask (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A class that enables a file system module to pass log messages and completion notifications to clients.

## Declaration

```swift
class FSTask
```

<a id="overview"></a>

## Overview

FSKit creates an instance of this class for each long-running operations.

## Topics

### Logging

- [logMessage(\_:)](fstask/logmessage%28__%29.md): Logs the given string to the initiating client.

### Sending completion messages

- [didComplete(error:)](fstask/didcomplete%28error_%29.md): Informs the client that the task completed.

### Handling task cancellation

- [cancellationHandler](fstask/cancellationhandler.md): A handler called by FSKit upon canceling the task.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tasks

- [FSTaskOptions](fstaskoptions.md): A class that passes command options to a task, optionally providing security-scoped URLs.

# FSTask (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A class that enables a file system module to pass log messages and completion notifications to clients.

## Declaration

```objectivec
@interface FSTask : NSObject
```

<a id="overview"></a>

## Overview

FSKit creates an instance of this class for each long-running operations.

## Topics

### Logging

- [logMessage:](fstask/logmessage%28__%29.md): Logs the given string to the initiating client.

### Sending completion messages

- [didCompleteWithError:](fstask/didcomplete%28error_%29.md): Informs the client that the task completed.

### Handling task cancellation

- [cancellationHandler](fstask/cancellationhandler.md): A handler called by FSKit upon canceling the task.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Tasks

- [FSTaskOptions](fstaskoptions.md): A class that passes command options to a task, optionally providing security-scoped URLs.
