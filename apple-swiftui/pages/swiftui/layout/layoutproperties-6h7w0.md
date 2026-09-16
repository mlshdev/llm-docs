> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/layout/layoutproperties-6h7w0

# layoutProperties

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The default property values for a layout.

## Declaration

```swift
static var layoutProperties: LayoutProperties { get }
```

<a id="discussion"></a>

## Discussion

If you don’t implement the [layoutProperties](layoutproperties.md) method in your custom layout, the protocol uses this default implementation instead, which returns a [LayoutProperties](../layoutproperties.md) instance with default values. The properties instance contains information about the layout container, like a [stackOrientation](../layoutproperties/stackorientation.md) property that indicates the container’s major axis.
