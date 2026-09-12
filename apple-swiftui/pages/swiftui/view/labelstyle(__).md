> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/labelstyle(_:)](https://developer.apple.com/documentation/swiftui/view/labelstyle(_:))

# labelStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the style for labels within this view.

## Declaration

```swift
nonisolated func labelStyle<S>(_ style: S) -> some View where S : LabelStyle

```

<a id="discussion"></a>

## Discussion

Use this modifier to set a specific style for all labels within a view:

```swift
VStack {
    Label("Fire", systemImage: "flame.fill")
    Label("Lightning", systemImage: "bolt.fill")
}
.labelStyle(MyCustomLabelStyle())
```

## See Also

### Displaying text

- [Text](../text.md): A view that displays one or more lines of read-only text.
- [Label](../label.md): A standard label for user interface items, consisting of an icon with a title.
