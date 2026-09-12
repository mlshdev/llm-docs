> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/accessibilitylabel(_:)](https://developer.apple.com/documentation/swiftui/text/accessibilitylabel(_:))

# accessibilityLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a label to the view that describes its contents.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityLabel(_ label: LocalizedStringResource) -> Text
```

## Parameters

- `label`: The string resource for the alternative accessibility label.

<a id="discussion"></a>

## Discussion

Use this method to provide an alternative accessibility label to the text that is displayed. For example, you can give an alternate label to a navigation title:

```swift
var body: some View {
    NavigationView {
        ContentView()
            .navigationTitle(Text("􀈤").accessibilityLabel("Inbox"))
    }
}
```

## See Also

### Providing accessibility information

- [accessibilityHeading(\_:)](accessibilityheading%28__%29.md): Sets the accessibility level of this heading.
- [accessibilityTextContentType(\_:)](accessibilitytextcontenttype%28__%29.md): Sets an accessibility text content type.
