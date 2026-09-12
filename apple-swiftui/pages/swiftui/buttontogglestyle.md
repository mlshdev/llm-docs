> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttontogglestyle](https://developer.apple.com/documentation/swiftui/buttontogglestyle)

# ButtonToggleStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 9.0+

A toggle style that displays as a button with its label as the title.

## Declaration

```swift
nonisolated struct ButtonToggleStyle
```

<a id="overview"></a>

## Overview

You can also use [button](togglestyle/button.md) to construct this style.

```swift
Toggle(isOn: $isFlagged) {
    Label("Flag", systemImage: "flag.fill")
}
.toggleStyle(.button)
```

## Topics

### Creating the toggle style

- [init()](buttontogglestyle/init%28%29.md): Creates a button toggle style.

### Supporting types

- [makeBody(configuration:)](buttontogglestyle/makebody%28configuration_%29.md): Creates a view that represents the body of a toggle button.

## Relationships

### Conforms To

- [ToggleStyle](togglestyle.md)

## See Also

### Supporting types

- [DefaultToggleStyle](defaulttogglestyle.md): The default toggle style.
- [CheckboxToggleStyle](checkboxtogglestyle.md): A toggle style that displays a checkbox followed by its label.
- [SwitchToggleStyle](switchtogglestyle.md): A toggle style that displays a leading label and a trailing switch.
