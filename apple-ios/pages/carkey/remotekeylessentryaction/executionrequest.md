> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryaction/executionrequest](https://developer.apple.com/documentation/carkey/remotekeylessentryaction/executionrequest)

# RemoteKeylessEntryAction.ExecutionRequest

**Framework:** CarKey  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

An object that reports the results of an automatically ending action asynchronously.

## Declaration

```swift
final class ExecutionRequest
```

<a id="overview"></a>

## Overview

When you perform an action, the system creates a [RemoteKeylessEntryAction.ExecutionRequest](executionrequest.md) object for that request and returns it to your app. Use that object to asynchronously determine whether your request completed successfully or reported an error.

## Topics

### Getting the Vehicle’s Response

- [results()](executionrequest/results%28%29.md): Returns the results of a preceding action request.
- [ExecutionStatus](../executionstatus.md): A type that contains the status code a vehicle returns after executing an action.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
