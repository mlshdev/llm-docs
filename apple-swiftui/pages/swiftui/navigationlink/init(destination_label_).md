> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(destination:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(destination:label:))

# init(destination:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a navigation link that presents the destination view.

## Declaration

```swift
@export(implementation) nonisolated init(@ContentBuilder destination: () -> Destination, @ContentBuilder label: () -> Label)
```

## Parameters

- `destination`: A view for the navigation link to present.
- `label`: A content builder to produce a label describing the `destination` to present.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)

## See Also

### Presenting a destination view

- [init(\_:destination:)](init%28__destination_%29.md): Conforms when `Label` is `Text` and `Destination` conforms to `View`. Creates a navigation link that presents a destination view, with a text label that the link generates from a localized string key.
