> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/init(headertextprovider:body1textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargestandardbody/init(headertextprovider:body1textprovider:))

# init(headerTextProvider:body1TextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a row of header text and a row of body text.

## Declaration

```swift
init(headerTextProvider: CLKTextProvider, body1TextProvider: CLKTextProvider)
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `body1TextProvider`: The text provider for the row of body text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [init(headerTextProvider:body1TextProvider:body2TextProvider:)](init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:)](init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [init(headerImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:)](init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.

# initWithHeaderTextProvider:body1TextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has a row of header text and a row of body text.

## Declaration

```objectivec
- (instancetype) initWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider body1TextProvider:(CLKTextProvider *) body1TextProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `body1TextProvider`: The text provider for the row of body text. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:body2TextProvider:](init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.
- [templateWithHeaderTextProvider:body1TextProvider:](templatewithheadertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a row of header text and a row of body text.
- [templateWithHeaderTextProvider:body1TextProvider:body2TextProvider:](templatewithheadertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a row of header text and two rows of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and a row of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and two rows of body text.
