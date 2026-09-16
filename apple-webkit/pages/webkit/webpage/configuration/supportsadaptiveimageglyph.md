> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/configuration/supportsadaptiveimageglyph

# supportsAdaptiveImageGlyph

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Indicates whether insertion of adaptive image glyphs is allowed.

## Declaration

```swift
@MainActor var supportsAdaptiveImageGlyph: Bool
```

<a id="discussion"></a>

## Discussion

The default value is `false`. If `false`, adaptive image glyphs are inserted as regular images. If `true`, they are inserted with the full adaptive sizing behavior.
