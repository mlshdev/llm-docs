> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularsmallsimpletext/init(textprovider:)

# init(textProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided text.

## Declaration

```swift
init(textProvider: CLKTextProvider)
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

# initWithTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template from the provided text.

## Declaration

```objectivec
- (instancetype) initWithTextProvider:(CLKTextProvider *) textProvider;
```

## Parameters

- `textProvider`: A text provider for the text in the center of the template. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [templateWithTextProvider:](templatewithtextprovider_.md): Deprecated. Returns a new template from the provided text.
