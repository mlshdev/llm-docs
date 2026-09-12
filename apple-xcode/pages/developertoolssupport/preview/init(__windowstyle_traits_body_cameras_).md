> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:windowstyle:traits:body:cameras:)](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:windowstyle:traits:body:cameras:))

# init(\_:windowStyle:traits:body:cameras:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a preview of a SwiftUI view in a window with custom viewpoints.

## Declaration

```swift
@MainActor init(_ name: String? = nil, windowStyle: some WindowStyle, traits: PreviewTrait<Preview.ViewTraits>..., @ContentBuilder body: @escaping @MainActor () -> any View, @PreviewCameraBuilder cameras: () -> [PreviewCamera] = { return [] })
```

## Parameters

- `name`: An optional display name for the preview.
- `windowStyle`: The window style to use for the preview.
- `traits`: An optional list of [PreviewTrait](../previewtrait.md) instances that customize the appearance of the preview.
- `body`: A content builder that produces a SwiftUI view to preview.
- `cameras`: One or more preview cameras that indicate the custom, fixed viewpoints that you want to be able to view the preview from.

<a id="discussion"></a>

## Discussion

Preview macros expand into a declaration that calls this initializer. Don’t use this initializer directly. Instead use one of the macros, like [Preview(\_:windowStyle:traits:body:cameras:)](https://developer.apple.com/documentation/swiftui/preview%28_:windowstyle:traits:body:cameras:%29).

## See Also

### Creating a SwiftUI preview

- [init(\_:traits:body:)](init%28__traits_body_%29-8pemr.md): Creates a preview of a SwiftUI view.
- [init(\_:traits:body:cameras:)](init%28__traits_body_cameras_%29.md): Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.
- [init(\_:immersionStyle:traits:body:cameras:)](init%28__immersionstyle_traits_body_cameras_%29.md): Creates a preview of a SwiftUI view in an immersive space with custom viewpoints.
