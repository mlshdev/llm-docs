> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:traits:body:)-2viaf](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:traits:body:)-2viaf)

# init(\_:traits:body:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a preview of an NSViewController.

## Declaration

```swift
@MainActor init(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., body: @escaping @MainActor () -> NSViewController)
```

<a id="discussion"></a>

## Discussion

The `#Preview` macro expands into a declaration that calls this initializer. To create a preview that appears in the canvas, you must use the macro, not call this initializer directly.

## See Also

### Creating an AppKit preview

- [init(\_:traits:body:)](init%28__traits_body_%29-158mk.md): Creates a preview of an NSView.
