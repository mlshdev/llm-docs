> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragginginfo/springloadinghighlight](https://developer.apple.com/documentation/appkit/nsdragginginfo/springloadinghighlight)

# springLoadingHighlight (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A highlighting style for your app’s user interface to display during a spring-loading operation.

## Declaration

```swift
@MainActor var springLoadingHighlight: NSSpringLoadingHighlight { get }
```

<a id="Discussion"></a>

## Discussion

During a spring-loaded operation, a destination may initiate animated highlighting to visually cue the user that spring-loading has been engaged or disengaged.

This property contains a highlight style of class [NSSpringLoadingHighlight](../nsspringloadinghighlight.md)—no highlight, standard highlight, or emphasized highlight. Use this value to update your destination’s user interface accordingly to reflect the appropriate highlight style.

> **Important**

>  Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated(\_:draggingInfo:)](../nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## See Also

### Related Documentation

- [springLoadingHighlightChanged(\_:)](../nsspringloadingdestination/springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [NSSpringLoadingHighlight](../nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSSpringLoadingDestination](../nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

### Implementing spring-loading support

- [resetSpringLoading()](resetspringloading%28%29.md): Resets a spring-loading operation to its initial state.

# springLoadingHighlight (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A highlighting style for your app’s user interface to display during a spring-loading operation.

## Declaration

```objectivec
@property (readonly) NSSpringLoadingHighlight springLoadingHighlight;
```

<a id="Discussion"></a>

## Discussion

During a spring-loaded operation, a destination may initiate animated highlighting to visually cue the user that spring-loading has been engaged or disengaged.

This property contains a highlight style of class [NSSpringLoadingHighlight](../nsspringloadinghighlight.md)—no highlight, standard highlight, or emphasized highlight. Use this value to update your destination’s user interface accordingly to reflect the appropriate highlight style.

> **Important**

>  Do not use highlighting as a means to determine whether spring-loading has actually been activated or deactivated. The [springLoadingActivated:draggingInfo:](../nsspringloadingdestination/springloadingactivated%28__dragginginfo_%29.md) method alerts your app when spring-loading activation occurs.

## See Also

### Related Documentation

- [springLoadingHighlightChanged:](../nsspringloadingdestination/springloadinghighlightchanged%28__%29.md): Updates the destination’s user interface to display a new highlighting style during a spring-loading operation.
- [NSSpringLoadingHighlight](../nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSSpringLoadingDestination](../nsspringloadingdestination.md): A set of methods that the destination object (or recipient) of a dragged object can implement to support spring-loading.

### Implementing spring-loading support

- [resetSpringLoading](resetspringloading%28%29.md): Resets a spring-loading operation to its initial state.
