> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/immersionstyle(selection:in:)](https://developer.apple.com/documentation/swiftui/scene/immersionstyle(selection:in:))

# immersionStyle(selection:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Sets the style for an immersive space.

## Declaration

```swift
nonisolated func immersionStyle(selection: Binding<any ImmersionStyle>, in styles: any ImmersionStyle...) -> some Scene

```

## Parameters

- `selection`: A [Binding](../binding.md) to the style that the space uses. You can change this value to change the scene’s style even after you present the immersive space. Even though you provide a binding, the value changes only if you change it.
- `styles`: The list of styles that the `selection` input can have. Include any styles that you plan to use during the lifetime of the scene.

<a id="return-value"></a>

## Return Value

A scene that uses one of the specified `styles`.

<a id="discussion"></a>

## Discussion

Use this modifier to configure the appearance and behavior of an [ImmersiveSpace](../immersivespace.md). Specify a style that conforms to the [ImmersionStyle](../immersionstyle.md) protocol, like [mixed](../immersionstyle/mixed.md) or [full](../immersionstyle/full.md). For example, the following app defines a solar system scene that uses full immersion:

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

## See Also

### Creating an immersive space

- [ImmersiveSpace](../immersivespace.md): A scene that presents its content in an unbounded space.
- [ImmersiveSpaceContentBuilder](../immersivespacecontentbuilder.md): A result builder for composing a collection of immersive space elements.
- [ImmersionStyle](../immersionstyle.md): The styles that an immersive space can have.
- [immersiveSpaceDisplacement](../environmentvalues/immersivespacedisplacement.md): The displacement that the system applies to the immersive space when moving the space away from its default position, in meters.
- [ImmersiveEnvironmentBehavior](../immersiveenvironmentbehavior.md): The behavior of the system-provided immersive environments when a scene is opened by your app.
- [ProgressiveImmersionAspectRatio](../progressiveimmersionaspectratio.md)
