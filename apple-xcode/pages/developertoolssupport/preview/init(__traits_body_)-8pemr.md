> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:traits:body:)-8pemr](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:body:)-8pemr)

# init(\_:traits:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a preview of a SwiftUI view.

## Declaration

```swift
@MainActor init(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., body: @escaping @MainActor () -> any View)
```

## Parameters

- `name`: An optional display name for the preview.
- `traits`: An optional list of [PreviewTrait](../previewtrait.md) instances that customize the appearance of the preview.
- `body`: A content builder that produces a SwiftUI view to preview.

<a id="discussion"></a>

## Discussion

Preview macros expand into a declaration that calls this initializer. Don’t use this initializer directly. Instead use one of the macros, like [Preview(\_:body:)](https://developer.apple.com/documentation/swiftui/preview%28_:body:%29).

## See Also

### Creating a SwiftUI preview

- [init(\_:traits:body:cameras:)](init%28__traits_body_cameras_%29.md): Creates a preview of a SwiftUI view using the specified traits and custom viewpoints.
- [init(\_:immersionStyle:traits:body:cameras:)](init%28__immersionstyle_traits_body_cameras_%29.md): Creates a preview of a SwiftUI view in an immersive space with custom viewpoints.
- [init(\_:windowStyle:traits:body:cameras:)](init%28__windowstyle_traits_body_cameras_%29.md): Creates a preview of a SwiftUI view in a window with custom viewpoints.
