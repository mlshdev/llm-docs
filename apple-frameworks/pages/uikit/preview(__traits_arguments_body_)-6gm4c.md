> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/preview(_:traits:arguments:body:)-6gm4c

# Preview(\_:traits:arguments:body:)

**Framework:** UIKit  
**Kind:** Macro  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS

## Declaration

```swift
@freestanding(declaration) macro Preview<T>(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., arguments: [T], @PreviewBodyBuilder<UIView> body: @escaping @MainActor (T) -> UIView)
```

## See Also

### Macros

- [Preview(\_:traits:body:)](preview%28__traits_body_%29-c7kr.md)
- [Preview(\_:traits:body:)](preview%28__traits_body_%29-en9c.md)
- [Preview(\_:traits:arguments:body:)](preview%28__traits_arguments_body_%29-7cbjv.md)
- [UIKIT_HAS_UIFOUNDATION_SYMBOLS](uikit_has_uifoundation_symbols.md)
