> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/groupbox](https://developer.apple.com/documentation/swiftui/groupbox)

# GroupBox

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

A stylized view, with an optional label, that visually collects a logical grouping of content.

## Declaration

```swift
nonisolated struct GroupBox<Label, Content> where Label : View, Content : View
```

<a id="overview"></a>

## Overview

Use a group box when you want to visually distinguish a portion of your user interface with an optional title for the boxed content.

The following example sets up a `GroupBox` with the label “End-User Agreement”, and a long `agreementText` string in a [Text](text.md) view wrapped by a [ScrollView](scrollview.md). The box also contains a [Toggle](toggle.md) for the user to interact with after reading the text.

```swift
var body: some View {
    GroupBox(label:
        Label("End-User Agreement", systemImage: "building.columns")
    ) {
        ScrollView(.vertical, showsIndicators: true) {
            Text(agreementText)
                .font(.footnote)
        }
        .frame(height: 100)
        Toggle(isOn: $userAgreed) {
            Text("I agree to the above terms")
        }
    }
}
```

![An iOS status bar above a gray rounded rectangle region marking the bounds](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-GroupBox-EULA@2x.png)

## Topics

### Creating a group box

- [init(content:)](groupbox/init%28content_%29.md): Conforms when `Label` is `EmptyView` and `Content` conforms to `View`. Creates an unlabeled group box with the provided view content.
- [init(content:label:)](groupbox/init%28content_label_%29.md): Creates a group box with the provided label and view content.
- [init(\_:content:)](groupbox/init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a group box with the provided view content and title.

### Creating a group box from a configuration

- [init(\_:)](groupbox/init%28__%29.md): Conforms when `Label` is `GroupBoxStyleConfiguration.Label` and `Content` is `GroupBoxStyleConfiguration.Content`. Creates a group box based on a style configuration.

### Deprecated initializers

- [init(label:content:)](groupbox/init%28label_content_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Content` conforms to `View`.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Grouping views into a box

- [groupBoxStyle(\_:)](view/groupboxstyle%28__%29.md): Sets the style for group boxes within this view.
