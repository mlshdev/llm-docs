> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornertextimage/init(textprovider:imageprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextimage/init(textprovider:imageprovider:))

# init(textProvider:imageProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with a line of text and an image.

## Declaration

```swift
init(textProvider: CLKTextProvider, imageProvider: CLKFullColorImageProvider)
```

## Parameters

- `textProvider`: The text provider for the text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

# initWithTextProvider:imageProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with a line of text and an image.

## Declaration

```objectivec
- (instancetype) initWithTextProvider:(CLKTextProvider *) textProvider imageProvider:(CLKFullColorImageProvider *) imageProvider;
```

## Parameters

- `textProvider`: The text provider for the text. The template supports multicolored text from this text provider.
- `imageProvider`: A full-color image provider.

## See Also

### Creating the Template

- [templateWithTextProvider:imageProvider:](templatewithtextprovider_imageprovider_.md): Deprecated. Creates a template with a line of text and an image.
