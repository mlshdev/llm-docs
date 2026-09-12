> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutproperties](https://developer.apple.com/documentation/swiftui/layoutproperties)

# LayoutProperties

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Layout-specific properties of a layout container.

## Declaration

```swift
struct LayoutProperties
```

<a id="overview"></a>

## Overview

This structure contains configuration information that’s applicable to a layout container. For example, the [stackOrientation](layoutproperties/stackorientation.md) value indicates the layout’s primary axis, if any.

You can use an instance of this type to characterize a custom layout container, which is a type that conforms to the [Layout](layout.md) protocol. Implement the protocol’s [layoutProperties](layout/layoutproperties.md) property to return an instance. For example, you can indicate that your layout has a vertical stack orientation:

```swift
extension BasicVStack {
    static var layoutProperties: LayoutProperties {
        var properties = LayoutProperties()
        properties.stackOrientation = .vertical
        return properties
    }
}
```

If you don’t implement the property in your custom layout, the protocol provides a default implementation that returns a `LayoutProperties` instance with default values.

## Topics

### Creating a layout properties instance

- [init()](layoutproperties/init%28%29.md): Creates a default set of properties.

### Getting layout properties

- [stackOrientation](layoutproperties/stackorientation.md): The orientation of the containing stack-like container.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a custom layout

- [ProposedViewSize](proposedviewsize.md): A proposal for the size of a view.
- [ViewSpacing](viewspacing.md): A collection of the geometric spacing preferences of a view.
