> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskrequest](https://developer.apple.com/documentation/backgroundtasks/bgtaskrequest)

# BGTaskRequest (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An abstract class for representing task requests.

## Declaration

```swift
class BGTaskRequest
```

## Topics

### Configuring a Task Request

- [earliestBeginDate](bgtaskrequest/earliestbegindate.md): The earliest date and time at which to run the task.
- [identifier](bgtaskrequest/identifier.md): The identifier of the task associated with the request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md)
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md)
- [BGProcessingTaskRequest](bgprocessingtaskrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

# BGTaskRequest (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An abstract class for representing task requests.

## Declaration

```objectivec
@interface BGTaskRequest : NSObject
```

## Topics

### Configuring a Task Request

- [earliestBeginDate](bgtaskrequest/earliestbegindate.md): The earliest date and time at which to run the task.
- [identifier](bgtaskrequest/identifier.md): The identifier of the task associated with the request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md)
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md)
- [BGProcessingTaskRequest](bgprocessingtaskrequest.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.
