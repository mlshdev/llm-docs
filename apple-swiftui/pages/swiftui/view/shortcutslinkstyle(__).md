> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/shortcutslinkstyle(_:)](https://developer.apple.com/documentation/swiftui/view/shortcutslinkstyle(_:))

# shortcutsLinkStyle(\_:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the given style for ShortcutsLinks within the view hierarchy

## Declaration

```swift
nonisolated func shortcutsLinkStyle(_ style: ShortcutsLinkStyle) -> some View

```

## Parameters

- `style`: The style to set.

<a id="return-value"></a>

## Return Value

A view that uses the specified shortcuts button style on its child views.

## See Also

### App intents

- [appEntityIdentifier(\_:)](appentityidentifier%28__%29.md): Associates a SwiftUI view with an app entity to make its content discoverable by Apple Intelligence and Siri.
- [appEntityIdentifier(forSelectionType:identifier:)](appentityidentifier%28forselectiontype_identifier_%29.md): Associates the items in a SwiftUI list view with app entities to make them discoverable by Apple Intelligence and Siri.
- [appEntityUIElements(\_:)](appentityuielements%28__%29.md): Provides the system with additional context to make a custom view’s content discoverable by Apple Intelligence and Siri.
- [onAppIntentExecution(\_:perform:)](onappintentexecution%28__perform_%29.md): Registers a handler to invoke in response to the specified app intent that your app receives.
- [siriTipViewStyle(\_:)](siritipviewstyle%28__%29.md): Sets the given style for SiriTipView within the view hierarchy
