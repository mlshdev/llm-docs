> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translationuiprovider/translationprovideruiextensionconfiguration/init(_:)

# init(\_:)

**Framework:** TranslationUIProvider  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Creates a default configuration for the given extension.

## Declaration

```swift
@MainActor @preconcurrency init(_ appExtension: any TranslationUIProviderExtension)
```

## Parameters

- `appExtension`: An instance of the extension that conforms to the [TranslationUIProviderExtension](../translationuiproviderextension.md) protocol.
