> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilityidentifier(_:isenabled:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityidentifier(_:isenabled:))

# accessibilityIdentifier(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Uses the string you specify to identify the view.

## Declaration

```swift
nonisolated func accessibilityIdentifier(_ identifier: String, isEnabled: Bool) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `identifier`: The accessibility identifier to apply.
- `isEnabled`: If true the accessibility identifier is applied; otherwise the accessibility identifier is unchanged.

<a id="discussion"></a>

## Discussion

Use this value for testing. It isn’t visible to the user.
