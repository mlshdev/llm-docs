> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preview(_:traits:arguments:body:)](https://developer.apple.com/documentation/swiftui/preview(_:traits:arguments:body:))

# Preview(\_:traits:arguments:body:)

**Framework:** SwiftUI  
**Kind:** Macro  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 27.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a group of previews of a parameterized SwiftUI view, varying its inputs over the provided arguments.

## Declaration

```swift
@freestanding(declaration) macro Preview<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @ContentBuilder body: @escaping @MainActor (T) -> any View)
```

## Parameters

- `name`: An optional display name for the preview. If you don’t specify a name, the canvas labels the preview using the line number where the preview appears in source.
- `traits`: Optional [PreviewTrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait) instances that customizes the appearance of the preview.
- `arguments`: An array of inputs to pass into the preview’s `body`.
- `body`: A [ContentBuilder](contentbuilder.md) mapping an argument to a SwiftUI view to preview.

## See Also

### Creating a preview

- [Preview(\_:body:)](preview%28__body_%29.md): Creates a preview of a SwiftUI view.
- [Preview(\_:traits:\_:body:)](preview%28__traits___body_%29.md): Creates a preview of a SwiftUI view using the specified traits.
- [Preview(\_:traits:body:cameras:)](preview%28__traits_body_cameras_%29.md): Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.
