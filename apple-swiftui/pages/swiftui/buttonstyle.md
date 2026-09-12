> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonstyle](https://developer.apple.com/documentation/swiftui/buttonstyle)

# ButtonStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that applies standard interaction behavior and a custom appearance to all buttons within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol ButtonStyle
```

<a id="overview"></a>

## Overview

To configure the current button style for a view hierarchy, use the [buttonStyle(\_:)](view/buttonstyle%28__%29.md) modifier. Specify a style that conforms to `ButtonStyle` when creating a button that uses the standard button interaction behavior defined for each platform. To create a button with custom interaction behavior, use [PrimitiveButtonStyle](primitivebuttonstyle.md) instead.

## Topics

### Custom button styles

- [makeBody(configuration:)](buttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.
- [ButtonStyle.Configuration](buttonstyle/configuration.md): The properties of a button.
- [Body](buttonstyle/body.md): A view that represents the body of a button.

## See Also

### Styling buttons

- [buttonStyle(\_:)](view/buttonstyle%28__%29.md): Sets the style for buttons within this view to a button style with a custom appearance and standard interaction behavior.
- [ButtonStyleConfiguration](buttonstyleconfiguration.md): The properties of a button.
- [PrimitiveButtonStyle](primitivebuttonstyle.md): A type that applies custom interaction behavior and a custom appearance to all buttons within a view hierarchy.
- [PrimitiveButtonStyleConfiguration](primitivebuttonstyleconfiguration.md): The properties of a button.
- [signInWithAppleButtonStyle(\_:)](view/signinwithapplebuttonstyle%28__%29.md): Sets the style used for displaying the control (see `SignInWithAppleButton.Style`).
- [buttonSizing(\_:)](view/buttonsizing%28__%29.md): The preferred sizing behavior of buttons in the view hierarchy.
- [ButtonSizing](buttonsizing.md): The sizing behavior of `Button`s and other button-like controls.
