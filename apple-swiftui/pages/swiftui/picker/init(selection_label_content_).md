> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/picker/init(selection:label:content:)](https://developer.apple.com/documentation/swiftui/picker/init(selection:label:content:))

# init(selection:label:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates a picker that displays a custom label.

> Use [init(selection:content:label:)](init%28selection_content_label_%29.md) instead.

## Declaration

```swift
nonisolated init(selection: Binding<SelectionValue>, label: Label, @ContentBuilder content: () -> Content)
```

## Parameters

- `selection`: A binding to a property that determines the currently-selected option.
- `label`: A view that describes the purpose of selecting an option.
- `content`: A view that contains the set of options.
