> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchos-apps/enabling-double-tap](https://developer.apple.com/documentation/watchos-apps/enabling-double-tap)

# Enabling the double-tap gesture on Apple Watch

**Kind:** Article

Customize your app’s response to the double-tap gesture on Apple Watch.

<a id="Overview"></a>

## Overview

On Apple Watch Series 9 and Apple Watch Ultra 2, people can trigger a scene’s primary action by tapping their index finger and thumb together twice. In watchOS 11 and later, you can assign a buttonlike control, such as a [Button](https://developer.apple.com/documentation/swiftui/button) or [Toggle](https://developer.apple.com/documentation/swiftui/toggle) as the scene’s primary action, customizing how your app responds to double tap.

<a id="Take-advantage-of-system-behaviors"></a>

### Take advantage of system behaviors

Your app receives the default double-tap behaviors automatically. With double tap, people can scroll through lists and scroll views. They can also page through a vertical tab bar. In general, if your scene contains lists, vertical tab views, or scroll views, the system can handle the gesture for your app.

<a id="Declare-a-primary-action"></a>

### Declare a primary action

If your scene has an obvious main action, you can designate it as the primary action using the [handGestureShortcut(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/handgestureshortcut%28_:isenabled:%29) modifier and passing the [primaryAction](https://developer.apple.com/documentation/swiftui/handgestureshortcut/primaryaction) as the parameter.

```swift
Button ("Start Activity") {
    startActivity = true
}
// Set this button as the primary action for double tap.
.handGestureShortcut(.primaryAction)
```

When double tap triggers your primary action, the system automatically highlights the affected control. It calculates the shape of the highlighted area based on the control’s content. If you need to customize the highlight, use a [clipShape(\_:style:)](https://developer.apple.com/documentation/swiftui/view/clipshape%28_:style:%29) to modify the control’s shape.

You can add the primary action modifier to any buttonlike control, such as buttons, toggles, navigation links, or text fields. You can even add it to widgets and live activities that appear in the Smart Stack, including remote live activities from iOS. However, you can only assign one primary action per scene. If the scene has multiple items that can interact with double tap, such as a primary action inside a scroll view, the system determines the effect based on the following priorities:

1. Primary action
2. Scroll view
3. Vertical tab pagination

> **Important**

> Double tap only triggers your primary action if the control is on screen. Otherwise, the system scrolls towards the control one page at a time.

The [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/gestures#watchOS) has additional design guidance.

## See Also

### Related Documentation

- [Gestures](https://developer.apple.com/design/human-interface-guidelines/gestures): A gesture is a physical motion that a person uses to directly affect an object in an app or game on their device.
- [handGestureShortcut(\_:isEnabled:)](https://developer.apple.com/documentation/swiftui/view/handgestureshortcut%28_:isenabled:%29): Assigns a hand gesture shortcut to the modified control.
- [primaryAction](https://developer.apple.com/documentation/swiftui/handgestureshortcut/primaryaction): The hand gesture shortcut for the primary action.
- [clipShape(\_:style:)](https://developer.apple.com/documentation/swiftui/view/clipshape%28_:style:%29): Sets a clipping shape for this view.
- [verticalPage](https://developer.apple.com/documentation/swiftui/tabviewstyle/verticalpage): A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.

### App experience

- [Setting up a watchOS project](setting-up-a-watchos-project.md): Create a new watchOS project or add a watch target to an existing iOS project.
- [Creating independent watchOS apps](creating-independent-watchos-apps.md): Set up a watchOS app that installs and runs without a companion iOS app.
- [Keeping your watchOS content up to date](keeping-your-watchos-app-s-content-up-to-date.md): Ensure that your app’s content is relevant and up to date.
- [Updating watchOS apps with timelines](updating-watchos-apps-with-timelines.md): Seamlessly schedule updates to your user interface, even while it’s inactive.
- [Authenticating users on Apple Watch](authenticating-users-on-apple-watch.md): Create an account sign-up and sign-in strategy for your app.
- [Responding to the Action button on Apple Watch Ultra](https://developer.apple.com/documentation/appintents/actionbuttonarticle): Use App Intents to register actions for your app.
