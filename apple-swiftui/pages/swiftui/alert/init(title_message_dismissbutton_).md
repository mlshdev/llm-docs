> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/alert/init(title:message:dismissbutton:)

# init(title:message:dismissButton:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Creates an alert with one button.

> Use a [View](../view.md) modifier like [alert(\_:isPresented:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/alert%28_:ispresented:presenting:actions:message:%29-8584l) instead.

## Declaration

```swift
init(title: Text, message: Text? = nil, dismissButton: Alert.Button? = nil)
```

## Parameters

- `title`: The title of the alert.
- `message`: The message to display in the body of the alert.
- `dismissButton`: The button that dismisses the alert.

## See Also

### Creating an alert

- [init(title:message:primaryButton:secondaryButton:)](init%28title_message_primarybutton_secondarybutton_%29.md): Deprecated. Creates an alert with two buttons.
- [sideBySideButtons(title:message:primaryButton:secondaryButton:)](sidebysidebuttons%28title_message_primarybutton_secondarybutton_%29.md): Deprecated. Creates a side by side button alert.
