> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutsubview](https://developer.apple.com/documentation/swiftui/layoutsubview)

# LayoutSubview

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A proxy that represents one subview of a layout.

## Declaration

```swift
struct LayoutSubview
```

<a id="overview"></a>

## Overview

This type acts as a proxy for a view that your custom layout container places in the user interface. [Layout](layout.md) protocol methods receive a [LayoutSubviews](layoutsubviews.md) collection that contains exactly one proxy for each of the subviews arranged by your container.

Use a proxy to get information about the associated subview, like its dimensions, layout priority, or custom layout values. You also use the proxy to tell its corresponding subview where to appear by calling the proxy’s [place(at:anchor:proposal:)](layoutsubview/place%28at_anchor_proposal_%29.md) method. Do this once for each subview from your implementation of the layout’s [placeSubviews(in:proposal:subviews:cache:)](layout/placesubviews%28in_proposal_subviews_cache_%29.md) method.

You can read custom layout values associated with a subview by using the property’s key as an index on the subview. For more information about defining, setting, and reading custom values, see [LayoutValueKey](layoutvaluekey.md).

## Topics

### Placing the subview

- [place(at:anchor:proposal:)](layoutsubview/place%28at_anchor_proposal_%29.md): Assigns a position and proposed size to the subview.

### Getting subview characteristics

- [dimensions(in:)](layoutsubview/dimensions%28in_%29.md): Asks the subview for its dimensions and alignment guides.
- [sizeThatFits(\_:)](layoutsubview/sizethatfits%28__%29.md): Asks the subview for its size.
- [spacing](layoutsubview/spacing.md): The subviews’s preferred spacing values.
- [priority](layoutsubview/priority.md): The layout priority of the subview.

### Getting custom values

- [subscript(\_:)](layoutsubview/subscript%28__%29.md): Gets the value for the subview that’s associated with the specified key.

### Instance Properties

- [containerValues](layoutsubview/containervalues.md): The container values associated with the given subview.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Creating a custom layout container

- [Composing custom layouts with SwiftUI](composing-custom-layouts-with-swiftui.md): Arrange views in your app’s interface using layout tools that SwiftUI provides.
- [Layout](layout.md): A type that defines the geometry of a collection of views.
- [LayoutSubviews](layoutsubviews.md): A collection of proxy values that represent the subviews of a layout view.
