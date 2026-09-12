> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornertextview/init(textprovider:label:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornertextview/init(textprovider:label:))

# init(textProvider:label:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a template with a line of text and a SwiftUI view.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
init(textProvider: CLKTextProvider, label: Label)
```

## Parameters

- `textProvider`: The text provider for the text. The template supports multicolored text from this text provider.
- `label`: The SwiftUI view displayed by the template.
