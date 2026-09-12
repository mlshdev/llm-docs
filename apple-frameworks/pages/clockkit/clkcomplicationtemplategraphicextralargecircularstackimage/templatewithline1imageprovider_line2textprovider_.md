> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage/templatewithline1imageprovider:line2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage/templatewithline1imageprovider:line2textprovider:)

# templateWithLine1ImageProvider:line2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with an image and a small amount of text.

## Declaration

```objectivec
+ (instancetype) templateWithLine1ImageProvider:(CLKFullColorImageProvider *) line1ImageProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1ImageProvider`: A full-color image provider.
- `line2TextProvider`: The text provider for the text below the image. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithLine1ImageProvider:line2TextProvider:](init%28line1imageprovider_line2textprovider_%29.md): Deprecated. Creates a template with an image and a small amount of text.
