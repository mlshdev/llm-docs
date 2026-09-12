> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationsubtitle(_:)](https://developer.apple.com/documentation/swiftui/view/navigationsubtitle(_:))

# navigationSubtitle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 16.0+ · macOS 13.0+

Configures the view’s subtitle for purposes of navigation, using a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated func navigationSubtitle(_ subtitleKey: LocalizedStringResource) -> some View

```

## Parameters

- `subtitleKey`: The key to a localized string to display.

<a id="discussion"></a>

## Discussion

A view’s navigation subtitle is used to provide additional contextual information alongside the navigation title. On macOS, the primary destination’s subtitle is displayed with the navigation title in the titlebar. On iOS and iPadOS, the subtitle is displayed with the navigation title in the navigation bar.

## See Also

### Setting titles for navigation content

- [navigationTitle(\_:)](navigationtitle%28__%29.md): Configures the view’s title for purposes of navigation, using a localized string resource.
- [navigationDocument(\_:)](navigationdocument%28__%29.md): Configures the view’s document for purposes of navigation.
- [navigationDocument(\_:preview:)](navigationdocument%28__preview_%29.md): Configures the view’s document for purposes of navigation.
