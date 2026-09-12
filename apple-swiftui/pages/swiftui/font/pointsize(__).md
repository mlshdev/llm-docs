> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/pointsize(_:)](https://developer.apple.com/documentation/swiftui/font/pointsize(_:))

# pointSize(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Sets the point size of the font explicitly.

## Declaration

```swift
func pointSize(_ size: CGFloat) -> Font
```

<a id="discussion"></a>

## Discussion

Setting the point size explicitly will result in style based fonts no longer scaling with the device’s preferred text size. To scale a font’s size relative to its current size, see [scaled(by:)](scaled%28by_%29.md).
