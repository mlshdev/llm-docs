> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage/init(line1imageprovider:line2textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularstackimage/init(line1imageprovider:line2textprovider:))

# init(line1ImageProvider:line2TextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with an image and a small amount of text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(line1ImageProvider: CLKFullColorImageProvider, line2TextProvider: CLKTextProvider)
```

## Parameters

- `line1ImageProvider`: A full-color image provider.
- `line2TextProvider`: The text provider for the text below the image. The template supports multicolored text from this text provider.

# initWithLine1ImageProvider:line2TextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with an image and a small amount of text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (instancetype) initWithLine1ImageProvider:(CLKFullColorImageProvider *) line1ImageProvider line2TextProvider:(CLKTextProvider *) line2TextProvider;
```

## Parameters

- `line1ImageProvider`: A full-color image provider.
- `line2TextProvider`: The text provider for the text below the image. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [templateWithLine1ImageProvider:line2TextProvider:](templatewithline1imageprovider_line2textprovider_.md): Deprecated. Creates a template with an image and a small amount of text.
