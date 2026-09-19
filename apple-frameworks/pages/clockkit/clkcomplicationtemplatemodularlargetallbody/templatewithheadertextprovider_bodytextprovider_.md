> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetallbody/templatewithheadertextprovider:bodytextprovider:

# templateWithHeaderTextProvider:bodyTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a template that has a header and a row of tall body text.

## Declaration

```objectivec
+ (instancetype) templateWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider bodyTextProvider:(CLKTextProvider *) bodyTextProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `bodyTextProvider`: The text provider for the body. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:bodyTextProvider:](init%28headertextprovider_bodytextprovider_%29.md): Deprecated. Creates a template that has a header and a row of tall body text.
