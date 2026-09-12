> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bghealthresearchtaskrequest](https://developer.apple.com/documentation/backgroundtasks/bghealthresearchtaskrequest)

# BGHealthResearchTaskRequest (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A request to launch your app in the background to execute processing for a health research study in which a user participates.

## Declaration

```swift
class BGHealthResearchTaskRequest
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

## Topics

### Setting file permissions

- [protectionTypeOfRequiredData](bghealthresearchtaskrequest/protectiontypeofrequireddata.md): The file protection required to access health research data relevant to complete the task.

## Relationships

### Inherits From

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
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

# BGHealthResearchTaskRequest (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A request to launch your app in the background to execute processing for a health research study in which a user participates.

## Declaration

```objectivec
@interface BGHealthResearchTaskRequest : BGProcessingTaskRequest
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

## Topics

### Setting file permissions

- [protectionTypeOfRequiredData](bghealthresearchtaskrequest/protectiontypeofrequireddata.md): The file protection required to access health research data relevant to complete the task.

## Relationships

### Inherits From

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.
