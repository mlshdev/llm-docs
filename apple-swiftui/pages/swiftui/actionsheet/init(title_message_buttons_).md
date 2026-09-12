> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/actionsheet/init(title:message:buttons:)](https://developer.apple.com/documentation/swiftui/actionsheet/init(title:message:buttons:))

# init(title:message:buttons:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates an action sheet with the provided buttons.

> Use a [View](../view.md) modifier like [confirmationDialog(\_:isPresented:titleVisibility:presenting:actions:message:)](https://developer.apple.com/documentation/swiftui/view/confirmationdialog%28_:ispresented:titlevisibility:presenting:actions:message:%29-8y541) instead.

## Declaration

```swift
init(title: Text, message: Text? = nil, buttons: [ActionSheet.Button] = [.cancel()])
```

## Parameters

- `title`: The title of the action sheet.
- `message`: The message to display in the body of the action sheet.
- `buttons`: The buttons to show in the action sheet.
