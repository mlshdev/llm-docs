> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeimage/templatewithtextprovider:imageprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeimage/templatewithtextprovider:imageprovider:)

# templateWithTextProvider:imageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with a text provider and an image provider.

## Declaration

```objectivec
+ (instancetype) templateWithTextProvider:(CLKTextProvider *) textProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `textProvider`: The text provider for a row of text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [initWithTextProvider:imageProvider:](init%28textprovider_imageprovider_%29.md): Deprecated. Creates a new template with a text provider and an image provider.
