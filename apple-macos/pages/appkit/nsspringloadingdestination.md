> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination](https://developer.apple.com/documentation/appkit/nsspringloadingdestination)

# NSSpringLoadingDestination (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

## Declaration

```swift
protocol NSSpringLoadingDestination : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Spring-loading is the act of dragging an object onto a destination object and hovering or force-clicking to activate the destination object A view can be configured as a drag-and-drop destination, a spring-loading destination, or both. If a view implements both drag-and-drop and spring-loading, then it will receive messages for both operations.

Note that the view beneath the cursor during a drag receives priority. For example, if a parent view implements drag-and-drop and a subview implements spring-loading, then the parent view will not receive drag-and-drop messages while the cursor is over the subview.

## Topics

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged(\_:)](nsspringloadingdestination/springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered(\_:)](nsspringloadingdestination/springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated(\_:)](nsspringloadingdestination/springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited(\_:)](nsspringloadingdestination/springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded(\_:)](nsspringloadingdestination/draggingended%28__%29.md): Responds to the end of a drag operation.

### Constants

- [NSSpringLoadingOptions](nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drop Targets

- [NSDraggingDestination](nsdraggingdestination.md): A set of methods that the destination object (or recipient) of a dragged image must implement.
- [NSDraggingInfo](nsdragginginfo.md): A set of methods that supply information about a dragging session.

# NSSpringLoadingDestination (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

## Declaration

```objectivec
@protocol NSSpringLoadingDestination <NSObject>
```

<a id="overview"></a>

## Overview

Spring-loading is the act of dragging an object onto a destination object and hovering or force-clicking to activate the destination object A view can be configured as a drag-and-drop destination, a spring-loading destination, or both. If a view implements both drag-and-drop and spring-loading, then it will receive messages for both operations.

Note that the view beneath the cursor during a drag receives priority. For example, if a parent view implements drag-and-drop and a subview implements spring-loading, then the parent view will not receive drag-and-drop messages while the cursor is over the subview.

## Topics

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged:](nsspringloadingdestination/springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered:](nsspringloadingdestination/springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated:](nsspringloadingdestination/springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited:](nsspringloadingdestination/springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded:](nsspringloadingdestination/draggingended%28__%29.md): Responds to the end of a drag operation.

### Constants

- [NSSpringLoadingOptions](nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Drop Targets

- [NSDraggingDestination](nsdraggingdestination.md): A set of methods that the destination object (or recipient) of a dragged image must implement.
- [NSDraggingInfo](nsdragginginfo.md): A set of methods that supply information about a dragging session.
