> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/materialactiveappearance](https://developer.apple.com/documentation/swiftui/materialactiveappearance)

# MaterialActiveAppearance

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The behavior for how materials appear active and inactive.

## Declaration

```swift
struct MaterialActiveAppearance
```

<a id="overview"></a>

## Overview

On macOS, materials have active and inactive appearances that can reinforce the active appearance of the window they are in:

- Materials used as a `window` container background and `bar` materials will appear inactive when their containing window is inactive.
- All other materials will always appear active by default.

An explicit active appearance can be set to override a material’s default behavior. For example, materials used as the `window` container background can be made to always appear active by setting the active appearance behavior to be always active:

```swift
Text("Hello, World!")
    .containerBackground(
        Material.regular.materialActiveAppearance(.active),
        for: .window)
```

## Topics

### Type Properties

- [active](materialactiveappearance/active.md): Materials will always appear active.
- [automatic](materialactiveappearance/automatic.md): Materials will automatically appear active or inactive based on context and platform convention.
- [inactive](materialactiveappearance/inactive.md): Materials will always appear inactive.
- [matchWindow](materialactiveappearance/matchwindow.md): Materials will have an active or inactive appearance based on the active appearance of their window.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transforming colors

- [brightness(\_:)](view/brightness%28__%29.md): Brightens this view by the specified amount.
- [contrast(\_:)](view/contrast%28__%29.md): Sets the contrast and separation between similar colors in this view.
- [colorInvert()](view/colorinvert%28%29.md): Inverts the colors in this view.
- [colorMultiply(\_:)](view/colormultiply%28__%29.md): Adds a color multiplication effect to this view.
- [saturation(\_:)](view/saturation%28__%29.md): Adjusts the color saturation of this view.
- [grayscale(\_:)](view/grayscale%28__%29.md): Adds a grayscale effect to this view.
- [hueRotation(\_:)](view/huerotation%28__%29.md): Applies a hue rotation effect to this view.
- [luminanceToAlpha()](view/luminancetoalpha%28%29.md): Adds a luminance to alpha effect to this view.
- [materialActiveAppearance(\_:)](view/materialactiveappearance%28__%29.md): Sets an explicit active appearance for materials in this view.
- [materialActiveAppearance](environmentvalues/materialactiveappearance.md): The behavior materials should use for their active state, defaulting to `automatic`.
