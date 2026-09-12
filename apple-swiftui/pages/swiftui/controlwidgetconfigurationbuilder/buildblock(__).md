> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlwidgetconfigurationbuilder/buildblock(_:)](https://developer.apple.com/documentation/swiftui/controlwidgetconfigurationbuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Passes a single control widget configuration written as a child control through unmodified.

## Declaration

```swift
@export(implementation) static func buildBlock<Content>(_ content: Content) -> some ControlWidgetConfiguration where Content : ControlWidgetConfiguration

```

<a id="discussion"></a>

## Discussion

An example of a single control widget configuration written as a child view is `{ StaticControlConfiguration(...) }`.
