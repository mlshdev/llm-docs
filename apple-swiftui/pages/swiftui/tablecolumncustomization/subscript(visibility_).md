> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncustomization/subscript(visibility:)](https://developer.apple.com/documentation/swiftui/tablecolumncustomization/subscript(visibility:))

# subscript(visibility:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The visibility of the column identified by its identifier.

## Declaration

```swift
subscript(visibility id: String) -> Visibility { get set }
```

<a id="overview"></a>

## Overview

Explicit identifiers can be associated with a `TableColumn` using the `customizationID(_:)` modifier.

```swift
TableColumn("Number of Reports", value: \.duplicateCount) {
    Text($0.duplicateCount, format: .number)
}
.customizationID("numberOfReports")

...

columnsCustomization[visibility: "numberOfReports"] = .hidden
```

If the ID isn’t associated with the state, a default value of `.automatic` is returned.

## See Also

### Managing the customization

- [resetOrder()](resetorder%28%29.md): Resets the column order back to the default, preserving the customized visibility and size.
