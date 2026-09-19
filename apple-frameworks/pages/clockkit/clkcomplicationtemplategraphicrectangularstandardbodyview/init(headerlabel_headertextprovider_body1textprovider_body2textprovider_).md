> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbodyview/init(headerlabel:headertextprovider:body1textprovider:body2textprovider:)

# init(headerLabel:headerTextProvider:body1TextProvider:body2TextProvider:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template that has a header row with a SwiftUI view and text, and two rows of body text.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(headerLabel: Label, headerTextProvider: CLKTextProvider, body1TextProvider: CLKTextProvider, body2TextProvider: CLKTextProvider? = nil)
```

## Parameters

- `headerLabel`: The SwiftUI view displayed by the template.
- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the first row of body text. The template supports multicolored text from this text provider.
- `body2TextProvider`: The text provider for the second row of body text. The template supports multicolored text from this text provider.
