> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgprocessingtaskrequest](https://developer.apple.com/documentation/backgroundtasks/bgprocessingtaskrequest)

# BGProcessingTaskRequest (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A request to launch your app in the background to execute a processing task that can take minutes to complete.

## Declaration

```swift
class BGProcessingTaskRequest
```

## Topics

### Initializing a Processing Task Request

- [init(identifier:)](bgprocessingtaskrequest/init%28identifier_%29.md): Return a new processing task request for the specified identifier.

### Setting Task Request Options

- [requiresExternalPower](bgprocessingtaskrequest/requiresexternalpower.md): A Boolean specifying if the processing task requires a device connected to power.
- [requiresNetworkConnectivity](bgprocessingtaskrequest/requiresnetworkconnectivity.md): A Boolean specifying if the processing task requires network connectivity.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

### Inherited By

- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md)

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

- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.

# BGProcessingTaskRequest (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A request to launch your app in the background to execute a processing task that can take minutes to complete.

## Declaration

```objectivec
@interface BGProcessingTaskRequest : BGTaskRequest
```

## Topics

### Initializing a Processing Task Request

- [initWithIdentifier:](bgprocessingtaskrequest/init%28identifier_%29.md): Return a new processing task request for the specified identifier.

### Setting Task Request Options

- [requiresExternalPower](bgprocessingtaskrequest/requiresexternalpower.md): A Boolean specifying if the processing task requires a device connected to power.
- [requiresNetworkConnectivity](bgprocessingtaskrequest/requiresnetworkconnectivity.md): A Boolean specifying if the processing task requires network connectivity.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

### Inherited By

- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md)

## See Also

### Task requests

- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
- [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md): A request for a workload that the system continues processing even if a person backgrounds the app.
