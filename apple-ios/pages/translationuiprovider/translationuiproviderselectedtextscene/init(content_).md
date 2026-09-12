> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/translationuiprovider/translationuiproviderselectedtextscene/init(content:)](https://developer.apple.com/documentation/translationuiprovider/translationuiproviderselectedtextscene/init(content:))

# init(content:)

**Framework:** TranslationUIProvider  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates the scene to translate the user’s selected text, with the provided View content.

## Declaration

```swift
@MainActor @preconcurrency init(content: @escaping (any TranslationUIProviderContext) -> Content)
```

## Parameters

- `content`: The content the framework should your to initialize the scene.
