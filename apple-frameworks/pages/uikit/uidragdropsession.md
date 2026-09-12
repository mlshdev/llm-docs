> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession](https://developer.apple.com/documentation/uikit/uidragdropsession)

# UIDragDropSession (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The common interface for querying the state of both drag sessions and drop sessions.

## Declaration

```swift
@MainActor protocol UIDragDropSession : NSObjectProtocol
```

## Topics

### Checking for drag items

- [canLoadObjects(ofClass:)](uidragdropsession/canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [hasItemsConforming(toTypeIdentifiers:)](uidragdropsession/hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.
- [items](uidragdropsession/items.md): An array of drag items in the drag session or drop session.

### Checking for drag and drop session restrictions

- [allowsMoveOperation](uidragdropsession/allowsmoveoperation.md): A Boolean value that indicates whether the drag session permits moving drag items within the same app.
- [isRestrictedToDraggingApplication](uidragdropsession/isrestrictedtodraggingapplication.md): A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.

### Getting the location of a drag activity

- [location(in:)](uidragdropsession/location%28in_%29.md): Returns the geometrical location of the user’s drag activity within the specified view.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIDragSession](uidragsession.md)
- [UIDropSession](uidropsession.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.

# UIDragDropSession (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The common interface for querying the state of both drag sessions and drop sessions.

## Declaration

```objectivec
@protocol UIDragDropSession <NSObject>
```

## Topics

### Checking for drag items

- [canLoadObjectsOfClass:](uidragdropsession/canloadobjects%28ofclass_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.
- [hasItemsConformingToTypeIdentifiers:](uidragdropsession/hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.
- [items](uidragdropsession/items.md): An array of drag items in the drag session or drop session.

### Checking for drag and drop session restrictions

- [allowsMoveOperation](uidragdropsession/allowsmoveoperation.md): A Boolean value that indicates whether the drag session permits moving drag items within the same app.
- [restrictedToDraggingApplication](uidragdropsession/isrestrictedtodraggingapplication.md): A Boolean value that indicates whether the drag session is confined to the app that started the drag activity.

### Getting the location of a drag activity

- [locationInView:](uidragdropsession/location%28in_%29.md): Returns the geometrical location of the user’s drag activity within the specified view.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIDragSession](uidragsession.md)
- [UIDropSession](uidropsession.md)

## See Also

### Drag sources

- [UIDragItem](uidragitem.md): A representation of an underlying data item as a person drags it from one location to another.
- [UIDragSession](uidragsession.md): The interface for configuring a drag session.
- [UIDragAnimating](uidraganimating.md): The interface for providing custom animation alongside the system’s lift, drop, and cancellation animations.
