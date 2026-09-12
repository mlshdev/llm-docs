> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest](https://developer.apple.com/documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest)

# RemoteKeylessEntryEnduringAction.EnduringExecutionRequest

**Framework:** CarKey  
**Kind:** Class  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

An object that reports the results of an action with an optional stopping point.

> Use [perform(\_:continuationStrategy:)](../carkeyremotecontrolsession/perform%28__continuationstrategy_%29.md) instead.

## Declaration

```swift
final class EnduringExecutionRequest
```

<a id="overview"></a>

## Overview

When you perform an action, the system creates a [RemoteKeylessEntryEnduringAction.EnduringExecutionRequest](enduringexecutionrequest.md) object for your request and returns it to your app. Use the object to send a follow-up request to stop the action. You can also use it to determine the status of the original action.

## Topics

### Getting the Vehicle’s Response

- [results()](enduringexecutionrequest/results%28%29.md): Deprecated. Returns the results of a preceding action request.
- [ExecutionStatus](../executionstatus.md): A type that contains the status code a vehicle returns after executing an action.

### Cancelling an Action

- [stop()](enduringexecutionrequest/stop%28%29.md): Deprecated. Sends a request to stop a previously started action.
