> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetconfiguration/widgettexture(_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/widgettexture(_:))

# widgetTexture(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Specifies the widget texture for this widget.

## Declaration

```swift
@MainActor @preconcurrency func widgetTexture(_ material: WidgetTexture) -> some WidgetConfiguration

```

<a id="return-value"></a>

## Return Value

A widget configuration using the specified widget texture.

<a id="discussion"></a>

## Discussion

Widgets in visionOS use a have a material treatment applied. By default, all widgets use the `glass` widget texture. Use this modifier to explicitly set the widget texture for a widget.

The following displays a widget whose texture is paper:

```swift
AppIntentConfiguration(
    kind: kind, intent: LatestPostConfiguration.self, provider: Provider()
) { entry in
    LatestPostsView(entry: entry)
}
.widgetTexture(.paper)
```
