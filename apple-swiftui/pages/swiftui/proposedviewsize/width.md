> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/proposedviewsize/width

# width

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The proposed horizontal size measured in points.

## Declaration

```swift
var width: CGFloat?
```

<a id="discussion"></a>

## Discussion

A value of `nil` represents an unspecified width proposal, which a view interprets to mean that it should use its ideal width.

## See Also

### Getting the proposal’s dimensions

- [height](height.md): The proposed vertical size measured in points.
