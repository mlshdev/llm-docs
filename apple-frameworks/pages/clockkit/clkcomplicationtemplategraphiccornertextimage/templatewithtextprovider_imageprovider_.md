> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornertextimage/templatewithtextprovider:imageprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextimage/templatewithtextprovider:imageprovider:)

# templateWithTextProvider:imageProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with a line of text and an image.

## Declaration

```objectivec
+ (instancetype) templateWithTextProvider:(CLKTextProvider *) textProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `textProvider`: The text provider for the text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [initWithTextProvider:imageProvider:](init%28textprovider_imageprovider_%29.md): Deprecated. Creates a template with a line of text and an image.
