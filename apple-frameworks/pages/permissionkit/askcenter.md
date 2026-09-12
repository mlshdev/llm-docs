> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askcenter](https://developer.apple.com/documentation/permissionkit/askcenter)

# AskCenter

**Framework:** PermissionKit  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

A class that manages permission requests you send to parents or guardians for approval.

## Declaration

```swift
final class AskCenter
```

<a id="overview"></a>

## Overview

Use `AskCenter` to send permission questions to parents or guardians when a person needs approval for app communication permissions or significant updates. The system routes your questions through the appropriate family sharing channels and delivers responses back to your app when parents make their decisions.

Access the shared instance to send permission requests and register for response notifications. The system handles the underlying communication with parents and manages the approval workflow automatically.

## Topics

### Getting the shared instance

- [shared](askcenter/shared.md): The shared instance you use to send permission requests and receive responses.

### Making permission requests

- [ask(\_:in:)](askcenter/ask%28__in_%29-39vi7.md): Tells the system to request that the person send the communication permission question to the person’s parent or guardian.
- [ask(\_:in:)](askcenter/ask%28__in_%29-3znb6.md): Tells the system to request that the person send the communication permission question to the person’s parent or guardian.
- [ask(\_:in:)](askcenter/ask%28__in_%29-6xupo.md): Tells the system to request that a person send the communication permission question to the person’s parent or guardian.
- [ask(\_:in:)](askcenter/ask%28__in_%29-8ks48.md): Tells the system to request that a person send the the significant app update permission question to their parent or guardian.

### Receiving responses

- [responses(for:)](askcenter/responses%28for_%29.md): Registers the topic type with the system and returns an asynchronous sequence of responses.

### Instance Methods

- [askSignificantChangePermission(for:permissionFlow:in:)](askcenter/asksignificantchangepermission%28for_permissionflow_in_%29-85gmn.md): Tells the system to request that the user send the significant app update permission question to the user’s parent/s and/or guardian/s using the specified permission flow. Throws an error if the system was unable to request the user to send the question.
- [askSignificantChangePermission(for:permissionFlow:in:)](askcenter/asksignificantchangepermission%28for_permissionflow_in_%29-nm9w.md): Requests that a child send the significant app update permission question to their parent or guardian using the specified permission flow.

## See Also

### Essentials

- [Creating a communication experience](creating-a-communication-experience.md): Request permission from a parent or guardian to modify a child’s communication rules.
- [PermissionQuestion](permissionquestion.md): A class that captures a permission question posed by a person.
