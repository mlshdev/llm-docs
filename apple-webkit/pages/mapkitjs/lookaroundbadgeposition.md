> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/lookaroundbadgeposition

# LookAroundBadgePosition

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.79+

Values that control the positions of a badge on a Look Around preview.

## Declaration

```
const LookAroundBadgePosition: Readonly<{
    readonly TopLeading: "topLeading";
    readonly TopTrailing: "topTrailing";
    readonly BottomTrailing: "bottomTrailing";
}>
type LookAroundBadgePosition =
    (typeof LookAroundBadgePosition)[keyof typeof LookAroundBadgePosition];
```

## Topics

### Badge positions

- [BottomTrailing](lookaroundbadgeposition/bottomtrailing.md): Places the badge on the bottom trailing corner of the Look Around preview.
- [TopLeading](lookaroundbadgeposition/topleading.md): Places the badge on the top leading corner of the Look Around preview.
- [TopTrailing](lookaroundbadgeposition/toptrailing.md): Places the badge on the top trailing corner of the Look Around preview.

## See Also

### Positioning a badge

- [badgePosition](lookaroundpreview/badgeposition.md): A value you set to specify the position of a badge on the Look Around preview.
