> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/progressiveimmersionaspectratio

# ProgressiveImmersionAspectRatio

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 26.0+

The shape of the portal that a progressive immersion style opens.

## Declaration

```swift
struct ProgressiveImmersionAspectRatio
```

<a id="overview"></a>

## Overview

A progressive immersive space replaces passthrough inside a portal that people resize with the Digital Crown. Pass a value of this type to [progressive(aspectRatio:)](immersionstyle/progressive%28aspectratio_%29.md) to ask for a wide or a tall portal, which lets the shape suit the content you show:

```swift
@main
struct MatchApp: App {
    @State private var style: any ImmersionStyle =
        .progressive(aspectRatio: .landscape)

    var body: some Scene {
        ImmersiveSpace {
            MatchView()
        }
        .immersionStyle(selection: $style, in: style)
    }
}
```

The system chooses a shape for you when you pass [automatic](progressiveimmersionaspectratio/automatic.md).

## Topics

### Type Properties

- [automatic](progressiveimmersionaspectratio/automatic.md): The system will choose a default portal aspect ratio.
- [landscape](progressiveimmersionaspectratio/landscape.md): The portal will be wide.
- [portrait](progressiveimmersionaspectratio/portrait.md): The portal will be tall.

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
- [ImmersiveEnvironmentBehavior](immersiveenvironmentbehavior.md): The behavior of the system-provided immersive environments when a scene is opened by your app.
