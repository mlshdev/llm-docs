> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationtransition](https://developer.apple.com/documentation/swiftui/navigationtransition)

# NavigationTransition

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that defines the transition to use when navigating to a view.

## Declaration

```swift
protocol NavigationTransition
```

## Topics

### Getting built-in transitions

- [automatic](navigationtransition/automatic.md): Conforms when `Self` is `AutomaticNavigationTransition`. A style that automatically chooses the appropriate presentation transition for the current context.
- [AutomaticNavigationTransition](automaticnavigationtransition.md): A style that automatically chooses the appropriate presentation transition for the current context.
- [crossFade](navigationtransition/crossfade.md): Conforms when `Self` is `CrossFadeNavigationTransition`. A navigation transition that cross-fades between the appearing view and the disappearing view.
- [CrossFadeNavigationTransition](crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
- [zoom(sourceID:in:)](navigationtransition/zoom%28sourceid_in_%29.md): Conforms when `Self` is `ZoomNavigationTransition`. A navigation transition that zooms the appearing view from a given source view.
- [ZoomNavigationTransition](zoomnavigationtransition.md): A navigation transition that zooms the appearing view from a given source view.

## Relationships

### Conforming Types

- [AnyNavigationTransition](anynavigationtransition.md)
- [AutomaticNavigationTransition](automaticnavigationtransition.md)
- [CrossFadeNavigationTransition](crossfadenavigationtransition.md)
- [ZoomNavigationTransition](zoomnavigationtransition.md)

## See Also

### Defining navigation transitions

- [navigationTransition(\_:)](view/navigationtransition%28__%29.md): Sets the navigation transition style for this view.
- [AnyNavigationTransition](anynavigationtransition.md): A type-erasing navigation transition that allows for providing any navigation transition value dynamically.
- [CrossFadeNavigationTransition](crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
