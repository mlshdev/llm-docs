> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/switchtogglestyle](https://developer.apple.com/documentation/swiftui/switchtogglestyle)

# SwitchToggleStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 6.0+

A toggle style that displays a leading label and a trailing switch.

## Declaration

```swift
nonisolated struct SwitchToggleStyle
```

<a id="overview"></a>

## Overview

Use the [switch](togglestyle/switch.md) static variable to create this style:

```swift
Toggle("Enhance Sound", isOn: $isEnhanced)
    .toggleStyle(.switch)
```

## Topics

### Creating the toggle style

- [init()](switchtogglestyle/init%28%29.md): Creates a switch toggle style.

### Supporting types

- [makeBody(configuration:)](switchtogglestyle/makebody%28configuration_%29.md): Creates a view that represents the body of a toggle switch.

### Deprecated initializers

- [init(tint:)](switchtogglestyle/init%28tint_%29.md): Deprecated. Creates a switch style with a tint color.

## Relationships

### Conforms To

- [ToggleStyle](togglestyle.md)

## See Also

### Supporting types

- [DefaultToggleStyle](defaulttogglestyle.md): The default toggle style.
- [ButtonToggleStyle](buttontogglestyle.md): A toggle style that displays as a button with its label as the title.
- [CheckboxToggleStyle](checkboxtogglestyle.md): A toggle style that displays a checkbox followed by its label.
