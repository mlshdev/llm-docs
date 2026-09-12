> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingconfiguration/background(_:)](https://developer.apple.com/documentation/swiftui/uihostingconfiguration/background(_:))

# background(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Sets the background contents for the hosting configuration’s enclosing cell.

## Declaration

```swift
func background<S>(_ style: S) -> UIHostingConfiguration<Content, _UIHostingConfigurationBackgroundView<S>> where S : ShapeStyle
```

## Parameters

- `style`: The shape style to be used as the background of the cell.

<a id="discussion"></a>

## Discussion

The following example sets a custom view to the background of the cell:

```swift
UIHostingConfiguration {
    Text("My Contents")
}
.background(Color.blue)
```

## See Also

### Setting the background

- [background(content:)](background%28content_%29.md): Sets the background contents for the hosting configuration’s enclosing cell.
