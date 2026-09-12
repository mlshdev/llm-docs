> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/surroundingseffect](https://developer.apple.com/documentation/swiftui/surroundingseffect)

# SurroundingsEffect

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

Effects that the system can apply to passthrough video.

## Declaration

```swift
struct SurroundingsEffect
```

<a id="overview"></a>

## Overview

Use one of these values with the [preferredSurroundingsEffect(\_:)](view/preferredsurroundingseffect%28__%29.md) view modifier to indicate what effect to apply to passthrough video when the modified view is displayed.

## Topics

### Getting the effect

- [systemDark](surroundingseffect/systemdark.md): Deprecated. An effect that dims passthrough video.

### Type Properties

- [dark](surroundingseffect/dark.md): An effect that dims passthrough video.
- [semiDark](surroundingseffect/semidark.md): An effect that dims passthrough video less than [dark](surroundingseffect/dark.md).
- [ultraDark](surroundingseffect/ultradark.md): An effect that dims passthrough video more than [dark](surroundingseffect/dark.md)

### Type Methods

- [colorMultiply(\_:)](surroundingseffect/colormultiply%28__%29.md): An effect that applies a custom tint to the passthrough video by multiplying the passthrough with a [Color](color.md).
- [dim(intensity:)](surroundingseffect/dim%28intensity_%29.md): An effect that dims the passthrough video a custom amount.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Configuring passthrough

- [preferredSurroundingsEffect(\_:)](view/preferredsurroundingseffect%28__%29.md): Applies an effect to passthrough video.
- [breakthroughEffect(\_:)](view/breakthrougheffect%28__%29.md): Ensures that the view is always visible to the user, even when other content is occluding it, like 3D models.
- [BreakthroughEffect](breakthrougheffect.md)
