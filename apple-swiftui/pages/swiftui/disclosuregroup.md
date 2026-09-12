> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/disclosuregroup](https://developer.apple.com/documentation/swiftui/disclosuregroup)

# DisclosureGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A view that shows or hides another content view, based on the state of a disclosure control.

## Declaration

```swift
nonisolated struct DisclosureGroup<Label, Content> where Label : View, Content : View
```

## Mentioned In

- [Displaying data in lists](displaying-data-in-lists.md)

<a id="overview"></a>

## Overview

A disclosure group view consists of a label to identify the contents, and a control to show and hide the contents. Showing the contents puts the disclosure group into the “expanded” state, and hiding them makes the disclosure group “collapsed”.

In the following example, a disclosure group contains two toggles and an embedded disclosure group. The top level disclosure group exposes its expanded state with the bound property, `topLevelExpanded`. By expanding the disclosure group, the user can use the toggles to update the state of the `toggleStates` structure.

```swift
struct ToggleStates {
    var oneIsOn: Bool = false
    var twoIsOn: Bool = true
}
@State private var toggleStates = ToggleStates()
@State private var topExpanded: Bool = true

var body: some View {
    DisclosureGroup("Items", isExpanded: $topExpanded) {
        Toggle("Toggle 1", isOn: $toggleStates.oneIsOn)
        Toggle("Toggle 2", isOn: $toggleStates.twoIsOn)
        DisclosureGroup("Sub-items") {
            Text("Sub-item 1")
        }
    }
}
```

## Topics

### Creating a disclosure group

- [init(\_:content:)](disclosuregroup/init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a disclosure group, using a provided localized string resource to create a text view for the label.
- [init(content:label:)](disclosuregroup/init%28content_label_%29.md): Creates a disclosure group with the given label and content views.
- [init(\_:isExpanded:content:)](disclosuregroup/init%28__isexpanded_content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a disclosure group, using a provided localized string resource to create a text view for the label, and a binding to the expansion state (expanded or collapsed).
- [init(isExpanded:content:label:)](disclosuregroup/init%28isexpanded_content_label_%29.md): Creates a disclosure group with the given label and content views, and a binding to the expansion state (expanded or collapsed).

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Disclosing information progressively

- [OutlineGroup](outlinegroup.md): A structure that computes views and disclosure groups on demand from an underlying collection of tree-structured, identified data.
- [disclosureGroupStyle(\_:)](view/disclosuregroupstyle%28__%29.md): Sets the style for disclosure groups within this view.
