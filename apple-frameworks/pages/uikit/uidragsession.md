> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragsession](https://developer.apple.com/documentation/uikit/uidragsession)

# UIDragSession (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring a drag session.

## Declaration

```swift
@MainActor protocol UIDragSession : UIDragDropSession
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)

## Topics

### Accessing local information

- [localContext](uidragsession/localcontext.md): The optional custom data that you attach to a drag session, visible only to the app in which the drag activity begins.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIDragDropSession](uidragdropsession.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.

# UIDragSession (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for configuring a drag session.

## Declaration

```objectivec
@protocol UIDragSession <UIDragDropSession>
```

## Mentioned In

- [Making a view into a drag source](making-a-view-into-a-drag-source.md)

## Topics

### Accessing local information

- [localContext](uidragsession/localcontext.md): The optional custom data that you attach to a drag session, visible only to the app in which the drag activity begins.

## Relationships

### Inherits From

- [UIDragDropSession](uidragdropsession.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragDropSession](uidragdropsession.md): The common interface for querying the state of both drag sessions and drop sessions.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.
