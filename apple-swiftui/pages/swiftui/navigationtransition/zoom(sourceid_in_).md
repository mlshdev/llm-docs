> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationtransition/zoom(sourceid:in:)](https://developer.apple.com/documentation/swiftui/navigationtransition/zoom(sourceid:in:))

# zoom(sourceID:in:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A navigation transition that zooms the appearing view from a given source view.

## Declaration

```swift
static func zoom(sourceID: some Hashable, in namespace: Namespace.ID) -> ZoomNavigationTransition
```

## Parameters

- `sourceID`: The identifier you provide to a corresponding `matchedTransitionSource` modifier.
- `namespace`: The namespace where you define the `id`. You can create new namespaces by adding the [Namespace](../namespace.md) attribute to a [View](../view.md) type, then reading its value in the view’s body method.

<a id="discussion"></a>

## Discussion

Indicate the source view using the [matchedTransitionSource(id:in:)](../view/matchedtransitionsource%28id_in_%29.md) modifier.

> **Note**

> The zoom transition is not supported in tvOS. Navigation uses [automatic](automatic.md) instead.

## See Also

### Getting built-in transitions

- [automatic](automatic.md): Conforms when `Self` is `AutomaticNavigationTransition`. A style that automatically chooses the appropriate presentation transition for the current context.
- [AutomaticNavigationTransition](../automaticnavigationtransition.md): A style that automatically chooses the appropriate presentation transition for the current context.
- [crossFade](crossfade.md): Conforms when `Self` is `CrossFadeNavigationTransition`. A navigation transition that cross-fades between the appearing view and the disappearing view.
- [CrossFadeNavigationTransition](../crossfadenavigationtransition.md): A navigation transition that cross-fades between the appearing view and the disappearing view.
- [ZoomNavigationTransition](../zoomnavigationtransition.md): A navigation transition that zooms the appearing view from a given source view.
