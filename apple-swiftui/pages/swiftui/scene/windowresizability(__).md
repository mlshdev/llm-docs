> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowresizability(_:)](https://developer.apple.com/documentation/swiftui/scene/windowresizability(_:))

# windowResizability(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

Sets the kind of resizability to use for a window.

## Declaration

```swift
nonisolated func windowResizability(_ resizability: WindowResizability) -> some Scene

```

## Parameters

- `resizability`: The resizability to use for windows created by this scene.

<a id="return-value"></a>

## Return Value

A scene that uses the specified resizability strategy.

<a id="discussion"></a>

## Discussion

Use this scene modifier to apply a value of type [WindowResizability](../windowresizability.md) to a [Scene](../scene.md) that you define in your [App](../app.md) declaration. The value that you specify indicates the strategy the system uses to place minimum and maximum size restrictions on windows that it creates from that scene.

For example, you can create a window group that people can resize to between 100 and 400 points in both dimensions by applying both a frame with those constraints to the scene’s content, and the [contentSize](../windowresizability/contentsize.md) resizability to the scene:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(
                    minWidth: 100, maxWidth: 400,
                    minHeight: 100, maxHeight: 400)
        }
        .windowResizability(.contentSize)
    }
}
```

The default value for all scenes if you don’t apply the modifier is [automatic](../windowresizability/automatic.md). With that strategy, [Settings](../settings.md) windows use the [contentSize](../windowresizability/contentsize.md) strategy, while all others use [contentMinSize](../windowresizability/contentminsize.md).

## See Also

### Sizing a window

- [Positioning and sizing windows](https://developer.apple.com/documentation/visionos/positioning-and-sizing-windows): Influence the initial geometry of windows that your app presents.
- [defaultSize(\_:)](defaultsize%28__%29.md): Sets a default size for a window.
- [defaultSize(width:height:)](defaultsize%28width_height_%29.md): Sets a default width and height for a window.
- [defaultSize(width:height:depth:)](defaultsize%28width_height_depth_%29.md): Sets a default size for a volumetric window.
- [defaultSize(\_:in:)](defaultsize%28__in_%29.md): Sets a default size for a volumetric window.
- [defaultSize(width:height:depth:in:)](defaultsize%28width_height_depth_in_%29.md): Sets a default size for a volumetric window.
- [WindowResizability](../windowresizability.md): The resizability of a window.
- [windowIdealSize(\_:)](windowidealsize%28__%29.md): Specifies how windows derived form this scene should determine their size when zooming.
- [WindowIdealSize](../windowidealsize.md): A type which defines the size a window should use when zooming.
