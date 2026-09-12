> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alert/sidebysidebuttons(title:message:primarybutton:secondarybutton:)](https://developer.apple.com/documentation/swiftui/alert/sidebysidebuttons(title:message:primarybutton:secondarybutton:))

# sideBySideButtons(title:message:primaryButton:secondaryButton:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates a side by side button alert.

> Use a [View](../view.md) modifier like [alert(\_:isPresented:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:ispresented:presenting:actions:message:%29-8584l) instead.

## Declaration

```swift
static func sideBySideButtons(title: Text, message: Text? = nil, primaryButton: Alert.Button, secondaryButton: Alert.Button) -> Alert
```

## Parameters

- `title`: The title of the alert.
- `message`: The message to display in the body of the alert.
- `primaryButton`: The first button to show in the alert.
- `secondaryButton`: The second button to show in the alert.

<a id="discussion"></a>

## Discussion

The system determines the visual ordering of the buttons.

## See Also

### Creating an alert

- [init(title:message:dismissButton:)](init%28title_message_dismissbutton_%29.md): Deprecated. Creates an alert with one button.
- [init(title:message:primaryButton:secondaryButton:)](init%28title_message_primarybutton_secondarybutton_%29.md): Deprecated. Creates an alert with two buttons.
