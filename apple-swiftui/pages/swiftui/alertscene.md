> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alertscene](https://developer.apple.com/documentation/swiftui/alertscene)

# AlertScene

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 15.0+

A scene that renders itself as a standalone alert dialog.

## Declaration

```swift
nonisolated struct AlertScene<Actions, Message> where Actions : View, Message : View
```

<a id="overview"></a>

## Overview

Alert scenes present themselves in the center of the current display, and don’t attach to any particular window. The system prevents interaction with the app until someone dismisses the alert scene.

```swift
@main
struct MyApp: App {
    @State var showLoginAlert = true
    @State var loggedIn = false

    var body: some Scene {
        Window("Welcome User Window", id:"WelcomeWindow") {
            ...
        }
        .defaultLaunchBehavior(loggedIn ? .presented : .suppressed)

        AlertScene("Login Required", isPresented: $showLoginAlert) {
            Button("OK") {
                ...
            }
        }
    }
}
```

All the actions you provide in the [ContentBuilder](contentbuilder.md) dismiss the alert when someone invokes them. Like the alert modifier, specify the role of the buttons with [cancel](buttonrole/cancel.md) or [destructive](buttonrole/destructive.md). If you don’t provide any actions, the system automatically includes a button with the title “OK” that dismisses the alert scene.

## Topics

### Initializers

- [init(\_:isPresented:actions:)](alertscene/init%28__ispresented_actions_%29.md): Creates an alert scene with a title and a set of actions. Note that this creates a text view on your behalf.
- [init(\_:isPresented:actions:message:)](alertscene/init%28__ispresented_actions_message_%29.md): Creates an alert scene with a title, a set of actions, and a message. Note that this creates a text view on your behalf.
- [init(\_:isPresented:presenting:actions:)](alertscene/init%28__ispresented_presenting_actions_%29.md): Creates an alert scene, using the given data to produce the alert’s content with a title, and a set of actions. Note that this creates a text view on your behalf.
- [init(\_:isPresented:presenting:actions:message:)](alertscene/init%28__ispresented_presenting_actions_message_%29.md): Creates an alert scene, using the given data to produce the alert’s content with a title, a set of actions, and a message. Note that this creates a text view on your behalf.
- [init(\_:item:actions:)](alertscene/init%28__item_actions_%29.md): Creates an alert scene, using the given data to produce the alert’s content with a title, and a set of actions. Note that this creates a text view on your behalf.
- [init(\_:item:actions:message:)](alertscene/init%28__item_actions_message_%29.md): Creates an alert scene, using the given data to produce the alert’s content with a title, a set of actions, and a message. Note that this creates a text view on your behalf.

## Relationships

### Conforms To

- [Scene](scene.md)

## See Also

### Presenting an alert

- [alert(\_:isPresented:actions:)](view/alert%28__ispresented_actions_%29.md): Presents an alert when a given condition is true, using a localized string resource for the title.
- [alert(\_:isPresented:presenting:actions:)](view/alert%28__ispresented_presenting_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:)](view/alert%28__item_actions_%29.md): Presents an alert using the given data to produce the alert’s content and a text view as a title.
- [alert(error:actions:)](view/alert%28error_actions_%29.md): Presents an alert when an error is present.
- [alert(isPresented:error:actions:)](view/alert%28ispresented_error_actions_%29.md): Presents an alert when an error is present.
- [alert(\_:isPresented:actions:message:)](view/alert%28__ispresented_actions_message_%29.md): Presents an alert with a message when a given condition is true, using a localized string resource for a title.
- [alert(\_:isPresented:presenting:actions:message:)](view/alert%28__ispresented_presenting_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string resource for a title.
- [alert(\_:item:actions:message:)](view/alert%28__item_actions_message_%29.md): Presents an alert with a message using the given data to produce the alert’s content and a localized string key for a title.
- [alert(error:actions:message:)](view/alert%28error_actions_message_%29.md): Presents an alert with a message when an error is present.
- [alert(isPresented:error:actions:message:)](view/alert%28ispresented_error_actions_message_%29.md): Presents an alert with a message when an error is present.
