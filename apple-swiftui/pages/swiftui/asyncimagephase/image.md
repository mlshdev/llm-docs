> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/asyncimagephase/image

# image

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The loaded image, if any.

## Declaration

```swift
var image: Image? { get }
```

<a id="discussion"></a>

## Discussion

If this value isn’t `nil`, the image load operation has finished, and you can use the image to update the view. You can use the image directly, or you can modify it in some way. For example, you can add a [resizable(capInsets:resizingMode:)](../image/resizable%28capinsets_resizingmode_%29.md) modifier to make the image resizable.
