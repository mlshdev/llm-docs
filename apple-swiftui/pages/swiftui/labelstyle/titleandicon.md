> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labelstyle/titleandicon](https://developer.apple.com/documentation/swiftui/labelstyle/titleandicon)

# titleAndIcon

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A label style that shows both the title and icon of the label using a system-standard layout.

## Declaration

```swift
@export(implementation) nonisolated static var titleAndIcon: TitleAndIconLabelStyle { get }
```

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](../populating-swiftui-menus-with-adaptive-controls.md)

<a id="discussion"></a>

## Discussion

In most cases, labels show both their title and icon by default. However, some containers might apply a different default label style to their content, such as only showing icons within toolbars on macOS and iOS. To opt in to showing both the title and the icon, you can apply the title and icon label style:

```swift
Label("Lightning", systemImage: "bolt.fill")
    .labelStyle(.titleAndIcon)
```

To apply the title and icon style to a group of labels, apply the style to the view hierarchy that contains the labels:

```swift
VStack {
    Label("Rain", systemImage: "cloud.rain")
    Label("Snow", systemImage: "snow")
    Label("Sun", systemImage: "sun.max")
}
.labelStyle(.titleAndIcon)
```

The relative layout of the title and icon is dependent on the context it is displayed in. In most cases, however, the label is arranged horizontally with the icon leading.

## See Also

### Getting built-in label styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultLabelStyle`. A label style that resolves its appearance automatically based on the current context.
- [iconOnly](icononly.md): Conforms when `Self` is `IconOnlyLabelStyle`. A label style that only displays the icon of the label.
- [titleOnly](titleonly.md): Conforms when `Self` is `TitleOnlyLabelStyle`. A label style that only displays the title of the label.
