> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupstateobserver](https://developer.apple.com/documentation/groupactivities/groupstateobserver)

# GroupStateObserver

**Framework:** Group Activities  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that contains information about the system’s ability to start SharePlay experiences.

## Declaration

```swift
final class GroupStateObserver
```

## Mentioned In

- [Presenting SharePlay activities from your app’s UI](promoting-shareplay-activities-from-your-apps-ui.md)

<a id="overview"></a>

## Overview

Starting a SharePlay experience with the Group Activities framework requires an active FaceTime call. Use a `GroupStateObserver` object to determine whether it’s possible to start such an experience. When no call is active, you might adjust your app’s user interface. For example, you might hide or remove controls that start a shared activity.

To get the current system state, create a `GroupStateObserver` object and check the value of its [isEligibleForGroupSession](groupstateobserver/iseligibleforgroupsession.md) property. To respond right away when the value of the property changes, configure a subscriber for that property.

## Topics

### Creating a group state observer

- [init()](groupstateobserver/init%28%29.md): Creates a new group state observer object for determining the availability of group sessions.

### Determining the eligibility for shared activities

- [isEligibleForGroupSession](groupstateobserver/iseligibleforgroupsession.md): A Boolean value that indicates whether the system can start a group session.

### Instance Properties

- [$isEligibleForGroupSession](groupstateobserver/$iseligibleforgroupsession.md)

## Relationships

### Conforms To

- [ObservableObject](../combine/observableobject.md)
