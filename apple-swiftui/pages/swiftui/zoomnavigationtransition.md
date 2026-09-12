> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/zoomnavigationtransition](https://developer.apple.com/documentation/swiftui/zoomnavigationtransition)

# ZoomNavigationTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A navigation transition that zooms the appearing view from a given source view.

## Declaration

```swift
struct ZoomNavigationTransition
```

<a id="overview"></a>

## Overview

Indicate the source view using the [matchedTransitionSource(id:in:)](view/matchedtransitionsource%28id_in_%29.md) modifier.

> **Note**

> The zoom transition is not supported in tvOS. Navigation uses [automatic](navigationtransition/automatic.md) instead.

## Relationships

### Conforms To

- [NavigationTransition](navigationtransition.md)

## See Also

### Getting built-in transitions

- [automatic](navigationtransition/automatic.md): Conforms when `Self` is `AutomaticNavigationTransition`. A style that automatically chooses the appropriate presentation transition for the current context.
- [AutomaticNavigationTransition](automaticnavigationtransition.md): A style that automatically chooses the appropriate presentation transition for the current context.
- [crossFade](navigationtransition/crossfade.md): Conforms when `Self` is `CrossFadeNavigationTransition`. A navigation transition that cross-fades between the appearing view and the disappearing view.
- [CrossFadeNavigationTransition](crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
- [zoom(sourceID:in:)](navigationtransition/zoom%28sourceid_in_%29.md): Conforms when `Self` is `ZoomNavigationTransition`. A navigation transition that zooms the appearing view from a given source view.
