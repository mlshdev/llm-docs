> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollposition/scrollto(point:)

# scrollTo(point:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Scrolls the position of the scroll view to the point you provide.

## Declaration

```swift
mutating func scrollTo(point: CGPoint)
```

<a id="discussion"></a>

## Discussion

The scroll view will clamp this value to only scroll to the size of its actual content.
