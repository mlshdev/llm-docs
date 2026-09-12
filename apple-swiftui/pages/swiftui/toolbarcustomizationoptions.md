> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcustomizationoptions](https://developer.apple.com/documentation/swiftui/toolbarcustomizationoptions)

# ToolbarCustomizationOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Options that influence the default customization behavior of customizable toolbar content.

## Declaration

```swift
struct ToolbarCustomizationOptions
```

<a id="overview"></a>

## Overview

Use this type in conjunction with the [defaultCustomization(\_:options:)](customizabletoolbarcontent/defaultcustomization%28__options_%29.md) modifier.

## Topics

### Getting customization options

- [alwaysAvailable](toolbarcustomizationoptions/alwaysavailable.md): Configures default customizable toolbar content to always be present in the toolbar.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Populating a customizable toolbar

- [toolbar(id:content:)](view/toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [toolbarItemHidden(\_:)](view/toolbaritemhidden%28__%29.md): Hides an individual view within a control group toolbar item.
- [CustomizableToolbarContent](customizabletoolbarcontent.md): Conforming types represent items that can be placed in various locations in a customizable toolbar.
- [ToolbarCustomizationBehavior](toolbarcustomizationbehavior.md): The customization behavior of customizable toolbar content.
- [SearchToolbarBehavior](searchtoolbarbehavior.md): The behavior of a search field in a toolbar.
