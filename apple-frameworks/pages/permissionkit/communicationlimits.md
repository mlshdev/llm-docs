> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits](https://developer.apple.com/documentation/permissionkit/communicationlimits)

# CommunicationLimits

**Framework:** PermissionKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type that encapsulates the communication limits for your app.

## Declaration

```swift
final class CommunicationLimits
```

## Mentioned In

- [Creating a communication experience](creating-a-communication-experience.md)

<a id="overview"></a>

## Overview

Obtain an `AsyncSequence` to handle communication permission responses after launching your app.

```swift
let responses = CommunicationLimits.current.updates
for await response in responses {
   print("Received a communication permission response: \(response)")
}
```

## Topics

### Accessing communication limits

- [current](communicationlimits/current.md): The singleton app instance.

### Checking known handles

- [isKnownHandle(\_:)](communicationlimits/isknownhandle%28__%29.md): A Boolean that checks if the system knows the given handle.
- [knownHandles(in:)](communicationlimits/knownhandles%28in_%29.md): Checks which handles in a given set are known to the system.

### Deprecated APIs

- [updates](communicationlimits/updates.md): Deprecated. Registers the communication topic with the system, so your app can be launched on-demand in the background to receive permission updates.
- [ask(\_:in:)](communicationlimits/ask%28__in_%29-5tzyy.md): Deprecated. Tells the system to request that the user send the communication permission question to the user’s parent/s and/or guardian/s. Throws an error if the system was unable to request the user to send the question.
- [ask(\_:in:)](communicationlimits/ask%28__in_%29-5ou06.md): Deprecated. Requests that a child send the communication permission question to their parent or guardian.

## See Also

### Response management

- [responses(for:)](askcenter/responses%28for_%29.md): Registers the topic type with the system and returns an asynchronous sequence of responses.
- [PermissionResponse](permissionresponse.md): A full permission response that includes the original question and chosen answer.
- [CommunicationHandle](communicationhandle.md): Contact information for identifying and communicating with a person.
- [PermissionChoice](permissionchoice.md): A class that uniquely identifies a specific, statically defined permission choice.
