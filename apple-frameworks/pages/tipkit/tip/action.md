> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/action](https://developer.apple.com/documentation/tipkit/tip/action)

# Action

**Framework:** TipKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that describes a control associated with a tip.

## Declaration

```swift
typealias Action = Tips.Action
```

<a id="Overview"></a>

## Overview

Use actions to provide additional help and guidance for people looking to get started with your tip. Actions appear at the bottom of your [TipView](../tipview.md) in the form of buttons.

You create an action by providing an `id` and a `title`. The `id` is a string that uniquely identifies the action. The `title` is text that displays as the label on the button.

You can pass a function for the system to call when the action triggers by setting the `perform` attribute in the [init(id:title:perform:)](../tips/action/init%28id_title_perform_%29.md) initializer. Or you can set the action parameter in the [init(\_:arrowEdge:action:)](../tipview/init%28__arrowedge_action_%29.md) initializer of your [TipView](../tipview.md).

## Topics

### Initializers

- [init(id:perform:\_:)](../tips/action/init%28id_perform___%29.md): Creates a tip action that displays a custom label.
- [init(id:title:perform:)](../tips/action/init%28id_title_perform_%29.md): Creates a tip action that generates its label from a string.

## See Also

### Providing actions

- [actions](actions.md): Buttons that help people get started or learn more about your feature.
