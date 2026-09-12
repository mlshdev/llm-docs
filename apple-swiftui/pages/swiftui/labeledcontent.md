> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontent](https://developer.apple.com/documentation/swiftui/labeledcontent)

# LabeledContent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A container for attaching a label to a value-bearing view.

## Declaration

```swift
struct LabeledContent<Label, Content>
```

<a id="overview"></a>

## Overview

The instance’s content represents a read-only or read-write value, and its label identifies or describes the purpose of that value. The resulting element has a layout that’s consistent with other framework controls and automatically adapts to its container, like a form or toolbar. Some styles of labeled content also apply styling or behaviors to the value content, like making [Text](text.md) views selectable.

The following example associates a label with a custom view and has a layout that matches the label of the [Picker](picker.md):

```swift
Form {
    LabeledContent("Custom Value") {
        MyCustomView(value: $value)
    }
    Picker("Selected Value", selection: $selection) {
        Text("Option 1").tag(1)
        Text("Option 2").tag(2)
    }
}
```

<a id="Custom-view-labels"></a>

### Custom view labels

You can assemble labeled content with an explicit view for its label using the [init(content:label:)](labeledcontent/init%28content_label_%29.md) initializer. For example, you can rewrite the previous labeled content example using a [Text](text.md) view:

```swift
LabeledContent {
    MyCustomView(value: $value)
} label: {
    Text("Custom Value")
}
```

The `label` content builder accepts any kind of view, like a [Label](label.md):

```swift
LabeledContent {
    MyCustomView(value: $value)
} label: {
    Label("Custom Value", systemImage: "hammer")
}
```

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

```swift
LabeledContent {
    MyCustomView(value: $value)
} label: {
    Text("Custom Value")
    Text("Custom Subtitle Value")
}
```

<a id="Textual-labeled-content"></a>

### Textual labeled content

You can construct labeled content with string values or formatted values to create read-only displays of textual values:

```swift
Form {
    Section("Information") {
        LabeledContent("Name", value: person.name)
        LabeledContent("Age", value: person.age, format: .number)
        LabeledContent("Height", value: person.height,
            format: .measurement(width: .abbreviated))
    }
    if !person.pets.isEmpty {
        Section("Pets") {
            ForEach(pet) { pet in
                LabeledContent(pet.species, value: pet.name)
            }
        }
    }
}
```

Wherever possible, SwiftUI makes this text selectable.

<a id="Compositional-elements"></a>

### Compositional elements

You can use labeled content as the label for other elements. For example, a [NavigationLink](navigationlink.md) can present a summary value for the destination it links to:

```swift
Form {
    NavigationLink(value: Settings.wifiDetail) {
        LabeledContent("Wi-Fi", value: ssidName)
    }
}
```

In some cases, the styling of views used as the value content is specialized as well. For example, while a [Toggle](toggle.md) in an inset group form on macOS is styled as a switch by default, it’s styled as a checkbox when used as a value element within a surrounding `LabeledContent` instance:

```swift
Form {
    LabeledContent("Source Control") {
        Toggle("Refresh local status automatically",
            isOn: $refreshLocalStatus)
        Toggle("Fetch and refresh server status automatically",
            isOn: $refreshServerStatus)
        Toggle("Add and remove files automatically",
            isOn: $addAndRemoveFiles)
        Toggle("Select files to commit automatically",
            isOn: $selectFiles)
    }
}
```

<a id="Controlling-label-visibility"></a>

### Controlling label visibility

A label communicates the identity or purpose of the value, which is important for accessibility. However, you might want to hide the label in the display, and some controls or contexts may visually hide their label by default. The [labelsHidden()](view/labelshidden%28%29.md) modifier allows controlling that visibility. The following example hides both labels, producing only a group of the two value views:

```swift
Group {
    LabeledContent("Custom Value") {
        MyCustomView(value: $value)
    }
    Picker("Selected Value", selection: $selection) {
        Text("Option 1").tag(1)
        Text("Option 2").tag(2)
    }
}
.labelsHidden()
```

<a id="Styling-labeled-content"></a>

### Styling labeled content

You can set label styles using the [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md) modifier. You can also build custom styles using [LabeledContentStyle](labeledcontentstyle.md).

## Topics

### Creating labeled content

- [init(\_:content:)](labeledcontent/init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a labeled view that generates its label from a localized string key.
- [init(content:label:)](labeledcontent/init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a standard labeled element, with a view that conveys the value of the element and a label.
- [init(\_:value:)](labeledcontent/init%28__value_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view.
- [init(\_:value:format:)](labeledcontent/init%28__value_format_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view from a formatted value.
- [init(\_:)](labeledcontent/init%28__%29.md): Conforms when `Label` is `LabeledContentStyleConfiguration.Label` and `Content` is `LabeledContentStyleConfiguration.Content`. Creates labeled content based on a labeled content style configuration.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [View](view.md)

## See Also

### Grouping inputs

- [Form](form.md): A container for grouping controls used for data entry, such as in settings or inspectors.
- [formStyle(\_:)](view/formstyle%28__%29.md): Sets the style for forms in a view hierarchy.
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
