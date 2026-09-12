> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabplacement](https://developer.apple.com/documentation/swiftui/tabplacement)

# TabPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A place that a tab can appear.

## Declaration

```swift
struct TabPlacement
```

<a id="overview"></a>

## Overview

Not all `TabView` styles support all placements.

## Topics

### Type Properties

- [automatic](tabplacement/automatic.md): The default tab location.
- [pinned](tabplacement/pinned.md): The pinned tab placement location.
- [sidebarOnly](tabplacement/sidebaronly.md): The sidebar tab placement location.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring a tab

- [sectionActions(content:)](view/sectionactions%28content_%29.md): Adds custom actions to a section.
- [TabContentBuilder](tabcontentbuilder.md): A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.
- [TabContent](tabcontent.md): A type that provides content for programmatically selectable tabs in a tab view.
- [AnyTabContent](anytabcontent.md): Type erased tab content.
