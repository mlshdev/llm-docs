> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/draggingended(_:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/draggingended(_:))

# draggingEnded(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds to the end of a drag operation.

## Declaration

```swift
@MainActor optional func draggingEnded(_ draggingInfo: any NSDraggingInfo)
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

This method is called when a drag operation has ended. If the destination object is both a dragging destination (class `NSDraggingDestination`) and a spring-loading destination (class `NSSpringLoadingDestination`), note that this method is only called once.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged(\_:)](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered(\_:)](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited(\_:)](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.

# draggingEnded: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds to the end of a drag operation.

## Declaration

```objectivec
- (void) draggingEnded:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

This method is called when a drag operation has ended. If the destination object is both a dragging destination (class `NSDraggingDestination`) and a spring-loading destination (class `NSSpringLoadingDestination`), note that this method is only called once.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged:](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered:](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated:](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited:](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
