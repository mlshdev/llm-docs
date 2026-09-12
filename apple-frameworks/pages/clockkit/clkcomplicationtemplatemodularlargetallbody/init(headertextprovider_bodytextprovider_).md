> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetallbody/init(headertextprovider:bodytextprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetallbody/init(headertextprovider:bodytextprovider:))

# init(headerTextProvider:bodyTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has a header and a row of tall body text.

## Declaration

```swift
init(headerTextProvider: CLKTextProvider, bodyTextProvider: CLKTextProvider)
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `bodyTextProvider`: The text provider for the body. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

# initWithHeaderTextProvider:bodyTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template that has a header and a row of tall body text.

## Declaration

```objectivec
- (instancetype) initWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider bodyTextProvider:(CLKTextProvider *) bodyTextProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `bodyTextProvider`: The text provider for the body. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [templateWithHeaderTextProvider:bodyTextProvider:](templatewithheadertextprovider_bodytextprovider_.md): Deprecated. Returns a template that has a header and a row of tall body text.
