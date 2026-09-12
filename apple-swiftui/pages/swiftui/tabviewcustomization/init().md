> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewcustomization/init()](https://developer.apple.com/documentation/swiftui/tabviewcustomization/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Creates an empty tab sidebar customization.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

To set this customization on a tab view, use the [tabViewCustomization(\_:)](../view/tabviewcustomization%28__%29.md) modifier.

With an empty customization, tabs will be visible according to the default builder visibilities, and sections will be ordered in the order declared in the tab view’s tab builder.

You can specify a default visibility for the tab in the tab bar and sidebar by attaching [defaultVisibility(\_:for:)](../tabcontent/defaultvisibility%28__for_%29.md) to the tab.

You can change the default section order by changing the order in the builder. If there’s an existing persisted customization, reset the order by calling [resetTabOrder()](sectioncustomization/resettaborder%28%29.md) when you change the order.
