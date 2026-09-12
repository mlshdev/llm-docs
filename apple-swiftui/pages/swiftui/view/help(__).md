> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/help(_:)](https://developer.apple.com/documentation/swiftui/view/help(_:))

# help(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds help text to a view using a localized string resource that you provide.

## Declaration

```swift
@export(implementation) nonisolated func help(_ textKey: LocalizedStringResource) -> some View

```

## Parameters

- `textKey`: Text resource for the localized text to use as help.

<a id="discussion"></a>

## Discussion

Adding help to a view configures the view’s accessibility hint and its help tag (also called a *tooltip*) in macOS or visionOS. For more information on using help tags, see [Offering help](https://developer.apple.com/design/human-interface-guidelines/offering-help) in the Human Interface Guidelines.

```swift
Button(action: composeMessage) {
    Image(systemName: "square.and.pencil")
}
.help("Compose a new message")
```
