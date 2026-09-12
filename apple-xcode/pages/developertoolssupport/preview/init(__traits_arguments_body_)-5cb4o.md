> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-5cb4o](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:arguments:body:)-5cb4o)

# init(\_:traits:arguments:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a group of previews of an NSView.

## Declaration

```swift
@MainActor init<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<NSView> body: @escaping @MainActor (T) -> NSView)
```

## Parameters

- `name`: An optional display name for the preview.
- `traits`: An optional list of traits to customize the preview.
- `arguments`: An array of arguments to pass into `body`.
- `body`: A closure that maps an argument to an NSView to preview.

<a id="discussion"></a>

## Discussion

A preview macro expands into a declaration that calls this initializer. Don’t use this initializer directly.
