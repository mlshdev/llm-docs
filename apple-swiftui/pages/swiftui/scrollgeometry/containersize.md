> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollgeometry/containersize

# containerSize

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The size of the container of the scroll view.

## Declaration

```swift
var containerSize: CGSize { get set }
```

<a id="discussion"></a>

## Discussion

This is the overall size of the scroll view. Combining this and the content offset will give you the current visible rect of the scroll view.
