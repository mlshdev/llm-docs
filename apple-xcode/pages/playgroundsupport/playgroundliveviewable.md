> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/playgroundsupport/playgroundliveviewable](https://developer.apple.com/documentation/playgroundsupport/playgroundliveviewable)

# PlaygroundLiveViewable

**Framework:** Playground Support  
**Kind:** Protocol  
**Availability:** macOS 11.0+ · Xcode 10.2+ · Swift Playgrounds 2.0+

A protocol that displays an instance as a live view in a playground.

## Declaration

```swift
protocol PlaygroundLiveViewable
```

<a id="overview"></a>

## Overview

A playground that presents a simplified user interface programming environment, for example, can make its view-like type conform to [PlaygroundLiveViewable](playgroundliveviewable.md) and appear in the live view. By default, [UIView](https://developer.apple.com/documentation/uikit/uiview) and [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller) conform to this protocol in iOS and tvOS, and [NSView](https://developer.apple.com/documentation/appkit/nsview) and [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) conform to this protocol in macOS. You only need to implement this protocol for custom objects that don't already inherit from [UIView](https://developer.apple.com/documentation/uikit/uiview), [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller), [NSView](https://developer.apple.com/documentation/appkit/nsview), or [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller).

## Topics

### Displaying Types

- [playgroundLiveViewRepresentation](playgroundliveviewable/1978828-playgroundliveviewrepresentation.md): The view or view controller used to render and manage the live view.

## Relationships

### Conforming Types

- [PlaygroundRemoteLiveViewProxy](playgroundremoteliveviewproxy.md)

## See Also

### Live Views

- [PlaygroundLiveViewRepresentation](playgroundliveviewrepresentation.md): The supported types for displaying for live views in playgrounds.
- [PlaygroundLiveViewSafeAreaContainer](playgroundliveviewsafeareacontainer.md): A protocol that ensures that views fit without obstruction within the Swift Playgrounds user interface.
