> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/preview(_:traits:body:)-55ljx](https://developer.apple.com/documentation/appkit/preview(_:traits:body:)-55ljx)

# Preview(\_:traits:body:)

**Framework:** AppKit  
**Kind:** Macro  
**Availability:** macOS 14.0+

Preview an NSViewController.

## Declaration

```swift
@freestanding(declaration) macro Preview(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., @PreviewMacroBodyBuilder<NSViewController> body: @escaping @MainActor () -> NSViewController)
```

## Parameters

- `name`: Optional display name for the preview, which will appear in the canvas.
- `traits`: Optional list of traits customizing the appearance of the preview.
- `body`: A closure producing an NSViewController.

## See Also

### Macros

- [NSIMAGE_UNAVAILABLE_MACCATALYST](nsimage_unavailable_maccatalyst.md)
- [NS_USER_ACTIVITY_SUPPORTED](ns_user_activity_supported.md)
- [Preview(\_:traits:body:)](preview%28__traits_body_%29-7pfjp.md): Preview an NSView.
- [Preview(\_:traits:arguments:body:)](preview%28__traits_arguments_body_%29-5hzef.md): Creates a group of previews of an NSView.
- [Preview(\_:traits:arguments:body:)](preview%28__traits_arguments_body_%29-7h191.md): Creates a group of previews of an NSViewController.
