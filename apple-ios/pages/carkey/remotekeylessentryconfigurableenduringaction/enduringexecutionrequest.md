> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest](https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest)

# RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest

**Framework:** CarKey  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

An object that reports the results of an action with an optional stopping point.

## Declaration

```swift
@objc final class EnduringExecutionRequest
```

<a id="overview"></a>

## Overview

When you perform an action, the system creates a [RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest](enduringexecutionrequest.md) object for your request and returns it to your app. Use the object to send a follow-up request to stop the action. You can also use it to determine the status of the original action.

## Topics

### Structures

- [RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.ContinuationRequest](enduringexecutionrequest/continuationrequest.md): Continuation Request

### Instance Properties

- [eventStream](enduringexecutionrequest/eventstream.md): The asynchronous event stream on which Continuation Requests are sent

### Instance Methods

- [results()](enduringexecutionrequest/results%28%29.md): Returns the results of a preceding action request.
- [stop()](enduringexecutionrequest/stop%28%29.md): Sends a request to stop a previously started action.

### Enumerations

- [RemoteKeylessEntryConfigurableEnduringAction.EnduringExecutionRequest.Event](enduringexecutionrequest/event.md)

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
