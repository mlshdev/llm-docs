> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/columnsformstyle](https://developer.apple.com/documentation/swiftui/columnsformstyle)

# ColumnsFormStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.

## Declaration

```swift
nonisolated struct ColumnsFormStyle
```

<a id="overview"></a>

## Overview

Use the [columns](formstyle/columns.md) static variable to create this style:

```swift
Form {
   ...
}
.formStyle(.columns)
```

## Topics

### Creating the form style

- [init()](columnsformstyle/init%28%29.md): A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.

## Relationships

### Conforms To

- [FormStyle](formstyle.md)

## See Also

### Supporting types

- [AutomaticFormStyle](automaticformstyle.md): The default form style.
- [GroupedFormStyle](groupedformstyle.md): A form style with grouped rows.
