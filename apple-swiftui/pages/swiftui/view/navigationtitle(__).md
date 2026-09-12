> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationtitle(_:)](https://developer.apple.com/documentation/swiftui/view/navigationtitle(_:))

# navigationTitle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the view’s title for purposes of navigation, using a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated func navigationTitle(_ titleResource: LocalizedStringResource) -> some View

```

## Parameters

- `titleResource`: The key to a localized string to display.

<a id="discussion"></a>

## Discussion

A view’s navigation title is used to visually display the current navigation state of an interface. On iOS and watchOS, when a view is navigated to inside of a navigation view, that view’s title is displayed in the navigation bar. On iPadOS, the primary destination’s navigation title is reflected as the window’s title in the App Switcher. Similarly on macOS, the primary destination’s title is used as the window title in the titlebar, Windows menu and Mission Control.

Refer to the [Configure your apps navigation titles](../configure-your-apps-navigation-titles.md) article for more information on navigation title modifiers.

## See Also

### Setting titles for navigation content

- [navigationSubtitle(\_:)](navigationsubtitle%28__%29.md): Configures the view’s subtitle for purposes of navigation, using a localized string resource.
- [navigationDocument(\_:)](navigationdocument%28__%29.md): Configures the view’s document for purposes of navigation.
- [navigationDocument(\_:preview:)](navigationdocument%28__preview_%29.md): Configures the view’s document for purposes of navigation.
