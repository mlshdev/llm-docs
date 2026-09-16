> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/actionsheet/init(title:message:buttons:)

# init(title:message:buttons:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

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
