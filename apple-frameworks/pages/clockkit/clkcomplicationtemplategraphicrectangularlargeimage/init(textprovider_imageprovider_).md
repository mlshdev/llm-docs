> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeimage/init(textprovider:imageprovider:)

# init(textProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a text provider and an image provider.

## Declaration

```swift
init(textProvider: CLKTextProvider, imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `textProvider`: The text provider for a row of text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

# initWithTextProvider:imageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a text provider and an image provider.

## Declaration

```objectivec
- (instancetype) initWithTextProvider:(CLKTextProvider *) textProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `textProvider`: The text provider for a row of text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [templateWithTextProvider:imageProvider:](templatewithtextprovider_imageprovider_.md): Deprecated. Creates a new template with a text provider and an image provider.
