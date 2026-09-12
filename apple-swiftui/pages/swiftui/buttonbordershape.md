> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonbordershape](https://developer.apple.com/documentation/swiftui/buttonbordershape)

# ButtonBorderShape

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A shape used to draw a button’s border.

## Declaration

```swift
struct ButtonBorderShape
```

<a id="overview"></a>

## Overview

Use the [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md) view modifier to apply the shape to bordered buttons within a view hierarchy.

## Topics

### Getting border shapes

- [automatic](buttonbordershape/automatic.md): A shape that defers to the system to determine an appropriate shape for the given context and platform.
- [capsule](buttonbordershape/capsule.md): A capsule shape.
- [circle](buttonbordershape/circle.md): A circular shape.
- [roundedRectangle](buttonbordershape/roundedrectangle.md): A rounded rectangle shape.
- [roundedRectangle(radius:)](buttonbordershape/roundedrectangle%28radius_%29.md): A rounded rectangle shape.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InsettableShape](insettableshape.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Creating buttons

- [Button](button.md): A control that initiates an action.
- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md): Sets the border shape for buttons in this view.
- [buttonRepeatBehavior(\_:)](view/buttonrepeatbehavior%28__%29.md): Sets whether buttons in this view should repeatedly trigger their actions on prolonged interactions.
- [ButtonRepeatBehavior](buttonrepeatbehavior.md): The options for controlling the repeatability of button actions.
- [buttonRepeatBehavior](environmentvalues/buttonrepeatbehavior.md): Whether buttons with this associated environment should repeatedly trigger their actions on prolonged interactions.
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
- [ButtonRole](buttonrole.md): A value that describes the purpose of a button.
