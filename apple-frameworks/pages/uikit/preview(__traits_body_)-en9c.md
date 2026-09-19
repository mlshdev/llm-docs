> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/preview(_:traits:body:)-en9c

# Preview(\_:traits:body:)

**Framework:** UIKit  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
@freestanding(declaration) macro Preview(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., @PreviewMacroBodyBuilder<UIViewController> body: @escaping @MainActor () -> UIViewController)
```

## See Also

### Macros

- [Preview(\_:traits:body:)](preview%28__traits_body_%29-c7kr.md)
- [UIKIT_HAS_UIFOUNDATION_SYMBOLS](uikit_has_uifoundation_symbols.md)
