> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization/subscript(sectionid:)](https://developer.apple.com/documentation/swiftui/tabviewcustomization/subscript(sectionid:))

# subscript(sectionID:)

**Framework:** SwiftUI  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 18.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0) · visionOS 2.0+ (deprecated in 27.0)

The customization for a section’s children, identified by the section’s customization identifier.

> Use the \`section\` subscript and read \`tabOrder\` instead.

## Declaration

```swift
subscript(sectionID id: String) -> [String]? { get }
```

<a id="overview"></a>

## Overview

Section order can be read by subscripting with the tab section’s id:

```swift
let order = customization[sectionID: "com.myApp.categories"]
```

Identifiers can be associated with a `Tab` or `TabSection` using the `customizationID(_:)` modifier.

```swift
TabSection("Categories") {
    Tab("Climate", systemImage: "fan") {
        ClimateView()
    }
    .customizationID("com.myApp.climate")

    Tab("Lights", systemImage: "lightbulb") {
        LightsView()
    }
    .customizationID("com.myApp.lights")
}
.customizationID("com.myApp.categories")
```

If the ID isn’t associated with a section or the section has not been customized, a default value of `nil` is returned.
