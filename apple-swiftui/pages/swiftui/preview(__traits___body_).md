> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preview(_:traits:_:body:)](https://developer.apple.com/documentation/swiftui/preview(_:traits:_:body:))

# Preview(\_:traits:\_:body:)

**Framework:** SwiftUI  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a preview of a SwiftUI view using the specified traits.

## Declaration

```swift
@freestanding(declaration) macro Preview(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>, _ additionalTraits: PreviewTrait<Preview.ViewTraits>..., @ContentBuilder body: @escaping @MainActor () -> any View)
```

## Parameters

- `name`: An optional display name for the preview. If you don’t specify a name, the canvas labels the preview using the line number where the preview appears in source.
- `traits`: A [PreviewTrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait) instance that customizes the appearance of the preview.
- `additionalTraits`: Optional additional traits that further customize the preview.
- `body`: A [ContentBuilder](contentbuilder.md) that produces a SwiftUI view to preview. You typically specify one of your app’s custom views and optionally any inputs, model data, modifiers, and enclosing views that the custom view needs for normal operation.

<a id="overview"></a>

## Overview

This macro behaves like [Preview(\_:body:)](preview%28__body_%29.md) except that it also enables you to customize the appearance of the preview by adding one or more traits, which are instances of [PreviewTrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait). For example, you can display a preview at a fixed size using the [fixedLayout(width:height:)](https://developer.apple.com/documentation/developertoolssupport/previewtrait/fixedlayout%28width:height:%29) trait:

```swift
#Preview(
    "Content",
    traits: .fixedLayout(width: 100, height: 100)
) {
    ContentView()
}
```

The macro ignores traits that don’t apply to the current context. For example, the [portrait](https://developer.apple.com/documentation/developertoolssupport/previewtrait/portrait) trait has no impact on a visionOS preview.

Other preview macros provide different customization options. For example, if you want to specify a custom viewpoint for the preview, use [Preview(\_:traits:body:cameras:)](preview%28__traits_body_cameras_%29.md).

## See Also

### Creating a preview

- [Preview(\_:body:)](preview%28__body_%29.md): Creates a preview of a SwiftUI view.
- [Preview(\_:traits:body:cameras:)](preview%28__traits_body_cameras_%29.md): Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.
- [Preview(\_:traits:arguments:body:)](preview%28__traits_arguments_body_%29.md): Creates a group of previews of a parameterized SwiftUI view, varying its inputs over the provided arguments.
