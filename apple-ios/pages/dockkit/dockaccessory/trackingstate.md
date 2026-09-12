> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackingstate](https://developer.apple.com/documentation/dockkit/dockaccessory/trackingstate)

# DockAccessory.TrackingState

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A representation of the active tracking session state.

## Declaration

```swift
struct TrackingState
```

<a id="overview"></a>

## Overview

The active tracking session emits this state 10 times per second.

## Topics

### Instance Properties

- [description](trackingstate/description.md)
- [time](trackingstate/time.md): The timestamp indicating when the dock captured the tracking state.
- [trackedSubjects](trackingstate/trackedsubjects.md): A collection of actively tracked subjects.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
