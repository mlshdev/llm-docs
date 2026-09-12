> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/primitivebuttonstyle](https://developer.apple.com/documentation/swiftui/primitivebuttonstyle)

# PrimitiveButtonStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that applies custom interaction behavior and a custom appearance to all buttons within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol PrimitiveButtonStyle
```

<a id="overview"></a>

## Overview

To configure the current button style for a view hierarchy, use the [buttonStyle(\_:)](view/buttonstyle%28__%29.md) modifier. Specify a style that conforms to `PrimitiveButtonStyle` to create a button with custom interaction behavior. To create a button with the standard button interaction behavior defined for each platform, use [ButtonStyle](buttonstyle.md) instead.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in button styles

- [automatic](primitivebuttonstyle/automatic.md): Conforms when `Self` is `DefaultButtonStyle`. The default button style, based on the button’s context.
- [accessoryBar](primitivebuttonstyle/accessorybar.md): Conforms when `Self` is `AccessoryBarButtonStyle`. A button style that is typically used in the context of an accessory toolbar (sometimes refererred to as a “scope bar”), for buttons that narrow the focus of a search or other operation.
- [accessoryBarAction](primitivebuttonstyle/accessorybaraction.md): Conforms when `Self` is `AccessoryBarActionButtonStyle`. A button style that you use for extra actions in an accessory toolbar.
- [bordered](primitivebuttonstyle/bordered.md): Conforms when `Self` is `BorderedButtonStyle`. A button style that applies the standard border style based on the button’s context.
- [borderedProminent](primitivebuttonstyle/borderedprominent.md): Conforms when `Self` is `BorderedProminentButtonStyle`. A button style that applies the standard bordered prominent style based on the button’s context.
- [borderless](primitivebuttonstyle/borderless.md): Conforms when `Self` is `BorderlessButtonStyle`. A button style that doesn’t apply a border.
- [card](primitivebuttonstyle/card.md): Conforms when `Self` is `CardButtonStyle`. A button style that doesn’t pad the content, and applies a Liquid Glass effect when the button has focus.
- [glass](primitivebuttonstyle/glass.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a Liquid Glass effect based on the button’s context.
- [glassProminent](primitivebuttonstyle/glassprominent.md): Conforms when `Self` is `GlassProminentButtonStyle`. A button style that applies a prominent Liquid Glass effect based on the button’s context.
- [glass(\_:)](primitivebuttonstyle/glass%28__%29.md): Conforms when `Self` is `GlassButtonStyle`. A button style that applies a configurable Liquid Glass effect based on the button’s context.
- [link](primitivebuttonstyle/link.md): Conforms when `Self` is `LinkButtonStyle`. A button style for buttons that emulate links.
- [plain](primitivebuttonstyle/plain.md): Conforms when `Self` is `PlainButtonStyle`. A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

### Creating custom button styles

- [makeBody(configuration:)](primitivebuttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.
- [PrimitiveButtonStyle.Configuration](primitivebuttonstyle/configuration.md): The properties of a button.
- [Body](primitivebuttonstyle/body.md): A view that represents the body of a button.

### Supporting types

- [DefaultButtonStyle](defaultbuttonstyle.md): The default button style, based on the button’s context.
- [AccessoryBarButtonStyle](accessorybarbuttonstyle.md): A button style that you use for actions in an accessory toolbar that narrow the focus of a search or other operation.
- [AccessoryBarActionButtonStyle](accessorybaractionbuttonstyle.md): A button style that you use for extra actions in an accessory toolbar.
- [BorderedButtonStyle](borderedbuttonstyle.md): A button style that applies standard border artwork based on the button’s context.
- [BorderedProminentButtonStyle](borderedprominentbuttonstyle.md): A button style that applies standard border prominent artwork based on the button’s context.
- [BorderlessButtonStyle](borderlessbuttonstyle.md): A button style that doesn’t apply a border.
- [CardButtonStyle](cardbuttonstyle.md): A button style that doesn’t pad the content, and applies a motion effect when a button has focus.
- [LinkButtonStyle](linkbuttonstyle.md): A button style for buttons that emulate links.
- [PlainButtonStyle](plainbuttonstyle.md): A button style that doesn’t style or decorate its content while idle, but may apply a visual effect to indicate the pressed, focused, or enabled state of the button.

## Relationships

### Conforming Types

- [AccessoryBarActionButtonStyle](accessorybaractionbuttonstyle.md)
- [AccessoryBarButtonStyle](accessorybarbuttonstyle.md)
- [BorderedButtonStyle](borderedbuttonstyle.md)
- [BorderedProminentButtonStyle](borderedprominentbuttonstyle.md)
- [BorderlessButtonStyle](borderlessbuttonstyle.md)
- [CardButtonStyle](cardbuttonstyle.md)
- [DefaultButtonStyle](defaultbuttonstyle.md)
- [GlassButtonStyle](glassbuttonstyle.md)
- [GlassProminentButtonStyle](glassprominentbuttonstyle.md)
- [LinkButtonStyle](linkbuttonstyle.md)
- [PlainButtonStyle](plainbuttonstyle.md)

## See Also

### Styling buttons

- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [ButtonStyle](buttonstyle.md): A type that applies standard interaction behavior and a custom appearance to all buttons within a view hierarchy.
- [ButtonStyleConfiguration](buttonstyleconfiguration.md): The properties of a button.
- [PrimitiveButtonStyleConfiguration](primitivebuttonstyleconfiguration.md): The properties of a button.
- [signInWithAppleButtonStyle(\_:)](view/signinwithapplebuttonstyle%28__%29.md): Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
