> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/indexviewstyle](https://developer.apple.com/documentation/swiftui/indexviewstyle)

# IndexViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 8.0+

Defines the implementation of all `IndexView` instances within a view hierarchy.

## Declaration

```swift
protocol IndexViewStyle
```

<a id="overview"></a>

## Overview

To configure the current `IndexViewStyle` for a view hierarchy, use the `.indexViewStyle()` modifier.

## Topics

### Getting built-in index view styles

- [page](indexviewstyle/page.md): Conforms when `Self` is `PageIndexViewStyle`. An index view style that places a page index view over its content.
- [page(backgroundDisplayMode:)](indexviewstyle/page%28backgrounddisplaymode_%29.md): Conforms when `Self` is `PageIndexViewStyle`. An index view style that places a page index view over its content.

### Supporting types

- [PageIndexViewStyle](pageindexviewstyle.md): An index view style that places a page index view over its content.

## Relationships

### Conforming Types

- [PageIndexViewStyle](pageindexviewstyle.md)

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
- [labeledContentStyle(\_:)](view/labeledcontentstyle%28__%29.md): Sets a style for labeled content.
- [LabeledContentStyle](labeledcontentstyle.md): The appearance and behavior of a labeled content instance..
- [LabeledContentStyleConfiguration](labeledcontentstyleconfiguration.md): The properties of a labeled content instance.
