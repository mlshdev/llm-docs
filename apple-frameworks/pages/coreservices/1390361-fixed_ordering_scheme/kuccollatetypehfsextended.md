> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390361-fixed_ordering_scheme/kuccollatetypehfsextended](https://developer.apple.com/documentation/coreservices/1390361-fixed_ordering_scheme/kuccollatetypehfsextended)

# kUCCollateTypeHFSExtended

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCCollateTypeHFSExtended = 1
```

<a id="discussion"></a>

## Discussion

The `kUCCollateTypeHFSExtended` ordering scheme sorts maximally decomposed Unicode according to the rules used by the HFS Extended volume format for its catalog. When this order is used, other collation options are ignored; this order is always case-insensitive (for decomposed characters) and ignores the Unicode characters 200C-200F, 202A-202E, 206A-206F, FEFF.
