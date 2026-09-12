> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/springloadinghighlightchanged(_:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/springloadinghighlightchanged(_:))

# springLoadingHighlightChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.

## Declaration

```swift
@MainActor func springLoadingHighlightChanged(_ draggingInfo: any NSDraggingInfo)
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including a highlighting style to apply.

<a id="Discussion"></a>

## Discussion

During a spring-loaded operation, a destination may initiate animated highlighting to visually cue the user that spring-loading has been engaged or disengaged. This method is called as different stages of this animation are reached, providing an opportunity to change the highlighting style. Check the `springLoadingHighlight` property of the `draggingInfo` object to determine the style of highlighting to apply. Then, update the destination’s user interface accordingly.

> **Important**

>  Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## See Also

### Related Documentation

- [NSDragOperation](../nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingEntered(\_:)](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited(\_:)](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded(\_:)](draggingended%28__%29.md): Responds to the end of a drag operation.

# springLoadingHighlightChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.

## Declaration

```objectivec
- (void) springLoadingHighlightChanged:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including a highlighting style to apply.

<a id="Discussion"></a>

## Discussion

During a spring-loaded operation, a destination may initiate animated highlighting to visually cue the user that spring-loading has been engaged or disengaged. This method is called as different stages of this animation are reached, providing an opportunity to change the highlighting style. Check the `springLoadingHighlight` property of the `draggingInfo` object to determine the style of highlighting to apply. Then, update the destination’s user interface accordingly.

> **Important**

>  Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## See Also

### Related Documentation

- [NSDragOperation](../nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingEntered:](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated:](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited:](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded:](draggingended%28__%29.md): Responds to the end of a drag operation.
