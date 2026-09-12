> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/widgetaccentedrenderingmode(_:)](https://developer.apple.com/documentation/swiftui/image/widgetaccentedrenderingmode(_:))

# widgetAccentedRenderingMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Specifies the how to render an `Image` when using the `WidgetKit/WidgetRenderingMode/accented` mode.

## Declaration

```swift
func widgetAccentedRenderingMode(_ renderingMode: WidgetAccentedRenderingMode?) -> some View

```

## Parameters

- `renderingMode`: A constant describing how the `Image` should be rendered.

<a id="discussion"></a>

## Discussion

```swift
var body: some View {
    VStack {
        Image("cat_full")
            .resizable()
            .widgetAccentedRenderingMode(.fullColor)
    }
}
```

> **Important**

> If the `Image` is a subview for a group that has `widgetAccentable(true)` applied, this modifier may conflict.
