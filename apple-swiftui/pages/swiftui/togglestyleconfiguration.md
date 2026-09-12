> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/togglestyleconfiguration](https://developer.apple.com/documentation/swiftui/togglestyleconfiguration)

# ToggleStyleConfiguration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The properties of a toggle instance.

## Declaration

```swift
struct ToggleStyleConfiguration
```

<a id="overview"></a>

## Overview

When you define a custom toggle style by creating a type that conforms to the [ToggleStyle](togglestyle.md) protocol, you implement the [makeBody(configuration:)](togglestyle/makebody%28configuration_%29.md) method. That method takes a `ToggleStyleConfiguration` input that has the information you need to define the behavior and appearance of a [Toggle](toggle.md).

The configuration structure’s [label](togglestyleconfiguration/label-swift.property.md) reflects the toggle’s content, which might be the value that you supply to the `label` parameter of the [init(isOn:label:)](toggle/init%28ison_label_%29.md) initializer. Alternatively, it could be another view that SwiftUI builds from an initializer that takes a string input, like [init(\_:isOn:)](toggle/init%28__ison_%29.md). In either case, incorporate the label into the toggle’s view to help the user understand what the toggle does. For example, the built-in [switch](togglestyle/switch.md) style horizontally stacks the label with the control element.

The structure’s [isOn](togglestyleconfiguration/ison.md) property provides a [Binding](binding.md) to the state of the toggle. Adjust the appearance of the toggle based on this value. For example, the built-in [button](togglestyle/button.md) style fills the button’s background when the property is `true`, but leaves the background empty when the property is `false`. Change the value when the user performs an action that’s meant to change the toggle, like the button does when tapped or clicked by the user.

## Topics

### Getting the label view

- [label](togglestyleconfiguration/label-swift.property.md): A view that describes the effect of switching the toggle between states.
- [ToggleStyleConfiguration.Label](togglestyleconfiguration/label-swift.struct.md): A type-erased label of a toggle.

### Managing the toggle state

- [isMixed](togglestyleconfiguration/ismixed.md): Whether the [Toggle](toggle.md) is currently in a mixed state.
- [isOn](togglestyleconfiguration/ison.md): A binding to a state property that indicates whether the toggle is on.
- [$isOn](togglestyleconfiguration/$ison.md)

## See Also

### Styling toggles

- [toggleStyle(\_:)](view/togglestyle%28__%29.md): Sets the style for toggles in a view hierarchy.
- [ToggleStyle](togglestyle.md): The appearance and behavior of a toggle.
