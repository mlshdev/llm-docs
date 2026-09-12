> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/preview(_:traits:body:)-c7kr](https://developer.apple.com/documentation/uikit/preview(_:traits:body:)-c7kr)

# Preview(\_:traits:body:)

**Framework:** UIKit  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
@freestanding(declaration) macro Preview(_ name: String? = nil, traits: PreviewTrait<Preview.ViewTraits>..., @PreviewMacroBodyBuilder<UIView> body: @escaping @MainActor () -> UIView)
```

## See Also

### Macros

- [Preview(\_:traits:body:)](preview%28__traits_body_%29-en9c.md)
- [UIKIT_HAS_UIFOUNDATION_SYMBOLS](uikit_has_uifoundation_symbols.md)
