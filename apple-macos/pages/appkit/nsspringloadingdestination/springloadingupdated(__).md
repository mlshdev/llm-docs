> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspringloadingdestination/springloadingupdated(_:)](https://developer.apple.com/documentation/appkit/nsspringloadingdestination/springloadingupdated(_:))

# springLoadingUpdated(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.

## Declaration

```swift
@MainActor optional func springLoadingUpdated(_ draggingInfo: any NSDraggingInfo) -> NSSpringLoadingOptions
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="return-value"></a>

## Return Value

A value of type `NSSpringLoadingOptions` to enable or disable spring-loading. A value of `NSSpringLoadingEnabled` enables typical spring-loading behavior.

<a id="Discussion"></a>

## Discussion

This method is called periodically as a drag changes position within the bounds of a spring-loaded destination or the `draggingInfo` changes during the drag. It returns a value of type `NSSpringLoadingOptions` to enable or disable spring-loading for the destination. If this method is not implemented, then spring-loading is enabled or disabled for the destination based on the return value of the `springLoadingEntered:` method.

Note that you *must* implement either this method or [springLoadingEntered(\_:)](springloadingentered%28__%29.md) to enable spring-loading.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated(\_:draggingInfo:)](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged(\_:)](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered(\_:)](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingExited(\_:)](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded(\_:)](draggingended%28__%29.md): Responds to the end of a drag operation.

# springLoadingUpdated: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns whether to enable or disable spring-loading as a drag moves within the bounds of the spring-loading destination or `draggingInfo` changes during the drag.

## Declaration

```objectivec
- (NSSpringLoadingOptions) springLoadingUpdated:(id<NSDraggingInfo>) draggingInfo;
```

## Parameters

- `draggingInfo`: An object of type `NSDraggingInfo`, which provides information about the drag event, including the dragged data.

<a id="return-value"></a>

## Return Value

A value of type `NSSpringLoadingOptions` to enable or disable spring-loading. A value of `NSSpringLoadingEnabled` enables typical spring-loading behavior.

<a id="Discussion"></a>

## Discussion

This method is called periodically as a drag changes position within the bounds of a spring-loaded destination or the `draggingInfo` changes during the drag. It returns a value of type `NSSpringLoadingOptions` to enable or disable spring-loading for the destination. If this method is not implemented, then spring-loading is enabled or disabled for the destination based on the return value of the `springLoadingEntered:` method.

Note that you *must* implement either this method or [springLoadingEntered:](springloadingentered%28__%29.md) to enable spring-loading.

## See Also

### Related Documentation

- [NSSpringLoadingOptions](../nsspringloadingoptions.md): These constants denote the type of spring-loading behavior configured for the destination object.
- [NSDraggingInfo](../nsdragginginfo.md): A set of methods that supply information about a dragging session.

### Respond to Spring-loading Events

- [springLoadingActivated:draggingInfo:](springloadingactivated%28__dragginginfo_%29.md): Responds to the activation or deactivation of spring-loading on a destination.
- [springLoadingHighlightChanged:](springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [springLoadingEntered:](springloadingentered%28__%29.md): Returns whether to enable or disable spring-loading when a drag enters the bounds of the spring-loading destination.
- [springLoadingExited:](springloadingexited%28__%29.md): Responds when a drag exits the bounds of the spring-loading destination.
- [draggingEnded:](draggingended%28__%29.md): Responds to the end of a drag operation.
