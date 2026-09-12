> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/disclosuretablerow/init(_:isexpanded:content:)](https://developer.apple.com/documentation/swiftui/disclosuretablerow/init(_:isexpanded:content:))

# init(\_:isExpanded:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Creates a disclosure group with the given value and table rows, and a binding to the expansion state (expanded or collapsed).

## Declaration

```swift
nonisolated init<Value>(_ value: Value, isExpanded: Binding<Bool>? = nil, @TableRowBuilder<Value> content: @escaping () -> Content) where Label == TableRow<Value>, Value == Content.TableRowValue
```

## Parameters

- `value`: The value of the disclosable table row.
- `isExpanded`: A binding to a Boolean value that determines the group’s expansion state (expanded or collapsed).
- `content`: The table row shown when the disclosure group expands.
