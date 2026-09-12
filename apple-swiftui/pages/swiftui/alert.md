> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alert](https://developer.apple.com/documentation/swiftui/alert)

# Alert

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

A representation of an alert presentation.

> Use a [View](view.md) modifier like [alert(\_:isPresented:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:ispresented:presenting:actions:message:%29-8584l) instead.

## Declaration

```swift
struct Alert
```

<a id="overview"></a>

## Overview

Use an alert when you want the user to act in response to the state of the app or system. If you want the user to make a choice in response to their action, use an [ActionSheet](actionsheet.md) instead.

You show an alert by using the [alert(isPresented:content:)](view/alert%28ispresented_content_%29.md) view modifier to create an alert, which then appears whenever the bound `isPresented` value is `true`. The `content` closure you provide to this modifer produces a customized instance of the `Alert` type.

In the following example, a button presents a simple alert when tapped, by updating a local `showAlert` property that binds to the alert.

```swift
@State private var showAlert = false
var body: some View {
    Button("Tap to show alert") {
        showAlert = true
    }
    .alert(isPresented: $showAlert) {
        Alert(
            title: Text("Current Location Not Available"),
            message: Text("Your current location can’t be " +
                            "determined at this time.")
        )
    }
}
```

![A default alert dialog with the title Current Location Not Available in bold text, the message your current location can’t be determined at this time in smaller text, and a default OK button.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Alert-OK@2x.png)

To customize the alert, add instances of the [Alert.Button](alert/button.md) type, which provides standardized buttons for common tasks like canceling and performing destructive actions. The following example uses two buttons: a default button labeled “Try Again” that calls a `saveWorkoutData` method, and a “Delete” button that calls a destructive `deleteWorkoutData` method.

```swift
@State private var showAlert = false
var body: some View {
    Button("Tap to show alert") {
        showAlert = true
    }
    .alert(isPresented: $showAlert) {
        Alert(
            title: Text("Unable to Save Workout Data"),
            message: Text("The connection to the server was lost."),
            primaryButton: .default(
                Text("Try Again"),
                action: saveWorkoutData
            ),
            secondaryButton: .destructive(
                Text("Delete"),
                action: deleteWorkoutData
            )
        )
    }
}
```

![An alert dialog with the title, Unable to Save Workout Data in bold text, and](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Alert-default-and-destructive@2x.png)

The alert handles its own dismissal when the user taps one of the buttons in the alert, by setting the bound `isPresented` value back to `false`.

## Topics

### Creating an alert

- [init(title:message:dismissButton:)](alert/init%28title_message_dismissbutton_%29.md): Deprecated. Creates an alert with one button.
- [init(title:message:primaryButton:secondaryButton:)](alert/init%28title_message_primarybutton_secondarybutton_%29.md): Deprecated. Creates an alert with two buttons.
- [sideBySideButtons(title:message:primaryButton:secondaryButton:)](alert/sidebysidebuttons%28title_message_primarybutton_secondarybutton_%29.md): Deprecated. Creates a side by side button alert.

### Specifying the button type

- [Alert.Button](alert/button.md): Deprecated. A button that represents an operation of an alert presentation.

## See Also

### Deprecated

- [ActionSheet](actionsheet.md): Deprecated. A representation of an action sheet presentation.
- [fileExporter(isPresented:document:contentType:defaultFilename:onCompletion:)](view/fileexporter%28ispresented_document_contenttype_defaultfilename_oncompletion_%29.md): Deprecated. Presents a system dialog for exporting a document that’s stored in a value type, like a structure, to a file on disk.
- [fileExporter(isPresented:documents:contentType:onCompletion:)](view/fileexporter%28ispresented_documents_contenttype_oncompletion_%29.md): Deprecated. Presents a system dialog for exporting a collection of value type documents to files on disk.
- [fileExporter(isPresented:document:contentTypes:defaultFilename:onCompletion:onCancellation:)](view/fileexporter%28ispresented_document_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md): Deprecated. Presents a system dialog for allowing the user to export a `FileDocument` to a file on disk.
