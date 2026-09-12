> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropproposal](https://developer.apple.com/documentation/uikit/uidropproposal)

# UIDropProposal (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration for the behavior of a drop interaction, required if a view accepts drop activities.

## Declaration

```swift
@MainActor class UIDropProposal
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

<a id="overview"></a>

## Overview

If a view’s drop interaction delegate accepts dropped drag items, it must return a drop proposal in its implementation of the [dropInteraction(\_:sessionDidUpdate:)](uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md) method.

## Topics

### Initializing a drop proposal

- [init(operation:)](uidropproposal/init%28operation_%29.md): Initializes a new drop proposal with a drop operation type.
- [operation](uidropproposal/operation.md): The drop operation that the drop interaction proposes to perform.

### Configuring a drop proposal

- [isPrecise](uidropproposal/isprecise.md): A Boolean value that proposes that the drop interaction define the drop location precisely, such as at a specific point within existing text.
- [prefersFullSizePreview](uidropproposal/prefersfullsizepreview.md): A Boolean value that indicates that the drag item preview should be shown at its full, original size.

### Initializers

- [init(dropOperation:)](uidropproposal/init%28dropoperation_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewDropProposal](uicollectionviewdropproposal.md)
- [UITableViewDropProposal](uitableviewdropproposal.md)
- [UITextDropProposal](uitextdropproposal.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.

# UIDropProposal (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A configuration for the behavior of a drop interaction, required if a view accepts drop activities.

## Declaration

```objectivec
@interface UIDropProposal : NSObject
```

## Mentioned In

- [Making a view into a drop destination](making-a-view-into-a-drop-destination.md)

<a id="overview"></a>

## Overview

If a view’s drop interaction delegate accepts dropped drag items, it must return a drop proposal in its implementation of the [dropInteraction:sessionDidUpdate:](uidropinteractiondelegate/dropinteraction%28__sessiondidupdate_%29.md) method.

## Topics

### Initializing a drop proposal

- [initWithDropOperation:](uidropproposal/init%28operation_%29.md): Initializes a new drop proposal with a drop operation type.
- [operation](uidropproposal/operation.md): The drop operation that the drop interaction proposes to perform.

### Configuring a drop proposal

- [precise](uidropproposal/isprecise.md): A Boolean value that proposes that the drop interaction define the drop location precisely, such as at a specific point within existing text.
- [prefersFullSizePreview](uidropproposal/prefersfullsizepreview.md): A Boolean value that indicates that the drag item preview should be shown at its full, original size.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICollectionViewDropProposal](uicollectionviewdropproposal.md)
- [UITableViewDropProposal](uitableviewdropproposal.md)
- [UITextDropProposal](uitextdropproposal.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Drop destinations

- [UIDropSession](uidropsession.md): The interface for querying a drop session about its state and associated drag items.
- [UIDropOperation](uidropoperation.md): Operation types that determine how a drag and drop activity resolves when the user drops a drag item.
- [UIDropSessionProgressIndicatorStyle](uidropsessionprogressindicatorstyle.md): The drop-progress indicator styles for the drop session, used while data is moving from the source to the destination.
