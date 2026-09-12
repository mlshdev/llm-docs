> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/suggestedactions/suggestedactionsview](https://developer.apple.com/documentation/suggestedactions/suggestedactionsview)

# SuggestedActionsView

**Framework:** Suggested Actions  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A view that displays suggested actions for a message.

## Declaration

```swift
@MainActor struct SuggestedActionsView
```

<a id="overview"></a>

## Overview

The suggested actions view displays inline actions for a messaging app, next to a message, using context you provide. This view animates suggested actions as they become available. If no suggested actions are available, the view’s size is zero and remains zero until they become available. At size zero, a `SuggestedActionsView` doesn’t affect your surrounding layout. As a result, place the view for every message in a conversation. It doesn’t introduce gaps between messages if a message doesn’t have suggested actions.

> **Note**

> To display suggested actions, add the [Suggested Actions](../bundleresources/entitlements/com.apple.developer.suggested-actions.md) entitlement to your app target.

<a id="Customize-the-appearance"></a>

## Customize the appearance

To customize a `SuggestedActionsView`, apply standard SwiftUI view modifiers to change its appearance. Additionally, the view reads the following modifiers from its parent views:

- [tint(\_:)](https://developer.apple.com/documentation/swiftui/view/tint%28_:%29),
- [foregroundStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/foregroundstyle%28_:%29),
- [font(\_:)](https://developer.apple.com/documentation/swiftui/view/font%28_:%29)
- [buttonBorderShape(\_:)](https://developer.apple.com/documentation/swiftui/view/buttonbordershape%28_:%29)

<a id="Generate-suggested-actions-for-future-use"></a>

## Generate suggested actions for future use

To avoid showing a loading state when the view appears, call [generate(message:previousMessages:)](suggestedactionsview/generate%28message_previousmessages_%29.md) to let the Suggested Actions framework create suggested actions and cache them for future use. When you later initialize a `SuggestedActionsView`, the framework checks the `id` of cached suggested actions based on their messages’ `id` property. If it finds an `id` that matches the `id` of a new [SuggestedActionsMessage](suggestedactionsmessage.md), the system uses the already generated suggested action.

The following example shows how an app might show a `SuggestedActionsView` with information about previous messages using a capsule border shape, blue tint, and the callout font style:

```swift
SuggestedActionsView(
    message: message.suggestedActionsMessage,
    previousMessages: message.previousMessages
        .suffix(SuggestedActionsMessage.previousMessagesLimit)
        .map(\.suggestedActionsMessage)
)
.buttonBorderShape(.capsule)
.tint(.blue)
.font(.callout)
```

## Topics

### Displaying suggested actions

- [init(message:previousMessages:)](suggestedactionsview/init%28message_previousmessages_%29.md): Creates a view that shows suggested actions for the specified message.
- [generate(message:previousMessages:)](suggestedactionsview/generate%28message_previousmessages_%29.md): Fetches and caches suggested actions for the provided message.
- [SuggestedActionsMessage](suggestedactionsmessage.md): A representation of the message you use as context for suggested actions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
