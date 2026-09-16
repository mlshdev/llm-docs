> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollposition/scrollto(x:)

# scrollTo(x:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Scrolls the position of the scroll view to the x value you provide.

## Declaration

```swift
mutating func scrollTo(x: CGFloat)
```

<a id="discussion"></a>

## Discussion

The scroll view chooses the y value based on the content insets of the scroll view and will clamp this value to only scroll to the size of its actual content.
