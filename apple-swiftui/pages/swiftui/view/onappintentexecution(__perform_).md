> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/onappintentexecution(_:perform:)

# onAppIntentExecution(\_:perform:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Registers a handler to run when the app receives an app intent that targets the associated scene.

## Declaration

```swift
nonisolated func onAppIntentExecution<I>(_ intent: I.Type = I.self, perform action: @escaping @MainActor (I) -> Void) -> some View where I : TargetContentProvidingIntent

```

## Parameters

- `intent`: The type of app intent that the `action` closure handles.
- `action`: A closure for SwiftUI to call when it receives the specified type of app intent. The closure takes the received app intent instance as an input parameter.

<a id="return-value"></a>

## Return Value

A view that handles the specified app intent.

<a id="discussion"></a>

## Discussion

Add this modifier to a view and use it to receive app intents intended for one of your scenes. In your handler, use the contents of the app intent to configure the views of your scene. For example, retrieve the item from an `OpenIntent` type and display it in your views. Your closure runs before the app comes to the foreground and before the system calls the app intent’s `AppIntent/perform()` method, so you can use the closure to configure your interface in advance.

> **Note**

> In your closure, you can inspect the parameter values of the app intent, but cannot perform interactive requests with it. For example, you can’t call the [requestValue(\_:)](https://developer.apple.com/documentation/appintents/intentparameter/requestvalue%28_:%29-592nd) or [needsValueError(\_:)](https://developer.apple.com/documentation/appintents/intentparameter/needsvalueerror%28_:%29) methods.

To route app intents to a particular scene, add the [handlesExternalEvents(preferring:allowing:)](handlesexternalevents%28preferring_allowing_%29.md) modifier to your view or the [handlesExternalEvents(matching:)](../scene/handlesexternalevents%28matching_%29.md) modifier to your [Scene](../scene.md) type. For each modifier, you supply one or more strings to match against the target content modifier of an incoming app intent. SwiftUI delivers only matching app intents to this modifier.

## See Also

### App intents

- [appEntityIdentifier(\_:)](appentityidentifier%28__%29.md): Associates a SwiftUI view with an app entity to make its content discoverable by Apple Intelligence and Siri.
- [appEntityIdentifier(forSelectionType:identifier:)](appentityidentifier%28forselectiontype_identifier_%29.md): Associates the items in a SwiftUI list view with app entities to make them discoverable by Apple Intelligence and Siri.
- [appEntityUIElements(\_:)](appentityuielements%28__%29.md): Provides the system with additional context to make a custom view’s content discoverable by Apple Intelligence and Siri.
- [shortcutsLinkStyle(\_:)](shortcutslinkstyle%28__%29.md): Sets the given style for ShortcutsLinks within the view hierarchy
- [siriTipViewStyle(\_:)](siritipviewstyle%28__%29.md): Sets the given style for SiriTipView within the view hierarchy
