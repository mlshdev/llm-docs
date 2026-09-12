> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersiveenvironmentbehavior](https://developer.apple.com/documentation/swiftui/immersiveenvironmentbehavior)

# ImmersiveEnvironmentBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The behavior of the system-provided immersive environments when a scene is opened by your app.

## Declaration

```swift
struct ImmersiveEnvironmentBehavior
```

<a id="overview"></a>

## Overview

Use one of these values with the [immersiveEnvironmentBehavior(\_:)](scene/immersiveenvironmentbehavior%28__%29.md) scene modifier to indicate how the immersive environment should behave when your app opens a scene.

## Topics

### Type Properties

- [automatic](immersiveenvironmentbehavior/automatic.md): A behavior that matches the system default behavior.
- [coexist](immersiveenvironmentbehavior/coexist.md): A behavior that keeps the system’s immersive environment as is when opening a scene.
- [replace](immersiveenvironmentbehavior/replace.md): A behavior that replaces any currently opened immersive environment with the new scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an immersive space

- [ImmersiveSpace](immersivespace.md): A scene that presents its content in an unbounded space.
- [ImmersiveSpaceContentBuilder](immersivespacecontentbuilder.md): A result builder for composing a collection of immersive space elements.
- [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md): Sets the style for an immersive space.
- [ImmersionStyle](immersionstyle.md): The styles that an immersive space can have.
- [immersiveSpaceDisplacement](environmentvalues/immersivespacedisplacement.md): The displacement that the system applies to the immersive space when moving the space away from its default position, in meters.
- [ProgressiveImmersionAspectRatio](progressiveimmersionaspectratio.md)
