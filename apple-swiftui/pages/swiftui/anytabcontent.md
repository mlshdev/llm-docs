> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytabcontent](https://developer.apple.com/documentation/swiftui/anytabcontent)

# AnyTabContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Type erased tab content.

## Declaration

```swift
nonisolated struct AnyTabContent<SelectionValue> where SelectionValue : Hashable
```

## Topics

### Initializers

- [init(\_:)](anytabcontent/init%28__%29.md): Create an instance that type-erases `tabContent`.

## Relationships

### Conforms To

- [TabContent](tabcontent.md)

## See Also

### Configuring a tab

- [sectionActions(content:)](view/sectionactions%28content_%29.md): Adds custom actions to a section.
- [TabPlacement](tabplacement.md): A place that a tab can appear.
- [TabContentBuilder](tabcontentbuilder.md): A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.
- [TabContent](tabcontent.md): A type that provides content for programmatically selectable tabs in a tab view.
