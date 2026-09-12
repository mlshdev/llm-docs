> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutproperties/stackorientation](https://developer.apple.com/documentation/swiftui/layoutproperties/stackorientation)

# stackOrientation

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The orientation of the containing stack-like container.

## Declaration

```swift
var stackOrientation: Axis?
```

<a id="discussion"></a>

## Discussion

Certain views alter their behavior based on the stack orientation of the container that they appear in. For example, [Spacer](../spacer.md) and [Divider](../divider.md) align their major axis to match that of their container.

Set the orientation for your custom layout container by returning a configured [LayoutProperties](../layoutproperties.md) instance from your [Layout](../layout.md) type’s implementation of the [layoutProperties](../layout/layoutproperties.md) method. For example, you can indicate that your layout has a [Axis.vertical](../axis/vertical.md) major axis:

```swift
extension BasicVStack {
    static var layoutProperties: LayoutProperties {
        var properties = LayoutProperties()
        properties.stackOrientation = .vertical
        return properties
    }
}
```

A value of `nil`, which is the default when you don’t specify a value, indicates an unknown orientation, or that a layout isn’t one-dimensional.
