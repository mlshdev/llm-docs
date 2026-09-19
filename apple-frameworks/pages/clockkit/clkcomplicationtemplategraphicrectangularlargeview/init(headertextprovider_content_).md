> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularlargeview/init(headertextprovider:content:)

# init(headerTextProvider:content:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Creates a new template with a text provider and a SwiftUI view.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(headerTextProvider: CLKTextProvider, content: Content)
```

## Parameters

- `headerTextProvider`: The text provider for a row of text. The template supports multicolored text from this text provider.
- `content`: The SwiftUI view displayed by the template.
