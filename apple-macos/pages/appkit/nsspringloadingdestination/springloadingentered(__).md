> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/springloadingentered(_:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/springloadingentered(_:))

# springLoadingEntered(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.

## Declaration

```swift
@MainActor optional func springLoadingEntered(_ draggingInfo: any NSDraggingInfo) -> NSSpringLoadingOptions
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="return-value"></a>

## Return Value

A value of type `NSSpringLoadingOptions` to enable or disable spring-loading. Returning a value of `NSSpringLoadingEnabled` enables typical spring-loading behavior that is appropriate in most cases.

<a id="Discussion"></a>

## Discussion

This method is called when a drag enters the bounds of the spring-loading destination. It returns a value of type `NSSpringLoadingOptions` to enable or disable spring-loading for the destination.

This method provides an opportunity to perform work in preparation for spring-loading becoming engaged.

Note that you *must* implement either this method or [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md) to enable spring-loading.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged(\_:)](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingUpdated(\_:)](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited(\_:)](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded(\_:)](draggingended%28__%29.md): Responds to the end of a drag operation.

# springLoadingEntered: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.

## Declaration

```objectivec
- (NSSpringLoadingOptions) springLoadingEntered:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="return-value"></a>

## Return Value

A value of type `NSSpringLoadingOptions` to enable or disable spring-loading. Returning a value of `NSSpringLoadingEnabled` enables typical spring-loading behavior that is appropriate in most cases.

<a id="Discussion"></a>

## Discussion

This method is called when a drag enters the bounds of the spring-loading destination. It returns a value of type `NSSpringLoadingOptions` to enable or disable spring-loading for the destination.

This method provides an opportunity to perform work in preparation for spring-loading becoming engaged.

Note that you *must* implement either this method or [springLoadingUpdated:](springloadingupdated%28__%29.md) to enable spring-loading.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged:](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingUpdated:](springloadingupdated%28__%29.md): Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.
- [springLoadingExited:](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded:](draggingended%28__%29.md): Responds to the end of a drag operation.
