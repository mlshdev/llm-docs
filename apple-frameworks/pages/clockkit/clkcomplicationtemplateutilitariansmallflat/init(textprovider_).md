> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateutilitariansmallflat/init(textprovider:)

# init(textProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has a single line of text.

## Declaration

```swift
init(textProvider: CLKTextProvider)
```

## Parameters

- `textProvider`: The text provider for a single line of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [init(textProvider:imageProvider:)](init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a line of text.

# initWithTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has a single line of text.

## Declaration

```objectivec
- (instancetype) initWithTextProvider:(CLKTextProvider *) textProvider;
```

## Parameters

- `textProvider`: The text provider for a single line of text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithTextProvider:imageProvider:](init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template that has a single row with an image and a line of text.
- [templateWithTextProvider:](templatewithtextprovider_.md): Deprecated. Returns a new template that has a single line of text.
- [templateWithTextProvider:imageProvider:](templatewithtextprovider_imageprovider_.md): Deprecated. Returns a new template that has a single row with an image and a line of text.
