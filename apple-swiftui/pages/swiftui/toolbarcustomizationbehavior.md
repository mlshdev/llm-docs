> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcustomizationbehavior](https://developer.apple.com/documentation/swiftui/toolbarcustomizationbehavior)

# ToolbarCustomizationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The customization behavior of customizable toolbar content.

## Declaration

```swift
struct ToolbarCustomizationBehavior
```

<a id="overview"></a>

## Overview

Customizable toolbar content support different types of customization behaviors. For example, some customizable content may not be removed by the user. Some content may be placed in a toolbar that supports customization overall, but not for that particular content.

Use this type in conjunction with the [customizationBehavior(\_:)](customizabletoolbarcontent/customizationbehavior%28__%29.md) modifier.

## Topics

### Getting customization behaviors

- [default](toolbarcustomizationbehavior/default.md): The default customization behavior.
- [disabled](toolbarcustomizationbehavior/disabled.md): The disabled customization behavior.
- [reorderable](toolbarcustomizationbehavior/reorderable.md): The reorderable customization behavior.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Populating a customizable toolbar

- [toolbar(id:content:)](view/toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [toolbarItemHidden(\_:)](view/toolbaritemhidden%28__%29.md): Hides an individual view within a control group toolbar item.
- [CustomizableToolbarContent](customizabletoolbarcontent.md): Conforming types represent items that can be placed in various locations in a customizable toolbar.
- [ToolbarCustomizationOptions](toolbarcustomizationoptions.md): Options that influence the default customization behavior of customizable toolbar content.
- [SearchToolbarBehavior](searchtoolbarbehavior.md): The behavior of a search field in a toolbar.
