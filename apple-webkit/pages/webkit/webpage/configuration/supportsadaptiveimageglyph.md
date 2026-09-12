> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/supportsadaptiveimageglyph](https://developer.apple.com/documentation/webkit/webpage/configuration/supportsadaptiveimageglyph)

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
