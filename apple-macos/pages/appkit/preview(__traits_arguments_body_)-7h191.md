> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/preview(_:traits:arguments:body:)-7h191](https://developer.apple.com/documentation/appkit/preview(_:traits:arguments:body:)-7h191)

# Preview(\_:traits:arguments:body:)

**Framework:** AppKit  
**Kind:** Macro  
**Availability:** macOS 27.0+

Creates a group of previews of an NSViewController.

## Declaration

```swift
@freestanding(declaration) macro Preview<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<NSViewController> body: @escaping @MainActor (T) -> NSViewController)
```

## Parameters

- `name`: An optional display name for the preview.
- `traits`: An optional list of traits to customize the preview.
- `arguments`: An array of arguments to pass into `body`.
- `body`: A closure that maps an argument to an NSViewController to preview.

## See Also

### Macros

- [NSIMAGE_UNAVAILABLE_MACCATALYST](nsimage_unavailable_maccatalyst.md)
- [NS_USER_ACTIVITY_SUPPORTED](ns_user_activity_supported.md)
- [Preview(\_:traits:body:)](preview%28__traits_body_%29-55ljx.md): Preview an NSViewController.
- [Preview(\_:traits:body:)](preview%28__traits_body_%29-7pfjp.md): Preview an NSView.
- [Preview(\_:traits:arguments:body:)](preview%28__traits_arguments_body_%29-5hzef.md): Creates a group of previews of an NSView.
