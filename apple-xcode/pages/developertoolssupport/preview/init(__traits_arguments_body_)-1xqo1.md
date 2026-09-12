> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-1xqo1](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-1xqo1)

# init(\_:traits:arguments:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 27.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a group of previews of a SwiftUI view.

## Declaration

```swift
@MainActor init<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @ContentBuilder body: @escaping @MainActor (T) -> any View)
```

## Parameters

- `name`: An optional display name for the preview.
- `traits`: An optional list of traits to customize the preview.
- `arguments`: An array of arguments to pass into `body`.
- `body`: A closure that maps an argument to a SwiftUI view to preview.

<a id="discussion"></a>

## Discussion

A preview macro expands into a declaration that calls this initializer. Don’t use this initializer directly.
