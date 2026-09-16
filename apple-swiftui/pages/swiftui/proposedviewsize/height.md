> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/proposedviewsize/height

# height

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The proposed vertical size measured in points.

## Declaration

```swift
var height: CGFloat?
```

<a id="discussion"></a>

## Discussion

A value of `nil` represents an unspecified height proposal, which a view interprets to mean that it should use its ideal height.

## See Also

### Getting the proposal’s dimensions

- [width](width.md): The proposed horizontal size measured in points.
