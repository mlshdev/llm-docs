> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onappintentexecution(_:perform:)](https://developer.apple.com/documentation/swiftui/view/onappintentexecution(_:perform:))

# onAppIntentExecution(\_:perform:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Registers a handler to invoke in response to the specified app intent that your app receives.

## Declaration

```swift
nonisolated func onAppIntentExecution<I>(_ intent: I.Type = I.self, perform action: @escaping @MainActor (I) -> Void) -> some View where I : TargetContentProvidingIntent

```

## Parameters

- `intent`: The type of App Intent that the `action` closure handles.
- `action`: A closure that SwiftUI calls when the specified app intent is being performed. The closure takes the app intent instance as an input parameter.

<a id="return-value"></a>

## Return Value

A view that handles the specified app intent’s perform

<a id="discussion"></a>

## Discussion

Use this view modifier to receive instances in a particular scene within your app. The scene that SwiftUI routes the incoming user activity to depends on the structure of your app, what scenes are active, and other configuration. For more information, see [handlesExternalEvents(matching:)](../scene/handlesexternalevents%28matching_%29.md).

The action closure is called before the app is foregrounded. If the app intent implements a perform() method, it will be called after the action closure. This can be useful if your app intent supports running in the background via the AppIntent.IntentModes API.

> **Note**

> Usage of the app intent instance provided to the action closure is limited to inspecting parameter values, interactive requests like [requestValue(\_:)](https://developer.apple.com/documentation/appintents/intentparameter/requestvalue%28_:%29-592nd) or [needsValueError(\_:)](https://developer.apple.com/documentation/appintents/intentparameter/needsvalueerror%28_:%29) doesn’t work.

## See Also

### App intents

- [appEntityIdentifier(\_:)](appentityidentifier%28__%29.md): Associates a SwiftUI view with an app entity to make its content discoverable by Apple Intelligence and Siri.
- [appEntityIdentifier(forSelectionType:identifier:)](appentityidentifier%28forselectiontype_identifier_%29.md): Associates the items in a SwiftUI list view with app entities to make them discoverable by Apple Intelligence and Siri.
- [appEntityUIElements(\_:)](appentityuielements%28__%29.md): Provides the system with additional context to make a custom view’s content discoverable by Apple Intelligence and Siri.
- [shortcutsLinkStyle(\_:)](shortcutslinkstyle%28__%29.md): Sets the given style for ShortcutsLinks within the view hierarchy
- [siriTipViewStyle(\_:)](siritipviewstyle%28__%29.md): Sets the given style for SiriTipView within the view hierarchy
