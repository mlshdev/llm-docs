> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutvaluekey](https://developer.apple.com/documentation/swiftui/layoutvaluekey)

# LayoutValueKey

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for accessing a layout value of a layout container’s subviews.

## Declaration

```swift
protocol LayoutValueKey
```

<a id="overview"></a>

## Overview

If you create a custom layout by defining a type that conforms to the [Layout](layout.md) protocol, you can also create custom layout values that you set on individual views, and that your container view can access to guide its layout behavior. Your custom values resemble the built-in layout values that you set with view modifiers like [layoutPriority(\_:)](view/layoutpriority%28__%29.md) and [zIndex(\_:)](view/zindex%28__%29.md), but have a purpose that you define.

To create a custom layout value, define a type that conforms to the `LayoutValueKey` protocol and implement the one required property that returns the default value of the property. For example, you can create a property that defines an amount of flexibility for a view, defined as an optional floating point number with a default value of `nil`:

```swift
private struct Flexibility: LayoutValueKey {
    static let defaultValue: CGFloat? = nil
}
```

The Swift compiler infers this particular key’s associated type as an optional [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) from this definition.

<a id="Set-a-value-on-a-view"></a>

### Set a value on a view

Set the value on a view by adding the [layoutValue(key:value:)](view/layoutvalue%28key_value_%29.md) view modifier to the view. To make your custom value easier to work with, you can do this in a convenience modifier in an extension of the [View](view.md) protocol:

```swift
extension View {
    func layoutFlexibility(_ value: CGFloat?) -> some View {
        layoutValue(key: Flexibility.self, value: value)
    }
}
```

Use your modifier to set the value on any views that need a nondefault value:

```swift
BasicVStack {
    Text("One View")
    Text("Another View")
        .layoutFlexibility(3)
}
```

Any view that you don’t explicitly set a value for uses the default value, as with the first [Text](text.md) view, above.

<a id="Retrieve-a-value-during-layout"></a>

### Retrieve a value during layout

Access a custom layout value using the key as an index on subview’s proxy (an instance of [LayoutSubview](layoutsubview.md)) and use the value to make decisions about sizing, placement, or other layout operations. For example, you might read the flexibility value in your layout view’s [sizeThatFits(\_:)](layoutsubview/sizethatfits%28__%29.md) method, and adjust your size calculations accordingly:

```swift
extension BasicVStack {
    func sizeThatFits(
        proposal: ProposedViewSize,
        subviews: Subviews,
        cache: inout Void
    ) -> CGSize {

        // Map the flexibility property of each subview into an array.
        let flexibilities = subviews.map { subview in
            subview[Flexibility.self]
        }

        // Calculate and return the size of the layout container.
        // ...
    }
}
```

## Topics

### Providing a default value

- [defaultValue](layoutvaluekey/defaultvalue.md): The default value of the key.
- [Value](layoutvaluekey/value.md): The type of the key’s value.

## See Also

### Associating values with views in a custom layout

- [layoutValue(key:value:)](view/layoutvalue%28key_value_%29.md): Associates a value with a custom layout property.
