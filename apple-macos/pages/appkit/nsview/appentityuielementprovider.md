> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/appentityuielementprovider](https://developer.apple.com/documentation/appkit/nsview/appentityuielementprovider)

# appEntityUIElementProvider

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A closure that provides app entity identifiers to make custom view content discoverable by Apple Intelligence and Siri when it appears onscreen.

## Declaration

```swift
@MainActor @preconcurrency var appEntityUIElementProvider: ((NSView, AppEntityUIElementsContext) -> [AppEntityUIElement])? { get set }
```

<a id="discussion"></a>

## Discussion

Dynamically provide app entity identifiers for a custom view where your app manages state for the user interface or you use custom drawing to render the interface. For example, you might use a custom list or tab implementation and manage selection and other states in the app, or you might use Metal to render the interface. If either applies to your app’s interface, make content discoverable by Apple Intelligence and Siri using `appEntityUIElementProvider` and provide the system with a list of `AppEntityUIElements`.

> **Note**

> The order of the returned elements isn’t relevant.

If your custom view shows content you can describe with a single app entity, use the `appEntityIdentifier` property instead to associate the app entity with your custom view.

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](https://developer.apple.com/documentation/appintents).
