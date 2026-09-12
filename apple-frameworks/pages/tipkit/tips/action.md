> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tips/action](https://developer.apple.com/documentation/tipkit/tips/action)

# Action

**Framework:** TipKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that describes a control associated with a tip.

## Declaration

```swift
struct Action
```

<a id="Overview"></a>

## Overview

Use actions to provide additional help and guidance for people looking to get started with your tip. Actions appear at the bottom of your [TipView](../tipview.md) in the form of buttons.

You create an action by providing an `id` and a `title`. The `id` is a string that uniquely identifies the action. The `title` is text that displays as the label on the button.

You can pass a function for the system to call when the action triggers by setting the `perform` attribute in the [init(id:title:perform:)](action/init%28id_title_perform_%29.md) initializer. Or you can set the action parameter in the [init(\_:arrowEdge:action:)](../tipview/init%28__arrowedge_action_%29.md) initializer of your [TipView](../tipview.md).

## Topics

### Initializers

- [init(id:perform:\_:)](action/init%28id_perform___%29.md): Creates a tip action that displays a custom label.
- [init(id:title:perform:)](action/init%28id_title_perform_%29.md): Creates a tip action that generates its label from a string.

### Instance Properties

- [handler](action/handler.md)
- [id](action/id.md): The identifier for a tip’s action.
- [index](action/index.md)
- [label](action/label.md)

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
