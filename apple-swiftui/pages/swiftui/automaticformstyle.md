> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/automaticformstyle](https://developer.apple.com/documentation/swiftui/automaticformstyle)

# AutomaticFormStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The default form style.

## Declaration

```swift
nonisolated struct AutomaticFormStyle
```

<a id="overview"></a>

## Overview

Use the [automatic](formstyle/automatic.md) static variable to create this style:

```swift
Form {
   ...
}
.formStyle(.automatic)
```

## Topics

### Creating the form style

- [init()](automaticformstyle/init%28%29.md): Creates a default form style.

## Relationships

### Conforms To

- [FormStyle](formstyle.md)

## See Also

### Supporting types

- [ColumnsFormStyle](columnsformstyle.md): A non-scrolling form style with a trailing aligned column of labels next to a leading aligned column of values.
- [GroupedFormStyle](groupedformstyle.md): A form style with grouped rows.
