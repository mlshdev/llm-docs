> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/springloadingexited(_:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/springloadingexited(_:))

# springLoadingExited(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds when a drag exits the bounds of the spring-loading destination.

## Declaration

```swift
@MainActor optional func springLoadingExited(_ draggingInfo: any NSDraggingInfo)
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

This method is called when a drag exits the bounds of a spring-loaded destination.

This is a good place to clean up any initialization work that may have been performed during [springLoadingEntered(\_:)](springloadingentered%28__%29.md).

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged(\_:)](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered(\_:)](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [draggingEnded(\_:)](draggingended%28__%29.md): Responds to the end of a drag operation.

# springLoadingExited: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds when a drag exits the bounds of the spring-loading destination.

## Declaration

```objectivec
- (void) springLoadingExited:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

This method is called when a drag exits the bounds of a spring-loaded destination.

This is a good place to clean up any initialization work that may have been performed during [springLoadingEntered:](springloadingentered%28__%29.md).

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged:](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered:](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated:](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [draggingEnded:](draggingended%28__%29.md): Responds to the end of a drag operation.
