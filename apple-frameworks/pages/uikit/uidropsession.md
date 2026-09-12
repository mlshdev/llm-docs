> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsession](https://developer.apple.com/documentation/uikit/uidropsession)

# UIDropSession (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for querying a drop session about its state and associated drag items.

## Declaration

```swift
@MainActor protocol UIDropSession : ProgressReporting, UIDragDropSession
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Getting the drag session

- [localDragSession](uidropsession/localdragsession.md): The drag session that corresponds to this drop session, for in-app drag activities.

### Loading objects

- [loadObjects(ofClass:completion:)](uidropsession/loadobjects%28ofclass_completion_%29.md): Creates and loads a new instance of the specified class for each drag item in the session.

### Showing a progress indicator

- [progressIndicatorStyle](uidropsession/progressindicatorstyle.md): The drop-progress indicator style associated with the drop session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](../foundation/progressreporting.md)
- [UIDragDropSession](uidragdropsession.md)

## See Also

### Drop destinations

- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.

# UIDropSession (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface for querying a drop session about its state and associated drag items.

## Declaration

```objectivec
@protocol UIDropSession <UIDragDropSession, NSProgressReporting>
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

## Topics

### Getting the drag session

- [localDragSession](uidropsession/localdragsession.md): The drag session that corresponds to this drop session, for in-app drag activities.

### Loading objects

- [loadObjectsOfClass:completion:](uidropsession/loadobjects%28ofclass_completion_%29.md): Creates and loads a new instance of the specified class for each drag item in the session.

### Showing a progress indicator

- [progressIndicatorStyle](uidropsession/progressindicatorstyle.md): The drop-progress indicator style associated with the drop session.

## Relationships

### Inherits From

- [NSProgressReporting](../foundation/progressreporting.md)
- [UIDragDropSession](uidragdropsession.md)

## See Also

### Drop destinations

- [UIDropProposal](uidropproposal.md): A configuration for the behavior of a drop interaction, required if a view accepts drop activities.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.
