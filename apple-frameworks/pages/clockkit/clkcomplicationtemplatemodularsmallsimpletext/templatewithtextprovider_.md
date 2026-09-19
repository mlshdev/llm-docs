> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallsimpletext/templatewithtextprovider:

# templateWithTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a new template from the provided text.

## Declaration

```objectivec
+ (instancetype) templateWithTextProvider:(CLKTextProvider *) textProvider;
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithTextProvider:](init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.
