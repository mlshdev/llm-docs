> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle](https://developer.apple.com/documentation/swiftui/tablestyle)

# TableStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · visionOS 1.0+

A type that applies a custom appearance to all tables within a view.

## Declaration

```swift
@MainActor @preconcurrency protocol TableStyle
```

<a id="overview"></a>

## Overview

To configure the current table style for a view hierarchy, use the [tableStyle(\_:)](view/tablestyle%28__%29.md) modifier.

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

### Getting built-in table styles

- [automatic](tablestyle/automatic.md): Conforms when `Self` is `AutomaticTableStyle`. The default table style in the current context.
- [inset](tablestyle/inset.md): Conforms when `Self` is `InsetTableStyle`. The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.
- [bordered](tablestyle/bordered.md): Conforms when `Self` is `BorderedTableStyle`. The table style that describes the behavior and appearance of a table with standard border.

### Creating custom table styles

- [makeBody(configuration:)](tablestyle/makebody%28configuration_%29.md): Creates a view that represents the body of a table.
- [TableStyle.Configuration](tablestyle/configuration.md): The properties of a table.
- [Body](tablestyle/body.md): A view that represents the body of a table.

### Deprecated styles

- [inset(alternatesRowBackgrounds:)](tablestyle/inset%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `InsetTableStyle`. The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.
- [bordered(alternatesRowBackgrounds:)](tablestyle/bordered%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `BorderedTableStyle`. The table style that describes the behavior and appearance of a table with standard border.

### Supporting types

- [AutomaticTableStyle](automatictablestyle.md): The default table style in the current context.
- [InsetTableStyle](insettablestyle.md): The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.
- [BorderedTableStyle](borderedtablestyle.md): The table style that describes the behavior and appearance of a table with standard border.

## Relationships

### Conforming Types

- [AutomaticTableStyle](automatictablestyle.md)
- [BorderedTableStyle](borderedtablestyle.md)
- [InsetTableStyle](insettablestyle.md)

## See Also

### Styling collection views

- [listStyle(\_:)](view/liststyle%28__%29.md): Sets the style for lists within this view.
- [ListStyle](liststyle.md): A protocol that describes the behavior and appearance of a list.
- [tableStyle(\_:)](view/tablestyle%28__%29.md): Sets the style for tables within this view.
- [TableStyleConfiguration](tablestyleconfiguration.md): The properties of a table.
- [disclosureGroupStyle(\_:)](view/disclosuregroupstyle%28__%29.md): Sets the style for disclosure groups within this view.
- [DisclosureGroupStyle](disclosuregroupstyle.md): A type that specifies the appearance and interaction of disclosure groups within a view hierarchy.
