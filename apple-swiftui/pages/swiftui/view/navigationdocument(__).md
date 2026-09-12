> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationdocument(_:)](https://developer.apple.com/documentation/swiftui/view/navigationdocument(_:))

# navigationDocument(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the view’s document for purposes of navigation.

## Declaration

```swift
nonisolated func navigationDocument(_ url: URL) -> some View

```

## Parameters

- `url`: The URL content associated to the navigation title.

<a id="discussion"></a>

## Discussion

In iOS, iPadOS, this populates the title menu with a header previewing the document. In macOS, this populates a proxy icon.

Refer to the [Configure your apps navigation titles](../configure-your-apps-navigation-titles.md) article for more information on navigation document modifiers.

## See Also

### Setting titles for navigation content

- [navigationTitle(\_:)](navigationtitle%28__%29.md): Configures the view’s title for purposes of navigation, using a localized string resource.
- [navigationSubtitle(\_:)](navigationsubtitle%28__%29.md): Configures the view’s subtitle for purposes of navigation, using a localized string resource.
- [navigationDocument(\_:preview:)](navigationdocument%28__preview_%29.md): Configures the view’s document for purposes of navigation.
