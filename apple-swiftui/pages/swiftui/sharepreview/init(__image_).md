> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sharepreview/init(_:image:)](https://developer.apple.com/documentation/swiftui/sharepreview/init(_:image:))

# init(\_:image:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a preview representation.

## Declaration

```swift
@export(implementation) init(_ titleResource: LocalizedStringResource, image: Image)
```

## Parameters

- `titleResource`: A resource for the title to show in a preview.
- `image`: An image to show in a preview.

## See Also

### Creating a preview

- [init(\_:)](init%28__%29.md): Conforms when `Image` is `Never` and `Icon` is `Never`. Creates a preview representation.
- [init(\_:icon:)](init%28__icon_%29.md): Conforms when `Image` is `Never` and `Icon` conforms to `Transferable`. Creates a preview representation.
- [init(\_:image:icon:)](init%28__image_icon_%29.md): Creates a preview representation.
