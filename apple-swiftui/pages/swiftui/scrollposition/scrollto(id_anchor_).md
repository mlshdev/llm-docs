> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollposition/scrollto(id:anchor:)

# scrollTo(id:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Scrolls the position of the scroll view to a view with a identity value and anchor you provide.

## Declaration

```swift
mutating func scrollTo(id: some Hashable & Sendable, anchor: UnitPoint? = nil)
```

<a id="discussion"></a>

## Discussion

Inform the scroll view of which layout it should look for view’s with the identity value you provide using the `View/scrollTargetLayout()` modifier.
