> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilityvalue(_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityvalue(_:))

# accessibilityValue(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a textual description of the value that the view contains.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityValue(_ valueResource: LocalizedStringResource) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Use this method to describe the value represented by a view, but only if that’s different than the view’s label. For example, for a slider that you label as “Volume” using accessibilityLabel(), you can provide the current volume setting, like “60%”, using accessibilityValue().
