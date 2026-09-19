> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kuccollatetypehfsextended

# kUCCollateTypeHFSExtended

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollateTypeHFSExtended: Int { get }
```

<a id="discussion"></a>

## Discussion

The `kUCCollateTypeHFSExtended` ordering scheme sorts maximally decomposed Unicode according to the rules used by the HFS Extended volume format for its catalog. When this order is used, other collation options are ignored; this order is always case-insensitive (for decomposed characters) and ignores the Unicode characters 200C-200F, 202A-202E, 206A-206F, FEFF.
