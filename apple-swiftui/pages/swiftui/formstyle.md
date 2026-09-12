> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/formstyle](https://developer.apple.com/documentation/swiftui/formstyle)

# FormStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The appearance and behavior of a form.

## Declaration

```swift
@MainActor @preconcurrency protocol FormStyle
```

<a id="overview"></a>

## Overview

To configure the style for a single [Form](form.md) or for all form instances in a view hierarchy, use the [formStyle(\_:)](view/formstyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in form styles

- [automatic](formstyle/automatic.md): Conforms when `Self` is `AutomaticFormStyle`. The default form style.
- [columns](formstyle/columns.md): Conforms when `Self` is `ColumnsFormStyle`. A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.
- [grouped](formstyle/grouped.md): Conforms when `Self` is `GroupedFormStyle`. A form style with grouped rows.

### Creating custom form styles

- [makeBody(configuration:)](formstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a form.
- [FormStyle.Configuration](formstyle/configuration.md): The properties of a form instance.
- [Body](formstyle/body.md): A view that represents the appearance and interaction of a form.

### Supporting types

- [AutomaticFormStyle](automaticformstyle.md): The default form style.
- [ColumnsFormStyle](columnsformstyle.md): A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.
- [GroupedFormStyle](groupedformstyle.md): A form style with grouped rows.

## Relationships

### Conforming Types

- [AutomaticFormStyle](automaticformstyle.md)
- [ColumnsFormStyle](columnsformstyle.md)
- [GroupedFormStyle](groupedformstyle.md)

## See Also

### Styling groups

- [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md): Sets the style for control groups within this view.
- [ControlGroupStyle](controlgroupstyle.md): Defines the implementation of all control groups within a view hierarchy.
- [ControlGroupStyleConfiguration](controlgroupstyleconfiguration.md): The properties of a control group.
- [formStyle(\_:)](view/formstyle%28__%29.md): Sets the style for forms in a view hierarchy.
- [FormStyleConfiguration](formstyleconfiguration.md): The properties of a form instance.
- [groupBoxStyle(\_:)](view/groupboxstyle%28__%29.md): Sets the style for group boxes within this view.
- [GroupBoxStyle](groupboxstyle.md): A type that specifies the appearance and interaction of all group boxes within a view hierarchy.
- [GroupBoxStyleConfiguration](groupboxstyleconfiguration.md): The properties of a group box instance.
- [indexViewStyle(\_:)](view/indexviewstyle%28__%29.md): Sets the style for the index view within the current environment.
- [IndexViewStyle](indexviewstyle.md): Defines the implementation of all `IndexView` instances within a view hierarchy.
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
- [LabeledContentStyle](labeledcontentstyle.md): The appearance and behavior of a labeled content instance..
- [LabeledContentStyleConfiguration](labeledcontentstyleconfiguration.md): The properties of a labeled content instance.
