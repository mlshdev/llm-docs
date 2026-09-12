> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/checkboxtogglestyle](https://developer.apple.com/documentation/swiftui/checkboxtogglestyle)

# CheckboxToggleStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+

A toggle style that displays a checkbox followed by its label.

## Declaration

```swift
nonisolated struct CheckboxToggleStyle
```

<a id="overview"></a>

## Overview

Use the [checkbox](togglestyle/checkbox.md) static variable to create this style:

```swift
Toggle("Close windows when quitting an app", isOn: $doesClose)
    .toggleStyle(.checkbox)
```

## Topics

### Creating the toggle style

- [init()](checkboxtogglestyle/init%28%29.md): Creates a checkbox toggle style.

### Supporting types

- [makeBody(configuration:)](checkboxtogglestyle/makebody%28configuration_%29.md): Creates a view that represents the body of a toggle checkbox.

## Relationships

### Conforms To

- [ToggleStyle](togglestyle.md)

## See Also

### Supporting types

- [DefaultToggleStyle](defaulttogglestyle.md): The default toggle style.
- [ButtonToggleStyle](buttontogglestyle.md): A toggle style that displays as a button with its label as the title.
- [SwitchToggleStyle](switchtogglestyle.md): A toggle style that displays a leading label and a trailing switch.
