> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(_:scale:orientation:label:)](https://developer.apple.com/documentation/swiftui/image/init(_:scale:orientation:label:))

# init(\_:scale:orientation:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a labeled image based on a Core Graphics image instance, usable as content for controls.

## Declaration

```swift
init(_ cgImage: CGImage, scale: CGFloat, orientation: Image.Orientation = .up, label: Text)
```

## Parameters

- `cgImage`: The base graphical image.
- `scale`: The scale factor for the image, with a value like `1.0`, `2.0`, or `3.0`.
- `orientation`: The orientation of the image. The default is [Image.Orientation.up](orientation/up.md).
- `label`: The label associated with the image. SwiftUI uses the label for accessibility.

## See Also

### Creating an image for use as a control

- [init(\_:bundle:label:)](init%28__bundle_label_%29.md): Creates a labeled image that you can use as content for controls, with the specified label.
- [init(\_:variableValue:bundle:label:)](init%28__variablevalue_bundle_label_%29.md): Creates a labeled image that you can use as content for controls, with the specified label and variable value.
