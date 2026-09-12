> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontentstyle](https://developer.apple.com/documentation/swiftui/labeledcontentstyle)

# LabeledContentStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The appearance and behavior of a labeled content instance..

## Declaration

```swift
@MainActor @preconcurrency protocol LabeledContentStyle
```

<a id="overview"></a>

## Overview

Use [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md) to set a style on a view.

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

### Getting built-in labeled content styles

- [automatic](labeledcontentstyle/automatic.md): Conforms when `Self` is `AutomaticLabeledContentStyle`. A labeled content style that resolves its appearance automatically based on the current context.

### Creating custom labeled content styles

- [makeBody(configuration:)](labeledcontentstyle/makebody%28configuration_%29.md): Creates a view that represents the body of labeled content.
- [LabeledContentStyle.Configuration](labeledcontentstyle/configuration.md): The properties of a labeled content instance.
- [Body](labeledcontentstyle/body.md): A view that represents the appearance and behavior of labeled content.

### Supporting types

- [AutomaticLabeledContentStyle](automaticlabeledcontentstyle.md): The default labeled content style.

## Relationships

### Conforming Types

- [AutomaticLabeledContentStyle](automaticlabeledcontentstyle.md)

## See Also

### Styling groups

- [controlGroupStyle(\_:)](view/controlgroupstyle%28__%29.md): Sets the style for control groups within this view.
- [ControlGroupStyle](controlgroupstyle.md): Defines the implementation of all control groups within a view hierarchy.
- [ControlGroupStyleConfiguration](controlgroupstyleconfiguration.md): The properties of a control group.
- [formStyle(\_:)](view/formstyle%28__%29.md): Sets the style for forms in a view hierarchy.
- [FormStyle](formstyle.md): The appearance and behavior of a form.
- [FormStyleConfiguration](formstyleconfiguration.md): The properties of a form instance.
- [groupBoxStyle(\_:)](view/groupboxstyle%28__%29.md): Sets the style for group boxes within this view.
- [GroupBoxStyle](groupboxstyle.md): A type that specifies the appearance and interaction of all group boxes within a view hierarchy.
- [GroupBoxStyleConfiguration](groupboxstyleconfiguration.md): The properties of a group box instance.
- [indexViewStyle(\_:)](view/indexviewstyle%28__%29.md): Sets the style for the index view within the current environment.
- [IndexViewStyle](indexviewstyle.md): Defines the implementation of all `IndexView` instances within a view hierarchy.
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
- [LabeledContentStyleConfiguration](labeledcontentstyleconfiguration.md): The properties of a labeled content instance.
