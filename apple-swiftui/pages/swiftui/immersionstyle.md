> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionstyle](https://developer.apple.com/documentation/swiftui/immersionstyle)

# ImmersionStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

The styles that an immersive space can have.

## Declaration

```swift
protocol ImmersionStyle
```

<a id="overview"></a>

## Overview

Configure the appearance and behavior of an [ImmersiveSpace](immersivespace.md) by adding the [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md) scene modifier to the space and specifying a style that conforms to this protocol, like [mixed](immersionstyle/mixed.md) or [full](immersionstyle/full.md). For example, the following app defines a solar system scene that uses full immersion:

```swift
@main
struct SolarSystemApp: App {
    @State private var style: ImmersionStyle = .full

    var body: some Scene {
        ImmersiveSpace {
            SolarSystem()
        }
        .immersionStyle(selection: $style, in: .full)
    }
}
```

## Topics

### Getting built-in styles

- [automatic](immersionstyle/automatic.md): Conforms when `Self` is `AutomaticImmersionStyle`. The default immersion style.
- [full](immersionstyle/full.md): Conforms when `Self` is `FullImmersionStyle`. An immersion style that displays unbounded content that completely replaces passthrough video.
- [mixed](immersionstyle/mixed.md): Conforms when `Self` is `MixedImmersionStyle`. An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
- [progressive](immersionstyle/progressive.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.

### Supporting types

- [AutomaticImmersionStyle](automaticimmersionstyle.md): The default style of immersive spaces.
- [FullImmersionStyle](fullimmersionstyle.md): An immersion style that displays unbounded content that completely replaces passthrough video.
- [MixedImmersionStyle](mixedimmersionstyle.md): An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
- [ProgressiveImmersionStyle](progressiveimmersionstyle.md): An immersion style that displays unbounded content that partially replaces passthrough video.

### Type Methods

- [progressive(\_:initialAmount:)](immersionstyle/progressive%28__initialamount_%29.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.
- [progressive(\_:initialAmount:aspectRatio:)](immersionstyle/progressive%28__initialamount_aspectratio_%29.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.
- [progressive(aspectRatio:)](immersionstyle/progressive%28aspectratio_%29.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.

## Relationships

### Conforming Types

- [AutomaticImmersionStyle](automaticimmersionstyle.md)
- [FullImmersionStyle](fullimmersionstyle.md)
- [MixedImmersionStyle](mixedimmersionstyle.md)
- [ProgressiveImmersionStyle](progressiveimmersionstyle.md)

## See Also

### Creating an immersive space

- [ImmersiveSpace](immersivespace.md): A scene that presents its content in an unbounded space.
- [ImmersiveSpaceContentBuilder](immersivespacecontentbuilder.md): A result builder for composing a collection of immersive space elements.
- [immersionStyle(selection:in:)](scene/immersionstyle%28selection_in_%29.md): Sets the style for an immersive space.
- [immersiveSpaceDisplacement](environmentvalues/immersivespacedisplacement.md): The displacement that the system applies to the immersive space when moving the space away from its default position, in meters.
- [ImmersiveEnvironmentBehavior](immersiveenvironmentbehavior.md): The behavior of the system-provided immersive environments when a scene is opened by your app.
- [ProgressiveImmersionAspectRatio](progressiveimmersionaspectratio.md)
