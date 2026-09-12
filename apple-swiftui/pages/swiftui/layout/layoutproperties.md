> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layout/layoutproperties](https://developer.apple.com/documentation/swiftui/layout/layoutproperties)

# layoutProperties

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Properties of a layout container.

## Declaration

```swift
static var layoutProperties: LayoutProperties { get }
```

<a id="discussion"></a>

## Discussion

Implement this property in a type that conforms to the [Layout](../layout.md) protocol to characterize your custom layout container. For example, you can indicate that your layout has a vertical [stackOrientation](../layoutproperties/stackorientation.md):

```swift
extension BasicVStack {
    static var layoutProperties: LayoutProperties {
        var properties = LayoutProperties()
        properties.stackOrientation = .vertical
        return properties
    }
}
```

If you don’t implement this property in your custom layout, the protocol provides a default implementation, namely [layoutProperties](layoutproperties-6h7w0.md), that returns a [LayoutProperties](../layoutproperties.md) instance with default values.

## Default Implementations

### Layout Implementations

- [layoutProperties](layoutproperties-6h7w0.md): The default property values for a layout.

## See Also

### Reporting layout container characteristics

- [explicitAlignment(of:in:proposal:subviews:cache:)](explicitalignment%28of_in_proposal_subviews_cache_%29.md): Returns the position of the specified horizontal alignment guide along the x axis.
- [spacing(subviews:cache:)](spacing%28subviews_cache_%29.md): Returns the preferred spacing values of the composite view.
