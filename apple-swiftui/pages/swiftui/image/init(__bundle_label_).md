> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(_:bundle:label:)](https://developer.apple.com/documentation/swiftui/image/init(_:bundle:label:))

# init(\_:bundle:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a labeled image that you can use as content for controls, with the specified label.

## Declaration

```swift
init(_ name: String, bundle: Bundle? = nil, label: Text)
```

## Parameters

- `name`: The name of the image resource to lookup
- `bundle`: The bundle to search for the image resource. If `nil`, SwiftUI uses the main `Bundle`. Defaults to `nil`.
- `label`: The label associated with the image. SwiftUI uses the label for accessibility.

## See Also

### Creating an image for use as a control

- [init(\_:variableValue:bundle:label:)](init%28__variablevalue_bundle_label_%29.md): Creates a labeled image that you can use as content for controls, with the specified label and variable value.
- [init(\_:scale:orientation:label:)](init%28__scale_orientation_label_%29.md): Creates a labeled image based on a Core Graphics image instance, usable as content for controls.
