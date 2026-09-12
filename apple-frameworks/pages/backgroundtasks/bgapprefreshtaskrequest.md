> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgapprefreshtaskrequest](https://developer.apple.com/documentation/backgroundtasks/bgapprefreshtaskrequest)

# BGAppRefreshTaskRequest (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A request to launch your app in the background to execute a short refresh task.

## Declaration

```swift
class BGAppRefreshTaskRequest
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

## Topics

### Initializing a refresh task request

- [init(identifier:)](bgapprefreshtaskrequest/init%28identifier_%29.md): Return a new refresh task request for the specified identifier.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

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
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

# BGAppRefreshTaskRequest (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A request to launch your app in the background to execute a short refresh task.

## Declaration

```objectivec
@interface BGAppRefreshTaskRequest : BGTaskRequest
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

## Topics

### Initializing a refresh task request

- [initWithIdentifier:](bgapprefreshtaskrequest/init%28identifier_%29.md): Return a new refresh task request for the specified identifier.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.
