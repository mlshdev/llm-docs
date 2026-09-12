> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(decorative:scale:orientation:)](https://developer.apple.com/documentation/swiftui/image/init(decorative:scale:orientation:))

# init(decorative:scale:orientation:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an unlabeled, decorative image based on a Core Graphics image instance.

## Declaration

```swift
init(decorative cgImage: CGImage, scale: CGFloat, orientation: Image.Orientation = .up)
```

## Parameters

- `cgImage`: The base graphical image.
- `scale`: The scale factor for the image, with a value like `1.0`, `2.0`, or `3.0`.
- `orientation`: The orientation of the image. The default is [Image.Orientation.up](orientation/up.md).

<a id="discussion"></a>

## Discussion

SwiftUI ignores this image for accessibility purposes.

## See Also

### Creating an image for decorative use

- [init(decorative:bundle:)](init%28decorative_bundle_%29.md): Creates an unlabeled, decorative image.
- [init(decorative:variableValue:bundle:)](init%28decorative_variablevalue_bundle_%29.md): Creates an unlabeled, decorative image, with a variable value.
