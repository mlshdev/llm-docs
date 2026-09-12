> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(selectionidentifier:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(selectionidentifier:))

# accessibility(selectionIdentifier:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+

Sets a selection identifier for this view’s accessibility element.

> This functionality is no longer available.

## Declaration

```swift
nonisolated func accessibility(selectionIdentifier: AnyHashable) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Picker uses the value to determine what node to use for the accessibility value.
