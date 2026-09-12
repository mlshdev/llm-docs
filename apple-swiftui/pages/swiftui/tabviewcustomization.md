> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization](https://developer.apple.com/documentation/swiftui/tabviewcustomization)

# TabViewCustomization

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

The customizations a person makes to an adaptable sidebar tab view.

## Declaration

```swift
struct TabViewCustomization
```

<a id="overview"></a>

## Overview

By default, if a person hasn’t made customizations, tabs appear according to the default builder visibilities and sections appear in the order you declare in the tab view’s tab builder.

You can change the default visibility by using the [defaultVisibility(\_:for:)](tabcontent/defaultvisibility%28__for_%29.md) with a [sidebar](adaptabletabbarplacement/sidebar.md) placement.

You can change the default section order by changing the order in the builder. If there’s an existing persisted customization, reset the order by calling [resetTabOrder()](tabviewcustomization/sectioncustomization/resettaborder%28%29.md) when you change the order.

All tabs and tab sections that support customization need to have a customization ID. You can mark a tab as being non-customizable by specifying a [disabled](tabcustomizationbehavior/disabled.md) behavior in all adaptable tab bar placements using [customizationBehavior(\_:for:)](tabcontent/customizationbehavior%28__for_%29.md).

On macOS, a default interaction is provided for reordering sections but not for controlling the visibility of individual tabs. A custom experience should be provided if desired by setting the visibility of the tab on the customization.

The following code example uses `@AppStorage` to automatically persist any visibility or section order customizations a person makes.

```swift
@AppStorage
private var customization: TabViewCustomization

TabView {
    Tab("Home", systemImage: "house") {
        MyHomeView()
    }
    .customizationID("com.myApp.home")

    Tab("Reports", systemImage: "chart.bar") {
        MyReportsView()
    }
    .customizationID("com.myApp.reports")

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
    .customizationID("com.myApp.browse")
}
.tabViewStyle(.sidebarAdaptable)
.tabViewCustomization($customization)
```

## Topics

### Structures

- [TabViewCustomization.SectionCustomization](tabviewcustomization/sectioncustomization.md): The customizations a user has made to a [TabSection](tabsection.md).
- [TabViewCustomization.TabCustomization](tabviewcustomization/tabcustomization.md): The customizations a user has made to a [Tab](tab.md).

### Initializers

- [init()](tabviewcustomization/init%28%29.md): Creates an empty tab sidebar customization.

### Instance Methods

- [resetSectionOrder()](tabviewcustomization/resetsectionorder%28%29.md): Resets ordering back to the default for all sections, preserving the customized tab visibilities.
- [resetSectionOrder(for:)](tabviewcustomization/resetsectionorder%28for_%29.md): Deprecated. Resets ordering back to the default for the section with `sectionID`, preserving any customized tab visibilities.
- [resetVisibility()](tabviewcustomization/resetvisibility%28%29.md): Resets all tab sidebar visibilities back to the default, preserving the section customizations.

### Subscripts

- [subscript(section:)](tabviewcustomization/subscript%28section_%29.md): The customization of the section, identified by its customization identifier.
- [subscript(sectionID:)](tabviewcustomization/subscript%28sectionid_%29.md): Deprecated. The customization for a section’s children, identified by the section’s customization identifier.
- [subscript(sidebarVisibility:)](tabviewcustomization/subscript%28sidebarvisibility_%29.md): Deprecated. The visibility of the tab identified by its customization identifier.
- [subscript(tab:)](tabviewcustomization/subscript%28tab_%29.md): The customization of the tab, identified by its customization identifier.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enabling tab customization

- [tabViewCustomization(\_:)](view/tabviewcustomization%28__%29.md): Specifies the customizations to apply to the sidebar representation of the tab view.
- [TabCustomizationBehavior](tabcustomizationbehavior.md): The customization behavior of customizable tab view content.
