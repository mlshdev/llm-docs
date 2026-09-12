> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/defaulttogglestyle](https://developer.apple.com/documentation/swiftui/defaulttogglestyle)

# DefaultToggleStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The default toggle style.

## Declaration

```swift
nonisolated struct DefaultToggleStyle
```

<a id="overview"></a>

## Overview

Use the [automatic](togglestyle/automatic.md) static variable to create this style:

```swift
Toggle("Enhance Sound", isOn: $isEnhanced)
    .toggleStyle(.automatic)
```

## Topics

### Creating the toggle style

- [init()](defaulttogglestyle/init%28%29.md): Creates a default toggle style.

### Supporting types

- [makeBody(configuration:)](defaulttogglestyle/makebody%28configuration_%29.md): Creates a view that represents the body of a toggle.

## Relationships

### Conforms To

- [ToggleStyle](togglestyle.md)

## See Also

### Supporting types

- [ButtonToggleStyle](buttontogglestyle.md): A toggle style that displays as a button with its label as the title.
- [CheckboxToggleStyle](checkboxtogglestyle.md): A toggle style that displays a checkbox followed by its label.
- [SwitchToggleStyle](switchtogglestyle.md): A toggle style that displays a leading label and a trailing switch.
