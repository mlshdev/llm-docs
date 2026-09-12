> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scenepadding](https://developer.apple.com/documentation/swiftui/scenepadding)

# ScenePadding

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The padding used to space a view from its containing scene.

## Declaration

```swift
struct ScenePadding
```

<a id="overview"></a>

## Overview

Add scene padding to a view using the [scenePadding(\_:edges:)](view/scenepadding%28__edges_%29.md) modifier.

## Topics

### Getting padding values

- [minimum](scenepadding/minimum.md): The minimum scene padding value.
- [navigationBar](scenepadding/navigationbar.md): The navigation bar content scene padding.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding padding around a view

- [padding(\_:)](view/padding%28__%29.md): Adds a different padding amount to each edge of this view.
- [padding(\_:\_:)](view/padding%28____%29.md): Adds an equal padding amount to specific edges of this view.
- [padding3D(\_:)](view/padding3d%28__%29.md): Pads this view using the edge insets you specify.
- [padding3D(\_:\_:)](view/padding3d%28____%29.md): Pads this view using the edge insets you specify.
- [scenePadding(\_:)](view/scenepadding%28__%29.md): Adds padding to the specified edges of this view using an amount that’s appropriate for the current scene.
- [scenePadding(\_:edges:)](view/scenepadding%28__edges_%29.md): Adds a specified kind of padding to the specified edges of this view using an amount that’s appropriate for the current scene.
