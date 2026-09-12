> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroup](https://developer.apple.com/documentation/swiftui/controlgroup)

# ControlGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A container view that displays semantically-related controls in a visually-appropriate manner for the context

## Declaration

```swift
nonisolated struct ControlGroup<Content> where Content : View
```

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](populating-swiftui-menus-with-adaptive-controls.md)

<a id="overview"></a>

## Overview

You can provide an optional label to this view that describes its children. This view may be used in different ways depending on the surrounding context. For example, when you place the control group in a toolbar item, SwiftUI uses the label when the group is moved to the toolbar’s overflow menu.

```swift
ContentView()
    .toolbar(id: "items") {
        ToolbarItem(id: "media") {
            ControlGroup {
                MediaButton()
                ChartButton()
                GraphButton()
            } label: {
                Label("Plus", systemImage: "plus")
            }
        }
    }
```

## Topics

### Creating a control group

- [init(content:)](controlgroup/init%28content_%29.md): Creates a new ControlGroup with the specified children
- [init(content:label:)](controlgroup/init%28content_label_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content and a label.
- [init(\_:content:)](controlgroup/init%28__content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a string.

### Creating a control group with an image

- [init(\_:image:content:)](controlgroup/init%28__image_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:content:)](controlgroup/init%28__systemimage_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a string and image name.

### Creating a configured control group

- [init(\_:)](controlgroup/init%28__%29.md): Conforms when `Content` is `ControlGroupStyleConfiguration.Content`. Creates a control group based on a style configuration.

### Supporting types

- [LabeledControlGroupContent](labeledcontrolgroupcontent.md): A view that represents the body of a control group with a specified label.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Presenting a group of controls

- [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md): Sets the style for control groups within this view.
