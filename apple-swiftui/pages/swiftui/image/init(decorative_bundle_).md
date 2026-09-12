> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/init(decorative:bundle:)](https://developer.apple.com/documentation/swiftui/image/init(decorative:bundle:))

# init(decorative:bundle:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an unlabeled, decorative image.

## Declaration

```swift
init(decorative name: String, bundle: Bundle? = nil)
```

## Parameters

- `name`: The name of the image resource to lookup
- `bundle`: The bundle to search for the image resource. If `nil`, SwiftUI uses the main `Bundle`. Defaults to `nil`.

<a id="discussion"></a>

## Discussion

SwiftUI ignores this image for accessibility purposes.

## See Also

### Creating an image for decorative use

- [init(decorative:variableValue:bundle:)](init%28decorative_variablevalue_bundle_%29.md): Creates an unlabeled, decorative image, with a variable value.
- [init(decorative:scale:orientation:)](init%28decorative_scale_orientation_%29.md): Creates an unlabeled, decorative image based on a Core Graphics image instance.
