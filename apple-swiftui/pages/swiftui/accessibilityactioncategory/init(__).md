> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityactioncategory/init(_:)](https://developer.apple.com/documentation/swiftui/accessibilityactioncategory/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a custom action category labeled by `nameResource`.

## Declaration

```swift
@export(implementation) init(_ nameResource: LocalizedStringResource)
```

<a id="discussion"></a>

## Discussion

Extension AccessibilityActionCategory { static let table = AccessibilityActionCategory(“Table Options”) }

var body: some View { TableCellView() .accessibilityActions(category: .table) { ForEach(tableCellActions) { action in Button(action.title) { action() } } } }

- Parameter:

  - nameResource: The name for the category of the accessibility actions.
