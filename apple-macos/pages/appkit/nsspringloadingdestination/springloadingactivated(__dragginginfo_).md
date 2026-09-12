> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/springloadingactivated(_:dragginginfo:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/springloadingactivated(_:dragginginfo:))

# springLoadingActivated(\_:draggingInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds to the activation or deactivation of spring-loading on a destination.

## Declaration

```swift
@MainActor func springLoadingActivated(_ activated: Bool, draggingInfo: any NSDraggingInfo)
```

## Parameters

- `activated`: A Boolean value indicating whether spring-loading has been activated on the destination. [true](https://developer.apple.com/documentation/swift/true) indicates that spring-loading has been activated. [false](https://developer.apple.com/documentation/swift/false) indicates that spring-loading has been deactivated.
- `draggingInfo`: An `NSDraggingInfo` object, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

Typically, spring-loading is fully activated when a hover timeout occurs or the user finishes force clicking on a destination object to initiate spring-loading. In these cases, the `springLoadingActivated:draggingInfo:` method is only called once with an `activated` parameter value of [true](https://developer.apple.com/documentation/swift/true).

However, if the destination is configured with continuous activation (`NSSpringLoadingOptions` was set to `NSSpringLoadingContinuousActivation`), then the `springLoadingActivated:draggingInfo:` method is called twice. First, it’s called with an `activated` parameter value of [true](https://developer.apple.com/documentation/swift/true) when a hover timeout occurs or the user begins force clicking on a destination object to initiate spring-loading. Then, it’s called again with an `activated` parameter value of [false](https://developer.apple.com/documentation/swift/false) when the hover exits the destination’s bounds or the user finishes force clicking on the destination object.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingHighlightChanged(\_:)](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered(\_:)](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited(\_:)](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded(\_:)](draggingended%28__%29.md): Responds to the end of a drag operation.

# springLoadingActivated:draggingInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Responds to the activation or deactivation of spring-loading on a destination.

## Declaration

```objectivec
- (void) springLoadingActivated:(BOOL) activated draggingInfo:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `activated`: A Boolean value indicating whether spring-loading has been activated on the destination. [true](https://developer.apple.com/documentation/swift/true) indicates that spring-loading has been activated. [false](https://developer.apple.com/documentation/swift/false) indicates that spring-loading has been deactivated.
- `draggingInfo`: An `NSDraggingInfo` object, which provides information about the drag event, including the dragged data.

<a id="Discussion"></a>

## Discussion

Typically, spring-loading is fully activated when a hover timeout occurs or the user finishes force clicking on a destination object to initiate spring-loading. In these cases, the `springLoadingActivated:draggingInfo:` method is only called once with an `activated` parameter value of [true](https://developer.apple.com/documentation/swift/true).

However, if the destination is configured with continuous activation (`NSSpringLoadingOptions` was set to `NSSpringLoadingContinuousActivation`), then the `springLoadingActivated:draggingInfo:` method is called twice. First, it’s called with an `activated` parameter value of [true](https://developer.apple.com/documentation/swift/true) when a hover timeout occurs or the user begins force clicking on a destination object to initiate spring-loading. Then, it’s called again with an `activated` parameter value of [false](https://developer.apple.com/documentation/swift/false) when the hover exits the destination’s bounds or the user finishes force clicking on the destination object.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingHighlightChanged:](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered:](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingUpdated:](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited:](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded:](draggingended%28__%29.md): Responds to the end of a drag operation.
