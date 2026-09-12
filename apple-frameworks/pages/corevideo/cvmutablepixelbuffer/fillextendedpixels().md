> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/fillextendedpixels()](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/fillextendedpixels())

# fillExtendedPixels()

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Fills the extended pixels of the pixel buffer. This method replicates the edge pixels to fill the entire extended region of the image.

## Declaration

```swift
@discardableResult mutating func fillExtendedPixels() -> Bool
```

<a id="discussion"></a>

## Discussion

- Returns false if this operation is not supported by the pixel format.
