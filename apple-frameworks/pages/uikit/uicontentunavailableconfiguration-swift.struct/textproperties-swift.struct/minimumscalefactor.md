> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicontentunavailableconfiguration-swift.struct/textproperties-swift.struct/minimumscalefactor

# minimumScaleFactor

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The minimum scale factor for the text.

## Declaration

```swift
var minimumScaleFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If you set [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) to `true`, this property defines the smallest multiplier the view uses to fit the text.
