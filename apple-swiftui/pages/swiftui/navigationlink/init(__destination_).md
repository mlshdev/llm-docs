> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(_:destination:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(_:destination:))

# init(\_:destination:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a navigation link that presents a destination view, with a text label that the link generates from a localized string key.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, @ContentBuilder destination: () -> Destination)
```

## Parameters

- `titleKey`: A localized string key for creating a text label.
- `destination`: A view for the navigation link to present.

## See Also

### Presenting a destination view

- [init(destination:label:)](init%28destination_label_%29.md): Creates a navigation link that presents the destination view.
