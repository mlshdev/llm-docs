> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/resizable(capinsets:resizingmode:)](https://developer.apple.com/documentation/swiftui/image/resizable(capinsets:resizingmode:))

# resizable(capInsets:resizingMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the mode by which SwiftUI resizes an image to fit its space.

## Declaration

```swift
func resizable(capInsets: EdgeInsets = EdgeInsets(), resizingMode: Image.ResizingMode = .stretch) -> Image
```

## Parameters

- `capInsets`: Inset values that indicate a portion of the image that SwiftUI doesn’t resize.
- `resizingMode`: The mode by which SwiftUI resizes the image.

<a id="return-value"></a>

## Return Value

An image, with the new resizing behavior set.

## Mentioned In

- [Fitting images into available space](../fitting-images-into-available-space.md)
